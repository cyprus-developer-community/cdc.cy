import clsx from 'clsx'
import { splitProps } from 'solid-js'
import { A } from 'solid-start'
import { SolidMarkdown } from 'solid-markdown'

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Card(props) {
  const [local] = splitProps(props, ['children', 'href'])

  return (
    <div class={clsx(local.class, 'group relative flex flex-col items-start')}>
      {local.children}
    </div>
  )
}

Card.Link = function CardLink(props) {
  const [local, other] = splitProps(props, ['children'])

  return (
    <>
      <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <A {...other}>
        <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span class="relative z-10">{local.children}</span>
      </A>
    </>
  )
}

Card.Title = function CardTitle(props) {
  const [local] = splitProps(props, ['children', 'href'])

  return (
    <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {local.href ? (
        <Card.Link href={local.href}>{local.children}</Card.Link>
      ) : (
        local.children
      )}
    </h2>
  )
}

Card.Description = function CardDescription(props) {
  const [local] = splitProps(props, ['children'])
  return (
    <SolidMarkdown class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {local.children}
    </SolidMarkdown>
  )
}

Card.Cta = function CardCta(props) {
  const [local] = splitProps(props, ['children'])
  return (
    <div
      aria-hidden="true"
      class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      {local.children}
      <ChevronRightIcon class="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

Card.Eyebrow = function CardEyebrow(props) {
  const [local, other] = splitProps(props, ['children', 'decorate', 'class'])

  return (
    <time
      class={clsx(
        local.class,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        local.decorate && 'pl-3.5'
      )}
      {...other}
    >
      {local.decorate && (
        <span
          class="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {local.children}
    </time>
  )
}
