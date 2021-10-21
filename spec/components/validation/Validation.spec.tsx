import { shallow } from 'enzyme';
import * as React from 'react';
import { DatePicker, TextField, Validation } from '../../../src/components';
import { Validators } from '../../../src/core/validators/validators';

describe('Validation Component', () => {
  describe('Validation test suite => ', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it('if a validator is present no error message appears before modified', async () => {
      const validate = jest.spyOn(Validation.prototype, 'updateState');
      const wrapper = shallow(
        <Validation validator={Validators.Required} errorMessage={'Required'}>
          <TextField />
        </Validation>
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('.tk-validation--errors').exists()).toBeFalsy();
      expect(wrapper.find('.tk-validation__errors').exists()).toBeFalsy();
      const mockEvent = { target: { value: 'This is just for test' } };
      wrapper.find('TextField').simulate('change', mockEvent);
      expect(validate).toHaveBeenCalledWith(mockEvent.target.value);
    });
    it('"onValidationChanged" callback should be called on validation', async () => {
      const zone = {
        onChange: () => null,
        onValidationChanged: () => null,
        validator: Validators.Required,
      };
      const change = jest.spyOn(zone, 'onChange');
      const validate = jest.spyOn(Validation.prototype, 'updateState');
      const valChange = jest.spyOn(zone, 'onValidationChanged');
      const wrapper = shallow(
        <Validation
          validator={zone.validator}
          errorMessage={'Required'}
          onValidationChanged={zone.onValidationChanged}
        >
          <TextField onChange={zone.onChange} />
        </Validation>
      );
      const mockEvent = { target: { value: 'This is just for test' } };
      wrapper.find('TextField').simulate('change', mockEvent);
      expect(change).toHaveBeenCalledWith(mockEvent);
      await validate;
      expect(valChange).toHaveBeenCalledWith(true, null);
    });
    it('validation should be called when the child component is updated', async () => {
      const zone = {
        onChange: () => null,
        validator: Validators.Required,
      };
      const change = jest.spyOn(zone, 'onChange');
      const validate = jest.spyOn(Validation.prototype, 'updateState');
      const wrapper = shallow(
        <Validation validator={zone.validator} errorMessage={'Required'}>
          <TextField onChange={zone.onChange} />
        </Validation>
      );
      const mockEvent = { target: { value: 'This is just for test' } };
      wrapper.find('TextField').simulate('change', mockEvent);
      expect(change).toHaveBeenCalledWith(mockEvent);
      await validate;
      expect(validate).toHaveBeenCalledWith(mockEvent.target.value);
    });
    it('validation should be called when the child component loses focus', async () => {
      const zone = {
        onBlur: () => null,
        validator: Validators.Required,
      };
      const blur = jest.spyOn(zone, 'onBlur');
      const validate = jest.spyOn(Validation.prototype, 'updateState');
      const wrapper = shallow(
        <Validation validator={zone.validator} errorMessage={'Required'}>
          <TextField onBlur={zone.onBlur} />
        </Validation>
      );
      const mockEvent = { target: { value: 'This is just for test' } };
      wrapper.find('TextField').simulate('blur', mockEvent);
      expect(blur).toHaveBeenCalledWith(mockEvent);
      await validate;
      expect(validate).toHaveBeenCalledWith(mockEvent.target.value);
    });
    it('validation should be called when the child component send onValidationChanged', async () => {
      const mockEvent = { format: 'this message is displayed' };

      const wrapper = shallow(
        <Validation>
          <DatePicker onChange={() => null} />
        </Validation>
      );
      wrapper.find('DatePicker').simulate('validationChanged', mockEvent);
      expect(wrapper.find('.tk-validation__errors').text()).toContain('this message is displayed');
    });
    it('validation should be called with custom error message', async () => {
      const mockEvent = { format: 'this is message is overriden' };

      const wrapper = shallow(
        <Validation
          errorMessage={{
            format: 'custom format error',
            disabledDate: 'custom disabled date error',
            maxDate: 'custom max date error',
            minDate: 'custom min date error',
          }}
        >
          <DatePicker onChange={() => null} />
        </Validation>
      );
      wrapper.find('DatePicker').simulate('validationChanged', mockEvent);
      expect(wrapper.find('.tk-validation__errors').text()).toContain('custom format error');
    });
    it('validation should be called at initialization if validateOnInit is defined', async () => {
      const validate = jest.spyOn(Validation.prototype, 'updateState');
      const valueToCheck = 'A value to test';
      const wrapper = shallow(
        <Validation
          validateOnInit={valueToCheck}
          validator={Validators.Required}
          errorMessage={'Required'}
        >
          <TextField />
        </Validation>
      );
      expect(wrapper.length).toEqual(1);
      expect(validate).toHaveBeenCalled();
      expect(validate).toHaveBeenCalledWith(valueToCheck);
    });
    it('should chain validators in an array', async () => {
      const promiseAll = jest
        .spyOn(Promise, 'all')
        .mockImplementation(() => Promise.resolve([{ number: true }]));
      const validate = jest.spyOn(Validation.prototype, 'updateState');
      const wrapper = shallow(
        <Validation
          validator={[Validators.Required, Validators.Number]}
          errorMessage={{ required: 'Required', number: 'Number' }}
        >
          <TextField />
        </Validation>
      );
      const mockEvent = { target: { value: 'This is just for test' } };
      wrapper.find('TextField').simulate('change', mockEvent);
      await promiseAll;
      await validate;
      wrapper.render();
      expect(wrapper.find('.tk-validation__errors').text()).toContain('Number');
    });
    it('should force validation', async () => {
      const zone = {
        onChange: () => null,
        onValidationChanged: () => null,
        validator: Validators.Required,
      };
      const validate = jest.spyOn(Validation.prototype, 'updateState');
      const validator = jest.spyOn(zone, 'validator');

      const wrapper = shallow(
        <Validation validator={zone.validator} errorMessage={'Required'}>
          <TextField />
        </Validation>
      );
      (wrapper.instance() as Validation).refreshValidation();

      await validator;
      await validate;
      wrapper.render();
      expect(wrapper.find('.tk-validation__errors').text()).toContain('Required');
    });
    it('should reset validation', async () => {
      const zone = {
        validator: Validators.Required,
      };
      const validate = jest.spyOn(Validation.prototype, 'updateState');
      const validator = jest.spyOn(zone, 'validator');

      const wrapper = shallow(
        <Validation validator={zone.validator} errorMessage={'Required'}>
          <TextField />
        </Validation>
      );
      (wrapper.instance() as Validation).refreshValidation();
      // Now some errors should be displayed
      await validator;
      await validate;
      wrapper.render();
      expect(wrapper.find('.tk-validation__errors').text()).toContain('Required');

      (wrapper.instance() as Validation).reset();
      await validator;
      await validate;
      wrapper.render();
      // Now no errors should be displayed
      expect(wrapper.find('.tk-validation__errors').exists()).toBeFalsy();
    });
  });
  it('should display the error message from errors "prop" ', () => {
    const zone = {
      validator: Validators.Required,
    };
    const wrapper = shallow(
      <Validation errors={['Required.', 'This is not a valid name']}>
        <TextField />
      </Validation>
    );
    wrapper.render();
    const validator = jest.spyOn(zone, 'validator');
    const errorText = wrapper.find('.tk-validation__errors').text();
    expect(errorText).toContain(
      'Required.'
    );
    expect(errorText).toContain(
      'This is not a valid name'
    );
    expect(validator).not.toHaveBeenCalled();
  });
});
