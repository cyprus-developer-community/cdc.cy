import { useLoaderData } from '@remix-run/react'
import type { Group } from '~/features/dataProvider'
import { newDataProvider } from '~/features/dataProvider'
import { getConfig, getDiscordChatLink } from '~/features/configuration'
import { ParticipatingGroupCard } from './components/ParticipatingGroupCard'

type LoaderData = { groups: Group[] }
export const loader = async () => {
  const dataProvider = newDataProvider()
  const [getParticipatingGroupError, groups] =
    await dataProvider.commands.getParticipatingGroups()

  if (getParticipatingGroupError) {
    throw new Response(getParticipatingGroupError.message)
  }

  return { groups }
}

const ParticipatingGroups = () => {
  const { groups } = useLoaderData() as LoaderData
  const config = getConfig()

  return (
    <div className="flex justify-center py-4">
      <section className="grid gap-4 max-w-page">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-center mb-12 text-gray-900">
            Participating Groups
          </h1>
          <p className="text-gray-700 text-center md:text-left">
            While technology can be divided into multiple sub-groups with
            different tools and technologies, our goal is to bring all those
            communities together and discuss common issues which we encounter in
            our daily routine. Feel free to navigate through our participating
            groups.
          </p>
          <p className="mt-3 text-gray-700 text-center md:text-left">
            <span className="px-1">
              If you want to learn more, reach out to
            </span>
            <a href={getDiscordChatLink(config)} className="text-cyan-400">
              Discord
            </a>
          </p>
        </div>

        <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => {
            return <ParticipatingGroupCard key={group.name} group={group} />
          })}
        </ul>
      </section>
    </div>
  )
}
export default ParticipatingGroups
