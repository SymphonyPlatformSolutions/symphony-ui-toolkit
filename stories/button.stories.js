export default {
  title: 'Components/Button',
};

export const Sizes = () => `
<div style="margin: 24px; margin-left: 40px;">
  <h2>Sizes</h2>
  <h4>Small</h4>
  <div class="tk-m-2">
    <button class="tk-button tk-button--primary tk-button--small">Button</button>
    <button class="tk-button tk-button--primary tk-button--small"><i class=" tk-icon tk-icon-lock"></i> Icon
      left</button>
    <button class="tk-button tk-button--primary tk-button--small ">Icon right <i class="tk-icon-lock"></i></button>
    <button class="tk-button tk-button--primary tk-button--small tk-button--icon"><i
        class="tk-icon-video-off"></i></button>
    <button aria-label="loading" class="tk-button tk-button--primary tk-button--small loading" disabled="" type="button"
      style="color: transparent;"><i class="tk-button-icon--loading animate-spin tk-icon-loading"></i>Button</button>
    <button class="tk-button tk-button--primary tk-button--small" disabled>Disabled</button>
    <button class="tk-button tk-button--primary tk-button--small" disabled>Disabled <i
        class="tk-icon-lock"></i></button>
  </div>
  <div class="tk-m-2">
    <button class="tk-button tk-button--secondary tk-button--small">Button</button>
    <button class="tk-button tk-button--secondary tk-button--small "><i class="tk-icon-lock"></i> Icon left</button>
    <button class="tk-button tk-button--secondary tk-button--small ">Icon right <i class="tk-icon-lock"></i></button>
    <button class="tk-button tk-button--secondary tk-button--small tk-button--icon"><i
        class="tk-icon-video-off"></i></button>
    <button aria-label="loading" class="tk-button tk-button--secondary tk-button--small loading" disabled=""
      type="button" style="color: transparent;"><i
        class="tk-button-icon--loading animate-spin tk-icon-loading"></i>Button</button>
    <button class="tk-button tk-button--secondary tk-button--small" disabled>Disabled</button>
    <button class="tk-button tk-button--secondary tk-button--small" disabled>Disabled <i
        class="tk-icon-lock"></i></button>
  </div>
  <div class="tk-m-2">
    <button class="tk-button tk-button--secondary-destructive tk-button--small" onclick="">Button</button>
    <button class="tk-button tk-button--secondary-destructive tk-button--small "><i class="tk-icon-lock"></i> Icon
      left</button>
    <button class="tk-button tk-button--secondary-destructive tk-button--small ">Icon right <i
        class="tk-icon-lock"></i></button>
    <button class="tk-button tk-button--secondary-destructive tk-button--small tk-button--icon"><i
        class="tk-icon-video-off"></i></button>
    <button aria-label="loading" class="tk-button tk-button--secondary-destructive tk-button--small loading" disabled=""
      type="button" style="color: transparent;"><i
        class="tk-button-icon--loading animate-spin tk-icon-loading"></i>Button</button>
    <button class="tk-button tk-button--secondary-destructive tk-button--small" disabled>Disabled</button>

    <button class="tk-button tk-button--secondary-destructive tk-button--small" disabled>Disabled <i
        class="tk-icon-video-off"></i></button>
  </div>
  <div class="tk-m-2">
    <button class="tk-button tk-button--tertiary-accent tk-button--small">Button</button>
    <button class="tk-button tk-button--tertiary-accent tk-button--small "><i class="tk-icon-lock"></i> Icon
      left</button>
    <button class="tk-button tk-button--tertiary-accent tk-button--small ">Icon right <i
        class="tk-icon-lock"></i></button>
    <button class="tk-button tk-button--tertiary-accent tk-button--small tk-button--icon"><i
        class="tk-icon-video-off"></i></button>
        <button aria-label="loading" class="tk-button tk-button--tertiary-accent tk-button--small loading" disabled=""
      type="button" style="color: transparent;"><i
        class="tk-button-icon--loading animate-spin tk-icon-loading"></i>Button</button>
    <button class="tk-button tk-button--tertiary-accent tk-button--small" disabled>Disabled</button>
    <button class="tk-button tk-button--tertiary-accent tk-button--small tk-escape-condensed" disabled>Disabled <i
        class="tk-icon-lock"></i></button>
  </div>
  <h4>Medium</h4>
  <div class="tk-m-2">
    <button class="tk-button tk-button--primary tk-button--medium">Button</button>
    <button class="tk-button tk-button--primary tk-button--medium "><i class="tk-icon-lock"></i> Icon left</button>
    <button class="tk-button tk-button--primary tk-button--medium ">Icon right <i class="tk-icon-lock"></i></button>
    <button class="tk-button tk-button--primary tk-button--medium tk-button--icon"><i
        class="tk-icon-video-off"></i></button>
    <button aria-label="loading" class="tk-button tk-button--primary tk-button--medium loading" disabled=""
      type="button" style="color: transparent;"><i
        class="tk-button-icon--loading animate-spin tk-icon-loading"></i>Button</button>
    <button class="tk-button tk-button--primary tk-button--medium" disabled>Disabled</button>
    <button class="tk-button tk-button--primary tk-button--medium" disabled>Disabled <i
        class="tk-icon-lock"></i></button>
  </div>
  <div class="tk-m-2">
    <button class="tk-button tk-button--secondary tk-button--medium">Button</button>
    <button class="tk-button tk-button--secondary tk-button--medium"><i class="tk-icon-lock"></i> Icon left</button>
    <button class="tk-button tk-button--secondary tk-button--medium">Icon right <i class="tk-icon-lock "></i></button>
    <button class="tk-button tk-button--secondary tk-button--medium tk-button--icon"><i
        class="tk-icon-video-off"></i></button>
    <button aria-label="loading" class="tk-button tk-button--secondary tk-button--medium loading" disabled=""
      type="button" style="color: transparent;"><i
        class="tk-button-icon--loading animate-spin tk-icon-loading"></i>Button</button>
    <button class="tk-button tk-button--secondary tk-button--medium" disabled>Disabled</button>
    <button class=" tk-button tk-button--secondary tk-button--medium" disabled>Disabled <i
        class="tk-icon-lock"></i></button>
  </div>
  <div class="tk-m-2">
    <button class="tk-button tk-button--secondary-destructive tk-button--medium">Button</button>
    <button class="tk-button tk-button--secondary-destructive tk-button--medium"><i class="tk-icon-lock"></i> Icon
      left</button>
    <button class="tk-button tk-button--secondary-destructive tk-button--medium">Icon right <i
        class="tk-icon-lock"></i></button>
    <button class="tk-button tk-button--secondary-destructive tk-button--medium tk-button--icon"><i
        class="tk-icon-video-off"></i></button>
    <button aria-label="loading" class="tk-button tk-button--secondary-destructive tk-button--medium loading"
      disabled="" type="button" style="color: transparent;"><i
        class="tk-button-icon--loading animate-spin tk-icon-loading"></i>Button</button>
    <button class="tk-button tk-button--secondary-destructive tk-button--medium" disabled>Disabled</button>
    <button class="tk-button tk-button--secondary-destructive tk-button--medium" disabled>Disabled <i
        class="tk-icon-lock"></i></button>
  </div>
  <div class="tk-m-2">
    <button class="tk-button tk-button--tertiary-accent tk-button--medium">Button</button>
    <button class="tk-button tk-button--tertiary-accent tk-button--medium "><i class="tk-icon-lock"></i> Icon
      left</button>
    <button class="tk-button tk-button--tertiary-accent tk-button--medium ">Icon right <i
        class="tk-icon-lock"></i></button>
    <button class="tk-button tk-button--tertiary-accent tk-button--medium tk-button--icon"><i
        class="tk-icon-video-off"></i></button>
        <button aria-label="loading" class="tk-button tk-button--tertiary-accent tk-button--medium loading"
        disabled="" type="button" style="color: transparent;"><i
          class="tk-button-icon--loading animate-spin tk-icon-loading"></i>Button</button>
    <button class="tk-button tk-button--tertiary-accent tk-button--medium" disabled>Disabled</button>
    <button class="tk-button tk-button--tertiary-accent tk-button--medium" disabled>Disabled <i
        class="tk-icon-lock"></i></button>
  </div>
  <h4>Large</h4>
  <div class="tk-m-2">
    <button class="tk-button tk-button--primary tk-button--large">Button</button>
    <button class="tk-button tk-button--primary tk-button--large"><i class=" tk-icon tk-icon-lock"></i> Icon
      left</button>
    <button class="tk-button tk-button--primary tk-button--large ">Icon right <i class="tk-icon-lock"></i></button>
    <button class="tk-button tk-button--primary tk-button--large tk-button--icon"><i
        class="tk-icon-video-off"></i></button>
    <button aria-label="loading" class="tk-button tk-button--primary tk-button--large loading" disabled="" type="button"
      style="color: transparent;"><i class="tk-button-icon--loading animate-spin tk-icon-loading"></i>Button</button>
    <button class="tk-button tk-button--primary tk-button--large" disabled>Disabled</button>
    <button class="tk-button tk-button--primary tk-button--large" disabled>Disabled <i
        class="tk-icon-lock"></i></button>
  </div>
  <div class="tk-m-2">
    <button class="tk-button tk-button--secondary tk-button--large">Button</button>
    <button class="tk-button tk-button--secondary tk-button--large "><i class="tk-icon-lock"></i> Icon left</button>
    <button class="tk-button tk-button--secondary tk-button--large ">Icon right <i class="tk-icon-lock"></i></button>
    <button class="tk-button tk-button--secondary tk-button--large tk-button--icon"><i
        class="tk-icon-video-off"></i></button>
    <button aria-label="loading" class="tk-button tk-button--secondary tk-button--large loading" disabled=""
      type="button" style="color: transparent;"><i
        class="tk-button-icon--loading animate-spin tk-icon-loading"></i>Button</button>
    <button class="tk-button tk-button--secondary tk-button--large" disabled>Disabled</button>
    <button class="tk-button tk-button--secondary tk-button--large" disabled>Disabled <i
        class="tk-icon-lock"></i></button>
  </div>
  <div class="tk-m-2">
    <button class="tk-button tk-button--secondary-destructive tk-button--large" onclick="">Button</button>
    <button class="tk-button tk-button--secondary-destructive tk-button--large "><i class="tk-icon-lock"></i> Icon
      left</button>
    <button class="tk-button tk-button--secondary-destructive tk-button--large ">Icon right <i
        class="tk-icon-lock"></i></button>
    <button class="tk-button tk-button--secondary-destructive tk-button--large tk-button--icon"><i
        class="tk-icon-video-off"></i></button>
    <button aria-label="loading" class="tk-button tk-button--secondary-destructive tk-button--large loading" disabled=""
      type="button" style="color: transparent;"><i
        class="tk-button-icon--loading animate-spin tk-icon-loading"></i>Button</button>
    <button class="tk-button tk-button--secondary-destructive tk-button--large" disabled>Disabled</button>

    <button class="tk-button tk-button--secondary-destructive tk-button--large" disabled>Disabled <i
        class="tk-icon-video-off"></i></button>
  </div>
  <div class="tk-m-2">
    <button class="tk-button tk-button--tertiary-accent tk-button--large">Button</button>
    <button class="tk-button tk-button--tertiary-accent tk-button--large "><i class="tk-icon-lock"></i> Icon
      left</button>
    <button class="tk-button tk-button--tertiary-accent tk-button--large ">Icon right <i
        class="tk-icon-lock"></i></button>
    <button class="tk-button tk-button--tertiary-accent tk-button--large tk-button--icon"><i
        class="tk-icon-video-off"></i></button>
    <button aria-label="loading" class="tk-button tk-button--tertiary-accent tk-button--large loading" disabled=""
      type="button" style="color: transparent;"><i
        class="tk-button-icon--loading animate-spin tk-icon-loading"></i>Button</button>
    <button class="tk-button tk-button--tertiary-accent tk-button--large" disabled>Disabled</button>
    <button class="tk-button tk-button--tertiary-accent tk-button--large tk-escape-condensed" disabled>Disabled <i
        class="tk-icon-lock"></i></button>
  </div>
  <h2>Condensed theme</h2>
  <div class="tk-my-h">The UIToolkit buttons supports the condensed theme. </div>
  <div class="tk-my-1h">Adding the <span class="code">.condensed</span> or <span
      class="code">.tk-theme-condensed</span>class on a parent element of the button component will
    condense the <span class="font-bold">medium</span> and <span class="font-bold">large</span> variants.</div>
  <div>You can enable from the storybook theme addon button</div>
  <h3 class="tk-mt-5h">Escape condensed mode</h3>
  <div class="tk-m-2">Adding the <span class="code">.tk-escape-condensed</span> class on a parent element, the
    condensed mode will not be applied:</div>
  <div id="escape-area" class="tk-escape-condensed">
    <span class="tk-switch tk-m-3">
      <div class="tk-switch__inputContainer " onclick="escapeCondensed()">
        <input class="tk-switch__input" type="checkbox" id="switch1" value="active-switch-1" checked>
        <span class="tk-switch__icon"></span>
      </div>
      <label class="tk-switch__label" for="switch" id="escape">Escape condensed</label>
    </span>
    <div class="flex-row tk-m-3">
      <div class="flex-col">
        <button class="tk-button tk-button--primary tk-button--medium">Button</button>
      </div>
      <div class="flex-col">
        <button class="tk-button tk-button--primary tk-button--large">Button</button>
      </div>
    </div>
  </div>
</div>
<script>
  var escape = true;
  function escapeCondensed() {
    if (!escape) {
      document.getElementById("escape-area").className = "tk-escape-condensed";
      document.getElementById("escape").innerText = "Escape condensed";
    }
    else {
      document.getElementById("escape-area").className = "";
      document.getElementById("escape").innerText = "Default";
    }
    escape = !escape;
  }
</script>
`;


export const Variants = () =>`
<div style="margin: 16px;">
  <h2>Primary</h2>
  <button class="tk-button tk-button--primary">Button</button>
  <button class="tk-button tk-button--primary "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--primary ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--primary tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--primary" disabled>Disabled</button>
  <button class="tk-button tk-button--primary" disabled>Disabled <i class="tk-icon-lock"></i></button>
  <h4>Destructive</h4>
  <button class="tk-button tk-button--primary-destructive">Button</button>
  <button class="tk-button tk-button--primary-destructive "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--primary-destructive ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--primary-destructive tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--primary-destructive" disabled>Disabled</button>
  <button class="tk-button tk-button--primary-destructive" disabled>Disabled <i class="tk-icon-lock"></i></button>
</div>
<div style="margin: 16px; margin-top:40px">
  <h2>Secondary</h2>
  <button class="tk-button tk-button--secondary">Button</button>
  <button class="tk-button tk-button--secondary "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--secondary ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--secondary tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--secondary" disabled>Disabled</button>
  <button class="tk-button tk-button--secondary" disabled>Disabled <i class="tk-icon-lock"></i></button>
  <h4>Destructive</h4>
  <button class="tk-button tk-button--secondary-destructive">Button</button>
  <button class="tk-button tk-button--secondary-destructive "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--secondary-destructive ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--secondary-destructive tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--secondary-destructive" disabled>Disabled</button>
  <button class="tk-button tk-button--secondary-destructive" disabled>Disabled <i class="tk-icon-lock"></i></button>
</div>
<div style="margin: 16px; margin-top:40px">
  <h2>Tertiary</h2>
  <button class="tk-button tk-button--tertiary">Button</button>
  <button class="tk-button tk-button--tertiary "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--tertiary ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--tertiary tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--tertiary" disabled>Disabled</button>
  <button class="tk-button tk-button--tertiary" disabled>Disabled <i class="tk-icon-lock"></i></button>
  <h4>Destructive</h4>
  <button class="tk-button tk-button--tertiary-destructive">Button</button>
  <button class="tk-button tk-button--tertiary-destructive "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--tertiary-destructive ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--tertiary-destructive tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--tertiary-destructive" disabled>Disabled</button>
  <button class="tk-button tk-button--tertiary-destructive" disabled>Disabled <i class="tk-icon-lock"></i></button>

  <h4>Accent</h4>
  <button class="tk-button tk-button--tertiary-accent">Button</button>
  <button class="tk-button tk-button--tertiary-accent "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--tertiary-accent ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--tertiary-accent tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--tertiary-accent" disabled>Disabled</button>
  <button class="tk-button tk-button--tertiary-accent" disabled>Disabled <i class="tk-icon-lock"></i></button>

</div>
`
export const Theming = () => `
<h2>Theming aspecs</h2>
<p>The button component has 4 variants: primary, secondary, tertiary and destructive.  </p>
<p className="tk-mt-3h">For each variant you can personalize: the default, active, disabled and text color using the following CSS variables:</p>
<pre class="code">
<div>--tk-button-color-primary-default;</div>
<div>--tk-button-color-primary-active;</div>
<div>--tk-button-color-primary-hover;</div>
<div>--tk-button-color-primary-disabled;</div>
<div>---tk-button-color-primary-text;</div>
<div>---tk-button-color-primary-text-disabled;</div>
</pre>

<p>More information on how to add a theme on UIToolkit <a href="https://github.com/SymphonyOSF/symphony-bdk-ui-toolkit-styles/blob/master/docs/theming-guide.md">theming-guide.md</a></p>
<h3>Example</h3>
<div class="themed-primary-btn">
<h4>Primary button</h4>
<button class="tk-button tk-button--primary">Button</button>
</div>
`
