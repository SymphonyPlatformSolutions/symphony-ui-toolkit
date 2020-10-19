import { addMonths } from 'date-fns';

export enum Keys {
  TAB = 'Tab',
  ENTER = 'Enter',
  ESC = 'Escape',
  PAGE_UP = 'PageUp',
  PAGE_DOWN = 'PageDown',
}

export function handleKeyDownCell(
  e: React.KeyboardEvent<HTMLDivElement>,
  setNavigationDate: (date) => any
): void {
  switch (e.key) {
    case Keys.PAGE_UP:
      e.preventDefault();
      e.stopPropagation();
      setNavigationDate((date) => addMonths(date, -1));
      break;
    case Keys.PAGE_DOWN:
      e.preventDefault();
      e.stopPropagation();
      setNavigationDate((date) => addMonths(date, 1));
      break;
    default:
      break;
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
