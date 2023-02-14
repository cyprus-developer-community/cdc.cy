import { Image } from 'remix-image'
import type { Group } from '~/features/dataProvider'
import { Link } from '@remix-run/react'

type ParticipatingGroupCardProps = {
  group: Group
}

export const ParticipatingGroupCard: React.FC<ParticipatingGroupCardProps> = ({
  group
}) => {
  return (
    <li
      key={group.name}
      className="grid grid-rows-card max-w-sm border-solid border-3 border-secondary-100 shadow-lg rounded-lg relative w-full"
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
            className="inset-0 absolute cursor-pointer rounded-lg shadow-lg outline outline-transparent outline-3 hover:outline-primary-400 focus:outline-primary-400"
          >
            <span className="sr-only">{group.name}</span>
          </Link>
        </h2>
      </div>
    </li>
  )
}
