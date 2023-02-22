import { useLoaderData } from '@remix-run/react'
import {
  BreacrumbItem,
  BreadcrumbLink,
  Breadcrumbs
} from '~/features/components/Breadcrumbs'
import type { LoaderData } from './loader'
import { Avatar, AvatarLink } from '~/features/components'
import { Tag } from '~/features/components/Tag'

const Event = () => {
  const { event } = useLoaderData() as LoaderData

  return (
    <article className="page">
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
        <h1 className="page-title">{event.title}</h1>
        {event?.reactions?.nodes?.length > 0 && (
          <section className="grid gap-4">
            <h2 className="text-3xl text-primary-gradient">Reactions</h2>
            <ul className="flex flex-wrap">
              {event?.reactions?.nodes?.map((reaction) => {
                return (
                  <AvatarLink key={reaction.user.id} to={reaction.user.url}>
                    <Avatar
                      name={reaction.user.login}
                      src={reaction.user.avatarUrl}
                      className="w-lg h-lg"
                    />
                  </AvatarLink>
                )
              })}
            </ul>
          </section>
        )}
        <section>
          <h2 className="text-3xl text-primary-gradient">Status</h2>
          <ul>
            <Tag>{event.state}</Tag>
          </ul>
        </section>
        <section className="grid gap-4">
          <h2 className="text-3xl text-primary-gradient">Labels</h2>
          <ul className="flex flex-wrap gap-3">
            {event.labels.nodes.map((label) => {
              return <Tag key={label.name}>{label.name}</Tag>
            })}
          </ul>
        </section>
        {event?.participants?.nodes?.length > 0 && (
          <section className="grid gap-4">
            <h2 className="text-3xl text-primary-gradient">Participants</h2>
            <ul className="flex flex-wrap">
              {event?.participants?.nodes?.map((participant) => {
                return (
                  <AvatarLink key={participant.id} to={participant.url}>
                    <Avatar
                      name={participant.login}
                      src={participant.avatarUrl}
                      className="w-lg h-lg"
                    />
                  </AvatarLink>
                )
              })}
            </ul>
          </section>
        )}
      </div>
    </article>
  )
}

export default Event
