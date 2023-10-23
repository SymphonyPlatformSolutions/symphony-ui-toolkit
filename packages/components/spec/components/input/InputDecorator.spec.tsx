import * as React from 'react';
import { clsx } from 'clsx';
import userEvent from '@testing-library/user-event';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import { InputDecorator, Validation } from '../../../src/components';
import { Validators } from '../../../src/core/validators/validators';

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
          <input id={id} className={clsx(cssClass1, cssClass2)} />
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
    it('throw an error when rendering an invalid child tag (button)', () => {
      const spy = jest.spyOn(console, 'error').mockImplementation(() => {
        return;
      });
      expect(() =>
        render(
          <InputDecorator>
            <button>A button</button>
          </InputDecorator>
        )
      ).toThrowError();
      spy.mockRestore();
    });
    it('throw an error when rendering too many children', () => {
      const spy = jest.spyOn(console, 'error').mockImplementation(() => {
        return;
      });
      expect(() =>
        render(
          <InputDecorator>
            <>
              <input />
              <input />
            </>
          </InputDecorator>
        )
      ).toThrowError();
      spy.mockRestore();
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
      icon && userEvent.click(icon);
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
    it('validation should be called when the input of an InputDecorator is updated', async () => {
      const inputValue = 'This is a test';
      const errorMessage = 'This field is mandatory';
      render(
        <Validation validator={Validators.Required} errorMessage={errorMessage}>
          <InputDecorator>
            <input defaultValue={inputValue} />
          </InputDecorator>
        </Validation>
      );

      // Find input
      const input = screen.getByRole('textbox');
      expect(input).toBeDefined();

      // Simulate input change
      fireEvent.change(input, { target: { value: '' } });

      // Look for the error message (The test will fail if the error is not found).
      await screen.findByText(errorMessage);
    });
    it('onChange/onBlur methods of the wrapped input should be called', async () => {
      const inputValue = 'This is a test';
      const errorMessage = 'This field is mandatory';
      const onChangeMock = jest.fn();
      const onBlurMock = jest.fn();
      render(
        <Validation validator={Validators.Required} errorMessage={errorMessage}>
          <InputDecorator>
            <input defaultValue={inputValue} onChange={onChangeMock} onBlur={onBlurMock} />
          </InputDecorator>
        </Validation>
      );

      // Find input
      const input = screen.getByRole('textbox');
      expect(input).toBeDefined();

      // Simulate input change
      expect(onChangeMock).not.toHaveBeenCalled();
      fireEvent.change(input, { target: { value: '' } });
      expect(onChangeMock).toHaveBeenCalledTimes(1);

      // Simulate onBlur event
      input.focus();
      expect(input).toHaveFocus();
      expect(onBlurMock).not.toHaveBeenCalled();
      // Move out the focus from the input
      userEvent.tab();
      expect(onBlurMock).toHaveBeenCalledTimes(1);
    });
  });
});
