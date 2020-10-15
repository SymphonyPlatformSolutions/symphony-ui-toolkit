import { addMonths } from 'date-fns';

export function handleKeyDownPicker(e: React.KeyboardEvent<HTMLDivElement>, setShowPicker: (bool) => any, refIcon): void {
  switch (e.keyCode) {
    case 27:
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
  switch (e.keyCode) {
    case 33:
      e.preventDefault();
      e.stopPropagation();
      setNavigationDate(date => addMonths(date, -1));
      break;
    case 34:
      e.preventDefault();
      e.stopPropagation();
      setNavigationDate(date => addMonths(date, 1));
      break;
    default:
      break;
  }
}

export function handleKeyDownIcon(e, showPicker: boolean, refPicker): void {
  switch (e.keyCode) {
    case 9:
      if (!e.shiftKey && showPicker && refPicker.current) {
        e.preventDefault();
        e.stopPropagation();
        refPicker.current.dayPicker
          .querySelector('.DayPicker-Day:not(.DayPicker-Day--outside)')
          .focus();
      }
      break;
    case 13:
      e.preventDefault();
      e.stopPropagation();
      e.target.click();
      break;
    default:
      break;
  }
}

export function handleKeyDownInput(e: React.KeyboardEvent<HTMLDivElement>, setShowPicker: (bool) => any): void {
  switch (e.keyCode) {
    case 13:
      e.preventDefault();
      e.stopPropagation();
      setShowPicker( showPicker=> !showPicker);
      break;
    case 27:
      e.preventDefault();
      e.stopPropagation();
      setShowPicker(false);
      break;
    default:
      break;
  }
}
