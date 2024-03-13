import upcomingEventsQuery from '~/graphql/upcoming-events.query.js'
// import pastEventsQuery from '~/graphql/past-events.query.js'
import graphql from '~/server/graphql.js'
import { For, Show, Suspense, createResource } from 'solid-js'
import { SimpleLayout } from '~/components/SimpleLayout'
import { createAsync, cache } from '@solidjs/router'
import bodyParser from '@zentered/issue-forms-body-parser'
import { Card } from '~/components/Card'
import { formatDate } from '~/lib/formatDate'

function EventLine(props) {
  const [issueData] = createResource(async () => {
    return bodyParser(props.event.body)
  })

  return (
    <article class="md:grid md:grid-cols-4 md:items-baseline">
      <Suspense>
        <Card class="md:col-span-3">
          <Card.Title href={`/events/${props.event.number}`}>
            {props.event.title}
          </Card.Title>
          <Card.Description>
            {issueData()?.['event-description'].text}
          </Card.Description>
          <Card.Cta>Event Details</Card.Cta>
        </Card>
        <Card.Eyebrow
          as="time"
          dateTime={issueData()?.date.date}
          class="mt-1 hidden md:block"
        >
          {formatDate(issueData()?.date.date)}
        </Card.Eyebrow>
      </Suspense>
    </article>
  )
}

const getEvents = cache(async () => {
  return graphql(upcomingEventsQuery.gql, {
    ...upcomingEventsQuery.vars,
    repository: 'events'
  })
}, 'events')

// const getPastEvents = cache(async () => {
//   return graphql(pastEventsQuery.gql, {
//     ...pastEventsQuery.vars,
//     repository: 'events'
//   })
// }, 'pastEvents')

export const route = {
  load: () => [getEvents()]
}

export default function Event() {
  const events = createAsync(getEvents)

  return (
    <>
      <SimpleLayout title="Upcoming Events" intro="">
        <Suspense>
          <Show when={events()}>
            <For each={events()?.repository?.issues?.nodes}>
              {(event) => <EventLine event={event} />}
            </For>
          </Show>
        </Suspense>
      </SimpleLayout>
      {/* <SimpleLayout title="Past Events" intro="">
        <For each={events.past()?.repository?.issues.nodes}>
          {(event) => <EventReduced event={event} />}
        </For>
      </SimpleLayout> */}
    </>
  )
}
