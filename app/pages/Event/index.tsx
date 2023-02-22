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
  Tag
} from '~/features/components'
import type { LoaderData } from './loader'

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
          <BreadcrumbLink to={`/events/${event.number}`}>
            {event.title}
          </BreadcrumbLink>
        </BreacrumbItem>
      </Breadcrumbs>
      <div className="grid gap-8">
        <H1>{event.title}</H1>
        {event?.reactions?.nodes?.length > 0 && (
          <Section>
            <H2>Reactions</H2>
            <AvatarGroup>
              {event?.reactions?.nodes?.map((reaction) => {
                return (
                  <li key={reaction.user.id}>
                    <AvatarLink to={reaction.user.url}>
                      <Avatar
                        name={reaction.user.login}
                        src={reaction.user.avatarUrl}
                        className="w-lg h-lg"
                      />
                    </AvatarLink>
                  </li>
                )
              })}
            </AvatarGroup>
          </Section>
        )}
        <Section>
          <H2>Status</H2>
          <ul>
            <Tag>{event.state}</Tag>
          </ul>
        </Section>
        <Section>
          <H2>Labels</H2>
          <ul className="flex flex-wrap gap-3">
            {event.labels.nodes.map((label) => {
              return <Tag key={label.name}>{label.name}</Tag>
            })}
          </ul>
        </Section>
        {event?.participants?.nodes?.length > 0 && (
          <Section>
            <H2>Participants</H2>
            <AvatarGroup className="flex flex-wrap">
              {event?.participants?.nodes?.map((participant) => {
                return (
                  <li key={participant.id}>
                    <AvatarLink to={participant.url}>
                      <Avatar
                        name={participant.login}
                        src={participant.avatarUrl}
                        className="w-lg h-lg"
                      />
                    </AvatarLink>
                  </li>
                )
              })}
            </AvatarGroup>
          </Section>
        )}
      </div>
    </Page>
  )
}

export default Event
