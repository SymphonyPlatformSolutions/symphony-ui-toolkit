import { shallow } from 'enzyme';
import React from 'react';
import { Input } from '../../../src/components';
import { Validators } from '../../../src/core/validators/validators';

describe('Input Component', () => {
  describe('Input component test suite => ', () => {
    it('render with default props and initial value', () => {
      const wrapper = shallow(<Input value="Test"></Input>);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.hasClass('tk-input-group')).toBe(true);
      expect(wrapper.find('input.tk-input').length).toBe(1);
      expect(wrapper.find('input.tk-input').prop('value')).toEqual('Test');
    });
    it('extra props are forwarded to the input element', () => {
      const ariaLabel = 'field';
      const wrapper = shallow(<Input aria-label={ariaLabel}></Input>);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('input').prop('aria-label')).toEqual(ariaLabel);
    });
    it('if a validator is present no error message appears before touched/modified', () => {
      const wrapper = shallow(
        <Input
          validator={Validators.Required}
          errors={{ required: 'Required' }}
        ></Input>
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('.tk-input-error')).toEqual({});
      wrapper.find('input').simulate('change', { target: { value: 'test' } });
      wrapper.find('input').simulate('change', { target: { value: '' } });
      expect(wrapper.find('.tk-input-error').text()).toEqual('Required');
    });
    it('callbacks should be called on value and validation change', () => {
      const zone = {
        onChange: () => null,
        onValidationChange: () => null
      };
      const change = jest.spyOn(zone, 'onChange');
      const valChange = jest.spyOn(zone, 'onValidationChange');
      const wrapper = shallow(
        <Input
          validator={Validators.Required}
          onValidationChanged={zone.onValidationChange}
          onChange={zone.onChange}
        ></Input>
      );
      wrapper.find('input').simulate('change', { target: { value: 'test' } });
      expect(change).toHaveBeenCalledWith('test');
      wrapper.find('input').simulate('change', { target: { value: '' } });
      expect(change).toHaveBeenCalledWith('');
      expect(valChange).toHaveBeenCalledWith(false);
    });
    it('dirty state could be overridden', () => {
      const zone = {
        onValidationChange: () => null
      };
      const valChange = jest.spyOn(zone, 'onValidationChange');
      shallow(
        <Input
          validator={Validators.Required}
          onValidationChanged={zone.onValidationChange}
          dirty={true}
        ></Input>
      );
      expect(valChange).toHaveBeenCalledWith(false);
    });
    it('should mark touched onBlur', () => {
      const wrapper = shallow(<Input></Input>);
      expect(wrapper.state('touched')).toBeFalsy();
      wrapper.find('input').simulate('blur');
      expect(wrapper.state('touched')).toBeTruthy();
    });
    it('should chain validators in an array', () => {
      const wrapper = shallow(
        <Input
          errors={{ required: 'Required', number: 'Number' }}
          validator={[Validators.Required, Validators.Number]}
          dirty={true}
        ></Input>
      );
      expect(wrapper.find('.tk-input-error').text()).toEqual('Required');
      wrapper.find('input').simulate('change', { target: { value: 'test' } });
      expect(wrapper.find('.tk-input-error').text()).toEqual('Number');
    });
    it('should display a label if provided', () => {
      let wrapper = shallow(<Input></Input>);
      expect(wrapper.find('label.tk-label').length).toBe(0);
      wrapper = shallow(<Input label="LABEL"></Input>);
      expect(wrapper.find('label.tk-label').text()).toEqual('LABEL');
    });
  });
});
