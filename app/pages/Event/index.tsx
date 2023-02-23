import { useLoaderData } from '@remix-run/react'
import {
  BreacrumbItem,
  BreadcrumbLink,
  Breadcrumbs,
  Page,
  H1,
  H2,
  Section,
  Avatar,
  AvatarLink,
  AvatarGroup,
  AvatarItem,
  Tag,
  TagGroup,
  Show
} from '~/features/components'
import type { LoaderData } from './loader'
import { format } from 'date-fns'

const formatDate = (date: string) => format(new Date(date), 'do MMMM yyyy')

const Event = () => {
  const { event } = useLoaderData() as LoaderData

  return (
    <Page>
      <Breadcrumbs>
        <BreacrumbItem>
          <BreadcrumbLink to="/">Home</BreadcrumbLink>
        </BreacrumbItem>
        <BreacrumbItem>
          <BreadcrumbLink to="/events">Events</BreadcrumbLink>
        </BreacrumbItem>
        <BreacrumbItem isCurrentPage>
          <BreadcrumbLink to={`/events/${event.id}`}>
            {event.title}
          </BreadcrumbLink>
        </BreacrumbItem>
      </Breadcrumbs>
      <div className="grid gap-8 justify-items-center lg:justify-items-start">
        <H1>{event.title}</H1>
        <Section>
          <H2>Description</H2>
          <p className="text-secondary-500">{event.description}</p>
        </Section>
        <Section>
          <H2>Link</H2>
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-primary-500"
          >
            {event.url}
          </a>
        </Section>
        <Section>
          <H2>Status</H2>
          <Tag>{event.status}</Tag>
        </Section>
        <Section>
          <H2>Published At</H2>
          <div className="text-secondary-500">
            {formatDate(event.publishedAt)}
          </div>
        </Section>
        <Section>
          <H2>Labels</H2>
          <TagGroup className="justify-center lg:justify-start">
            {event.labels.map((label) => {
              return <Tag key={label.name}>{label.name}</Tag>
            })}
          </TagGroup>
        </Section>
        <Section>
          <H2>Organizer</H2>
          <AvatarLink to={event.organizer.url} className="m-auto lg:m-none">
            <Avatar
              name={event.organizer.login}
              src={event.organizer.avatarUrl}
              className="w-lg h-lg"
            />
          </AvatarLink>
        </Section>
        <Show show={event.attendees.length > 0}>
          <Section>
            <H2>Attendees</H2>
            <AvatarGroup>
              {event.attendees.map((attendee) => {
                return (
                  <AvatarItem key={attendee.id}>
                    <AvatarLink to={attendee.url}>
                      <Avatar
                        name={attendee.login}
                        src={attendee.avatarUrl}
                        className="w-lg h-lg"
                      />
                    </AvatarLink>
                  </AvatarItem>
                )
              })}
            </AvatarGroup>
          </Section>
        </Show>
      </div>
    </Page>
  )
}

export default Event
