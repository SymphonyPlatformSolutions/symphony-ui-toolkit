import { render } from '@testing-library/react';
import * as React from 'react';
import Typography from '../../../src/components/typography';

describe('Typography Component', () => {
  describe('Typography component test suite => ', () => {

    it('should render the component with default props', () => {
      const { container } = render(<Typography>Body text</Typography>);
      const elements = container.getElementsByClassName('tk-typography tk-typography--body');
      expect(elements.length).toBe(1);
    });
    
    it('should render extra props to the typography component', () => {
      const { container } = render(<Typography type="h1" variant="bold">Close me</Typography>);
      const elements = container.getElementsByClassName('tk-typography tk-typography--h1 tk-typography--bold')
      expect(elements.length).toBe(1);
    });
    
    it('should render several variantes to the typography component', () => {
      const { container } = render(<Typography type="h1" variant={['bold', 'italic']}>Close me</Typography>);
      const elements = container.getElementsByClassName('tk-typography tk-typography--h1 tk-typography--bold tk-typography--italic')
      expect(elements.length).toBe(1);
    });

  });
}); 
