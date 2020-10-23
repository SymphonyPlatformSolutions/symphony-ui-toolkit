import { addLoopNavigation, removeTabIndex } from '../../../src/components/date-picker/utils/datePickerUtils';

describe('Methods to remove unwanted behaviour of Reac Day Picker', () => {
  //TODO: add expect
  it('addLoopNavigation', () => {
    const elFrom = document.createElement('div');
    elFrom.className = 'from';
    const elNext = document.createElement('div');
    elNext.className = 'next';
    const elPrev = document.createElement('div');
    elPrev.className = 'prev';
    const parent = document.createElement('div');
    parent.appendChild(elFrom);
    parent.appendChild(elNext);
    parent.appendChild(elPrev);
    const ref = {
      current: { dayPicker: parent },
    };

    addLoopNavigation(ref, '.from', '.next', '.to');
  });
  it('addLoopNavigation', () => {
    const parent = document.createElement('div');
    const elChild = document.createElement('div');
    elChild.className = 'something';
    elChild.setAttribute('tabIndex', '0');
    parent.appendChild(elChild);

    const ref = {
      current: { dayPicker: parent },
    };
    expect(elChild.getAttribute('tabIndex')).toBe('0');
    removeTabIndex(ref, '.something');
    expect(elChild.getAttribute('tabIndex')).toBe(null);
  });
});
