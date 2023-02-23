import React from 'react'

export const calcIsReactElement = <
  TProps,
  TType extends string | React.JSXElementConstructor<unknown>
>(
  node: React.ReactNode,
  name: string
): node is React.ReactElement<TProps, TType> => {
  if (!React.isValidElement(node)) {
    return false
  }
  if (typeof node === 'string') {
    return false
  }
  const nodeType = node.type
  if (typeof nodeType === 'string') {
    return false
  }
  return nodeType.name === name
}
