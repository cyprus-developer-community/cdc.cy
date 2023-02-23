import type { EventLabel } from '~/types'
import { TagGroup, Tag } from '~/features/components'

type LabelsListProps = {
  labels: EventLabel[]
}

export const LabelsList = ({ labels }: LabelsListProps) => {
  return (
    <TagGroup>
      {labels.map((label) => {
        const isEventProposal = /event proposal/.test(label.description)
        if (isEventProposal) {
          return null
        }

        return (
          <Tag key={label.name} color={label.color}>
            {label.description}
          </Tag>
        )
      })}
    </TagGroup>
  )
}
