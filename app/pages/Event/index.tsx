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
  const participants = event?.participants?.nodes ?? []
  const reactions = event?.reactions?.nodes ?? []
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
          <BreadcrumbLink to={`/events/${event.number}`}>
            {event.title}
          </BreadcrumbLink>
        </BreacrumbItem>
      </Breadcrumbs>
      <div className="grid gap-8">
        <H1>{event.title}</H1>
        <Section>
          <H2>Description</H2>
          <p dangerouslySetInnerHTML={{ __html: event.body }} />
        </Section>
        <Section>
          <H2>Link</H2>
          <a
            href={event.url}
            rel="noopener noreferrer"
            className="text-lg text-primary-500"
          >
            {event.url}
          </a>
        </Section>
        <Section>
          <H2>Published At</H2>
          <div className="text-secondary-500">
            {formatDate(event.publishedAt)}
          </div>
        </Section>

        <Section>
          <H2>Status</H2>
          <TagGroup>
            <Tag>{event.state}</Tag>
          </TagGroup>
        </Section>
        <Section>
          <H2>Labels</H2>
          <TagGroup>
            {event.labels.nodes.map((label) => {
              return <Tag key={label.name}>{label.name}</Tag>
            })}
          </TagGroup>
        </Section>
        <Section>
          <H2>Author</H2>
          <AvatarLink to={event.author.url}>
            <Avatar
              name={event.author.login}
              src={event.author.avatarUrl}
              className="w-lg h-lg"
            />
          </AvatarLink>
        </Section>
        <Show show={participants.length > 0}>
          <Section>
            <H2>Participants</H2>
            <AvatarGroup className="flex flex-wrap">
              {participants.map((participant) => {
                return (
                  <AvatarItem key={participant.id}>
                    <AvatarLink to={participant.url}>
                      <Avatar
                        name={participant.login}
                        src={participant.avatarUrl}
                        className="w-lg h-lg"
                      />
                    </AvatarLink>
                  </AvatarItem>
                )
              })}
            </AvatarGroup>
          </Section>
        </Show>
        <Show show={reactions.length > 0}>
          <Section>
            <H2>Reactions</H2>
            <AvatarGroup>
              {reactions.map((reaction) => {
                return (
                  <AvatarItem key={reaction.user.id}>
                    <AvatarLink to={reaction.user.url}>
                      <Avatar
                        name={reaction.user.login}
                        src={reaction.user.avatarUrl}
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
