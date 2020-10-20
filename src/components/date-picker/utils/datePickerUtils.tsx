import { Keys } from './keyUtils';

/**
 * Change the behaviour of 'Tab' and 'Shift + Tab' event of an html element
 * Used to allow loop navigation "cells -> 'Today Button' --> Header (<<)"
 * @param ref The html element where is done the querySelector
 * @param classFrom The html class to attach the 'Tab' event
 * @param classNext The html class to focus on 'Tab' event
 * @param classPrev The html class to focus on 'Shift + Tab' event
 */
export function addLoopNavigation(
  ref: React.MutableRefObject<any>,
  classFrom: string,
  classNext: string,
  classPrev: string
): void {
  if (ref.current && ref.current.dayPicker) {
    const elClassFrom = ref.current.dayPicker.querySelector(classFrom);
    elClassFrom.addEventListener('keydown', function (
      event: React.KeyboardEvent<HTMLDivElement>
    ) {
      // Only let 'Enter' event propagate
      if (event.key !== Keys.ENTER) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (event.key === Keys.TAB) {
        event.preventDefault();
        event.stopPropagation();
        if (event.shiftKey) {
          // On Shift+Tab, focus the 'classPrev' element
          const elClassPrevious = ref.current.dayPicker.querySelector(
            classPrev
          );
          elClassPrevious.focus();
        } else {
          // On Tab, focus the 'classNext' element
          const elClassNext = ref.current.dayPicker.querySelector(classNext);
          elClassNext.focus();
        }
      }
    });
  }
}

/**
 * 
 * Change the behaviour of 'Tab' and 'Shift + Tab' event of an html element
 * Used to allow loop navigation "'Today Button' --> Header (<<) --> Header (<)"
 * @param event 
 * @param ref The html element where is done the querySelector
 * @param classNext The html class to focus on 'Tab' event
 * @param classPrev The html class to focus on 'Shift + Tab' event
 */
export function ajustLoopNavigation(
  event,
  ref: React.MutableRefObject<any>,
  classNext: string,
  classPrev: string
) {
  if (event.key === Keys.TAB) {
    event.preventDefault();
    event.stopPropagation();
    if (event.shiftKey) {
      const elClassPrevious = ref.current.dayPicker.querySelector(classPrev);
      elClassPrevious.focus();
    } else {
      const elClassNext = ref.current.dayPicker.querySelector(classNext);
      elClassNext.focus();
    }
  }
}

/**
 * For example, remove the unwanted tabIndex on '.DayPicker-wrapper'
 * @param ref The html element where is done the querySelector
 * @param elClass The html class to remove the tabIndex attribute
 */
export function removeTabIndex(ref: React.MutableRefObject<any>, elClass) {
  if (ref.current && ref.current.dayPicker) {
    ref.current.dayPicker.querySelector(elClass).removeAttribute('tabindex');
  }
}
