import clsx from 'clsx'
import { splitProps } from 'solid-js'

export function Prose(props) {
  const [local, other] = splitProps(props, ['class'])

  return <div class={clsx(local.class, 'prose dark:prose-invert')} {...other} />
}
