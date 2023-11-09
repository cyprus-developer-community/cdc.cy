import { For, splitProps } from 'solid-js'
import clsx from 'clsx'
import { Container } from '~/components/Container'
import { GitHubIcon, LinkedInIcon } from '~/components/SocialIcons'
import { A } from 'solid-start'

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

export default function App() {
  return (
    <>
      <h1 class="text-black">Vite + Solid</h1>
      <Container class="mt-9">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Cyprus Developer Community
          </h1>
          <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            The Cyprus Developer Community is an umbrella for developer and
            technology groups in Cyprus. You can join our Discord server (it's
            like Slack, but for communities) to chat with other developers,
            share your knowledge, and get help from other community members; or
            join our regular events that we organize with our participating
            groups.
          </p>
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
          </div>
        </div>
      </Container>
      <Photos />
    </>
  )
}
