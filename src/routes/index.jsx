import {
  For,
  createResource,
  splitProps,
  Show,
  Switch,
  Match,
  createMemo
} from 'solid-js'
import clsx from 'clsx'
import { Container } from '~/components/Container'
import { GitHubIcon, LinkedInIcon, DiscordIcon } from '~/components/SocialIcons'
import { A } from 'solid-start'
import graphql from '~/lib/graphql.server.js'
import fileQuery from '~/graphql/file.query.js'
import organizationQuery from '~/graphql/organization.query.js'
import issuesQuery from '~/graphql/upcoming-events.query.js'
import bodyParser from '@zentered/issue-forms-body-parser'
import { H1, H2, H3 } from '~/components/Atomic'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div class="mt-16 sm:mt-20">
      <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <For each={new Array(5)}>
          {(image, imageIndex) => (
            <div
              class={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                rotations[imageIndex()]
              )}
            >
              <img
                src={`/photos/feature/${imageIndex()}.jpeg`}
                alt="Featured event photo"
                sizes="(min-width: 640px) 18rem, 11rem"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          )}
        </For>
      </div>
    </div>
  )
}

function SocialLink(props) {
  const [local, other] = splitProps(props, ['icon'])

  return (
    <A class="group -m-1 p-1" {...other}>
      <local.icon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </A>
  )
}

function EventBox(props) {
  const [issueData] = createResource(async () => {
    const data = await bodyParser(props.event.body)
    return data
  })

  return (
    <article class="flex flex-col items-start justify-between">
      <A href={`/events/${props.event.number}`}>
        <div class="relative w-full">
          <Switch>
            <Match when={issueData()?.['featured-image']?.images?.[0]}>
              <img
                src={issueData()?.['featured-image']?.images?.[0]?.src}
                alt={issueData()?.['featured-image']?.images?.[0]?.alt}
                class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
            </Match>
            <Match when={!issueData()?.['featured-image']?.images?.[0]}>
              <img
                src="/assets/cdc-logo.svg"
                alt="Cyprus Developer Community Logo"
                class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-contain sm:aspect-[2/1] lg:aspect-[3/2]"
              />
            </Match>
          </Switch>
          <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </A>
      <div class="max-w-xl">
        <div class="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={issueData()?.date.date} class="text-gray-500">
            {issueData()?.date.date}
          </time>
        </div>
        <div class="group relative">
          <H3>
            <a href={props.event.href}>
              <span class="absolute inset-0" />
              <A href={`/events/${props.event.number}`}>{props.event.title}</A>
            </a>
          </H3>
        </div>
        {/* <div class="relative mt-8 flex items-center gap-x-4">
        <img
          src={props.event.author.imageUrl}
          alt=""
          class="h-10 w-10 rounded-full bg-gray-100"
        />
        <div class="text-sm leading-6">
          <p class="font-semibold text-gray-900">
            <a href={props.event.author.href}>
              <span class="absolute inset-0" />
              {props.event.author.name}
            </a>
          </p>
        </div>
      </div> */}
      </div>
    </article>
  )
}

function Stats(props) {
  const stats = createMemo(() => {
    return [
      {
        name: 'GitHub Organization Members',
        value: props.organization()?.organization.membersWithRole.totalCount
      },
      {
        name: 'Users on Discord',
        value: '300+'
        // TODO: get this via api
      },
      {
        name: 'Events',
        value: props.organization()?.repository.issues.totalCount
      },
      {
        name: 'Cyprus',
        value: '100%'
      }
    ]
  })

  return (
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div class="text-center">
            <H2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Tech Community in Cyprus
            </H2>
            {/* <p class="mt-4 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consect adipisicing possimus.
            </p> */}
          </div>
          <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <For each={stats()}>
              {(stat) => (
                <div class="flex flex-col bg-gray-400/5 p-8">
                  <dt class="text-sm font-semibold leading-6 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              )}
            </For>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [readmeFile] = graphql(fileQuery.gql(), {
    repository: 'home',
    path: 'README.md',
    ...fileQuery.vars
  })
  const [organization] = graphql(organizationQuery.gql, organizationQuery.vars)
  const [readmeData] = createResource(readmeFile, async () => {
    const data = await bodyParser(readmeFile()?.repository.object.text)
    return data
  })
  const [events] = graphql(issuesQuery.gql, {
    repository: 'events',
    ...issuesQuery.vars
  })

  return (
    <>
      <Container class="mt-9">
        <div class="max-w-2xl">
          <H1>{organization()?.organization.name}</H1>
          <Show when={readmeData}>
            <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              {readmeData()?.about?.content}
            </p>
          </Show>
          <div class="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/cyprus-developer-community"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/groups/12659214/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://chat.cdc.cy"
              aria-label="Join on Discord"
              icon={DiscordIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Stats organization={organization} />
      <Container class="bg-white py-24 sm:py-32">
        <H2>Upcoming Events</H2>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <For each={events()?.repository?.issues.nodes}>
            {(event) => <EventBox event={event} />}
          </For>
        </div>
      </Container>
    </>
  )
}

// TODO: CTAs
// - Subscribe calendar: https://calendar.cdc.cy
// - Join Discord: https://chat.cdc.cy
// - Follow on GitHub: https://github.com/cyprus-developer-community
// - Follow on LinkedIn: https://www.linkedin.com/groups/12659214/
// - Interact on GitHub to get invited to the organization
// - Subscribe email: mailerlite
