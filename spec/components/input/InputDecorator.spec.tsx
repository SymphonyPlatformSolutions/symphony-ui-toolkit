import * as React from 'react';
import { mount } from 'enzyme';
import classnames from 'classnames';
import { render, screen } from '@testing-library/react';

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

      // 'tk-input' should be added to exsiting classes
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

    // it('should display a tooltip if provided', () => {
    //   const tooltipValue = 'A tooltip';
    //   const closeLabel = 'test-close-button';
    //   const { getByText } = render(
    //     <InputDecorator tooltip={tooltipValue} tooltipCloseLabel={closeLabel}>
    //       <input />
    //     </InputDecorator>
    //   );

    //   const icon = document.querySelector('i.tk-icon-info-round');
    //   userEvent.click(icon);
    //   const description = getByText(tooltipText);
    //   await waitFor(() => expect(description).toBeTruthy());

    //   const label = getByText(labelValue);
    //   expect(label).toBeDefined();

    //   const id = 'textfield-1234567890';
    //   const tooltipText = 'Tooltip';
    //   const tooltipCloseLabel = 'Close';
    //   const onChange = jest.fn();
    //   let wrapper = mount(<TextComponent type={Types.TEXTFIELD} />);
    //   expect(wrapper.find('Icon').length).toBe(0);
    //   wrapper = mount(
    //     <TextComponent
    //       type={Types.TEXTFIELD}
    //       id={id}
    //       tooltip={tooltipText}
    //       tooltipCloseLabel={tooltipCloseLabel}
    //       placeholder="Firstname"
    //       value="Lorem"
    //       onChange={onChange}
    //     />
    //   );
    //   expect(wrapper.find('Icon').length).toBe(1);
    //   expect(wrapper.find('Icon').prop('iconName')).toBeDefined();
    //   expect(wrapper.find('LabelTooltipDecorator').length).toBe(1);
    //   expect(wrapper.find('LabelTooltipDecorator').prop('id')).toBeDefined();
    //   expect(wrapper.find('LabelTooltipDecorator').prop('tooltip')).toEqual(
    //     tooltipText
    //   );
    //   expect(
    //     wrapper.find('LabelTooltipDecorator').prop('tooltipCloseLabel')
    //   ).toEqual(tooltipCloseLabel);
    //   wrapper.unmount();
    // });
    // it('should display a decorator if provided', () => {
    //   const decoratorName = 'copy';
    //   let wrapper = mount(<TextComponent type={Types.TEXTFIELD} />);
    //   expect(wrapper.find('label.tk-label').length).toBe(0);
    //   wrapper = mount(
    //     <TextComponent
    //       type={Types.TEXTFIELD}
    //       rightDecorators={<button>{decoratorName}</button>}
    //     />
    //   );
    //   expect(wrapper.find('button').text()).toEqual(decoratorName);
    //   wrapper.unmount();
    // });

    // it('should display multiple decorators if provided', () => {
    //   const decoratorId1 = 'decor1';
    //   const decoratorId2 = 'decor2';
    //   const decoratorName1 = 'copy';
    //   const decoratorName2 = 'search';
    //   let wrapper = mount(<TextComponent type={Types.TEXTFIELD} />);
    //   expect(wrapper.find('label.tk-label').length).toBe(0);
    //   wrapper = mount(
    //     <TextComponent
    //       type={Types.TEXTFIELD}
    //       rightDecorators={[
    //         <button id={decoratorId1} key="decorator-1">
    //           {decoratorName1}
    //         </button>,
    //         <button id={decoratorId2} key="decorator-2">
    //           {decoratorName2}
    //         </button>,
    //       ]}
    //     />
    //   );
    //   expect(wrapper.find(`button#${decoratorId1}`).text()).toEqual(
    //     decoratorName1
    //   );
    //   expect(wrapper.find(`button#${decoratorId2}`).text()).toEqual(
    //     decoratorName2
    //   );
    //   wrapper.unmount();
    // });
  });
});
