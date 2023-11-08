import { A } from 'solid-start'
import { Container } from '~/components/Container'
import Logo from '~/assets/cdc-logo.png'
import { GitHubIcon, LinkedInIcon } from '~/components/SocialIcons'
import clsx from 'clsx'

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

export default function About() {
  return (
    <Container class="mt-16 sm:mt-32">
      <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div class="lg:pl-20">
          <div class="max-w-xs px-2.5 lg:max-w-none">
            <img
              src={Logo}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div class="lg:order-first lg:row-span-2">
          <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Cyprus Developer Community
          </h1>
          <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            The Cyprus Developer Community is an umbrella for developer and
            technology groups in Cyprus. We provide a central website and chat
            for all things tech/engineering/development. You can join our
            Discord server (it's like Slack, but for communities, and free) and
            chat with other developers, share your knowledge, and get help from
            other members; or join our regular events that we organize with our
            participating groups.
          </div>
        </div>
        <div class="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/cyprus-developer-community"
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
      </div>
    </Container>
  )
}
