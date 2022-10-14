import type { GroupLink } from '@types'
import { Image } from 'remix-image'

export type GroupLinkIconProps = {
  link: GroupLink
}

export const GroupLinkIcon: React.FC<GroupLinkIconProps> = ({ link }) => {
  return (
    <a key={link.href} href={link.href}>
      <Image
        className="w-36 h-36 rounded-full m-auto"
        src="/meetup-logo.svg"
        alt={link.type}
      />
    </a>
  )
}
