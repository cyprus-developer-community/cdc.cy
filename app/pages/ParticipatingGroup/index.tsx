import { useLoaderData } from '@remix-run/react'
import { Image } from 'remix-image'
import { OrganizerCard } from './components/OrganizerCard'
import {
  BreacrumbItem,
  BreadcrumbLink,
  Breadcrumbs
} from '~/features/components/Breadcrumbs'
import type { LoaderData } from './loader'

export { loader } from './loader'

const ParticipatingGroup = () => {
  const { group } = useLoaderData() as LoaderData
  const groupImage = group.logo.svg ?? group.logo.png

  return (
    <div className="grid gap-8">
      <Breadcrumbs>
        <BreacrumbItem>
          <BreadcrumbLink to="/">Home</BreadcrumbLink>
        </BreacrumbItem>
        <BreacrumbItem>
          <BreadcrumbLink to="/groups">Groups</BreadcrumbLink>
        </BreacrumbItem>
        <BreacrumbItem isCurrentPage>
          <BreadcrumbLink to={`/groups/${group.slug}`}>
            {group.name}
          </BreadcrumbLink>
        </BreacrumbItem>
      </Breadcrumbs>
      <div className="flex flex-col place-items-center gap-4 mt-4">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-center text-primary-900">
          {group.name}
        </h1>
        <Image
          src={groupImage}
          className="w-40 h-40 rounded-full border-3 border-primary-500 object-contain"
        />
      </div>
      <div className="grid gap-12">
        <section className="grid gap-6">
          <h2 className="text-3xl font-extrabold text-secondary-900 text-center md:text-left">
            Description
          </h2>
          <p className="text-secondary-700">{group.excerpt}</p>
        </section>
        <section className="grid gap-6">
          <h2 className="text-3xl font-extrabold text-secondary-900 text-center md:text-left">
            Organizers
          </h2>
          <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {group.organizers.map((organizer) => {
              return (
                <OrganizerCard key={organizer.name} organizer={organizer} />
              )
            })}
          </ul>
        </section>
        <section className="grid gap-6">
          <h2 className="text-3xl font-extrabold text-secondary-900 text-center md:text-left">
            Do you want to learn more?
          </h2>
          <ul className="flex gap-4 flex-wrap">
            {group.links.map((link) => {
              return (
                <a
                  className="px-6 py-4 text-secondary-600 bg-secondary-100 shadow-lg rounded-lg capitalize outline outline-3 outline-secondary-200 hover:outline-primary-400 focus:outline-primary-400"
                  target="_blank"
                  rel="noreferrer noopener"
                  key={link.href}
                  href={link.href}
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
