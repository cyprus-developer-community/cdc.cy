import { A } from '@solidjs/router'
import fileQuery from '~/graphql/file.query.js'
import graphql from '~/server/graphql.js'
import { useRouteData } from 'solid-start'
import { For, createResource } from 'solid-js'
import { SimpleLayout } from '~/components/SimpleLayout'
import { Icon } from 'solid-heroicons'
import { globeAlt } from 'solid-heroicons/solid'

export function routeData() {
  const [groupsFile] = graphql(fileQuery.gql('groups.json'), {
    ...fileQuery.vars,
    repository: 'home'
  })

  const [groups] = createResource(groupsFile, () => {
    return JSON.parse(groupsFile().repository.object.text)
  })

  return {
    groups
  }
}

export default function Groups() {
  const data = useRouteData()

  return (
    <SimpleLayout
      title="Participating Groups"
      intro={
        'The Cyprus Developer Community hosts a number of Meet & Greet events that are open to everyone. We also host special cross-technology events called "CDCx". The participating groups are responsible for their own events and content. A list and calendar of all events from participating groups in Cyprus will be coming soon.'
      }
    >
      <ul
        role="list"
        class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <For each={data.groups()}>
          {(group) => (
            <li>
              <img
                class="aspect-[3/2] w-full rounded-2xl object-cover"
                src={group.logo.png}
                alt={`Logo of ${group.name}`}
              />
              <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {group.name}
              </h3>
              <p class="text-base leading-7 text-gray-600">{group.excerpt}</p>
              <ul role="list" class="mt-6 flex gap-x-6">
                <li>
                  <A
                    href={group.links[0].href}
                    class="text-gray-400 hover:text-gray-500"
                  >
                    <span class="sr-only">Wesbite</span>
                    <Icon path={globeAlt} class="h-5 w-5" />
                  </A>
                </li>
              </ul>
            </li>
          )}
        </For>
      </ul>
    </SimpleLayout>
  )
}
