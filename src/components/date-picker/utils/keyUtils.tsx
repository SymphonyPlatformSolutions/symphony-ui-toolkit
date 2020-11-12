export enum Keys {
  TAB = 'Tab',
  ENTER = 'Enter',
  ESC = 'Escape',
  PAGE_UP = 'PageUp',
  PAGE_DOWN = 'PageDown',
  HOME = 'Home',
  END = 'End',
  ARROW_LEFT = 'ArrowLeft',
  ARROW_UP = 'ArrowUp',
  ARROW_RIGHT = 'ArrowRight',
  ARROW_DOWN = 'ArrowDown',
}

export function cancelEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}

export function handleKeyDownIcon(
  e,
  showPicker: boolean,
  ref: React.MutableRefObject<any>,
  handleOnClose
): void {
  switch (e.key) {
    case Keys.TAB:
      if (!e.shiftKey && showPicker && ref.current && ref.current.dayPicker) {
        cancelEvent(e);
        const elCell = ref.current.dayPicker.querySelector(
          '.tk-daypicker-day[tabindex="0"]'
        );
        if (elCell) {
          elCell.focus();
        }
      }
      break;
    case Keys.ENTER:
      cancelEvent(e);
      e.target.click();
      break;
    case Keys.ESC:
      cancelEvent(e);
      handleOnClose();
      break;
    default:
      break;
  }
}

export function handleKeyDownInput(
  e: React.KeyboardEvent,
  setShowPicker: (bool) => any
): void {
  switch (e.key) {
    case Keys.ENTER:
      cancelEvent(e);
      setShowPicker((showPicker) => !showPicker);
      break;
    case Keys.ESC:
      cancelEvent(e);
      setShowPicker(false);
      break;
    default:
      break;
  }
}
