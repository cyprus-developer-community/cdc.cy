import { render, screen } from '@testing-library/react'
import type { GroupsListProps } from '~/pages/Home/components'
import { GroupsList } from '~/pages/Home/components'
import { BrowserRouter } from 'react-router-dom'

const defaultProps: GroupsListProps = {
  groups: [
    {
      id: '1',
      name: 'group 1',
      logo: 'http://localhost:3000',
      excerpt: 'group 1 excerpt',
      slug: 'group-1',
      href: 'http://localhost:3000/group-1'
    }
  ]
}

describe('Groups', () => {
  it('should render title of Groups component', () => {
    render(
      <BrowserRouter>
        <GroupsList {...defaultProps} />
      </BrowserRouter>
    )
    expect(
      screen.getByRole('heading', { name: 'Participating Member Groups' })
    ).toBeInTheDocument()
  })
})
