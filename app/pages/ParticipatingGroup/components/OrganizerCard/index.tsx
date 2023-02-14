import type { Organizer } from '~/features/dataProvider'
import { Image } from 'remix-image'

type OrganizerCardProps = {
  organizer: Organizer
}

export const OrganizerCard = ({ organizer }: OrganizerCardProps) => {
  return (
    <li className="shadow-lg rounded-lg bg-secondary-50 relative grid border-solid border-3 border-secondary-200 relative">
      <Image className="w-full h-full rounded-t-lg" src={organizer.avatar} />
      <div className="py-2 px-4 text-center shadow-lg rounded-b-lg h-full">
        <a
          href={organizer.github}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-end justify-center absolute inset-0 rounded-lg shadow-lg outline-transparent outline outline-3 hover:cursor-pointer hover:outline-primary-400 focus:outline-primary-400"
        >
          <h3 className="text-md bg-secondary-100 w-full shadow-b-lg rounded-b-lg p-1 text-secondary-600 tracking-wide capitalize">
            {organizer.name}
          </h3>
        </a>
      </div>
    </li>
  )
}
