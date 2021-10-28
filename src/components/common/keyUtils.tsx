export enum Keys {
  TAB = 'Tab',
  ENTER = 'Enter',
  ESC = 'Escape',
  SPACE = ' ',
  SPACEBAR = 'Spacebar', // Older browsers may return "Spacebar" instead of " " for the Space Bar key. Firefox did so until version 37, as did Internet Explorer 9, 10, and 11.
  PAGE_UP = 'PageUp',
  PAGE_DOWN = 'PageDown',
  HOME = 'Home',
  END = 'End',
  ARROW_LEFT = 'ArrowLeft',
  ARROW_UP = 'ArrowUp',
  ARROW_RIGHT = 'ArrowRight',
  ARROW_DOWN = 'ArrowDown',
  BACKSPACE = 'Backspace',
}

export function cancelEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}

export function getScrollParent(node) {
  if (node == null) {
    return null;
  }

  if (node.scrollHeight > node.clientHeight) {
    return node;
  } else {
    return getScrollParent(node.parentNode);
  }
}
