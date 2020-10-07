import { shallow } from 'enzyme';
import React from 'react';
import { TextField, Validation } from '../../../src/components';
import { Validators } from '../../../src/core/validators/validators';

describe('Validation Component', () => {
  describe('Validation test suite => ', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it('if a validator is present no error message appears before modified', async () => {
      const validate = jest.spyOn(Validation.prototype, 'validate');
      const wrapper = shallow(
        <Validation validator={Validators.Required} errorMessage={'Required'}>
          <TextField />
        </Validation>
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('.tk-validation--error')).toEqual({});
      expect(wrapper.find('.tk-validation__error')).toEqual({});
      const mockEvent = { target: { value: 'This is just for test' } };
      wrapper.find('TextField').simulate('change', mockEvent);
      expect(validate).toHaveBeenCalledWith(mockEvent.target.value);
    });
    it('"onValidationChanged" callback should be called on value change', async () => {
      const zone = {
        onChange: () => null,
        onValidationChanged: () => null,
        validator: Validators.Required,
      };
      const change = jest.spyOn(zone, 'onChange');
      const validate = jest.spyOn(Validation.prototype, 'validate');
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
      expect(valChange).toHaveBeenCalledWith(true);
    });
    it('should chain validators in an array', async () => {
      const promiseAll = jest
        .spyOn(Promise, 'all')
        .mockImplementation(() => Promise.resolve([{ number: true }]));
      const validate = jest.spyOn(Validation.prototype, 'validate');
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
      expect(wrapper.find('.tk-validation__error').text()).toEqual('Number');
    });

    // describe('should clear input', () => {
    //   const tests = [
    //     {
    //       title: 'when default value',
    //       args: {
    //         defaultValue: 'default value',
    //         expectedAfterReset: 'default value',
    //       },
    //     },
    //     {
    //       title: 'when no value',
    //       args: { defaultValue: undefined, expectedAfterReset: '' },
    //     },
    //   ];
    //
    //   tests.forEach(function (test) {
    //     it(`${test.title}`, async () => {
    //       const zone = {
    //         onChange: () => null,
    //       };
    //       jest.spyOn(Validation.prototype, 'reset');
    //       const change = jest.spyOn(zone, 'onChange');
    //       const wrapper = shallow(
    //         <Validation validator={} errorMessage={}>
    //           <TextField
    //             value={test.args.defaultValue}
    //             onChange={zone.onChange}
    //           />
    //         </Validation>
    //       );
    //       wrapper
    //         .find('input')
    //         .simulate('change', { target: { value: 'test' } });
    //       let state = wrapper.state();
    //       expect(state).toEqual(
    //         expect.objectContaining({
    //           value: 'test',
    //           dirty: true,
    //           touched: false,
    //         })
    //       );
    //
    //       wrapper.instance().reset();
    //       state = wrapper.state();
    //       expect(state).toEqual(
    //         expect.objectContaining({
    //           value: test.args.expectedAfterReset,
    //           dirty: false,
    //           touched: false,
    //         })
    //       );
    //       expect(change).toHaveBeenCalledWith(test.args.expectedAfterReset);
    //     });
    //   });
    // });
    it('should force validation', async () => {
      const zone = {
        onChange: () => null,
        onValidationChanged: () => null,
        validator: Validators.Required,
      };
      const validate = jest.spyOn(Validation.prototype, 'validate');
      const validator = jest.spyOn(zone, 'validator');

      const wrapper = shallow(
        <Validation
          validator={zone.validator}
          errorMessage={{ required: 'Required' }}
        >
          <TextField />
        </Validation>
      );
      console.log(wrapper.debug({ verbose: true }));
      (wrapper.instance() as Validation).refreshValidation();

      await validator;
      await validate;
      wrapper.render();
      expect(wrapper.find('.tk-validation__error').text()).toEqual('Required');
    });
    it('should reset validation', async () => {
      const zone = {
        validator: Validators.Required,
      };
      const validate = jest.spyOn(Validation.prototype, 'validate');
      const validator = jest.spyOn(zone, 'validator');

      const wrapper = shallow(
        <Validation validator={zone.validator} errorMessage={'Required'}>
          <TextField />
        </Validation>
      );
      console.log(wrapper.debug({ verbose: true }));
      (wrapper.instance() as Validation).refreshValidation();
      // Now some errors should be displayed
      await validator;
      await validate;
      wrapper.render();
      expect(wrapper.find('.tk-validation__error').text()).toEqual('Required');

      (wrapper.instance() as Validation).reset();
      await validator;
      await validate;
      wrapper.render();
      // Now no errors should be displayed
      expect(wrapper.find('.tk-validation__error').exists()).toBeFalsy();
    });

    // describe('validate method should be trigger', () => {
    //   it('when validateOnInit is defined', async () => {
    //     const zone = {
    //       onValidationChanged: () => null,
    //       validator: Validators.Required,
    //     };
    //     const validator = jest.spyOn(zone, 'validator');
    //     const validate = jest.spyOn(TextField.prototype, 'validate');
    //
    //     const valChange = jest.spyOn(zone, 'onValidationChanged');
    //     shallow(
    //       <Validation
    //         validator={zone.validator}
    //         errorMessage={'Required'}
    //         onValidationChanged={zone.onValidationChanged}
    //         validateOnInit={'A value'}
    //       >
    //         <TextField />
    //       </Validation>
    //     );
    //     await validator;
    //     await validate;
    //     expect(valChange).toHaveBeenCalledWith('A value');
    //   });
    //   it('when prop is updated', async () => {
    //     const zone = {
    //       onValidationChanged: () => null,
    //       validator: Validators.Required,
    //     };
    //     const validator = jest.spyOn(zone, 'validator');
    //     const validate = jest.spyOn(TextField.prototype, 'validate');
    //
    //     const valChange = jest.spyOn(zone, 'onValidationChanged');
    //     const wrapper = shallow(
    //       <Validation
    //         validator={zone.validator}
    //         errorMessage={'Required'}
    //         onValidationChanged={zone.onValidationChanged}
    //       >
    //         <TextField />
    //       </Validation>
    //     );
    //     wrapper.find('TextField').setProps({ value: 'An update' });
    //     await validator;
    //     await validate;
    //     expect(valChange).toHaveBeenCalledWith('An update');
    //   });
    //   it('when prop is updated', async () => {
    //     const zone = {
    //       onValidationChanged: () => null,
    //       validator: Validators.Required,
    //     };
    //     const validator = jest.spyOn(zone, 'validator');
    //     const validate = jest.spyOn(TextField.prototype, 'validate');
    //
    //     const valChange = jest.spyOn(zone, 'onValidationChanged');
    //     const wrapper = shallow(
    //       <Validation
    //         validator={zone.validator}
    //         errorMessage={'Required'}
    //         onValidationChanged={zone.onValidationChanged}
    //       >
    //         <TextField />
    //       </Validation>
    //     );
    //     wrapper.find('input').simulate('blur');
    //     await validator;
    //     await validate;
    //     expect(valChange).toHaveBeenCalled();
    //   });
    // });
  });
});
