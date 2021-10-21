export default {
    title: 'Components/Inputs/Switch',
};

export const Switch = () => {
    return `
  <div class="tk-text-color" style="width: 50%;">
    <h1>Switch</h1>
        <h2>Active Switch</h2>
        <span class="tk-switch" tabindex="0">
          <div class="tk-switch__inputContainer" tab-index="-1">
              <input class="tk-switch__input"
                  type="checkbox" id="switch-_KdZz3_g72" name="active-switch" tabindex="-1"
                  value="active-switch-1" checked>
              <span class="tk-switch__icon" aria-hidden></span>
          </div>
          <label class="tk-switch__label" for="switch-_KdZz3_g72" tabindex="-1">Switch 'checked'</label>
        </span>
        <span class="tk-switch" tabindex="0">
            <div class="tk-switch__inputContainer" tab-index="-1">
                <input class="tk-switch__input"
                    type="checkbox" id="switch-rWqEZbrVP1" name="active-switch" tabindex="-1"
                    value="active-switch-3">
                <span class="tk-switch__icon" aria-hidden></span>
            </div>
            <label class="tk-switch__label" for="switch-rWqEZbrVP1"
                tabindex="-1">Switch by default</label>
        </span>
        <h2>Disabled Switch</h2>
        <span class="tk-switch tk-switch--disabled"
            tabindex="0">
            <div class="tk-switch__inputContainer" tab-index="-1">
                <input class="tk-switch__input"
                    type="checkbox" id="switch-x8ESD33S3W" name="disabled-switch" disabled="" tabindex="-1"
                    value="disabled-switch-1" checked>
                <span class="tk-switch__icon" aria-hidden></span>
            </div>
            <label class="tk-switch__label" for="switch-x8ESD33S3W"
                tabindex="-1">Switch</label>
        </span>
        <span class="tk-switch tk-switch--disabled"
            tabindex="0">
            <div class="tk-switch__inputContainer" tab-index="-1">
                <input class="tk-switch__input"
                    type="checkbox" id="switch-2rgjiQCh_S" name="disabled-switch" disabled="" tabindex="-1"
                    value="disabled-switch-3">
                <span class="tk-switch__icon" aria-hidden></span>
            </div>
            <label class="tk-switch__label" for="switch-2rgjiQCh_S"
                tabindex="-1">Switch</label>
        </span>
        <h2>Switch with focus</h2>
        <p>Add the CSS class '.tk-switch--focus-visible'.</p>
        <span class="tk-switch tk-switch--focus-visible" tabindex="0">
            <div class="tk-switch__inputContainer" tab-index="-1">
                <input class="tk-switch__input" type="checkbox"
                    id="switch-7_withClass" name="focus-label" tabindex="-1" value="top" checked autofocus>
                <span class="tk-switch__icon" aria-hidden></span>
            </div>
            <label class="tk-switch__label" for="switch-7_azerty" tabindex="-1">Switch with CSS class 'tk-switch--focus-visible'</label>
        </span>
        <h2>Label placements</h2>
        <p>The label can be positioned at the <strong>top, right, bottom, left</strong> of the switch</p>
        <div class="d-inline-block">
            <span class="tk-switch tk-switch__labelPlacement--top" tabindex="0">
                <div class="tk-switch__inputContainer" tab-index="-1">
                    <input class="tk-switch__input" type="checkbox"
                        id="switch-7_oZWaQUH0" name="placement-label" tabindex="-1" value="top">
                    <span class="tk-switch__icon" aria-hidden></span>
                </div>
            <label class="tk-switch__label tk-switch__label--top" for="switch-7_oZWaQUH0" tabindex="-1">Top</label>
            </span>
        </div>
        <div class="d-inline-block">
            <span class="tk-switch tk-switch__labelPlacement--left" tabindex="0">
                <div class="tk-switch__inputContainer" tab-index="-1">
                    <input class="tk-switch__input" type="checkbox"
                        id="switch-LJE9KbEip4" name="placement-label" tabindex="-1" value="left">
                    <span
                        class="tk-switch__icon" aria-hidden></span>
                </div>
                <label class="tk-switch__label tk-switch__label--left" for="switch-LJE9KbEip4" tabindex="-1">Left</label>
            </span>
        </div>
        <div class="d-inline-block">
            <span class="tk-switch tk-switch__labelPlacement--bottom" tabindex="0">
                <div class="tk-switch__inputContainer" tab-index="-1">
                    <input class="tk-switch__input" type="checkbox"
                        id="switch-krlkk7ughb" name="placement-label" tabindex="-1" value="bottom">
                    <span class="tk-switch__icon" aria-hidden></span>
                </div>
                <label class="tk-switch__label tk-switch__label--bottom" for="switch-krlkk7ughb"
                    tabindex="-1">bottom</label>
            </span>
        </div>
        <div class="d-inline-block">
            <span class="tk-switch tk-switch__labelPlacement--right" tabindex="0">
                <div class="tk-switch__inputContainer" tab-index="-1">
                    <input class="tk-switch__input" type="checkbox"
                        id="switch-CjTivG3wCX" name="placement-label" tabindex="-1" value="right">
                    <span class="tk-switch__icon" aria-hidden></span>
                </div>
                <label class="tk-switch__label tk-switch__label--right" for="switch-CjTivG3wCX"
                    tabindex="-1">Right</label>
            </span>
        </div>
    </div>
  </div>
    `;
};
