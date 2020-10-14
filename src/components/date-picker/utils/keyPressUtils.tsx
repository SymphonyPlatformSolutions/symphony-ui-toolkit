export function handleKeyDownPicker(e, setShowPicker: (bool) => any, refIcon): void {
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

export function handleKeyDownInput(e, showPicker: boolean, setShowPicker: (bool) => any): void {
  switch (e.keyCode) {
    case 13:
      e.preventDefault();
      e.stopPropagation();
      setShowPicker(!showPicker);
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
