import type { Group } from '~/features/dataProvider'
import { Link } from '@remix-run/react'

export type GroupsListProps = {
  groups: Group[]
}

export const GroupsList: React.FC<GroupsListProps> = ({ groups }) => {
  return (
    <section className="py-16 grid gap-8">
      <div>
        <Link to="/groups" className="hover:underline">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
            Participating Member Groups
          </h2>
        </Link>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center">
          {groups.map((group) => (
            <div
              key={group.name}
              className="w-full p-1 flex justify-center block rounded-lg border border-gray-200 shadow-md"
            >
              <img className="h-32" src={group.logo.png} alt={group.name} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <p>
          Reach out on{' '}
          <a
            className="text-cyan-400"
            href="https://chat.cdc.cy"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>{' '}
          to contact us.
        </p>
      </div>
    </section>
  )
}
