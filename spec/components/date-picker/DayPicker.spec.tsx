import React from 'react';
import { shallow, mount } from 'enzyme';

import { Keys } from '../../../src/components/common/keyUtils';

import DayPicker from '../../../src/components/date-picker/sub-component/DayPicker';
import Header from '../../../src/components/date-picker/sub-component/Header';

import { render, screen, fireEvent } from '@testing-library/react';

describe('DayPicker Component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  function createTestProps(props) {
    return {
      selectedDays: new Date(2020, 0, 1),
      dir: 'ltr',
      labels: {
        previousYear: 'Previous Year',
        nextYear: 'Next Year',
        previousMonth: 'Previous Month',
        nextMonth: 'Next Month',
      },
      todayButton: 'Today',
      onDayClick: jest.fn(),
      onClose: jest.fn(),
      ...props,
    };
  }

  function createKeyboardEvent(props) {
    return {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      ...props,
    };
  }

  it('render with default props does not crash', () => {
    const props = createTestProps({});
    const wrapper = shallow(<DayPicker {...props} />);
    expect(wrapper.length).toEqual(1);
  });

  describe('should trigger onChange', () => {
    test.each([[Keys.ENTER], [Keys.SPACE], [Keys.SPACEBAR]])(
      'on cell with key %p',
      (key) => {
        const props = createTestProps({});
        const wrapper = shallow(<DayPicker {...props} />);
        expect(props.onDayClick).toHaveBeenCalledTimes(0);
        wrapper
          .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
          .at(0)
          .simulate('click');
        expect(props.onDayClick).toHaveBeenCalledTimes(1);
        wrapper
          .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
          .at(0)
          .simulate(
            'keyDown',
            createKeyboardEvent({
              key,
            })
          );
        expect(props.onDayClick).toHaveBeenCalledTimes(2);
      }
    );

    test.each([[Keys.ENTER], [Keys.SPACE], [Keys.SPACEBAR]])(
      'on footer with key %p',
      (key) => {
        const props = createTestProps({});
        const wrapper = shallow(<DayPicker {...props} />);
        expect(props.onDayClick).toHaveBeenCalledTimes(0);
        wrapper.find('.tk-daypicker-today').simulate('click');
        expect(props.onDayClick).toHaveBeenCalledTimes(1);
        wrapper.find('.tk-daypicker-today').simulate(
          'keyDown',
          createKeyboardEvent({
            key,
          })
        );
        expect(props.onDayClick).toHaveBeenCalledTimes(2);
      }
    );
  });

  it('should trigger onClose on ESC', async () => {
    const props = createTestProps({});
    const wrapper = shallow(<DayPicker {...props} />);

    expect(props.onClose).toHaveBeenCalledTimes(0);
    wrapper.simulate('keyDown', createKeyboardEvent({ key: Keys.ESC }));
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  describe('should change month', () => {
    it('on Header click', async () => {
      const props = createTestProps({});
      const wrapper = mount(<DayPicker {...props} />);
      expect(
        wrapper
          .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
          .at(0)
          .prop('aria-label')
      ).toEqual('Wed Jan 01 2020');
      wrapper
        .find(Header)
        .find('.tk-daypicker-header--prevYear')
        .simulate('click');
      wrapper.update();
      expect(
        wrapper
          .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
          .at(0)
          .prop('aria-label')
      ).toEqual('Tue Jan 01 2019');
    });
    test.each([
      [{ key: Keys.PAGE_UP }, 'Sun Dec 01 2019'],
      [{ key: Keys.PAGE_UP, shiftKey: true }, 'Tue Jan 01 2019'],
      [{ key: Keys.PAGE_DOWN }, 'Sat Feb 01 2020'],
      [{ key: Keys.PAGE_DOWN, shiftKey: true }, 'Fri Jan 01 2021'],
    ])('on %p', (event, expected) => {
      const props = createTestProps({});
      render(<DayPicker {...props} />);

      const cell = screen.getByLabelText('Wed Jan 01 2020');
      expect(cell).toBeTruthy();
      fireEvent.keyDown(cell, event);

      const cellExpected = screen.getByLabelText(expected);
      expect(cellExpected).toBeTruthy();
    });
  });

  describe('should change focus', () => {
    it('on TAB navigation', () => {
      const props = createTestProps({ selectedDays: null });
      render(<DayPicker {...props} />);

      const today = screen.getByLabelText(props.todayButton);

      fireEvent.keyDown(today, { key: Keys.TAB });
      expect(document.activeElement).toBe(
        screen.getByLabelText(props.labels.previousYear)
      );

      fireEvent.keyDown(today, { key: Keys.TAB, shiftKey: true });

      fireEvent.keyDown(screen.getByText('1'), {
        key: Keys.TAB,
        shiftKey: true,
      });
      expect(document.activeElement).toBe(
        screen.getByLabelText(props.labels.nextYear)
      );
      fireEvent.keyDown(screen.getByText('1'), { key: Keys.TAB });
      expect(document.activeElement).toBe(
        screen.getByLabelText(props.todayButton)
      );
    });
    it('on ARROWS', async () => {
      const props = createTestProps({});
      render(<DayPicker {...props} />);
      const cell = screen.getByText('1');

      fireEvent.keyDown(cell, { key: 'a' }); // should do nothing
      fireEvent.keyDown(cell, { key: Keys.ARROW_DOWN });
      expect(document.activeElement).toBe(screen.getByText('8'));

      fireEvent.keyDown(document.activeElement, { key: Keys.ARROW_UP });
      expect(document.activeElement).toBe(screen.getByText('1'));

      fireEvent.keyDown(document.activeElement, { key: Keys.ARROW_RIGHT });
      expect(document.activeElement).toBe(screen.getByText('2'));

      fireEvent.keyDown(document.activeElement, { key: Keys.ARROW_LEFT });
      expect(document.activeElement).toBe(screen.getByText('1'));

      fireEvent.keyDown(document.activeElement, { key: Keys.ARROW_LEFT });
      expect(document.activeElement).toBe(screen.getByText('31'));
    });
    it('on ARROWS should skip disabled cells', async () => {
      const props = createTestProps({
        selectedDays: new Date('10-08-2020'),
        disabledDays: [new Date('10-07-2020'), new Date('10-09-2020')],
      });
      render(<DayPicker {...props} />);
      const cell = screen.getByText('8');
      fireEvent.keyDown(cell, { key: Keys.ARROW_RIGHT });
      expect(document.activeElement).toBe(screen.getByText('10'));

      fireEvent.keyDown(cell, { key: Keys.ARROW_LEFT });
      expect(document.activeElement).toBe(screen.getByText('6'));
    });
  });
  it('on TAB against day picker', async () => {
    const props = createTestProps({});
    const wrapper = shallow(<DayPicker {...props} />);

    const cell = wrapper
      .find('.tk-daypicker-day:not(.tk-daypicker-day--outside)')
      .at(0);
    cell.simulate('focus');
    cell.simulate('keyDown', createKeyboardEvent({ key: Keys.TAB }));
  });
  it('on HOME', async () => {
    const props = createTestProps({});
    render(<DayPicker {...props} />);
    const cell = screen.getByText('8');

    fireEvent.keyDown(cell, { key: Keys.HOME });
    const cell5 = screen.getByText('5');
    expect(document.activeElement).toBe(cell5);
  });
  it('on END', async () => {
    const props = createTestProps({});
    render(<DayPicker {...props} />);
    const cell = screen.getByText('8');

    fireEvent.keyDown(cell, { key: Keys.END });
    const cell11 = screen.getByText('11');

    expect(document.activeElement).toBe(cell11);
  });
  it('should change the navigation month when prop changes', async () => {
    const props = createTestProps({});
    const { rerender } = render(<DayPicker {...props} />);
    rerender(
      <DayPicker {...createTestProps({ month: new Date(2020, 1, 1) })} />
    );
    expect(screen.getByText('February 2020')).toBeTruthy();
  });

  it('should handle ARROW with previous cells until previous month', async () => {
    const props = createTestProps({
      disabledDays: { from: new Date(2019, 11, 25), to: new Date(2020, 0, 1) },
      selectedDays: new Date(2020, 0, 2),
    });
    render(<DayPicker {...props} />);

    fireEvent.keyDown(screen.getByText('2'), { key: Keys.ARROW_LEFT });
    expect(document.activeElement).toBe(screen.getByText('24'));
  });
  it('should handle ARROW but whole previous month disabled', async () => {
    const props = createTestProps({
      disabledDays: { from: new Date(2019, 11, 1), to: new Date(2020, 0, 1) },
      selectedDays: new Date(2020, 0, 2),
    });
    render(<DayPicker {...props} />);

    fireEvent.keyDown(screen.getByText('2'), { key: Keys.ARROW_LEFT });
    expect(document.activeElement).toBe(screen.getByText('1'));
  });
  it('ARROW LEFT but current month disabled', async () => {
    const props = createTestProps({
      disabledDays: { from: new Date(2019, 11, 1), to: new Date(2020, 0, 31) },
      selectedDays: new Date(2020, 0, 1),
    });
    render(<DayPicker {...props} />);

    fireEvent.keyDown(screen.getByText('1'), { key: Keys.ARROW_LEFT });
    expect(document.activeElement).toBe(screen.getByText('1'));
  });
});
