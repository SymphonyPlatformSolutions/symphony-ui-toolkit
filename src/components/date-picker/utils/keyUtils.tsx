import { addMonths } from 'date-fns';

export const TAB = 'Tab';
export const ENTER = 'Enter';
export const ESC = 'Escape';
export const PAGE_UP = 'PageUp';
export const PAGE_DOWN = 'PageDown';

export function handleKeyDownPicker(e: React.KeyboardEvent<HTMLDivElement>, setShowPicker: (bool) => any, refIcon): void {
  switch (e.key) {
    case ESC:
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
export function handleKeyDownCell(e: React.KeyboardEvent<HTMLDivElement>, setNavigationDate): void {
  switch (e.key) {
    case PAGE_UP:
      e.preventDefault();
      e.stopPropagation();
      setNavigationDate(date => addMonths(date, -1));
      break;
    case PAGE_DOWN:
      e.preventDefault();
      e.stopPropagation();
      setNavigationDate(date => addMonths(date, 1));
      break;
    default:
      break;
  }
}

export function handleKeyDownIcon(e, showPicker: boolean, refPicker): void {
  switch (e.key) {
    case TAB:
      if (!e.shiftKey && showPicker && refPicker.current) {
        e.preventDefault();
        e.stopPropagation();
        refPicker.current.dayPicker
          .querySelector('.DayPicker-Day:not(.DayPicker-Day--outside)')
          .focus();
      }
      break;
    case ENTER:
      e.preventDefault();
      e.stopPropagation();
      e.target.click();
      break;
    default:
      break;
  }
}

export function handleKeyDownInput(e: React.KeyboardEvent<HTMLDivElement>, setShowPicker: (bool) => any): void {
  switch (e.key) {
    case ENTER:
      e.preventDefault();
      e.stopPropagation();
      setShowPicker( showPicker=> !showPicker);
      break;
    case ESC:
      e.preventDefault();
      e.stopPropagation();
      setShowPicker(false);
      break;
    default:
      break;
  }
}
