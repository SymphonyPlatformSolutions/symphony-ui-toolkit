export default {
    title: 'Tooltip',
};

export const Tooltip = () => {
    return (`
    <div style="min-height: 600px">
      <h2>Tooltip</h2>
        <div id="hint-vZUXsOqChv" role="tooltip" class="tk-tooltip" style="max-width: 400px; position: relative">
            <span class="tk-tooltip__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            <div style="position: absolute; left: calc(50% - 10px); bottom: -32px;">
                <div class="tk-tooltip__arrow" style="transform: rotate(45deg);"></div>       
            </div>
            <div class="tk-tooltip__footer">
                <span class="tk-tooltip__close" style="cursor: pointer">Got it</span>
            </div>
        </div>
      </div>
    `);
};
