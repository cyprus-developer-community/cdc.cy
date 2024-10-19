import graphql from '~/server/graphql.js'
import issueQuery from '~/graphql/issue.query.js'
import fileQuery from '~/graphql/file.query.js'
import { Match, Show, Switch, createMemo } from 'solid-js'
import bodyParser from '@zentered/issue-forms-body-parser'
import { SolidMarkdown } from 'solid-markdown'
import { Prose } from '~/components/Prose'
import { formatDate } from '~/lib/formatDate'
import { A, useParams, createAsync, cache } from '@solidjs/router'
import { SimpleLayout } from '~/components/SimpleLayout'

const eventsData = cache(async () => {
  const params = useParams()
  const issue = await graphql(issueQuery.gql, {
    ...issueQuery.vars,
    repository: 'events',
    number: parseInt(params.id)
  })
  issue.parsedBody = await bodyParser(issue.repository.issue.body)
  return issue
}, 'eventsData')

const locationsFile = cache(async () => {
  const file = await graphql(fileQuery.gql('locations.json'), {
    ...fileQuery.vars,
    repository: 'events'
  })
  return JSON.parse(file.repository.object.text)
}, 'locationsFile')

export const route = {
  load: () => [eventsData(), locationsFile()]
}

export default function Event() {
  const issueData = createAsync(eventsData)
  const locationsList = createAsync(locationsFile)
  const location = createMemo(() => {
    locationsList()?.find((l) => l.id === issueData()?.parsedBody.location.text)
  })

  return (
    <SimpleLayout title="Upcoming Event" intro="">
      <Switch>
        <Match when={issueData()?.parsedBody['featured-image']?.images[0]}>
          <img
            src={issueData()['featured-image']?.images[0]?.src}
            alt={issueData()['featured-image']?.images[0]?.alt}
            sizes="(min-width: 1024px) 32rem, 20rem"
            class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </Match>
        <Match when={!issueData()?.parsedBody['featured-image']?.images}>
          <img
            src="/assets/cdc-logo.svg"
            alt="CDC logo"
            sizes="(min-width: 1024px) 32rem, 20rem"
            class="aspect-square rotate-3 rounded-2xl object-cover"
          />
        </Match>
      </Switch>
      <div class="lg:pl-20">
        <dl class="w-64 space-y-8 xl:w-80">
          <Show when={location() && location().name}>
            <div class="flex flex-col-reverse gap-y-4">
              <dt class="text-base leading-7 text-gray-600">
                {location().name}, {location().city}
                <br />
                <Show when={location().what3words}>
                  <A
                    href={`https://w3w.co/${location().what3words.replace(
                      '///',
                      ''
                    )}`}
                    target="_blank"
                  >
                    {location().what3words}
                  </A>
                </Show>
              </dt>
              <dd class="text-5xl font-semibold tracking-tight text-gray-900">
                Where
              </dd>
            </div>
          </Show>
        </dl>
        <dl class="w-64 space-y-8 xl:w-80">
          <div class="flex flex-col-reverse gap-y-4">
            <dt class="text-base leading-7 text-gray-600">
              {formatDate(issueData()?.parsedBody.date.date)} -{' '}
              {issueData()?.parsedBody['time'].time}
              <br />
              Duration: {issueData()?.parsedBody['duration'].text}
            </dt>
            <dd class="text-5xl font-semibold tracking-tight text-gray-900">
              When
            </dd>
          </div>
        </dl>
        <dl class="w-64 space-y-8 xl:w-80">
          <Show when={issueData()?.parsedBody['code-of-conduct']}>
            <div class="flex flex-col-reverse gap-y-4">
              <dt class="text-base leading-7 text-gray-600">
                <SolidMarkdown>
                  {issueData()?.parsedBody['code-of-conduct'].list[0].text}
                </SolidMarkdown>
              </dt>
              <dd class="text-5xl font-semibold tracking-tight text-gray-900">
                Code of Conduct
              </dd>
            </div>
          </Show>
        </dl>
      </div>
      <Show when={issueData()?.parsedBody.date}>
        <div class="lg:order-first lg:row-span-2">
          <time
            class={
              'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-800 dark:text-zinc-500 pl-3.5'
            }
          >
            {formatDate(issueData()?.parsedBody.date.date)} -{' '}
            {issueData()?.parsedBody['time'].time}
          </time>
          <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {issueData()?.repository.issue.title}
          </h1>
          <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <Prose>
              <SolidMarkdown>
                {issueData()?.parsedBody['event-description'].text}
              </SolidMarkdown>
            </Prose>
          </div>
        </div>
      </Show>
    </SimpleLayout>
  )
}
