import NodeCache from 'node-cache'

let cache: NodeCache
let expired = {}

declare global {
  var __cache: NodeCache | undefined
  var __expired: { [key: string]: boolean }
}

if (process.env.NODE_ENV === 'production') {
  cache = new NodeCache({ deleteOnExpire: false })
} else {
  if (!global.__cache) {
    global.__cache = new NodeCache({ deleteOnExpire: false })
  }
  cache = global.__cache
  if (!global.__expired) {
    global.__expired = {}
  }
  expired = global.__expired
}

cache.on('expired', (key) => {
  expired[key] = true
})

const fetchCached = async <T>(
  cacheKey: string,
  fetcher: () => Promise<T>,
  ttl = 60 * 60 * 24
) => {
  let response: T
  if (cache.has(cacheKey)) {
    response = cache.get(cacheKey)
    if (expired[cacheKey]) {
      ;(async () => {
        expired[cacheKey] = false
        cache.set(cacheKey, await fetcher(), ttl)
      })()
    }
    return response
  }
  response = await fetcher()
  cache.set(cacheKey, response, ttl)
  return response
}

export { cache, fetchCached }
