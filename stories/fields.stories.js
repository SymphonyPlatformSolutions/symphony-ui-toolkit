export default {
  title: 'Input fields',
};

export const TextField = () => {
  return (`
    <div style="max-width: 600px">
      <h2>Input groups</h2>
        <h3>Default</h3>
          <div class="tk-input-group">
            <label for="input">Field label</label>
            <div class="tk-input-container">
              <input id="input" type="text" class="tk-input" placeholder="Type something..." />
            </div>
            <div class="tk-input-helper">This is a helper.</div>
          </div>
          <div class="tk-input-group">
          <label for="input">Field label</label>
            <div class="tk-input-container">
              <input id="input" type="text" class="tk-input" placeholder="Type something..." />
              <button class="tk-input-hide">Hide</button>
            </div>
            <div class="tk-input-helper">This is a helper.</div>
          </div>
        <h3>Error</h3>
          <div class="tk-input-group tk-input-group--error">
            <label for="input-error">Field label</label>
            <div class="tk-input-container">
              <input id="input-error" type="text" class="tk-input" placeholder="Type something..." />
            </div>
            <div class="tk-input-error">This field is required.</div>
          </div>
        <h3>Disabled</h3>
          <div class="tk-input-group tk-input-group--disabled">
            <label for="input-disabled">Field label</label>
            <div class="tk-input-container">
              <input id="input-disabled" type="text" class="tk-input" placeholder="Type something..." disabled />
            </div>
            <div class="tk-input-helper">This is a helper.</div>
          </div>
      <h2>Without labels</h2>
        <h3>Default</h3>
        <div class="tk-input-container">
          <input type="text" class="tk-input" placeholder="Type something..." />
        </div>
        <h3>Error</h3>
        <div class="tk-input-container">
          <input type="text" class="tk-input tk-input--error" placeholder="Type something..." />
        </div>
        <h3>Disabled</h3>
        <div class="tk-input-container">
          <input type="text" class="tk-input" placeholder="Type something..." disabled />
        </div>
      </div>
    `);
};

export const Select = () => {
  return `<select type="text" class="tk-input" value="Text" style="width:200px">
    <option>Item 1</option>
    <option>Item 2</option>
    <option>Item 3</option>
  </select>`;
};

export const TextArea = () => {
  return (
    `
    <h3>Default</h3>
    <textarea class="tk-input" cols="50" rows="5"></textarea>
    <h3>Error</h3>
    <textarea class="tk-input tk-input--error" cols="50" rows="5"></textarea>
    <h3>Disabled</h3>
    <textarea class="tk-input" cols="50" rows="5" disabled></textarea>`
  );
};
