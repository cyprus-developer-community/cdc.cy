import { useLoaderData } from '@remix-run/react'
import type { Group } from '@types'
import groups from './groups'

type LoaderData = { groups: Group[] }
export const loader = () => {
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            consequuntur eaque facilis obcaecati, cupiditate doloribus expedita
            perspiciatis veniam quis modi? Accusamus quaerat optio vero officia
            sint cumque animi doloribus provident?
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => {
            return (
              <div
                key={group.id}
                className="grid gap-3 hover:opacity-80 hover:cursor-pointer block max-w-sm rounded-lg border border-gray-200 shadow-md"
              >
                <img
                  src={group.logo}
                  className="max-w-full h-card-image rounded-lg m-auto"
                  alt={group.name}
                  title={group.name}
                />
                <div className="grid gap-3 px-8 py-4 bg-[#f9f9f9]">
                  <h2 className="text-xl text-gray-800">{group.name}</h2>
                  <p className="text-gray-500">{group.excerpt}</p>
                  <a
                    className="text-cyan-400 hover:underline"
                    href={group.href}
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
