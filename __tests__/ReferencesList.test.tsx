import { render, screen } from '@testing-library/react'
import ReferencesList from '@/components/ReferencesList'

describe('ReferencesList', () => {
  it('renders provided references', () => {
    const references = [
      { name: 'Example', url: 'https://example.com' },
      { name: 'Another', url: 'https://another.com' },
    ]

    render(<ReferencesList references={references} />)

    references.forEach((ref) => {
      const link = screen.getByRole('link', { name: ref.name })
      expect(link).toHaveAttribute('href', ref.url)
    })
  })
})
