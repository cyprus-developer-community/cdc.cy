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
      className="grid grid-rows-card block max-w-sm border-solid border-3 border-gray-200 shadow-lg rounded-lg relative"
    >
      <Image src={group.logo.png} className="m-auto h-full" alt={group.name} />
      <div>
        <h2>
          <Link
            to={`/groups/${group.slug}`}
            className="outline-none before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:absolute before:outline-transparent before:outline before:outline-3 before:cursor-pointer before:rounded-lg before:shadow-lg hover:before:outline-blue-200 focus:before:outline-blue-200"
          >
            <span className="sr-only">{group.name}</span>
          </Link>
        </h2>
      </div>
    </li>
  )
}
