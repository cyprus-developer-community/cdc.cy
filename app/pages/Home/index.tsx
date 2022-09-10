import { Events } from '~/features/components'
import { useLoaderData } from '@remix-run/react'
import getEvents from '~/utils/github.server'
import groups from '~/pages/ParticipatingGroups/groups'
import { GroupsList } from './components/GroupsList'

type LoaderData = Awaited<ReturnType<typeof loader>>
export const loader = async () => {
  return {
    events: await getEvents(),
    groups
  }
}

const Home = () => {
  const { groups, events } = useLoaderData() as LoaderData
  const { upcoming, past, days } = events

  return (
    <div>
      <div className="text-center py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Cyprus Developer Community
        </h1>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          We're just starting up. There will be more content and events soon.
          Stay tuned.
        </p>
      </div>

      <section className="py-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 sm:text-4xl text-center lg:text-left">
            CDC.cy
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500 text-center lg:text-left">
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
            className="max-w-full"
            title="Cyprus Developer Community Discord Server"
            src="https://canary.discord.com/widget?id=855088264180400198&theme=dark"
            width="350"
            height="500"
            allowTransparency
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </section>

      <GroupsList groups={groups} />
      <Events upcoming={upcoming} past={past} days={days} />

      <section className="my-16">
        <h3 className="my-2 text-lg leading-6 font-medium text-cyan-900">
          Chat
        </h3>

        <p>
          Join us on{' '}
          <a
            className="text-cyan-400"
            href="https://chat.cdc.cy"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>{' '}
          or follow our{' '}
          <a
            className="text-cyan-400"
            href="https://github.com/cyprus-developer-community/home/discussions"
            target="_blank"
            rel="noreferrer"
          >
            discussions on GitHub.
          </a>
        </p>
      </section>
    </div>
  )
}

export default Home