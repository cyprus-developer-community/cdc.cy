import { Card } from '~/components/Card'
import { formatDate } from '~/lib/formatDate'
import issuesQuery from '~/graphql/issues.query.js'
import graphql from '~/lib/graphql.server.js'
import { useRouteData } from 'solid-start'
import { For, createResource } from 'solid-js'
import bodyParser from '@zentered/issue-forms-body-parser'
import { SimpleLayout } from '~/components/SimpleLayout'

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

export function routeData() {
  const [data] = graphql(issuesQuery.gql, {
    ...issuesQuery.vars,
    repository: 'events'
  })
  return data
}

export default function Event() {
  const data = useRouteData()

  return (
    <SimpleLayout
      title="Meet our team"
      intro="We’re a dynamic group of individuals who are passionate about what
      we do."
    >
      <For each={data()?.repository?.issues.nodes}>
        {(event) => <EventLine event={event} />}
      </For>
    </SimpleLayout>
  )
}
