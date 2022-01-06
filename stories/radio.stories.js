export default {
    title: "Components/Inputs/Radio",
};

export const Radio = () => {
    return `
  <div class="tk-text-color" style="width: 50%;">
    <h1>Radio</h1>
    <div>
        <h2>Active Radio</h2>
        <div class="tk-radio" tabindex="0">
            <div class="tk-radio__inputContainer" tab-index="-1">
                <input id="radio-Z8WAd6dSl" class="tk-radio__input" type="radio" name="active-radio" value="active-radio-1" checked>
                <span class="tk-radio__icon" aria-hidden="true"></span>
            </div>
            <label class="tk-radio__label tk-radio__label--right" for="radio-Z8WAd6dSl" tab-index="-1">Radio</label>
        </div>
        <div class="tk-radio tabindex="0">
            <div class="tk-radio__inputContainer" tab-index="-1">
                <input id="radio-ELnmbr5DtP" class="tk-radio__input" type="radio" name="active-radio" value="active-radio-2">
                <span class="tk-radio__icon" aria-hidden="true"></span>
            </div>
            <label class="tk-radio__label tk-radio__label--right" for="radio-ELnmbr5DtP" tab-index="-1">Radio</label>
        </div>
        
        <h2>Disabled Radio</h2>
        <span class="tk-radio tk-radio--disabled"
            tabindex="0">
            <div class="tk-radio__inputContainer" tab-index="-1">
                <input class="tk-radio__input"
                    type="radio" id="radio-x8ESD33S3W" name="disabled-radio" disabled="" tabindex="-1"
                    value="disabled-radio-1" checked>
                <span class="tk-radio__icon" aria-hidden></span>
            </div>
            <label class="tk-radio__label" for="radio-x8ESD33S3W"
                tabindex="-1">Radio</label>
        </span>
        <span class="tk-radio tk-radio--disabled"
            tabindex="0">
            <div class="tk-radio__inputContainer" tab-index="-1">
                <input class="tk-radio__input"
                    type="radio" id="radio-2rgjiQCh_S" name="disabled-radio" disabled="" tabindex="-1"
                    value="disabled-radio-3">
                <span class="tk-radio__icon" aria-hidden></span>
            </div>
            <label class="tk-radio__label" for="radio-2rgjiQCh_S"
                tabindex="-1">Radio</label>
        </span>
        
        <h2>Radio with focus</h2>
        <p>Add the CSS class '.tk-radio--focus-visible'.</p>
        <span class="tk-radio tk-radio--focus-visible">
            <div class="tk-radio__inputContainer" tab-index="-1">
                <input class="tk-radio__input"
                    type="radio" id="radio-_KdZz3_g72" name="focus-radio" tabindex="-1"
                    value="active-radio-1" checked>
                <span class="tk-radio__icon" aria-hidden></span>
            </div>
            <label class="tk-radio__label" for="radio-_KdZz3_g72" tabindex="-1">Radio with CSS class 'tk-radio--focus-visible'</label>
        </span>
        
        <h2>Label placements</h2>
        <p>The label can be positioned at the <strong>top, right, bottom, left</strong> of the radio</p>
        <div class="d-inline-block">
            <span class="tk-radio tk-radio__labelPlacement--top" tabindex="0">
                <div class="tk-radio__inputContainer" tab-index="-1">
                    <input class="tk-radio__input" type="radio"
                        id="radio-7_oZWaQUH0" name="placement-label" tabindex="-1" value="top">
                    <span class="tk-radio__icon" aria-hidden></span>
                </div>
            <label class="tk-radio__label tk-radio__label--top" for="radio-7_oZWaQUH0" tabindex="-1">Top</label>
            </span>
        </div>
        <div class="d-inline-block">
            <span class="tk-radio tk-radio__labelPlacement--left" tabindex="0">
                <div class="tk-radio__inputContainer" tab-index="-1">
                    <input class="tk-radio__input" type="radio"
                        id="radio-LJE9KbEip4" name="placement-label" tabindex="-1" value="left">
                    <span
                        class="tk-radio__icon" aria-hidden></span>
                </div>
                <label class="tk-radio__label tk-radio__label--left" for="radio-LJE9KbEip4" tabindex="-1">Left</label>
            </span>
        </div>
        <div class="d-inline-block">
            <span class="tk-radio tk-radio__labelPlacement--bottom" tabindex="0">
                <div class="tk-radio__inputContainer" tab-index="-1">
                    <input class="tk-radio__input" type="radio"
                        id="radio-krlkk7ughb" name="placement-label" tabindex="-1" value="bottom">
                    <span class="tk-radio__icon" aria-hidden></span>
                </div>
                <label class="tk-radio__label tk-radio__label--bottom" for="radio-krlkk7ughb"
                    tabindex="-1">bottom</label>
            </span>
        </div>
        <div class="d-inline-block">
            <span class="tk-radio tk-radio__labelPlacement--right" tabindex="0">
                <div class="tk-radio__inputContainer" tab-index="-1">
                    <input class="tk-radio__input" type="radio"
                        id="radio-CjTivG3wCX" name="placement-label" tabindex="-1" value="right">
                    <span class="tk-radio__icon" aria-hidden></span>
                </div>
                <label class="tk-radio__label tk-radio__label--right" for="radio-CjTivG3wCX"
                    tabindex="-1">Right</label>
            </span>
        </div>
    </div>
  </div>
    `;
};
