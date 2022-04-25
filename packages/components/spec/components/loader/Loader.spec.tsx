import * as React from 'react';
import Loader from '../../../src/components/loader';
import { render } from '@testing-library/react';

describe('Loader Component', () => {
  describe('Loader component test suite => ', () => {
    it('should render the component with default props', () => {
      render(<Loader />);

      const targetFirstIcon = document.evaluate(
        '//i',
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      );
      const nodeValue = targetFirstIcon.singleNodeValue;
      expect(nodeValue).toContainHTML('tk-loader-spinner');
    });

    it('should render extra props to the loader component', () => {
      render(
        <Loader variant="ok" loadingText="loading..." loadingTextPos="right">
          Close me
        </Loader>
      );

      const firstIcon = document.evaluate(
        '//i',
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      );
      const nodeValue = firstIcon.singleNodeValue;
      const firstIconText = document.evaluate(
        '//div',
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      );
      const nodeValueText = firstIconText.singleNodeValue;

      expect(nodeValue).toContainHTML('tk-loader-spinner tk-loader--ok');
      expect(nodeValueText).toContainHTML('tk-loader-textPos--right');
      expect(nodeValueText).toContainHTML(
        '<p class="tk-loader-text">loading...</p>'
      );
    });
  });
});
