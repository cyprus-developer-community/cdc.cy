import { useLoaderData } from '@remix-run/react'
import { Image } from 'remix-image'
import type { LoaderData } from './loader'
import {
  BreacrumbItem,
  BreadcrumbLink,
  Breadcrumbs,
  AvatarGroup,
  AvatarItem,
  AvatarLink,
  Avatar,
  Page,
  Section,
  H2,
  H1
} from '~/features/components'

const ParticipatingGroup = () => {
  const { group } = useLoaderData() as LoaderData
  const groupImage = group.logo.svg ?? group.logo.png

  return (
    <Page>
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
        <H1>{group.name}</H1>
        <Image
          src={groupImage}
          className="w-40 h-40 rounded-full border-3 border-primary-500 object-contain"
        />
      </div>
      <div className="grid gap-16 lg:gap-12">
        <Section>
          <H2>Description</H2>
          <p className="text-center lg:text-left text-secondary-700">
            {group.excerpt}
          </p>
        </Section>
        <Section>
          <H2>Organizers</H2>
          <AvatarGroup>
            {group.organizers.map((organizer) => {
              return (
                <AvatarItem key={organizer.name}>
                  <AvatarLink to={organizer.github}>
                    <Avatar
                      name={organizer.name}
                      src={organizer.avatar}
                      className="w-lg h-lg"
                    />
                  </AvatarLink>
                </AvatarItem>
              )
            })}
          </AvatarGroup>
        </Section>
        <Section>
          <H2>Do you want to learn more?</H2>
          <ul className="flex gap-4 justify-center lg:justify-start flex-wrap">
            {group.links.map((link) => {
              return (
                <li
                  key={link.href}
                  className="py-4 px-6 shadow-lg rounded-lg bg-secondary-50 relative"
                >
                  <a
                    className="text-secondary-600  capitalize hover:text-secondary-700 outline-link"
                    target="_blank"
                    rel="noreferrer noopener"
                    href={link.href}
                  >
                    {link.type}
                  </a>
                </li>
              )
            })}
          </ul>
        </Section>
      </div>
    </Page>
  )
}

export default ParticipatingGroup
