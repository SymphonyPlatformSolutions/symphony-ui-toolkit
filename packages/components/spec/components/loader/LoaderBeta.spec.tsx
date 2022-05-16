import * as React from 'react';
import { LoaderBeta } from '../../../src/components/loader';
import { render } from '@testing-library/react';

describe('Loader Component', () => {
  describe('Loader component test suite => ', () => {
    it('should render the component with default props', () => {
      const { container } = render(<LoaderBeta />);
      expect(
        container.getElementsByClassName(
          'tk-loader--spinner-determinate tk-loader-medium tk-loader--spinner--vertical'
        ).length
      ).toBe(1);
    });

    it('should render extra props for spinner to the loader component', () => {
      const { container } = render(
        <LoaderBeta
          variant="primary"
          loadingText="loading..."
          direction="vertical"
          size="medium"
          progress="indeterminate"
          type="spinner"
        ></LoaderBeta>
      );

      expect(
        container.getElementsByClassName('tk-loader--spinner-indeterminate')
          .length
      ).toBe(1);
      expect(
        container.getElementsByClassName(
          'tk-loader--spinner-medium--vertical-text'
        ).length
      ).toBe(1);

      expect(container.getElementsByClassName('tk-loader-primary').length).toBe(
        1
      );
    });

    it('should render extra props for linear to the loader component', () => {
      const { container, getByText } = render(
        <LoaderBeta
          loadingText="loading..."
          progress="determinate"
          type="linear"
        ></LoaderBeta>
      );

      expect(
        container.getElementsByClassName('tk-loader--linear-determinate').length
      ).toBe(1);
      expect(
        container.getElementsByClassName('tk-loader--linear-text').length
      ).toBe(1);
      expect(getByText('loading...')).toBeInTheDocument();
    });
  });
});
