import type { Organizer } from '~/features/dataProvider'
import { Image } from 'remix-image'

type OrganizerCardProps = {
  organizer: Organizer
}

export const OrganizerCard = ({ organizer }: OrganizerCardProps) => {
  return (
    <li className="shadow-lg bg-secondary-50 relative grid border-solid border-3 border-secondary-200 rounded-lg shadow-lg">
      <Image className="w-full rounded-t-lg" src={organizer.avatar} />
      <div className="py-2 px-4 text-center shadow-lg rounded-b-lg h-full">
        <h3 className="text-md text-secondary-600 tracking-wide capitalize">
          <a
            href={organizer.github}
            target="_blank"
            rel="noreferrer"
            className="outline-none before:outline-transparent before:content-[''] before:rounded-lg before:shadow-lg before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:outline before:outline-3 hover:before:cursor-pointer hover:before:outline-primary-400 focus:before:outline-primary-400"
          >
            {organizer.name}
          </a>
        </h3>
      </div>
    </li>
  )
}
