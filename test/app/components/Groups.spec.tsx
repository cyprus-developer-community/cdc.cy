import { render, screen } from '@testing-library/react'
import type { GroupsProps } from '~/components/Groups'
import Groups from '~/components/Groups'

const defaultProps: GroupsProps = {
  groups: [
    {
      id: '1',
      name: 'group 1',
      logo: 'http://localhost:3000'
    }
  ]
}

describe('Groups', () => {
  it('should render title of Groups component', () => {
    render(<Groups {...defaultProps} />)
    expect(
      screen.getByRole('heading', { name: 'Participating Member Groups' })
    ).toBeInTheDocument()
  })
})
