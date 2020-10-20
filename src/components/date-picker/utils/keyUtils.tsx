import { addMonths, addYears, endOfWeek, getDaysInMonth, setDate, startOfWeek } from 'date-fns';

import { daysNeededForLastMonth } from './dateUtils';

export enum Keys {
  TAB = 'Tab',
  ENTER = 'Enter',
  ESC = 'Escape',
  PAGE_UP = 'PageUp',
  PAGE_DOWN = 'PageDown',
  HOME = 'Home',
  END = 'End',
}

export function handleKeyDownCell(
  date: Date,
  e: React.KeyboardEvent<HTMLDivElement>,
  setNavigationDate: (date) => any,
  setDivToFocus: (date) => any,
  focusDiv: (date) => any,
  locale
): void {
  let dayToFocus;
  switch (e.key) {
    case Keys.PAGE_UP:
      if (e.shiftKey) {
        dayToFocus = addYears(date, -1);
      } else {
        dayToFocus = addMonths(date, -1);
      }
      break;
    case Keys.PAGE_DOWN:
      if (e.shiftKey) {
        dayToFocus = addYears(date, 1);
      } else {
        dayToFocus = addMonths(date, 1);
      }
      break;
    case Keys.HOME:
      const firstDayOfWeek = startOfWeek(date, { locale });
      dayToFocus = firstDayOfWeek.getDate() <= date.getDate() ? firstDayOfWeek: setDate(date, 1);
      break;
    case Keys.END:
      dayToFocus = endOfWeek(date, { locale });
      break;
    default:
      break;
  }

  // Focus cell after PAGE_UP or PAGE_DOWN (it is custom logic so it is not handled by the library)
  if (e.key === Keys.PAGE_UP || e.key === Keys.PAGE_DOWN) {
    setNavigationDate(dayToFocus);
    
    e.preventDefault();
    e.stopPropagation();

    const minBound = daysNeededForLastMonth(dayToFocus, locale);
    const indexToFocus = dayToFocus.getDate() + daysNeededForLastMonth(date, locale);
    // if dayToFocus is an "outside day", focus a day in bound. (first or last day)
    const value = Math.min(Math.max(minBound + 1, indexToFocus), minBound + getDaysInMonth(dayToFocus))
    
    setDivToFocus({ value });
  } else if (e.key === Keys.HOME || e.key === Keys.END) {
    e.preventDefault();
    e.stopPropagation();

    const minBound = daysNeededForLastMonth(dayToFocus, locale);
    focusDiv({ value: dayToFocus.getDate() + minBound })
  }
}

export function handleKeyDownIcon(
  e,
  showPicker: boolean,
  ref: React.MutableRefObject<any>
): void {
  switch (e.key) {
    case Keys.TAB:
      if (!e.shiftKey && showPicker && ref.current && ref.current.dayPicker) {
        e.preventDefault();
        e.stopPropagation();
        const elCell = ref.current.dayPicker.querySelector(
          '.DayPicker-Day:not(.DayPicker-Day--outside)'
        );
        if (elCell) {
          elCell.focus();
        }
      }
      break;
    case Keys.ENTER:
      e.preventDefault();
      e.stopPropagation();
      e.target.click();
      break;
    default:
      break;
  }
}

export function handleKeyDownInput(
  e: React.KeyboardEvent<HTMLDivElement>,
  setShowPicker: (bool) => any
): void {
  switch (e.key) {
    case Keys.ENTER:
      e.preventDefault();
      e.stopPropagation();
      setShowPicker((showPicker) => !showPicker);
      break;
    case Keys.ESC:
      e.preventDefault();
      e.stopPropagation();
      setShowPicker(false);
      break;
    default:
      break;
  }
}

export function handleKeyDownPicker(
  e: React.KeyboardEvent<HTMLDivElement>,
  setShowPicker: (bool) => any,
  refIcon
): void {
  switch (e.key) {
    case Keys.ESC:
      setShowPicker(false);
      e.preventDefault();
      e.stopPropagation();
      if (refIcon.current) {
        refIcon.current.focus();
      }
      break;
    default:
      break;
  }
}
