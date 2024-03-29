import { Image } from 'remix-image'
import type { Group } from '~/types'
import { Link } from '@remix-run/react'

type ParticipatingGroupCardProps = {
  group: Group
}

export const ParticipatingGroupCard: React.FC<ParticipatingGroupCardProps> = ({
  group
}) => {
  return (
    <li
      data-test-e2e="participating-group-card"
      key={group.name}
      className="group-card max-w-sm border-solid border-3 border-secondary-100 shadow-lg rounded-lg relative w-full"
    >
      <Image
        src={group.logo.png}
        className="m-auto h-full w-full object-contain"
        alt={group.name}
      />
      <div>
        <h2>
          <Link
            to={`/groups/${group.slug}`}
            className="rounded-lg shadow-lg outline-link"
          >
            <span className="sr-only">{group.name}</span>
          </Link>
        </h2>
      </div>
    </li>
  )
}
