import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { FAQ } from '@/components/sections/FAQ';

describe('FAQ', () => {
  it('renders all FAQ questions', () => {
    render(<FAQ />);
    expect(screen.getByText('What is NovaFlow and who is it for?')).toBeInTheDocument();
    expect(screen.getByText('How does the AI workflow automation work?')).toBeInTheDocument();
    expect(screen.getByText('What integrations does NovaFlow support?')).toBeInTheDocument();
    expect(screen.getByText('Is my data secure and private?')).toBeInTheDocument();
    expect(screen.getByText('Can I import my existing projects and data?')).toBeInTheDocument();
    expect(screen.getByText('What kind of support do you offer?')).toBeInTheDocument();
    expect(screen.getByText('How does pricing work for growing teams?')).toBeInTheDocument();
    expect(screen.getByText('Can I self-host NovaFlow?')).toBeInTheDocument();
  });

  it('shows category badges for each question', () => {
    render(<FAQ />);
    expect(screen.getByText('Getting Started')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Integrations')).toBeInTheDocument();
    expect(screen.getByText('Security')).toBeInTheDocument();
    expect(screen.getByText('Migration')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Deployment')).toBeInTheDocument();
  });

  it('initially hides all answers', () => {
    render(<FAQ />);
    expect(screen.queryByText(/fictional product concept/)).not.toBeInTheDocument();
    expect(screen.queryByText(/proposed AI workflow feature/)).not.toBeInTheDocument();
  });

  it('opens answer when question clicked', async () => {
    render(<FAQ />);
    const question = screen.getByText('What is NovaFlow and who is it for?').closest('button');
    fireEvent.click(question);

    await waitFor(() => {
      expect(screen.getByText(/fictional product concept/)).toBeInTheDocument();
      expect(question).toHaveAttribute('aria-expanded', 'true');
    });
  });

  it('closes answer when same question clicked again', () => {
    render(<FAQ />);
    const question = screen.getByText('What is NovaFlow and who is it for?').closest('button');
    fireEvent.click(question);
    fireEvent.click(question);

    expect(screen.queryByText(/fictional product concept/)).not.toBeInTheDocument();
    expect(question).toHaveAttribute('aria-expanded', 'false');
  });

  it('allows multiple answers open at once', async () => {
    render(<FAQ />);
    // Get the button elements containing the question text
    const question1 = screen.getByText('What is NovaFlow and who is it for?').closest('button');
    const question2 = screen.getByText('How does the AI workflow automation work?').closest('button');

    fireEvent.click(question1);
    fireEvent.click(question2);

    // Use waitFor to handle any async rendering from framer-motion mock
    await waitFor(() => {
      expect(screen.getByText(/fictional product concept/)).toBeInTheDocument();
      expect(screen.getByText(/proposed AI workflow feature/)).toBeInTheDocument();
    });
  });

  it('has correct aria attributes for accessibility', () => {
    render(<FAQ />);
    // Get the button that contains the question text
    const question = screen.getByText('What is NovaFlow and who is it for?').closest('button');
    expect(question).toHaveAttribute('aria-expanded', 'false');
    expect(question).not.toHaveAttribute('aria-controls');

    fireEvent.click(question!);
    expect(question).toHaveAttribute('aria-controls', 'faq-content-0');
    expect(document.getElementById('faq-content-0')).toBeInTheDocument();
  });

  it('clarifies that support is not connected', () => {
    render(<FAQ />);
    expect(screen.getByText('Still have questions?')).toBeInTheDocument();
    expect(screen.getByText(/Support contact is not available in this frontend demo/i)).toBeInTheDocument();
  });

  it('has correct heading hierarchy', () => {
    render(<FAQ />);
    const heading = screen.getByRole('heading', { name: /everything you need to know/i });
    expect(heading).toHaveAttribute('id', 'faq-heading');
    expect(heading.tagName).toBe('H2');
  });
});
