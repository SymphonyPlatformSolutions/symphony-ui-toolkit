export default {
  title: 'Components/Inputs',
};

export const TextField = () => {
  return `
  <div style="max-width: 600px">
  <h1>Text Fields</h1>
  <h2>Simple Text Field</h2>
  <h3>Default</h3>
  <input type="text" class="tk-input" placeholder="Type something..." />
  <div class="tk-mt-2"></div>
  <input
    type="text"
    class="tk-input tk-input--small"
    placeholder="Type something..."
  />
  <h3>Error</h3>
  <span class="tk-validation tk-validation--error">
    <input
      type="text"
      class="tk-input tk-input--error"
      placeholder="Type something..."
    />
    <ul class="tk-validation__errors">
      <li><i class="tk-icon-alert-triangle"></i>This field is required.</li>
    </ul>
  </span>
  <div class="tk-mt-2"></div>
    <span class="tk-validation tk-validation--small tk-validation--error">
      <input
        type="text"
        class="tk-input tk-input--small tk-input--error"
        placeholder="Type something..."
      />
      <ul class="tk-validation__errors">
        <li><i class="tk-icon-alert-triangle"></i>This field is required.</li>
      </ul>

    </span>
  <h3>Read Only</h3>
    <input
    type="text"
    class="tk-input"
    placeholder="Type something..."
    value="Lorem Ipsum"
    readonly
  />
  <div class="tk-mt-2"></div>
    <input
    type="text"
    class="tk-input tk-input--small"
    placeholder="Type something..."
    value="Lorem Ipsum"
    readonly
  /> 
  <h3>Disabled</h3>
  <input
    type="text"
    class="tk-input"
    placeholder="Type something..."
    disabled
  />
  <div class="tk-mt-2"></div>
  <input
    type="text"
    class="tk-input tk-input--small"
    placeholder="Type something..."
    disabled
  />
  <h2>Text Field with icon</h2>
  <h3>Default</h3>
  <div class="tk-input__container">
    <input
      id="input2"
      type="text"
      class="tk-input tk-input--with-icon"
      placeholder="Type something..."
    />
    <div class="tk-input__icon">
        <i class="tk-icon-people"></i>
      </div>
    </div>
    <div class="tk-mt-2"></div>
    <div class="tk-input__container tk-input__container--small">
    <input
      id="input2"
      type="text"
      class="tk-input tk-input--small tk-input--with-icon"
      placeholder="Type something..."
    />
    <div class="tk-input__icon">
    <i class="tk-icon-people"></i>
  </div>
</div>
  <div class="tk-mt-4"></div>
  <div class="tk-input__container tk-input__container--medium"><input class="tk-input tk-input--medium" type="text" value="Lorem Ipsum"><span class="tk-input__right-decorators"><span style="align-self: center;"><i class="tk-icon-copy"></i></span><span style="align-self: center;"><i class="tk-icon-search"></i></span></span></div>
  <div class="tk-mt-2"></div>
  <div class="tk-input__container tk-input__container--small"><input class="tk-input tk-input--small" type="text" value="Lorem Ipsum"><span class="tk-input__right-decorators"><span style="align-self: center;"><i class="tk-icon-copy"></i></span><span style="align-self: center;"><i class="tk-icon-search"></i></span></span></div>
  <div class="tk-mt-4"></div>
  <div class="tk-input__container tk-input__container--medium"><input class="tk-input tk-input--medium" type="text" value="Lorem Ipsum"><button class="tk-input__hide" tabindex="0">HIDE</button></div>
  <div class="tk-mt-2"></div>
  <div class="tk-input__container tk-input__container--small"><input class="tk-input tk-input--small" type="text" value="Lorem Ipsum"><button class="tk-input__hide" tabindex="0">HIDE</button></div>
  
  <h3>Error</h3>
  <span class="tk-validation tk-validation--error">
    <div class="tk-input__container">
      <input
        id="input3"
        type="text"
        class="tk-input tk-input--with-icon"
        placeholder="Type something..."
      />
      <div class="tk-input__icon">
        <i class="tk-icon-people"></i>
      </div>
    </div>
    <ul class="tk-validation__errors">
    <li><i class="tk-icon-alert-triangle"></i>This field is required.</li>
  </ul>

  </span>
  <div class="tk-mt-2"></div>
  <span class="tk-validation tk-validation--small tk-validation--error">
    <div class="tk-input__container tk-input__container--small">
      <input
        id="input3"
        type="text"
        class="tk-input tk-input--error tk-input--small tk-input--with-icon"
        placeholder="Type something..."
      />
      <div class="tk-input__icon">
        <i class="tk-icon-people"></i>
      </div>
    </div>
    <ul class="tk-validation__errors">
    <li><i class="tk-icon-alert-triangle"></i>This field is required.</li>
  </ul>

  </span>
  <h3>Read Only</h3>
  <div class="tk-input__container tk-input__container--readonly">
    <input
      id="input4"
      type="text"
      class="tk-input tk-input--with-icon"
      placeholder="Type something..."
      value="Lorem Ipsum"
      readonly
    />
    <div class="tk-input__icon">
      <i class="tk-icon-people"></i>
    </div>
  </div>
  <div class="tk-mt-2"></div>
  <div class="tk-input__container tk-input__container--small tk-input__container--readonly">
    <input
      id="input4"
      type="text"
      class="tk-input tk-input--small tk-input--with-icon"
      placeholder="Type something..."
      value="Lorem Ipsum"
      readonly
    />
    <div class="tk-input__icon">
      <i class="tk-icon-people"></i>
    </div>
  </div>

  <div class="tk-mt-2"></div>
  <div class="tk-input__container tk-input__container--medium tk-input__container--readonly"><input id="tk-input-pR75IzxQpPd" aria-autocomplete="none" aria-multiline="false" class="tk-input tk-input--medium" readonly="" type="text" value="Lorem Ipsum"><button class="tk-input__hide" tabindex="0">HIDE</button></div>
  <div class="tk-mt-2"></div>
  <div class="tk-input__container tk-input__container--small tk-input__container--readonly"><input id="tk-input-pR75IzxQpPd" aria-autocomplete="none" aria-multiline="false" class="tk-input tk-input--small" readonly="" type="text" value="Lorem Ipsum"><button class="tk-input__hide" tabindex="0">HIDE</button></div>

  <h3>Disabled</h3>

  <div class="tk-input__container tk-input__container--disabled">
    <input
      id="input4"
      type="text"
      class="tk-input tk-input--with-icon"
      placeholder="Type something..."
      disabled
    />
    <div class="tk-input__icon">
      <i class="tk-icon-people"></i>
    </div>
  </div>
  <div class="tk-mt-2"></div>
  <div class="tk-input__container tk-input__container--small tk-input__container--disabled">
    <input
      id="input4"
      type="text"
      class="tk-input tk-input--small tk-input--with-icon"
      placeholder="Type something..."
      disabled
    />
    <div class="tk-input__icon">
      <i class="tk-icon-people"></i>
    </div>
  </div>

  <h2>Text Field with label</h2>
  <div class="tk-input-group">
    <div class="tk-input-group__header">
      <label class="tk-label" for="input">Field label</label>
    </div>
    <div class="tk-input__container">
      <input
        id="input"
        type="text"
        class="tk-input"
        placeholder="Type something..."
      />
    </div>
    <div class="tk-input__helper">This is a helper.</div>
  </div>

  <div class="tk-mt-2"></div>
  <div class="tk-input-group tk-input-group--small">
    <div class="tk-input-group__header">
      <label class="tk-label" for="input">Field label</label>
    </div>
    <div class="tk-input__container tk-input__container--small">
      <input
        id="input"
        type="text"
        class="tk-input tk-input--small"
        placeholder="Type something..."
      />
    </div>
    <div class="tk-input__helper">This is a helper.</div>
  </div>

  <div class="tk-mt-2"></div>
  <div class="tk-input-group">
    <div class="tk-input-group__header">
      <label class="tk-label tk-label--required" for="input">Field label</label>
    </div>
    <div class="tk-input__container">
      <input
        id="input2"
        type="text"
        class="tk-input tk-input--with-icon"
        placeholder="Type something..."
      />
      <div class="tk-input__icon">
        <i class="tk-icon-people"></i>
      </div>
    </div>
  </div>
  <div class="tk-mt-2"></div>
  <div class="tk-input-group tk-input-group--small">
    <div class="tk-input-group__header">
      <label class="tk-label tk-label--required" for="input">Field label</label>
    </div>
    <div class="tk-input__container tk-input__container--small">
      <input
        id="input2"
        type="text"
        class="tk-input tk-input--small tk-input--with-icon"
        placeholder="Type something..."
      />
      <div class="tk-input__icon">
        <i class="tk-icon-people"></i>
      </div>
    </div>
  </div>
  <h3>Error</h3>
  <span class="tk-validation tk-validation--error">
    <div class="tk-input-group">
      <div class="tk-input-group__header">
        <label class="tk-label" for="input-error">Field label</label>
      </div>
      <div class="tk-input__container">
        <input
          id="input-error"
          type="text"
          class="tk-input"
          placeholder="Type something..."
        />
      </div>
      </div>
      <ul class="tk-validation__errors">
        <li><i class="tk-icon-alert-triangle"></i>This field is required.</li>
      </ul>
  </span>
  <div class="tk-mt-2"></div>
  <span class="tk-validation tk-validation--small tk-validation--error">
    <div class="tk-input-group tk-input-group--small">
      <div class="tk-input-group__header">
        <label class="tk-label" for="input-error">Field label</label>
      </div>
      <div class="tk-input__container tk-input__container--small">
        <input
          id="input-error"
          type="text"
          class="tk-input tk-input--small"
          placeholder="Type something..."
        />
      </div>
      </div>
      <ul class="tk-validation__errors">
        <li><i class="tk-icon-alert-triangle"></i>This field is required.</li>
      </ul>
  </span>
  <h3>Read Only</h3>
  <div class="tk-input-group tk-input-group--readonly">
  <div class="tk-input-group__header">
    <label class="tk-label" for="input-readonly">Field label</label>
  </div>
    <div class="tk-input__container tk-input__container--readonly">
      <input
        id="input-readonly"
        type="text"
        class="tk-input"
        value="Lorem Ipsum"
        readonly
      />
    </div>
    <div class="tk-input__helper">This is a helper.</div>
  </div>
  <div class="tk-mt-2"></div>
  <div class="tk-input-group tk-input-group--small tk-input-group--readonly">
    <div class="tk-input-group__header">
      <label class="tk-label" for="input-readonly">Field label</label>
    </div>
    <div class="tk-input__container tk-input__container--small tk-input__container--readonly">
      <input
        id="input-readonly"
        type="text"
        class="tk-input tk-input--small"
        value="Lorem Ipsum"
        readonly
      />
    </div>
    <div class="tk-input__helper">This is a helper.</div>
  </div>
  <h3>Disabled</h3>
  <div class="tk-input-group tk-input-group--disabled">
  <div class="tk-input-group__header">
    <label class="tk-label tk-label--disabled" for="input-disabled"
      >Field label</label
    >
    </div>
    <div class="tk-input__container tk-input__container--small tk-input__container--disabled">
      <input
        id="input-disabled"
        type="text"
        class="tk-input"
        value="Lorem Ipsum"
        disabled
      />
    </div>
    <div class="tk-input__helper">This is a helper.</div>
  </div>
  <div class="tk-mt-2"></div>
  <div class="tk-input-group tk-input-group--small tk-input-group--disabled">
    <div class="tk-input-group__header">
    <label class="tk-label tk-label--disabled" for="input-disabled"
      >Field label</label
    >
    </div>
    <div class="tk-input__container tk-input__container--small tk-input__container--disabled">
      <input
        id="input-disabled"
        type="text"
        class="tk-input tk-input--small"
        value="Lorem Ipsum"
        disabled
      />
    </div>
    <div class="tk-input__helper">This is a helper.</div>
  </div>
  <h2>Text Field with label and icon</h2>
  <div class="tk-input-group">
    <div class="tk-input-group__header">
      <label class="tk-label tk-label--required" for="input">Field label</label>
    </div>
    <div class="tk-input__container">
      <input
        id="input2"
        type="text"
        class="tk-input tk-input--with-icon"
        placeholder="Type something..."
      />
      <div class="tk-input__icon">
        <i class="tk-icon-calendar"></i>
      </div>
    </div>
  </div>
  <div class="tk-mt-2"></div>
  <div class="tk-input-group tk-input-group--small">
    <div class="tk-input-group__header">
      <label class="tk-label tk-label--required" for="input">Field label</label>
    </div>
    <div class="tk-input__container tk-input__container--small">
      <input
        id="input2"
        type="text"
        class="tk-input tk-input--small tk-input--with-icon"
        placeholder="Type something..."
      />
      <div class="tk-input__icon">
        <i class="tk-icon-calendar"></i>
      </div>
    </div>
  </div>
  <h3>Error</h3>
  <span class="tk-validation tk-validation--error">
    <div class="tk-input-group">
    <div class="tk-input-group__header">
      <label class="tk-label tk-label--required" for="input-error"
        >Field label</label
      >
      </div>
      <div class="tk-input__container">
        <input
          id="input-error"
          type="text"
          class="tk-input"
          placeholder="Type something..."
        />
        <div class="tk-input__icon">
          <i class="tk-icon-calendar"></i>
        </div>
      </div>
      </div>
      <ul class="tk-validation__errors">
        <li><i class="tk-icon-alert-triangle"></i>This field is required.</li>
      </ul>
  </span>
  <div class="tk-mt-2"></div>
  <span class="tk-validation tk-validation--small tk-validation--error">
    <div class="tk-input-group tk-input-group--small">
    <div class="tk-input-group__header">
      <label class="tk-label tk-label--required" for="input-error"
        >Field label</label
      >
      </div>
      <div class="tk-input__container tk-input__container--small">
        <input
          id="input-error"
          type="text"
          class="tk-input tk-input--small"
          placeholder="Type something..."
        />
        <div class="tk-input__icon">
          <i class="tk-icon-calendar"></i>
        </div>
      </div>
      </div>
      <ul class="tk-validation__errors">
        <li><i class="tk-icon-alert-triangle"></i>This field is required.</li>
      </ul>
  </span>

  <h3>Read Only</h3>

  <div class="tk-input-group tk-input-group--readonly">
    <div class="tk-input-group__header">
      <label class="tk-label tk-label--required" for="input">Field label</label>
    </div>
    <div class="tk-input__container tk-input__container--readonly">
      <input
        id="input2"
        type="text"
        class="tk-input tk-input--with-icon"
        placeholder="Type something..."
        value="Lorem Ipsum"
        readonly
      />
      <div class="tk-input__icon">
        <i class="tk-icon-calendar"></i>
      </div>
    </div>
  </div>
  <div class="tk-mt-2"></div>
  <div class="tk-input-group tk-input-group--small tk-input-group--readonly">
    <div class="tk-input-group__header">
      <label class="tk-label tk-label--required" for="input">Field label</label>
    </div>
    <div class="tk-input__container tk-input__container--small tk-input__container--readonly">
      <input
        id="input2"
        type="text"
        class="tk-input tk-input--small tk-input--with-icon"
        placeholder="Type something..."
        value="Lorem Ipsum"
        readonly
      />
      <div class="tk-input__icon">
        <i class="tk-icon-calendar"></i>
      </div>
    </div>
  </div>

  <h3>Disabled</h3>

  <div class="tk-input-group tk-input-group--disabled">
    <div class="tk-input-group__header">
      <label class="tk-label tk-label--required" for="input">Field label</label>
    </div>
    <div class="tk-input__container tk-input__container--disabled">
      <input
        id="input2"
        type="text"
        class="tk-input tk-input--with-icon"
        placeholder="Type something..."
        disabled
      />
      <div class="tk-input__icon">
        <i class="tk-icon-calendar"></i>
      </div>
    </div>
  </div>
  <div class="tk-mt-2"></div>
  <div class="tk-input-group tk-input-group--small tk-input-group--disabled">
    <div class="tk-input-group__header">
      <label class="tk-label tk-label--required" for="input">Field label</label>
    </div>
    <div class="tk-input__container tk-input__container--small tk-input__container--disabled">
      <input
        id="input2"
        type="text"
        class="tk-input tk-input--small tk-input--with-icon"
        placeholder="Type something..."
        disabled
      />
      <div class="tk-input__icon">
        <i class="tk-icon-calendar"></i>
      </div>
    </div>
  </div>
</div>
    `;
};

export const Select = () => {
  return `
  <h2>Small size</h2>

  <div>
    <select class="tk-select tk-select--small" style="width:200px">
      <option>Item 1</option>
      <option>Item 2</option>
      <option>Item 3 with a very very very long text</option>
    </select>
    <i></i>
  </div>

  <div class="tk-input-group tk-input-group--small tk-mt-2">
    <div class="tk-input-group__header">
      <label class="tk-label" for="input">Field label</label>
    </div>
    <div>
      <select class="tk-select tk-select--small" style="width:200px">
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3 with a very very very long text</option>
      </select>
      <i></i>
    </div>
    <div class="tk-input__helper">This is a helper.</div>
  </div>

  <div>
    <h3>Disabled</h3>
    <div>
      <select class="tk-select tk-select--small" style="width:200px" disabled>
        <option>Item 1</option>
      </select>
      <i></i>
    </div>

    <div class="tk-input-group tk-input-group--small tk-mt-2">
      <div class="tk-input-group__header">
        <label class="tk-label" for="input">Field label</label>
      </div>
      <div>
        <select class="tk-select tk-select--small" style="width:200px" disabled>
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3 with a very very very long text</option>
        </select>
        <i></i>
      </div>
      <div class="tk-input__helper">This is a helper.</div>
    </div>
  </div>

  <h3>Error</h3>
  <span class="tk-validation tk-validation--error tk-validation--small">
    <div>
      <select class="tk-select tk-select--small" style="width:200px">
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3 with a very very very long text</option>
      </select>
      <i></i>
    </div>
    <ul class="tk-validation__errors">
      <li>
        <i class="tk-icon-alert-triangle"></i>This field is required.
      </li>
    </ul>
  </span>

  <span class="tk-validation tk-validation--error tk-validation--small">
    <div class="tk-input-group tk-input-group--small tk-mt-2">
      <div class="tk-input-group__header">
        <label class="tk-label" for="input">Field label</label>
      </div>
      <div>
        <select class="tk-select tk-select--small" style="width:200px">
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3 with a very very very long text</option>
        </select>
        <i></i>
      </div>
    </div>
    <ul class="tk-validation__errors">
      <li>
        <i class="tk-icon-alert-triangle"></i>This field is required.
      </li>
    </ul>
  </span>

  <h2>Default - Medium size</h2>

  <div>
    <select class="tk-select" style="width:200px">
      <option>Item 1</option>
      <option>Item 2</option>
      <option>Item 3 with a very very very long text</option>
    </select>
    <i></i>
  </div>

  <div class="tk-input-group tk-mt-2">
    <div class="tk-input-group__header">
      <label class="tk-label" for="input">Field label</label>
    </div>
    <div>
      <select class="tk-select" style="width:200px">
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3 with a very very very long text</option>
      </select>
      <i></i>
    </div>
    <div class="tk-input__helper">This is a helper.</div>
  </div>

  <div>
    <h3>Disabled</h3>
    <div>
      <select class="tk-select" style="width:200px" disabled>
        <option>Item 1</option>
      </select>
      <i></i>
    </div>

    <div class="tk-input-group tk-mt-2">
      <div class="tk-input-group__header">
        <label class="tk-label" for="input">Field label</label>
      </div>
      <div>
        <select class="tk-select" style="width:200px" disabled>
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3 with a very very very long text</option>
        </select>
        <i></i>
      </div>
      <div class="tk-input__helper">This is a helper.</div>
    </div>
  </div>

  <h3>Error</h3>
  <span class="tk-validation tk-validation--error">
    <div>
      <select class="tk-select" style="width:200px">
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3 with a very very very long text</option>
      </select>
      <i></i>
    </div>
    <ul class="tk-validation__errors">
      <li>
        <i class="tk-icon-alert-triangle"></i>This field is required.
      </li>
    </ul>
  </span>

  <span class="tk-validation tk-validation--error">
    <div class="tk-input-group tk-mt-2">
      <div class="tk-input-group__header">
        <label class="tk-label" for="input">Field label</label>
      </div>
      <div>
        <select class="tk-select" style="width:200px">
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3 with a very very very long text</option>
        </select>
        <i></i>
      </div>
    </div>
    <ul class="tk-validation__errors">
      <li>
        <i class="tk-icon-alert-triangle"></i>This field is required.
      </li>
    </ul>
  </span>

  <h2>Large size</h2>

  <div>
    <select class="tk-select tk-select--large" style="width:200px">
      <option>Item 1</option>
      <option>Item 2</option>
      <option>Item 3 with a very very very long text</option>
    </select>
    <i></i>
  </div>

  <div class="tk-input-group tk-input-group--large tk-mt-2">
    <div class="tk-input-group__header">
      <label class="tk-label" for="input">Field label</label>
    </div>
    <div>
      <select class="tk-select tk-select--large" style="width:200px">
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3 with a very very very long text</option>
      </select>
      <i></i>
    </div>
    <div class="tk-input__helper">This is a helper.</div>
  </div>

  <div>
    <h3>Disabled</h3>
    <div>
      <select class="tk-select tk-select--large" style="width:200px" disabled>
        <option>Item 1</option>
      </select>
      <i></i>
    </div>

    <div class="tk-input-group tk-input-group--large tk-mt-2">
      <div class="tk-input-group__header">
        <label class="tk-label" for="input">Field label</label>
      </div>
      <div>
        <select class="tk-select tk-select--large" style="width:200px" disabled>
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3 with a very very very long text</option>
        </select>
        <i></i>
      </div>
      <div class="tk-input__helper">This is a helper.</div>
    </div>
  </div>

  <h3>Error</h3>
  <span class="tk-validation tk-validation--large tk-validation--error">
    <div>
      <select class="tk-select tk-select--large" style="width:200px">
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3 with a very very very long text</option>
      </select>
      <i></i>
    </div>
    <ul class="tk-validation__errors">
      <li>
        <i class="tk-icon-alert-triangle"></i>This field is required.
      </li>
    </ul>
  </span>

  <span class="tk-validation tk-validation--large tk-validation--error">
    <div class="tk-input-group tk-input-group--large tk-mt-2">
      <div class="tk-input-group__header">
        <label class="tk-label" for="input">Field label</label>
      </div>
      <div>
        <select class="tk-select tk-select--large" style="width:200px">
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3 with a very very very long text</option>
        </select>
        <i></i>
      </div>
    </div>
    <ul class="tk-validation__errors">
      <li>
        <i class="tk-icon-alert-triangle"></i>This field is required.
      </li>
    </ul>
  </span>
`;
};

export const TextArea = () => {
  return `
  <h3>Default</h3>
  <textarea class="tk-input" placeholder="Medium"></textarea>
  <div class="tk-mt-2"></div>
  <textarea class="tk-input tk-input--small" placeholder="Small"></textarea>
  <h3>Error</h3>
  <span class="tk-validation tk-validation--error">
    <textarea class="tk-input tk-input--error" placeholder="Medium"></textarea>
  </span>
  <div class="tk-mt-2"></div>
  <span class="tk-validation tk-validation--small tk-validation--error">
    <textarea class="tk-input tk-input--small tk-input--error" placeholder="Small"></textarea>
  </span>
  <h3>Read only</h3>
  <textarea class="tk-input" readonly>Medium</textarea>
  <div class="tk-mt-2"></div>
  <textarea class="tk-input tk-input--small" readonly>Small</textarea>
  <h3>Disabled</h3>
  <textarea class="tk-input" placeholder="Medium" disabled></textarea>
  <div class="tk-mt-2"></div>
  <textarea class="tk-input tk-input--small" placeholder="Small" disabled></textarea>
  
  <h2>Text Area with label</h2>
  <div class="tk-input-group">
    <div class="tk-input-group__header">
      <label class="tk-label" for="input">Field label</label>
    </div>
    <div class="tk-input__container">
      <textarea class="tk-input" placeholder="Medium"></textarea>
    </div>
    <div class="tk-input__helper">This is a helper.</div>
  </div>
  <div class="tk-mt-2"></div>
  <div class="tk-input-group tk-input-group--small">
    <div class="tk-input-group__header">
      <label class="tk-label" for="input">Field label</label>
    </div>
    <div
      class="
        tk-input__container tk-input__container--small tk-input__container--small
      "
    >
      <textarea class="tk-input tk-input--small" placeholder="Small"></textarea>
    </div>
    <div class="tk-input__helper">This is a helper.</div>
  </div>
  
  <div class="tk-mt-4"></div>
  <span class="tk-validation tk-validation--error">
    <div class="tk-input-group">
      <div class="tk-input-group__header">
        <label class="tk-label" for="input-error">Field label</label>
      </div>
      <div class="tk-input__container">
        <textarea class="tk-input" placeholder="Medium"></textarea>
      </div>
      </div>
      <ul class="tk-validation__errors">
        <li>
          <i class="tk-icon-alert-triangle"></i>This field is required.
        </li>
      </ul>
  </span>
  <div class="tk-mt-2"></div>
  <span class="tk-validation tk-validation--small tk-validation--error">
    <div class="tk-input-group tk-input-group--small">
      <div class="tk-input-group__header">
        <label class="tk-label" for="input-error">Field label</label>
      </div>
      <div class="tk-input__container tk-input__container--small">
        <textarea class="tk-input tk-input--small" placeholder="Small"></textarea>
      </div>
      </div>
      <ul class="tk-validation__errors">
        <li>
          <i class="tk-icon-alert-triangle"></i>This field is required.
        </li>
      </ul>
  </span>
  
  <div class="tk-mt-4"></div>
  <div class="tk-input-group tk-input-group--readonly">
    <div class="tk-input-group__header">
      <label class="tk-label" for="input-readonly">Field label</label>
    </div>
    <div class="tk-input__container tk-input__container--readonly">
      <textarea class="tk-input" readonly>Medium</textarea>
    </div>
    <div class="tk-input__helper">This is a helper.</div>
  </div>
  <div class="tk-mt-2"></div>
  <div class="tk-input-group tk-input-group--small tk-input-group--readonly">
    <div class="tk-input-group__header">
      <label class="tk-label" for="input-readonly">Field label</label>
    </div>
    <div
      class="
        tk-input__container
        tk-input__container--small
        tk-input__container--readonly
      "
    >
      <textarea class="tk-input tk-input--small" readonly>Small</textarea>
    </div>
    <div class="tk-input__helper">This is a helper.</div>
  </div>
  <div class="tk-mt-4"></div>
  <div class="tk-input-group tk-input-group--disabled">
    <div class="tk-input-group__header">
      <label class="tk-label tk-label--disabled" for="input-disabled"
        >Field label</label
      >
    </div>
    <div
      class="
        tk-input__container tk-input__container tk-input__container--disabled
      "
    >
      <textarea class="tk-input tk-input" placeholder="Medium" disabled></textarea>
    </div>
    <div class="tk-input__helper">This is a helper.</div>
  </div>
  <div class="tk-mt-2"></div>
  <div class="tk-input-group tk-input-group--small tk-input-group--disabled">
    <div class="tk-input-group__header">
      <label class="tk-label tk-label--disabled" for="input-disabled"
        >Field label</label
      >
    </div>
    <div
      class="
        tk-input__container
        tk-input__container--small
        tk-input__container--disabled
      "
    >
      <textarea class="tk-input tk-input--small" placeholder="Small" disabled></textarea>
    </div>
    <div class="tk-input__helper">This is a helper.</div>
  </div>
  
    `;
};

export const DropdownList = () => {
  return `
<div class="tk-m-4">
  <h2>Dropdown list</h2>
  <p> To use a custom dropdown list you can use the following component:</p>
  <div class="tk-select--custom-dropdown tk-mt-2" style="width:256px">
    <div class="tk-select--custom-dropdown__item">Option 1</div>
    <div class="tk-select--custom-dropdown__item">Option 2</div>
    <div class="tk-select--custom-dropdown__item">Option 3
      <i class="tk-select--custom-dropdown--selected"></i>
    </div>
    <div class="tk-select--custom-dropdown__item">Option 4</div>
    <div class="tk-select--custom-dropdown__item">Option 5</div>
    <div class="tk-select--custom-dropdown__item">Option 7</div>
    <div class="tk-select--custom-dropdown__item">Option 8</div>
    <div class="tk-select--custom-dropdown__item">Example of long list option with two lines</div>
  </div>
</div>
`;
};
