import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, buttonVariants } from '@/components/ui/button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByRole('button', { name: 'Default Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary');
  });

  it('renders with the "destructive" variant', () => {
    render(<Button variant="destructive">Destructive Button</Button>);
    const button = screen.getByRole('button', { name: 'Destructive Button' });
    expect(buttonVariants).toBeDefined()

    expect(button).toHaveClass('bg-destructive text-destructive-foreground hover:bg-destructive/90');
  });

  it('renders as a child component when asChild is true', () => {
    render(<Button asChild><span>Child Button</span></Button>);
    const span = screen.getByText(/child button/i);
    expect(span).toBeInTheDocument();
    expect(span.parentElement).not.toHaveAttribute('type', 'button');
  });
});
