import { useLoaderData } from '@remix-run/react'
import { Image } from 'remix-image'
import {
  newDataProvider,
  ErrGroupNotFound,
  StatusNotFound
} from '~/features/dataProvider'
import type { Group } from '~/features/dataProvider'
import { OrganizerCard } from './components/OrganizerCard'

type LoaderData = { group: Group }
export const loader = async ({ params }) => {
  const dataProvider = newDataProvider()
  const { slug } = params

  if (!slug) {
    throw new Response(ErrGroupNotFound.message, { status: StatusNotFound })
  }

  const [e, group] = await dataProvider.commands.getParticipatingGroup(slug)
  if (e === ErrGroupNotFound) {
    throw new Response(ErrGroupNotFound.message, { status: StatusNotFound })
  }

  return { group }
}

const ParticipatingGroup = () => {
  const { group } = useLoaderData() as LoaderData
  const groupImage = group.logo.svg ?? group.logo.png

  return (
    <div className="grid gap-8">
      <div className="flex flex-col place-items-center gap-4">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-center text-gray-900">
          {group.name}
        </h1>
        <Image
          src={groupImage}
          className="w-32 h-32 rounded-full border-3 border-gray-200"
        />
      </div>
      <div className="grid gap-12">
        <section className="grid gap-6">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-left">
            Description
          </h2>
          <p className="text-gray-700">{group.excerpt}</p>
        </section>
        <section className="grid gap-6">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center md:text-left">
            Organizers
          </h2>
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {group.organizers.map((organizer) => {
              return (
                <OrganizerCard key={organizer.name} organizer={organizer} />
              )
            })}
          </ul>
        </section>
        <section className="grid gap-6">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center md:text-left">
            Do you want to learn more?
          </h2>
          <ul className="flex gap-4 flex-wrap">
            {group.links.map((link) => {
              return (
                <a
                  className="px-6 py-4 text-gray-600 bg-gray-100 shadow-xl rounded-lg capitalize outline outline-3 outline-transparent hover:outline-blue-200 focus:outline-blue-200 border border-3 border-gray-200"
                  target="_blank"
                  key={link.href}
                  href={link.href}
                  rel="noreferrer"
                >
                  {link.type}
                </a>
              )
            })}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default ParticipatingGroup
