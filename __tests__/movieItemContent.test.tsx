import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import { MovieItemContent } from '@/app/components/MovieItemContent/MovieItemContent';

vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe('MovieItemContent Component', () => {
  const mockProps = {
    title: 'Test Movie',
    release_date: '2025-01-01',
  };

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders title and release date correctly', () => {
    // given
    render(<MovieItemContent {...mockProps} />);

    // then
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Test Movie'
    );
    expect(screen.getByRole('time')).toHaveTextContent('2025-01-01');
  });

  it('does not render overview when not provided', () => {
    // given
    render(<MovieItemContent {...mockProps} />);

    // then
    expect(screen.queryByText(/overview/i)).not.toBeInTheDocument();
  });

  it('renders overview when provided', () => {
    // given
    const overview = 'This is a test movie overview';
    render(<MovieItemContent {...mockProps} overview={overview} />);

    // then
    expect(screen.getByText(overview)).toBeVisible();
  });
});
