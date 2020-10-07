import { shallow } from 'enzyme';
import React from 'react';
import { TextField, Validation } from '../../../src/components';
import { Validators } from '../../../src/core/validators/validators';

describe('Validation Component', () => {
  describe('Validation test suite => ', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it('if a validator is present no error message appears before touched/modified', async () => {
      const zone = {
        validator: Validators.Required,
      };
      const validator = jest
        .spyOn(zone, 'validator')
        .mockImplementation(() => Promise.resolve({ required: true }));
      const validate = jest.spyOn(Validation.prototype, 'validate');

      const wrapper = shallow(
        <Validation validator={Validators.Required} errorMessage={'Required'}>
          <TextField />
        </Validation>
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('.tk-validation--error')).toEqual({});
      wrapper.find('input').simulate('change', { target: { value: '' } });
      await validator;
      await validate;
      wrapper.render();
      expect(wrapper.find('.tk-validation__error').text()).toEqual('Required');
    });
    it('callbacks should be called on value and validation change', async () => {
      const zone = {
        onChange: () => null,
        onValidationChanged: () => null,
        validator: Validators.Required,
      };
      const change = jest.spyOn(zone, 'onChange');
      const validate = jest.spyOn(Validation.prototype, 'validate');
      const valChange = jest.spyOn(zone, 'onValidationChanged');
      const validator = jest
        .spyOn(zone, 'validator')
        .mockImplementation(() => Promise.resolve({ required: true }));
      const wrapper = shallow(
        <Validation
          validator={zone.validator}
          errorMessage={'Required'}
          onValidationChanged={zone.onValidationChanged}
        >
          <TextField />
        </Validation>
      );
      wrapper.find('input').simulate('change', { target: { value: '' } });
      expect(change).toHaveBeenCalledWith('');
      await validator;
      await validate;
      expect(valChange).toHaveBeenCalledWith(false);
    });
    describe('dirty and touched change should trigger validate method', () => {
      it('when mount - dirty', async () => {
        const zone = {
          onValidationChanged: () => null,
          validator: Validators.Required,
        };
        const validator = jest.spyOn(zone, 'validator');
        const validate = jest.spyOn(TextComponent.prototype, 'validate');

        const valChange = jest.spyOn(zone, 'onValidationChanged');
        shallow(
          <TextComponent
            type={Types.TEXTFIELD}
            validator={zone.validator}
            onValidationChanged={zone.onValidationChanged}
            dirty={true}
          />
        );
        await validator;
        await validate;
        expect(valChange).toHaveBeenCalledWith(false);
      });
      it('when mount - touched', async () => {
        const zone = {
          onValidationChanged: () => null,
          validator: Validators.Required,
        };
        const validator = jest
          .spyOn(zone, 'validator')
          .mockImplementation(() => Promise.resolve({ required: true }));
        const validate = jest.spyOn(TextComponent.prototype, 'validate');

        const valChange = jest.spyOn(zone, 'onValidationChanged');
        shallow(
          <TextComponent
            type={Types.TEXTFIELD}
            validator={zone.validator}
            onValidationChanged={zone.onValidationChanged}
            touched={true}
          />
        );
        await validator;
        await validate;
        expect(valChange).toHaveBeenCalledWith(false);
      });
      it('when props update', async () => {
        const zone = {
          onValidationChanged: () => null,
          validator: Validators.Required,
        };
        const validator = jest.spyOn(zone, 'validator');
        const validate = jest.spyOn(TextComponent.prototype, 'validate');

        const valChange = jest.spyOn(zone, 'onValidationChanged');
        const wrapper = shallow(
          <TextComponent
            type={Types.TEXTFIELD}
            validator={zone.validator}
            onValidationChanged={zone.onValidationChanged}
          />
        );
        wrapper.setProps({ dirty: true });
        await validator;
        await validate;
        expect(valChange).toHaveBeenCalledWith(false);
        wrapper.setProps({ dirty: false, touched: true });
        await validator;
        await validate;
        expect(valChange).toHaveBeenCalledWith(false);
      });
    });
    it('should mark touched onBlur', () => {
      const wrapper = shallow(<TextComponent type={Types.TEXTFIELD} />);
      expect(wrapper.state('touched')).toBeFalsy();
      wrapper.find('input').simulate('blur');
      expect(wrapper.state('touched')).toBeTruthy();
    });
    it('should chain validators in an array', async () => {
      const promiseAll = jest
        .spyOn(Promise, 'all')
        .mockImplementation(() => Promise.resolve([{ number: true }]));
      const validate = jest.spyOn(TextComponent.prototype, 'validate');
      const wrapper = shallow(
        <TextComponent
          type={Types.TEXTFIELD}
          errors={{ required: 'Required', number: 'Number' }}
          validator={[Validators.Required, Validators.Number]}
        />
      );
      wrapper.find('input').simulate('change', { target: { value: 'test' } });
      await promiseAll;
      await validate;
      wrapper.render();
      expect(wrapper.find('.tk-input__error').text()).toEqual('Number');
    });

    describe('should clear input', () => {
      const tests = [
        {
          title: 'when default value',
          args: {
            defaultValue: 'default value',
            expectedAfterReset: 'default value',
          },
        },
        {
          title: 'when no value',
          args: { defaultValue: undefined, expectedAfterReset: '' },
        },
      ];

      tests.forEach(function (test) {
        it(`${test.title}`, async () => {
          const zone = {
            onChange: () => null,
          };
          jest.spyOn(TextComponent.prototype, 'reset');
          const change = jest.spyOn(zone, 'onChange');
          const wrapper = shallow(
            <TextComponent
              type={Types.TEXTFIELD}
              value={test.args.defaultValue}
              onChange={zone.onChange}
            />
          );
          wrapper
            .find('input')
            .simulate('change', { target: { value: 'test' } });
          let state = wrapper.state();
          expect(state).toEqual(
            expect.objectContaining({
              value: 'test',
              dirty: true,
              touched: false,
            })
          );

          wrapper.instance().reset();
          state = wrapper.state();
          expect(state).toEqual(
            expect.objectContaining({
              value: test.args.expectedAfterReset,
              dirty: false,
              touched: false,
            })
          );
          expect(change).toHaveBeenCalledWith(test.args.expectedAfterReset);
        });
      });
    });
    it('should force validation', async () => {
      const zone = {
        validator: Validators.Required,
      };
      const validator = jest.spyOn(zone, 'validator');
      const validate = jest.spyOn(TextComponent.prototype, 'validate');

      const wrapper = shallow(
        <TextComponent
          type={Types.TEXTFIELD}
          validator={zone.validator}
          errors={{ required: 'Required' }}
        />
      );
      wrapper.instance().refreshValidation();

      await validator;
      await validate;
      wrapper.render();
      expect(wrapper.find('.tk-input__error').text()).toEqual('Required');
    });
  });
});
