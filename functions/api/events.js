import { upcomingEvents } from 'gitevents-fetch'

export async function onRequest(context) {
  try {
    const events = await upcomingEvents('boulder-js', 'events')
    return new Response(JSON.stringify(events), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
