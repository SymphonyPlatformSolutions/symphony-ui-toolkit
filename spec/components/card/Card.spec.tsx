import * as React from 'react';
import { render } from '@testing-library/react';
import Card from '../../../src/components/card';

describe('Card component test suite =>', () => {

  it('should render the Card component by default', async () => {
    const { container } = render(<Card/>);
    expect(container.firstChild).toHaveClass('tk-card');
  });

  it('should render the Card component with some content', async () => {
    const { getByText } = render(<Card>Some text</Card>);
    expect(getByText('Some text')).toBeInTheDocument();
  });
}); 