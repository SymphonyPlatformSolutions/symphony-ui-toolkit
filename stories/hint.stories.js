export default {
  title: 'Hint',
};

export const Hint = () => {
  return (`
  <div style="min-height: 600px">
    <h2>Hint</h2>
      <div id="hint-vZUXsOqChv" role="hint" class="tk-hint" style="max-width: 400px; position: relative">
          <span class="tk-hint__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          <div style="position: absolute; left: calc(50% - 10px); bottom: -32px;">
              <div class="tk-hint__arrow" style="transform: rotate(45deg);"></div>       
          </div>
          <div class="tk-hint__footer">
              <span class="tk-hint__close" style="cursor: pointer">Got it</span>
          </div>
      </div>
    </div>
  `);
};