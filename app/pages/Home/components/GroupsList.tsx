import type { Group } from '~/types'
import { getConfig, getDiscordChatLink } from '~/features/configuration'
import { ParticipatingGroupCard } from '~/features/components'

const config = getConfig()
const discordChatLink = getDiscordChatLink(config)

export type GroupsListProps = {
  groups: Group[]
}

export const GroupsList: React.FC<GroupsListProps> = ({ groups }) => {
  return (
    <section className="py-16 grid gap-8">
      <div>
        <h2 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl mb-12 text-center md:text-left">
          Participating Member Groups
        </h2>
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {groups.map((group) => (
            <ParticipatingGroupCard key={group.name} group={group} />
          ))}
        </ul>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <p>
          Reach out on{' '}
          <a
            className="text-primary-500"
            href={discordChatLink}
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
