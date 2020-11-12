import * as React from 'react';
import { shallow } from 'enzyme';

import {
  handleKeyDownCell,
  handleKeyDownIcon,
  handleKeyDownInput,
  handleKeyDownPicker,
  Keys
} from '../../../src/components/date-picker/utils/keyUtils';

describe('Key Utils', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  function createEvent(props) {
    return {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      ...props,
    };
  }
  const setMethod = jest.fn();
  const setMethod2 = jest.fn();

  function createRef() {
    const cell = document.createElement('div');
    cell.className = 'DayPicker-Day';
    const parent = document.createElement('div');
    parent.appendChild(cell);
    const ref = {
      current: { dayPicker: parent, focus: jest.fn() },
    };
    return ref;
  }

  describe('should handle key down on cell', () => {
    const tests = [
      { key: Keys.PAGE_UP, called: 1 },
      { key: Keys.PAGE_UP, shiftKey: true, called: 1 },
      { key: Keys.PAGE_DOWN, called: 1 },
      { key: Keys.PAGE_DOWN, shiftKey: true, called: 1 },
      { key: Keys.TAB, called: 0 },
    ];
    tests.forEach(function (test) {
      it(`should handle ${test.key} shift=${test.shiftKey} on cell`,  () => {
        const event = createEvent({ key: test.key, shiftKey: test.shiftKey });
        const wrapper = shallow(
          <div onKeyDown={(e) => handleKeyDownCell(new Date(), e, setMethod, setMethod2, ()=>{}, {})} />
        );
        wrapper.simulate('keyDown', event);
        expect(setMethod).toHaveBeenCalledTimes(test.called);
        expect(event.preventDefault).toHaveBeenCalledTimes(test.called);
        expect(event.stopPropagation).toHaveBeenCalledTimes(test.called);
      });
    });
  });

  describe('should handle key down on icon', () => {
    const tests = [
      { key: Keys.TAB, ref: createRef(), showPicker: true, called: 1 },
      {
        key: Keys.TAB,
        ref: {
          current: { dayPicker: document.createElement('div') },
        },
        showPicker: true,
        called: 1,
      },
      { key: Keys.TAB, ref: createRef(), showPicker: false, called: 0 },
      { key: Keys.ENTER, ref: createRef(), showPicker: true, called: 1 },
      { key: Keys.ESC, ref: createRef(), showPicker: true, called: 0 },
    ];
    tests.forEach(function (test) {
      it(`should handle ${test.key} on icon`,  () => {
        const event = createEvent({
          key: test.key,
          target: { click: jest.fn() },
        });
        const ref = test.ref;
        const wrapper = shallow(
          <div onKeyDown={(e) => handleKeyDownIcon(e, test.showPicker, ref)} />
        );
        wrapper.simulate('keyDown', event);
        expect(event.preventDefault).toHaveBeenCalledTimes(test.called);
        expect(event.stopPropagation).toHaveBeenCalledTimes(test.called);
      });
    });
  });

  describe('should handle key down on input', () => {
    const tests = [
      { key: Keys.ESC, called: 1 },
      { key: Keys.ENTER, called: 1 },
      { key: Keys.TAB, called: 0 },
    ];
    tests.forEach(function (test) {
      it(`should handle ${test.key} on input`,  () => {
        const event = createEvent({ key: test.key });
        const wrapper = shallow(
          <div onKeyDown={(e) => handleKeyDownInput(e, setMethod)} />
        );
        wrapper.simulate('keyDown', event);
        expect(setMethod).toHaveBeenCalledTimes(test.called);
        expect(event.preventDefault).toHaveBeenCalledTimes(test.called);
        expect(event.stopPropagation).toHaveBeenCalledTimes(test.called);
      });
    });
  });

  describe('should handle key down on calendar', () => {
    const tests = [
      { key: Keys.ESC, ref: createRef(), called: 1 },
      { key: Keys.ESC, ref: { current: null }, called: 1 },
      { key: Keys.TAB, ref: createRef(), called: 0 },
    ];
    tests.forEach(function (test) {
      it(`should handle ${test.key} on input`,  () => {
        const event = createEvent({ key: test.key });
        const ref = test.ref;

        const wrapper = shallow(
          <div onKeyDown={(e) => handleKeyDownPicker(e, setMethod, ref)} />
        );
        wrapper.simulate('keyDown', event);
        expect(setMethod).toHaveBeenCalledTimes(test.called);
        expect(event.preventDefault).toHaveBeenCalledTimes(test.called);
        expect(event.stopPropagation).toHaveBeenCalledTimes(test.called);
      });
    });
  });

});
