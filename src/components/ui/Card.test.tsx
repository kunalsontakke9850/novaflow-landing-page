import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Card>Default</Card>);
    const card = screen.getByText('Default').closest('[class*="bg-navy"]');
    expect(card).toHaveClass('bg-navy-900/60');
    expect(card).toHaveClass('border-white/6');
  });

  it('applies elevated variant classes', () => {
    render(<Card variant="elevated">Elevated</Card>);
    const card = screen.getByText('Elevated').closest('[class*="bg-navy"]');
    expect(card).toHaveClass('bg-navy-900/80');
    expect(card).toHaveClass('shadow-[0_12px_40px_-8px_rgba(0,0,0,0.35)]');
  });

  it('applies outlined variant classes', () => {
    render(<Card variant="outlined">Outlined</Card>);
    const card = screen.getByText('Outlined').closest('[class*="border"]');
    expect(card).toHaveClass('bg-transparent');
    expect(card).toHaveClass('border-white/10');
  });

  it('applies padding correctly', () => {
    render(<Card padding="lg">Padded</Card>);
    const card = screen.getByText('Padded').closest('[class*="p-"]');
    expect(card).toHaveClass('p-8');
  });

  it('applies hover styles when hover prop is true', () => {
    render(<Card hover>Hoverable</Card>);
    const card = screen.getByText('Hoverable').closest('[class*="transition"]');
    expect(card).toHaveClass('transition-all');
    expect(card).toHaveClass('duration-300');
  });

  it('renders CardHeader', () => {
    render(<Card><CardHeader>Header</CardHeader></Card>);
    expect(screen.getByText('Header')).toBeInTheDocument();
  });

  it('renders CardTitle with correct styling', () => {
    render(<Card><CardTitle>Title</CardTitle></Card>);
    const title = screen.getByText('Title');
    expect(title).toHaveClass('text-lg');
    expect(title).toHaveClass('font-semibold');
    expect(title).toHaveClass('text-navy-50');
  });

  it('renders CardDescription with correct styling', () => {
    render(<Card><CardDescription>Description</CardDescription></Card>);
    const desc = screen.getByText('Description');
    expect(desc).toHaveClass('text-navy-300');
    expect(desc).toHaveClass('text-sm');
  });

  it('renders CardContent', () => {
    render(<Card><CardContent>Content</CardContent></Card>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders CardFooter with border', () => {
    render(<Card><CardFooter>Footer</CardFooter></Card>);
    const footer = screen.getByText('Footer').closest('[class*="border-t"]');
    expect(footer).toHaveClass('border-t');
    expect(footer).toHaveClass('border-white/5');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Card ref={ref}>Ref test</Card>);
    expect(ref).toHaveBeenCalled();
  });
});
