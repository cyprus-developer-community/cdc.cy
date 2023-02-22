import { useLoaderData } from '@remix-run/react'
import { EventsCalendar } from './components/EventsCalendar'
import { ParticipatingGroupsList } from './components/ParticipatingGroupsList'
import {
  getConfig,
  getDiscordChatLink,
  getDiscordWidgetLink,
  getGithubDiscussionsLink
} from '~/features/configuration'
import type { LoaderData } from './loader'
import { H1, H2, Section } from '~/features/components'

const Home = () => {
  const { groups, events } = useLoaderData() as LoaderData
  const { upcoming, past, days } = events
  const config = getConfig()

  return (
    <div className="grid gap-16 md:gap-28">
      <div className="text-center">
        <H1>Cyprus Developer Community</H1>
        <p className="max-w-xl mt-5 mx-auto text-xl text-primary-500">
          We're just starting up. There will be more content and events soon.
          Stay tuned.
        </p>
      </div>

      <Section className="py-16 grid gap-12 md:grid-cols-2">
        <div>
          <H2>CDC.cy</H2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-secondary-500 text-center lg:text-left">
            The Cyprus Developer Community is an umbrella for developer and
            technology groups in Cyprus. We provide a central website and chat
            for all things tech/engineering/development. You can join our
            Discord server (it's like Slack, but for communities, and free) and
            chat with other developers, share your knowledge, and get help from
            other members; or join our regular events that we organize with our
            participating groups.
          </p>
        </div>
        <div className="justify-self-center">
          <iframe
            className="max-w-full bg-transparent"
            title="Cyprus Developer Community Discord Server"
            src={getDiscordWidgetLink(config)}
            width="350"
            height="500"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </Section>

      <ParticipatingGroupsList groups={groups} />
      <EventsCalendar upcoming={upcoming} past={past} days={days} />

      <Section>
        <H2>Chat</H2>
        <p className="text-center lg:text-left">
          Join us on{' '}
          <a
            className="text-primary-500"
            href={getDiscordChatLink(config)}
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>{' '}
          or follow our{' '}
          <a
            className="text-primary-500"
            href={getGithubDiscussionsLink(config)}
            target="_blank"
            rel="noreferrer"
          >
            discussions on GitHub.
          </a>
        </p>
      </Section>
    </div>
  )
}

export default Home
