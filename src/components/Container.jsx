import { splitProps } from 'solid-js'
import clsx from 'clsx'

export const ContainerOuter = (props) => {
  const [local, other] = splitProps(props, ['class', 'ref', 'children'])
  return (
    <div ref={local.ref} class={clsx('sm:px-8', local.class)} {...other}>
      <div class="mx-auto w-full max-w-7xl lg:px-8">{local.children}</div>
    </div>
  )
}

export const ContainerInner = (props) => {
  const [local, other] = splitProps(props, ['class', 'ref', 'children'])
  return (
    <div
      ref={local.ref}
      class={clsx('relative px-4 sm:px-8 lg:px-12', local.class)}
      {...other}
    >
      <div class="mx-auto max-w-2xl lg:max-w-5xl">{local.children}</div>
    </div>
  )
}

export const Container = (props) => {
  const [local, other] = splitProps(props, ['children', 'ref'])
  return (
    <ContainerOuter ref={local.ref} {...other}>
      <ContainerInner>{local.children}</ContainerInner>
    </ContainerOuter>
  )
}
