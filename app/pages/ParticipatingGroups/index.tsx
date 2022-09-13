import { useLoaderData } from '@remix-run/react'
import type { Group } from '~/features/dataProvider'
import { newDataProvider, getGroupAnyLink } from '~/features/dataProvider'

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

  return (
    <div className="flex justify-center py-4">
      <section className="grid gap-4 max-w-page">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-center mb-12 md:text-left md:text-4xl">
            Participating Groups
          </h2>
          <p className="text-gray-700">
            While technology can be divided into multiple sub-groups with
            different tools and technologies, our goal is to bring all those
            communities together and discuss common issues which we encounter in
            our daily routine. Feel free to navigate through our participating
            groups.
          </p>
          <p className="mt-3 text-gray-700">
            <span className="px-1">
              If you want to learn more, reach out to
            </span>{' '}
            <a
              href="https://canary.discord.com/widget?id=855088264180400198&theme=dark"
              className="text-cyan-400"
            >
              Discord
            </a>
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => {
            const { href } = getGroupAnyLink(group, 'website', 'meetup')
            return (
              <div
                key={group.name}
                className="grid gap-3 hover:opacity-80 hover:cursor-pointer block max-w-sm rounded-lg border border-gray-200 shadow-md"
              >
                <img
                  src={group.logo.png}
                  className="max-w-full h-card-image rounded-lg m-auto"
                  alt={group.name}
                  title={group.name}
                />
                <div className="grid gap-3 px-8 py-4 bg-slate-50">
                  <h2 className="text-xl text-gray-800">{group.name}</h2>
                  <p className="text-gray-500">{group.excerpt}</p>
                  <a
                    className="text-cyan-400 hover:underline"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
export default ParticipatingGroups
