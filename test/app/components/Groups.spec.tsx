import { render, screen } from '@testing-library/react'
import type { ParticipatingGroupsListProps } from '~/pages/Home/components/ParticipatingGroupsList'
import { ParticipatingGroupsList } from '~/pages/Home/components/ParticipatingGroupsList'
import React from 'react'
import { vi } from 'vitest'

vi.mock('@remix-run/react', () => {
  const Link = ({
    to,
    children
  }: {
    to: string
    children: React.ReactNode
  }) => <a href={to}>{children}</a>

  return {
    Link
  }
})

const defaultProps: ParticipatingGroupsListProps = {
  groups: [
    {
      name: 'group 1',
      logo: {
        png: 'http://localhost:3000',
        width: 300,
        height: 300
      },
      organizers: [],
      excerpt: 'group 1 excerpt',
      slug: 'group-1',
      links: [{ type: 'website', href: 'http://localhost:3000/group-1' }]
    }
  ]
}

describe('Groups', () => {
  it('should render title of Groups component', () => {
    render(<ParticipatingGroupsList {...defaultProps} />)
    expect(
      screen.getByRole('heading', { name: 'Participating Member Groups' })
    ).toBeInTheDocument()
  })
})
