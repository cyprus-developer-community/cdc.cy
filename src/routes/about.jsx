import { GitHubIcon, LinkedInIcon } from '~/components/SocialIcons'
import clsx from 'clsx'
import organizationQuery from '~/graphql/organization.query.js'
import graphql from '~/server/graphql.js'
import { Container } from '~/components/Container'
import { For, splitProps } from 'solid-js'
import { A, createAsync, cache } from '@solidjs/router'
import { H2, H3 } from '~/components/Atomic'

function SocialLink(props) {
  const [local, other] = splitProps(props, ['icon'])

  return (
    <li class={clsx(props.class, 'flex')}>
      <A
        {...other}
        class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <local.icon class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span class="ml-4">{props.children}</span>
      </A>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

const organizationData = cache(async () => {
  return graphql(organizationQuery.gql, organizationQuery.vars)
}, 'organizationData')

export const route = {
  load: () => [organizationData()]
}

export default function About() {
  const organization = createAsync(organizationData)

  return (
    <Container class="mt-9">
      <div class="flex min-w-full">
        <div class="w-1/3 mr-8">
          <img
            src="/assets/cdc-logo.svg"
            alt="CDC Logo"
            sizes="(min-width: 1024px) 32rem, 20rem"
            class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-contain dark:bg-zinc-800"
          />
        </div>
        <ul role="list">
          <SocialLink
            href={'https://github.com/cyprus-developer-community'}
            icon={GitHubIcon}
            class="mt-4"
          >
            Follow on GitHub
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/groups/12659214/"
            icon={LinkedInIcon}
            class="mt-4"
          >
            Follow on LinkedIn
          </SocialLink>
          <SocialLink
            href="mailto:contact@cdc.cy"
            icon={MailIcon}
            class="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
          >
            contact@cdc.cy
          </SocialLink>
        </ul>
      </div>

      <div class="mt-16">
        <div class="">
          <H2 class="">Meet the team</H2>
          <p class="">
            We’re a dynamic group of individuals who are passionate about what
            we do.
          </p>
        </div>
        <div class="mx-auto text-center">
          <ul
            role="list"
            class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <For
              each={organization()?.organization.teams.nodes[0].members.nodes}
            >
              {(person) => (
                <li>
                  <img
                    class="mx-auto h-56 w-56 rounded-full"
                    src={person.avatarUrl}
                    alt={person.name}
                  />
                  <H3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </H3>
                  <p class="text-sm leading-6 text-gray-600">
                    {organization()?.organization.teams.name}
                  </p>
                  <ul role="list" class="mt-6 flex justify-center gap-x-6">
                    <li>
                      <a
                        href={person.url}
                        class="text-gray-400 hover:text-gray-500"
                      >
                        <span class="sr-only">GitHub</span>
                        <GitHubIcon class="h-5 w-5" />
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </Container>
  )
}
