export default {
  title: 'Components/Tooltip',
};

export const Tooltip = () => {
  return `
    <div style="min-height: 600px">
      <h2>Tooltip</h2>
        <div id="hint-vZUXsOqChv" role="tooltip" class="tk-tooltip">
            <span class="tk-tooltip__description">
                Tooltip
            </span>
        </div>
        <h3>Tooltip with multiline</h3>
        <div id="hint-vZUXsOqChv" role="tooltip" class="tk-tooltip">
            <span class="tk-tooltip__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </span>
        </div>
      </div>
    `;
};
