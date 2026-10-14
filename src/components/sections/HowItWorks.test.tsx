import { render } from '@testing-library/react';
import { HowItWorks } from '@/components/sections/HowItWorks';

describe('HowItWorks', () => {
  it('does not render a vertical connector through the step cards', () => {
    const { container } = render(<HowItWorks />);

    expect(container.querySelector('#how-it-works .bg-gradient-to-b')).not.toBeInTheDocument();
  });
});
