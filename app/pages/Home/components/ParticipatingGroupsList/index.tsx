import type { Group } from '~/types'
import { getConfig, getDiscordChatLink } from '~/features/configuration'
import { ParticipatingGroupCard } from '../ParticipatingGroupCard'
import { H2, Section } from '~/features/components'

const config = getConfig()
const discordChatLink = getDiscordChatLink(config)

export type ParticipatingGroupsListProps = {
  groups: Group[]
}

export const ParticipatingGroupsList: React.FC<
  ParticipatingGroupsListProps
> = ({ groups }) => {
  return (
    <Section>
      <div className="grid gap-12">
        <H2>Participating Member Groups</H2>
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:justify-items-start">
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
    </Section>
  )
}
