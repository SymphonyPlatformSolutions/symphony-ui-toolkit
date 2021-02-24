import * as React from 'react';
import { render } from '@testing-library/react';
import Scale from '../../../src/components/scale';
import '@testing-library/jest-dom/extend-expect';

describe('Scale component test suite =>', () => {
  describe('when rendering the component', () => {
    it('should render the Scale component by default', async () => {
      const { getByTestId } = render(<Scale/>);
      expect(getByTestId('scale').className).toBe('tk-size-medium');
    });
  });
});
