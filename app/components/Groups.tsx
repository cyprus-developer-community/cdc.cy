import type { Group } from '@types'

export type GroupsProps = {
  groups: Group[]
}

export default function Groups({ groups }: GroupsProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
            Participating Member Groups
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {groups.map((group, idx) => (
              <div
                key={group.id}
                className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
              >
                <img className="h-32" src={group.logo} alt={group.name} />
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
      </div>
    </section>
  )
}
