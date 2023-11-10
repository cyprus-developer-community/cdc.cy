export const H1 = (props) => {
  return (
    <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
      {props.children}
    </h1>
  )
}
export const H2 = (props) => {
  return (
    <h2 class="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
      {props.children}
    </h2>
  )
}

export const H3 = (props) => {
  return (
    <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
      {props.children}
    </h3>
  )
}
