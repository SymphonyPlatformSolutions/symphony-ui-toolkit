import { shallow } from 'enzyme';
import React from 'react';
import { Input } from '../../../src/components';
import { Validators } from '../../../src/core/validators/validators';

jest.mock(
  '../../../src/core/validators/patternValidator/safeRegexExecute',
  () => ({
    safeRegexExecute: jest.fn()
  })
);

describe('Input Component', () => {
  describe('Input component test suite => ', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

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
    it('if a validator is present no error message appears before touched/modified', async () => {
      const zone = {
        validator: Validators.Required
      };
      const validator = jest
        .spyOn(zone, 'validator')
        .mockImplementation(x => Promise.resolve({ required: true }));
      const validate = jest.spyOn(Input.prototype, 'validate');

      const wrapper = shallow(
        <Input
          validator={Validators.Required}
          errors={{ required: 'Required' }}
        ></Input>
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('.tk-input-error')).toEqual({});
      wrapper.find('input').simulate('change', { target: { value: '' } });
      await validator;
      await validate;
      wrapper.render();
      expect(wrapper.find('.tk-input-error').text()).toEqual('Required');
    });
    it('callbacks should be called on value and validation change', async () => {
      const zone = {
        onChange: () => null,
        onValidationChanged: () => null,
        validator: Validators.Required
      };
      const change = jest.spyOn(zone, 'onChange');
      const validate = jest.spyOn(Input.prototype, 'validate');
      const valChange = jest.spyOn(zone, 'onValidationChanged');
      const validator = jest
        .spyOn(zone, 'validator')
        .mockImplementation(x => Promise.resolve({ required: true }));
      const wrapper = shallow(
        <Input
          validator={zone.validator}
          onValidationChanged={zone.onValidationChanged}
          onChange={zone.onChange}
        ></Input>
      );
      wrapper.find('input').simulate('change', { target: { value: '' } });
      expect(change).toHaveBeenCalledWith('');
      await validator;
      await validate;
      expect(valChange).toHaveBeenCalledWith(false);
    });
    it('dirty state could be overridden', async () => {
      const zone = {
        onValidationChanged: () => null,
        validator: Validators.Required
      };
      const validator = jest
        .spyOn(zone, 'validator')
        .mockImplementation(x => Promise.resolve({ required: true }));
      const validate = jest.spyOn(Input.prototype, 'validate');

      const valChange = jest.spyOn(zone, 'onValidationChanged');
      shallow(
        <Input
          validator={zone.validator}
          onValidationChanged={zone.onValidationChanged}
          dirty={true}
        ></Input>
      );
      await validator;
      await validate;
      expect(valChange).toHaveBeenCalledWith(false);
    });
    it('should mark touched onBlur', () => {
      const wrapper = shallow(<Input></Input>);
      expect(wrapper.state('touched')).toBeFalsy();
      wrapper.find('input').simulate('blur');
      expect(wrapper.state('touched')).toBeTruthy();
    });
    it('should chain validators in an array', async () => {
      const promiseAll = jest
        .spyOn(Promise, 'all')
        .mockImplementation(x =>
          Promise.resolve([{ number: true }])
        );
      const validate = jest.spyOn(Input.prototype, 'validate');
      const wrapper = shallow(
        <Input
          errors={{ required: 'Required', number: 'Number' }}
          validator={[Validators.Required, Validators.Number]}
        ></Input>
      );
      wrapper.find('input').simulate('change', { target: { value: 'test' } });
      await promiseAll;
      await validate;
      wrapper.render();
      expect(wrapper.find('.tk-input-error').text()).toEqual('Number');
    });
    it('should display a label if provided', () => {
      let wrapper = shallow(<Input></Input>);
      expect(wrapper.find('label.tk-label').length).toBe(0);
      wrapper = shallow(<Input label="LABEL"></Input>);
      expect(wrapper.find('label.tk-label').text()).toEqual('LABEL');
    });
    it('should display a tooltip if provided', () => {
      const tooltipText = 'Tooltip';
      const tooltipCloseLabel = 'Close';
      let wrapper = shallow(<Input></Input>);
      expect(wrapper.find('Icon').length).toBe(0);
      wrapper = shallow(
        <Input
          tooltip={tooltipText}
          tooltipCloseLabel={tooltipCloseLabel}
          placeholder="Firstname"
          value="Lorem"
        ></Input>
      );
      expect(wrapper.find('Icon').length).toBe(1);
      expect(wrapper.find('Icon').prop('iconName')).toBeDefined();
      expect(wrapper.find('Icon').prop('tooltip')).toBeDefined();
      expect(wrapper.find('Icon').prop('tooltip')).toHaveProperty('id');
      expect(wrapper.find('Icon').prop('tooltip')).toHaveProperty(
        'description',
        tooltipText
      );
      expect(wrapper.find('Icon').prop('tooltip')).toHaveProperty(
        'closeLabel',
        tooltipCloseLabel
      );
    });
  });
});
