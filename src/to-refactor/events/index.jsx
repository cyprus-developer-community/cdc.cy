import { Card } from '~/components/Card'
import { formatDate } from '~/lib/formatDate'
import upcomingEventsQuery from '~/graphql/upcoming-events.query.js'
import pastEventsQuery from '~/graphql/past-events.query.js'
import graphql from '~/lib/graphql.server.js'
import { For, createResource } from 'solid-js'
import bodyParser from '@zentered/issue-forms-body-parser'
import { SimpleLayout } from '~/components/SimpleLayout'
import { createAsync, cache } from '@solidjs/router'

function EventLine(props) {
  const [issueData] = createResource(async () => {
    const data = await bodyParser(props.event.body)
    return data
  })

  return (
    <article class="md:grid md:grid-cols-4 md:items-baseline">
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
    </article>
  )
}

function EventReduced(props) {
  const [issueData] = createResource(async () => {
    const data = await bodyParser(props.event.body)
    return data
  })

  return (
    <article class="md:grid md:grid-cols-4 md:items-baseline">
      <Card class="md:col-span-3">
        <Card.Title href={`/events/${props.event.number}`}>
          {props.event.title}
        </Card.Title>
        <Card.Cta>Event Details</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={issueData()?.date.date}
        class="mt-1 hidden md:block"
      >
        {formatDate(issueData()?.date.date)}
      </Card.Eyebrow>
    </article>
  )
}

const getEvents = cache(async () => {
  const [upcoming] = await graphql(upcomingEventsQuery.gql, {
    ...upcomingEventsQuery.vars,
    repository: 'events'
  })
  const data = upcoming()
  console.log(data)
  return data
}, 'events')

export const route = {
  load: () => getEvents()
}

export default function Event() {
  const events = createAsync(getEvents)

  // const [past] = graphql(pastEventsQuery.gql, {
  //   ...pastEventsQuery.vars,
  //   repository: 'events'
  // })

  return (
    <>
      <SimpleLayout title="Upcoming Events" intro="">
        <For each={events.repository?.issues.nodes}>
          {(event) => <EventLine event={event} />}
        </For>
      </SimpleLayout>
      {/* <SimpleLayout title="Past Events" intro="">
        <For each={events.past()?.repository?.issues.nodes}>
          {(event) => <EventReduced event={event} />}
        </For>
      </SimpleLayout> */}
    </>
  )
}
