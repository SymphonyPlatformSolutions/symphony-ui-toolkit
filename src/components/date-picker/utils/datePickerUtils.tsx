export function addLoopNavigation(refPicker, classFrom, classTo): void {
  if (refPicker.current && refPicker.current.dayPicker) {
    const elClassFrom = refPicker.current.dayPicker.querySelector(classFrom);
    elClassFrom.addEventListener('keydown', function (event) {
      if (event.keyCode !== 13) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (event.keyCode === 9) {
        const elClassTo = refPicker.current.dayPicker.querySelector(
          classTo
        );
        elClassTo.focus();
      }
    });
  }
}
