import { useLoaderData } from '@remix-run/react'
import { getConfig, getDiscordChatLink } from '~/features/configuration'
import { ParticipatingGroupCard } from '~/features/components/ParticipatingGroupCard'
import {
  Breadcrumbs,
  BreadcrumbLink,
  BreacrumbItem
} from '~/features/components/Breadcrumbs'
import type { LoaderData } from './loader'

const ParticipatingGroups = () => {
  const { groups } = useLoaderData() as LoaderData
  const config = getConfig()

  return (
    <article className="flex flex-col justify-center max-w-screen-xl mx-auto">
      <Breadcrumbs>
        <BreacrumbItem>
          <BreadcrumbLink to="/">Home</BreadcrumbLink>
        </BreacrumbItem>
        <BreacrumbItem isCurrentPage>
          <BreadcrumbLink to="/groups">Groups</BreadcrumbLink>
        </BreacrumbItem>
      </Breadcrumbs>
      <section className="grid gap-4 mt-4">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-center mb-12 text-primary-900">
            Participating Groups
          </h1>
          <p className="text-secondary-700 text-center md:text-left">
            While technology can be divided into multiple sub-groups with
            different tools and technologies, our goal is to bring all those
            communities together and discuss common issues which we encounter in
            our daily routine. Feel free to navigate through our participating
            groups.
          </p>
          <p className="mt-3 text-secondary-700 text-center md:text-left">
            <span className="px-1">
              If you want to learn more, reach out to
            </span>
            <a
              href={getDiscordChatLink(config)}
              target="_blank"
              rel="noreferrer noopener"
              className="text-cyan-400"
            >
              Discord
            </a>
          </p>
        </div>

        <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {groups.map((group) => {
            return <ParticipatingGroupCard key={group.name} group={group} />
          })}
        </ul>
      </section>
    </article>
  )
}
export default ParticipatingGroups
