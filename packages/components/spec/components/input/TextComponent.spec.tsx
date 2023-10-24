import { shallow, mount } from 'enzyme';
import * as React from 'react';

import {
  TextComponent,
  Types,
} from '../../../src/components/input/TextComponent';

import Icon from '../../../src/components/icon/FontIcon';
import { TkIcon } from '@symphony-ui/uitoolkit-styles/dist/fonts/tk-icons';

describe('TextComponent Component', () => {
  describe('TextComponent test suite => ', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('render a TextField with default props and initial value and test if a input html tag is used', () => {
      const onChange = jest.fn();
      const wrapper = shallow(
        <TextComponent
          type={Types.TEXTFIELD}
          value="Test"
          onChange={onChange}
        />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.hasClass('tk-input-group')).toBe(true);
      expect(wrapper.find('input.tk-input').length).toBe(1);
      expect(wrapper.find('input.tk-input').prop('value')).toEqual('Test');
    });
    it('render a TextArea with default props and initial value and test if a textarea html tag is used', () => {
      const onChange = jest.fn();
      const wrapper = shallow(
        <TextComponent type={Types.TEXTAREA} value="Test" onChange={onChange} />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.hasClass('tk-input-group')).toBe(true);
      expect(wrapper.find('textarea.tk-input').length).toBe(1);
      expect(wrapper.find('textarea.tk-input').prop('value')).toEqual('Test');
    });
    it('extra props are forwarded to the input element', () => {
      const ariaLabel = 'field';
      const wrapper = shallow(
        <TextComponent type={Types.TEXTFIELD} aria-label={ariaLabel} />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('input').prop('aria-label')).toEqual(ariaLabel);
    });
    it('should display a label if provided', () => {
      const id = 'textfield-1234567890';
      let wrapper = mount(<TextComponent type={Types.TEXTFIELD} />);
      expect(wrapper.find('label.tk-label').length).toBe(0);
      wrapper = mount(
        <TextComponent type={Types.TEXTFIELD} label="LABEL" id={id} />
      );
      expect(wrapper.find('label.tk-label').text()).toEqual('LABEL');
      expect(wrapper.find(`label[htmlFor="${id}"]`)).toHaveLength(1);
      wrapper.unmount();
    });
    it('should display a decorator if provided', () => {
      const decoratorName = 'copy';
      let wrapper = mount(<TextComponent type={Types.TEXTFIELD} />);
      expect(wrapper.find('label.tk-label').length).toBe(0);
      wrapper = mount(
        <TextComponent
          type={Types.TEXTFIELD}
          rightDecorators={<button>{decoratorName}</button>}
        />
      );
      expect(wrapper.find('button').text()).toEqual(decoratorName);
      wrapper.unmount();
    });

    it('should display multiple decorators if provided', () => {
      const decoratorId1 = 'decor1';
      const decoratorId2 = 'decor2';
      const decoratorName1 = 'copy';
      const decoratorName2 = 'search';
      let wrapper = mount(<TextComponent type={Types.TEXTFIELD} />);
      expect(wrapper.find('label.tk-label').length).toBe(0);
      wrapper = mount(
        <TextComponent
          type={Types.TEXTFIELD}
          rightDecorators={[
            <button id={decoratorId1} key="decorator-1">
              {decoratorName1}
            </button>,
            <button id={decoratorId2} key="decorator-2">
              {decoratorName2}
            </button>,
          ]}
        />
      );
      expect(wrapper.find(`button#${decoratorId1}`).text()).toEqual(
        decoratorName1
      );
      expect(wrapper.find(`button#${decoratorId2}`).text()).toEqual(
        decoratorName2
      );
      wrapper.unmount();
    });
    it('should have the style --required if showRequired is provided', () => {
      const wrapper = mount(
        <TextComponent type={Types.TEXTFIELD} label="LABEL" showRequired />
      );
      expect(wrapper.find('label.tk-label--required').length).toBe(1);
    });
    it('should display a tooltip if provided', () => {
      const id = 'textfield-1234567890';
      const tooltipText = 'Tooltip';
      const tooltipCloseLabel = 'Close';
      const onChange = jest.fn();
      let wrapper = mount(<TextComponent type={Types.TEXTFIELD} />);
      expect(wrapper.find('FontIcon').length).toBe(0);
      wrapper = mount(
        <TextComponent
          type={Types.TEXTFIELD}
          id={id}
          tooltip={tooltipText}
          tooltipCloseLabel={tooltipCloseLabel}
          placeholder="Firstname"
          value="Lorem"
          onChange={onChange}
        />
      );
      expect(wrapper.find('FontIcon').length).toBe(1);
      expect(wrapper.find('FontIcon').prop('iconName')).toBeDefined();
      expect(wrapper.find('LabelTooltipDecorator').length).toBe(1);
      expect(wrapper.find('LabelTooltipDecorator').prop('id')).toBeDefined();
      expect(wrapper.find('LabelTooltipDecorator').prop('tooltip')).toEqual(
        tooltipText
      );
      expect(
        wrapper.find('LabelTooltipDecorator').prop('tooltipCloseLabel')
      ).toEqual(tooltipCloseLabel);
      wrapper.unmount();
    });
    describe('should handle icon props', () => {
      const iconProps = {
        className: 'my-custom-class',
        iconName: 'calendar' as TkIcon,
        tabIndex: 0,
        onClick: jest.fn(),
        onKeyDown: jest.fn(),
      };
      it('should display an icon if provided', () => {
        let wrapper = shallow(<TextComponent type={Types.TEXTFIELD} />);
        expect(wrapper.find('FontIcon').length).toBe(0);
        wrapper = shallow(
          <TextComponent
            type={Types.TEXTFIELD}
            iconElement={<Icon {...iconProps} />}
          />
        );

        const wrapperIcon = wrapper.find('FontIcon');
        expect(wrapperIcon.length).toBe(1);
        expect(wrapperIcon.prop('iconName')).toBe(iconProps.iconName);
        expect(wrapperIcon.prop('className')).toContain('tk-input__icon');
        expect(wrapperIcon.prop('className')).toContain(iconProps.className);
        expect(wrapperIcon.prop('tabIndex')).toBe(iconProps.tabIndex);
        expect(wrapperIcon.prop('onClick')).toBe(iconProps.onClick);
        expect(wrapperIcon.prop('onKeyDown')).toBe(iconProps.onKeyDown);
      });
      it('should trigger onClick method', () => {
        let wrapper = shallow(<TextComponent type={Types.TEXTFIELD} />);
        expect(wrapper.find('FontIcon').length).toBe(0);
        wrapper = shallow(
          <TextComponent
            type={Types.TEXTFIELD}
            iconElement={<Icon {...iconProps} />}
          />
        );
        const wrapperIcon = wrapper.find('FontIcon');
        expect(iconProps.onClick).toHaveBeenCalledTimes(0);
        wrapperIcon.simulate('click');
        expect(iconProps.onClick).toHaveBeenCalledTimes(1);
      });
      it('should trigger onKeyDown method', () => {
        let wrapper = shallow(<TextComponent type={Types.TEXTFIELD} />);
        expect(wrapper.find('FontIcon').length).toBe(0);
        wrapper = shallow(
          <TextComponent
            type={Types.TEXTFIELD}
            iconElement={<Icon {...iconProps} />}
          />
        );
        const wrapperIcon = wrapper.find('FontIcon');
        expect(iconProps.onKeyDown).toHaveBeenCalledTimes(0);
        wrapperIcon.simulate('keyDown', { key: 'Enter' });
        expect(iconProps.onKeyDown).toHaveBeenCalledTimes(1);
      });
    });
  });
});
