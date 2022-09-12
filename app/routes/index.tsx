import Groups from '~/components/Groups'
import Events from '~/components/Events'
import { useLoaderData } from '@remix-run/react'
import events from '~/utils/github.server'

export async function loader() {
  return events()
}

const groups = [
  {
    id: 'cyprusjs',
    logo: 'https://raw.githubusercontent.com/cyprus-developer-community/home/main/assets/cyprusjs.png',
    name: 'CyprusJS'
  },
  {
    id: 'aws-cy',
    logo: 'https://raw.githubusercontent.com/cyprus-developer-community/home/main/assets/aws-user-group-cyprus.jpg',
    name: 'AWS User Group Cyprus'
  },
  {
    id: 'gdg-cy',
    logo: 'https://raw.githubusercontent.com/cyprus-developer-community/home/main/assets/gdgcyprus.png',
    name: 'GDG Cyprus'
  },
  {
    id: 'py-data-cy',
    logo: 'https://raw.githubusercontent.com/cyprus-developer-community/home/main/assets/pydata-cyprus.jpeg',
    name: 'Py-Data-Cy'
  }
]

export default function Index() {
  const { upcoming, past, days } = useLoaderData()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            className="mx-auto h-32 w-auto"
            src="/cdc-logo.png"
            alt="Cyprus Developer Community"
          />
          <h1 className="mt-16 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Cyprus Developer Community
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            We're just starting up. There will be more content and events soon.
            Stay tuned.
          </p>
        </div>

        <section className="py-16 grid grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
              CDC.cy
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              The Cyprus Developer Community is an umbrella for developer and
              technology groups in Cyprus. We provide a central website and chat
              for all things tech/engineering/development. You can join our
              Discord server (it's like Slack, but for communities, and free)
              and chat with other developers, share your knowledge, and get help
              from other members; or join our regular events that we organize
              with our participating groups.
            </p>
          </div>
          <div className="ml-8 pl-8">
            <iframe
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

        <Groups groups={groups} />

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
      </main>
    </div>
  )
}
