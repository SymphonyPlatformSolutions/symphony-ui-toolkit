export default {
  title: 'Input fields',
};

export const Input = () => {
  return (
    '<input type="text" class="tk-input" value="Text" /><br><br>' +
    '<input type="text" class="tk-input tk-input--success" value="Text" /><br><br>' +
    '<input type="text" class="tk-input tk-input--warning" value="Text" /><br><br>' +
    '<input type="text" class="tk-input tk-input--error" value="Text" />'
  );
};

export const Select = () => {
  return `<select type="text" class="tk-input" value="Text" style="width:200px">
    <option>Item 1</option>
    <option>Item 2</option>
    <option>Item 3</option>
  </select>`;
};

export const TextArea = () => `<textarea class="tk-input" cols="50" rows="10"></textarea>`;
