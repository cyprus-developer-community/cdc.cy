import { A, useParams } from 'solid-start'
import { Container } from '~/components/Container'
import { GitHubIcon } from '~/components/SocialIcons'
import clsx from 'clsx'
import graphql from '~/lib/graphql.server.js'
import { useRouteData } from 'solid-start'
import speakerQuery from '~/graphql/speaker.query'
import fileQuery from '~/graphql/file.query'

function SocialLink(props) {
  return (
    <li class={clsx(props.class, 'flex')}>
      <A
        href={props.href}
        class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <props.icon class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span class="ml-4">{props.children}</span>
      </A>
    </li>
  )
}

export function routeData() {
  const params = useParams()
  const [user] = graphql(speakerQuery.gql, {
    login: params.id
  })
  // Fetch the "special repo" readme that's shown on a user profile page
  const [readme] = graphql(fileQuery.gql('README.md'), {
    repository: params.id,
    organization: params.id
  })
  return {
    user,
    readme
  }
}

export default function Speaker() {
  const data = useRouteData()

  return (
    <Container class="mt-16 sm:mt-32">
      <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div class="lg:pl-20">
          <div class="max-w-xs px-2.5 lg:max-w-none">
            <img
              src={data.user().user.avatarUrl}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div class="lg:order-first lg:row-span-2">
          <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {data.user().user.name}
          </h1>
          <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            {data.user().user.bio}
          </div>
        </div>
        <div class="lg:pl-20">
          <ul role="list">
            <SocialLink
              href={data.user().user.url}
              icon={GitHubIcon}
              class="mt-4"
            >
              Follow on GitHub
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
