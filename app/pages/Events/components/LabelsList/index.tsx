import type { Label } from '~/types'
import { Tag } from '~/features/components/Tag'

type LabelsListProps = {
  labels: Label[]
}

export const LabelsList = ({ labels }: LabelsListProps) => {
  return (
    <ul className="flex gap-2">
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
    </ul>
  )
}
