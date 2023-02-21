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
    <article className="page">
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
          <h1 className="page-title">Participating Groups</h1>
          <p className="text-center text-lg text-primary-gradient max-w-screen-md mx-auto">
            While technology can be divided into multiple sub-groups with
            different tools and technologies, our goal is to bring all those
            communities together and discuss common issues which we encounter in
            our daily routine. Feel free to navigate through our participating
            groups.
          </p>
          <p className="mt-16 text-secondary-700 text-center md:text-left">
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
