import { shallow } from 'enzyme';
import React from 'react';
import { TextComponent, Types } from '../../../src/components/input/TextComponent';
import { Validators } from '../../../src/core/validators/validators';

describe('TextComponent Component', () => {
  describe('TextComponent test suite => ', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('render a TextField with default props and initial value and test if a input html tag is used', () => {
      const wrapper = shallow(<TextComponent type={Types.TEXTFIELD} value="Test"></TextComponent>);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.hasClass('tk-input-group')).toBe(true);
      expect(wrapper.find('input.tk-input').length).toBe(1);
      expect(wrapper.find('input.tk-input').prop('value')).toEqual('Test');
    });
    it('render a TextArea with default props and initial value and test if a textarea html tag is used', () => {
      const wrapper = shallow(<TextComponent type={Types.TEXTAREA} value="Test"></TextComponent>);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.hasClass('tk-input-group')).toBe(true);
      expect(wrapper.find('textarea.tk-text-area').length).toBe(1);
      expect(wrapper.find('textarea.tk-text-area').prop('value')).toEqual('Test');
    });
    it('extra props are forwarded to the input element', () => {
      const ariaLabel = 'field';
      const wrapper = shallow(<TextComponent type={Types.TEXTFIELD} aria-label={ariaLabel}></TextComponent>);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('input').prop('aria-label')).toEqual(ariaLabel);
    });
    it('if a validator is present no error message appears before touched/modified', async () => {
      const zone = {
        validator: Validators.Required,
      };
      const validator = jest
        .spyOn(zone, 'validator')
        .mockImplementation(() => Promise.resolve({ required: true }));
      const validate = jest.spyOn(TextComponent.prototype, 'validate');

      const wrapper = shallow(
        <TextComponent
          type={Types.TEXTFIELD}
          validator={Validators.Required}
          errors={{ required: 'Required' }}
        ></TextComponent>
      );
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find('.tk-input__error')).toEqual({});
      wrapper.find('input').simulate('change', { target: { value: '' } });
      await validator;
      await validate;
      wrapper.render();
      expect(wrapper.find('.tk-input__error').text()).toEqual('Required');
    });
    it('callbacks should be called on value and validation change', async () => {
      const zone = {
        onChange: () => null,
        onValidationChanged: () => null,
        validator: Validators.Required,
      };
      const change = jest.spyOn(zone, 'onChange');
      const validate = jest.spyOn(TextComponent.prototype, 'validate');
      const valChange = jest.spyOn(zone, 'onValidationChanged');
      const validator = jest
        .spyOn(zone, 'validator')
        .mockImplementation(() => Promise.resolve({ required: true }));
      const wrapper = shallow(
        <TextComponent
          type={Types.TEXTFIELD}
          validator={zone.validator}
          onValidationChanged={zone.onValidationChanged}
          onChange={zone.onChange}
        ></TextComponent>
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
          ></TextComponent>
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
          ></TextComponent>
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
          ></TextComponent>
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
      const wrapper = shallow(<TextComponent type={Types.TEXTFIELD}></TextComponent>);
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
        ></TextComponent>
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
            ></TextComponent>
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
        ></TextComponent>
      );
      wrapper.instance().refreshValidation();

      await validator;
      await validate;
      wrapper.render();
      expect(wrapper.find('.tk-input__error').text()).toEqual('Required');
    });
    it('should display a label if provided', () => {
      const id = 'textfield-1234567890';
      let wrapper = shallow(<TextComponent type={Types.TEXTFIELD}></TextComponent>);
      expect(wrapper.find('label.tk-label').length).toBe(0);
      wrapper = shallow(<TextComponent type={Types.TEXTFIELD} label="LABEL" id={id}></TextComponent>);
      expect(wrapper.find('label.tk-label').text()).toEqual('LABEL');
      expect(wrapper.find(`label[htmlFor="${id}"]`)).toHaveLength(1);
    });
    it('should display a tooltip if provided', () => {
      const tooltipText = 'Tooltip';
      const tooltipCloseLabel = 'Close';
      let wrapper = shallow(<TextComponent type={Types.TEXTFIELD}></TextComponent>);
      expect(wrapper.find('Icon').length).toBe(0);
      wrapper = shallow(
        <TextComponent
          type={Types.TEXTFIELD}
          tooltip={tooltipText}
          tooltipCloseLabel={tooltipCloseLabel}
          placeholder="Firstname"
          value="Lorem"
        ></TextComponent>
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
