import type { Organizer } from '~/types'
import { Image } from 'remix-image'

type OrganizerCardProps = {
  organizer: Organizer
}

export const OrganizerCard = ({ organizer }: OrganizerCardProps) => {
  return (
    <li className="shadow-lg rounded-lg bg-secondary-50 relative grid border-solid border-3 border-secondary-200 relative">
      <Image className="w-full h-full rounded-t-lg" src={organizer.avatar} />
      <div className="py-2 px-4 text-center shadow-lg rounded-b-lg h-full">
        <h3 className="text-md w-full text-secondary-600 tracking-wide capitalize">
          <a
            href={organizer.github}
            target="_blank"
            rel="noreferrer noopener"
            className="focus:outline-transparent before:content-empty before:absolute before:inset-0 before:rounded-lg before:outline-transparent before:outline before:outline-3 hover:cursor-pointer hover:before:outline-primary-400 focus:before:outline-primary-400"
          >
            {organizer.name}
          </a>
        </h3>
      </div>
    </li>
  )
}
