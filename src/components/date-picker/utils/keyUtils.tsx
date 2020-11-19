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

