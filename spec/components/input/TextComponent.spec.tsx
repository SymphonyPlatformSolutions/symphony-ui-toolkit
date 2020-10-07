import { shallow } from 'enzyme';
import React from 'react';
import { TextComponent, Types } from '../../../src/components/input/TextComponent';

describe('TextComponent Component', () => {
  describe('TextComponent test suite => ', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('render a TextField with default props and initial value and test if a input html tag is used', () => {
      const wrapper = shallow(
        <TextComponent type={Types.TEXTFIELD} value="Test" />
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.hasClass('tk-input-group')).toBe(true);
      expect(wrapper.find('input.tk-input').length).toBe(1);
      expect(wrapper.find('input.tk-input').prop('value')).toEqual('Test');
    });
    it('render a TextArea with default props and initial value and test if a textarea html tag is used', () => {
      const wrapper = shallow(
        <TextComponent type={Types.TEXTAREA} value="Test" />
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
      let wrapper = shallow(<TextComponent type={Types.TEXTFIELD} />);
      expect(wrapper.find('label.tk-label').length).toBe(0);
      wrapper = shallow(
        <TextComponent type={Types.TEXTFIELD} label="LABEL" id={id} />
      );
      expect(wrapper.find('label.tk-label').text()).toEqual('LABEL');
      expect(wrapper.find(`label[htmlFor="${id}"]`)).toHaveLength(1);
    });
    it('should display a tooltip if provided', () => {
      const tooltipText = 'Tooltip';
      const tooltipCloseLabel = 'Close';
      let wrapper = shallow(<TextComponent type={Types.TEXTFIELD} />);
      expect(wrapper.find('Icon').length).toBe(0);
      wrapper = shallow(
        <TextComponent
          type={Types.TEXTFIELD}
          tooltip={tooltipText}
          tooltipCloseLabel={tooltipCloseLabel}
          placeholder="Firstname"
          value="Lorem"
        />
      );
      expect(wrapper.find('Icon').length).toBe(1);
      expect(wrapper.find('Icon').prop('iconName')).toBeDefined();
      expect(wrapper.find('Tooltip').length).toBe(1);
      expect(wrapper.find('Tooltip').prop('id')).toBeDefined();
      expect(wrapper.find('Tooltip').prop('description')).toEqual(tooltipText);
      expect(wrapper.find('Tooltip').prop('closeLabel')).toEqual(
        tooltipCloseLabel
      );
    });
  });
});
