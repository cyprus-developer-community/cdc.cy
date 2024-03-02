import bodyParser from '@zentered/issue-forms-body-parser'
import { Suspense, createResource } from 'solid-js'
import { Card } from '~/components/Card'
import { formatDate } from '~/lib/formatDate'

export function EventLine(props) {
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
