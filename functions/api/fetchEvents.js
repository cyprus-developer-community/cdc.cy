/**
 * GET /api/fetchEvents
 */

export async function onRequestGet({ request, env }) {
  const data = { hello: 'world' }
  return new Response(data, null, 2)
}
