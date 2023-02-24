import type { Group, GroupLink, GroupLinkType } from './github/commands'
import type { Maybe } from '~/types'

export const getGroupLink = (
  group: Group,
  linkType: GroupLinkType
): Maybe<GroupLink> => group.links.find((link) => link.type === linkType)

export const getGroupAnyLink = (
  group: Group,
  ...linkTypes: GroupLinkType[]
): GroupLink => {
  const defaultLink = getGroupLink(group, 'website')
  return linkTypes.reduce((foundLink, linkType) => {
    const link = getGroupLink(group, linkType)
    if (link) {
      return link
    }
    return foundLink
  }, defaultLink)
}
