import { A } from '@solidjs/router'
import { For } from 'solid-js'
import { useRouteData } from 'solid-start'
import { SimpleLayout } from '~/components/SimpleLayout'
import Speaker from '~/components/Speaker'
import talksQuery from '~/graphql/talks.query'
import graphql from '~/lib/graphql.server'

export function routeData() {
  const [data] = graphql(talksQuery.gql, talksQuery.vars)
  const authors = data()
    ?.repository?.issues?.nodes.map((t) => t.author.login)
    .filter((t, i, a) => a.indexOf(t) === i)
  return {
    authors
  }
}

export default function Speakers() {
  const data = useRouteData()
  return (
    <SimpleLayout title="Meet the speakers" intro="">
      <ul
        role="list"
        class="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
      >
        <For each={data.authors}>
          {(person) => (
            <li class="flex flex-col gap-10 pt-12 sm:flex-row">
              <A href={`/speakers/${person}`} class="flex-none">
                <Speaker person={person} />
              </A>
            </li>
          )}
        </For>
      </ul>
    </SimpleLayout>
  )
}
