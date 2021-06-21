import * as React from 'react';
import classnames from 'classnames';
import userEvent from '@testing-library/user-event';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import { InputDecorator } from '../../../src/components/input';

describe('InputDecorator Component', () => {
  describe('InputDecorator test suite => ', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('render a default input', () => {
      render(
        <InputDecorator>
          <input />
        </InputDecorator>
      );
      const input = screen.getByRole('textbox');
      expect(input).toBeDefined();

      // An ID should be generated
      expect(input.id).toBeDefined();

      // 'tk-input' should be added
      expect(input.classList).toContain('tk-input');
    });
    it('render an input with an ID and some CSS classes', () => {
      const id = 'test-id';
      const cssClass1 = 'test-class-1';
      const cssClass2 = 'test-class-1';
      render(
        <InputDecorator>
          <input id={id} className={classnames(cssClass1, cssClass2)} />
        </InputDecorator>
      );
      const input = screen.getByRole('textbox');
      expect(input).toBeDefined();

      // ID should be kept
      expect(input.id).toBe(id);

      // 'tk-input' should be added to the existing classes
      expect(input.classList).toContain('tk-input');
      expect(input.classList).toContain(cssClass1);
      expect(input.classList).toContain(cssClass2);
    });
    xit('render an invalid child tag (button)', () => {
      render(
        <InputDecorator>
          <button>A button</button>
        </InputDecorator>
      );
      const button = screen.getByRole('button');
      // expect(input).toBeDefined();

      // // ID should be kept
      // expect(input.id).toBe('test-id');

      // // 'tk-input' should be added to exsiting classes
      // expect(input.classList).toContain('tk-input');
      // expect(input.classList).toContain('test-class-1');
      // expect(input.classList).toContain('test-class-2');
    });
    xit('render too many children', () => {
      render(
        <InputDecorator>
          <input />
          <input />
        </InputDecorator>
      );
      const button = screen.getByRole('button');
      // expect(input).toBeDefined();

      // // ID should be kept
      // expect(input.id).toBe('test-id');

      // // 'tk-input' should be added to exsiting classes
      // expect(input.classList).toContain('tk-input');
      // expect(input.classList).toContain('test-class-1');
      // expect(input.classList).toContain('test-class-2');
    });
    it('extra props are forwarded to the input element', () => {
      const attributeValue = 'test-value';
      render(
        <InputDecorator>
          <input data-test={attributeValue} />
        </InputDecorator>
      );
      const input = screen.getByRole('textbox');

      expect(input).toBeDefined();
      expect(input).toHaveAttribute('data-test', attributeValue);
    });
    it('should display a label if provided', () => {
      const labelValue = 'test-label';
      const { getByText } = render(
        <InputDecorator label={labelValue}>
          <input />
        </InputDecorator>
      );

      const label = getByText(labelValue);
      expect(label).toBeDefined();
    });

    it('should display a tooltip if provided', async () => {
      const tooltipText = 'A tooltip';
      const tooltipCloseLabel = 'test-close-button';
      const { getByText } = render(
        <InputDecorator
          tooltip={tooltipText}
          tooltipCloseLabel={tooltipCloseLabel}
        >
          <input />
        </InputDecorator>
      );

      const icon = document.querySelector('i.tk-icon-info-round');
      userEvent.click(icon);
      const description = getByText(tooltipText);
      await waitFor(() => expect(description).toBeTruthy());

      const cta = getByText(tooltipCloseLabel);
      userEvent.click(cta);
      waitForElementToBeRemoved(cta);
    });
    it('should display a decorator if provided', () => {
      const decoratorName = 'copy';
      const { getByText } = render(
        <InputDecorator rightDecorators={<button>{decoratorName}</button>}>
          <input />
        </InputDecorator>
      );

      const button = getByText(decoratorName);
      expect(button).toBeDefined();
    });

    it('should display multiple decorators if provided', () => {
      const decoratorName1 = 'copy';
      const decoratorName2 = 'search';
      const { getByText } = render(
        <InputDecorator
          rightDecorators={[
            <button key={decoratorName1}>{decoratorName1}</button>,
            <button key={decoratorName2}>{decoratorName2}</button>,
          ]}
        >
          <input />
        </InputDecorator>
      );

      const buttonDecorator1 = getByText(decoratorName1);
      const buttonDecorator2 = getByText(decoratorName2);
      expect(buttonDecorator1).toBeDefined();
      expect(buttonDecorator2).toBeDefined();
    });
  });
});
