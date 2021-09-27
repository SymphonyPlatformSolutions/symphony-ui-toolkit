export default {
  title: 'Components/Button',
};

export const Sizes = () => `
<div style="margin: 16px;">
  <h2>Default </h2>
  <button class="tk-button tk-button--primary">Button</button>
  <button class="tk-button tk-button--primary "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--primary ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--primary loading" disabled><i class="animate-spin tk-icon-loading"></i></button>
  <button class="tk-button tk-button--primary tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--primary" disabled>Disabled</button>
  <button class="tk-button tk-button--primary" disabled>Disabled <i class="tk-icon-lock"></i></button>
</div>

<div style="margin: 16px;">
  <button class="tk-button tk-button--secondary">Button</button>
  <button class="tk-button tk-button--secondary "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--secondary ">Icon right <i class="tk-icon-lock "></i></button>
  <button class="tk-button tk-button--secondary loading" disabled><i class="animate-spin tk-icon-loading"></i></button>
  <button class="tk-button tk-button--secondary tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--secondary" disabled>Disabled</button>
  <button class="tk-button tk-button--secondary" disabled>Disabled <i class="tk-icon-lock"></i></button>
</div>

<div style="margin: 16px;">
  <button class="tk-button tk-button--tertiary">Button</button>
  <button class="tk-button tk-button--tertiary "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--tertiary ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--tertiary loading" disabled><i class="animate-spin tk-icon-loading"></i></button>
  <button class="tk-button tk-button--tertiary tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--tertiary" disabled>Disabled</button>
  <button class="tk-button tk-button--tertiary" disabled>Disabled <i class="tk-icon-lock"></i></button>
</div>
<div style="margin: 16px;">
  <h2>Small</h2>
  <button class="tk-button tk-button--primary tk-button--small">Button</button>
  <button class="tk-button tk-button--primary tk-button--small "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--primary tk-button--small ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--primary tk-button--small loading" disabled><i
      class="animate-spin tk-icon-loading"></i></button>
  <button class="tk-button tk-button--primary tk-button--small tk-button--icon"><i
      class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--primary tk-button--small" disabled>Disabled</button>
  <button class="tk-button tk-button--primary tk-button--small" disabled>Disabled <i class="tk-icon-lock"></i></button>
</div>

<div style="margin: 16px;">
  <button class="tk-button tk-button--secondary tk-button--small">Button</button>
  <button class="tk-button tk-button--secondary tk-button--small "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--secondary tk-button--small ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--secondary tk-button--small loading" disabled><i
      class="animate-spin tk-icon-loading"></i></button>
  <button class="tk-button tk-button--secondary tk-button--small tk-button--icon"><i
      class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--secondary tk-button--small" disabled>Disabled</button>
  <button class="tk-button tk-button--secondary tk-button--small" disabled>Disabled <i
      class="tk-icon-lock"></i></button>
</div>

<div style="margin: 16px;">
  <button class="tk-button tk-button--tertiary tk-button--small tk-button--small">Button</button>
  <button class="tk-button tk-button--tertiary tk-button--small "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--tertiary tk-button--small ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--tertiary tk-button--small loading" disabled><i
      class="animate-spin tk-icon-loading"></i></button>
  <button class="tk-button tk-button--tertiary tk-button--small tk-button--icon"><i
      class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--tertiary tk-button--small" disabled>Disabled</button>
  <button class="tk-button tk-button--tertiary tk-button--small" disabled>Disabled <i class="tk-icon-lock"></i></button>
</div>

<div style="margin: 16px;">
  <h2>Large</h2>
  <button class="tk-button tk-button--primary tk-button--large">Button</button>
  <button class="tk-button tk-button--primary tk-button--large"><i class=" tk-icon tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--primary tk-button--large ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--primary tk-button--large loading" disabled><i
      class="animate-spin tk-icon-loading"></i></button>
  <button class="tk-button tk-button--primary tk-button--large tk-button--icon"><i
      class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--primary tk-button--large" disabled>Disabled</button>
  <button class="tk-button tk-button--primary tk-button--large" disabled>Disabled <i class="tk-icon-lock"></i></button>
</div>

<div style="margin: 16px;">
  <button class="tk-button tk-button--secondary tk-button--large">Button</button>
  <button class="tk-button tk-button--secondary tk-button--large "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--secondary tk-button--large ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--secondary tk-button--large loading" disabled><i
      class="animate-spin tk-icon-loading"></i></button>
  <button class="tk-button tk-button--secondary tk-button--large tk-button--icon"><i
      class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--secondary tk-button--large" disabled>Disabled</button>
  <button class="tk-button tk-button--secondary tk-button--large" disabled>Disabled <i
      class="tk-icon-lock"></i></button>
</div>

<div style="margin: 16px;">
  <button class="tk-button tk-button--tertiary tk-button--large">Button</button>
  <button class="tk-button tk-button--tertiary tk-button--large "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--tertiary tk-button--large ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--tertiary tk-button--large loading" disabled><i
      class="animate-spin tk-icon-loading"></i></button>
  <button class="tk-button tk-button--tertiary tk-button--large tk-button--icon"><i
      class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--tertiary tk-button--large" disabled>Disabled</button>
  <button class="tk-button tk-button--tertiary tk-button--large" disabled>Disabled <i
      class="tk-icon-video-off"></i></button>
</div>

`;


export const Variants = () =>`
<div style="margin: 16px;">
  <h2>Primary</h2>
  <button class="tk-button tk-button--primary">Button</button>
  <button class="tk-button tk-button--primary "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--primary ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--primary loading" disabled><i class="animate-spin tk-icon-loading"></i></button>
  <button class="tk-button tk-button--primary tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--primary" disabled>Disabled</button>
  <button class="tk-button tk-button--primary" disabled>Disabled <i class="tk-icon-lock"></i></button>
  <h4>Destructive</h4>
  <button class="tk-button tk-button--primary--destructive">Button</button>
  <button class="tk-button tk-button--primary--destructive "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--primary--destructive ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--primary--destructive tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--primary--destructive" disabled>Disabled</button>
  <button class="tk-button tk-button--primary--destructive" disabled>Disabled <i class="tk-icon-lock"></i></button>
</div>
<div style="margin: 16px; margin-top:40px">
  <h2>Secondary</h2>
  <button class="tk-button tk-button--secondary">Button</button>
  <button class="tk-button tk-button--secondary "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--secondary ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--secondary loading" disabled><i class="animate-spin tk-icon-loading"></i></button>
  <button class="tk-button tk-button--secondary tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--secondary" disabled>Disabled</button>
  <button class="tk-button tk-button--secondary" disabled>Disabled <i class="tk-icon-lock"></i></button>
  <h4>Destructive</h4>
  <button class="tk-button tk-button--secondary--destructive">Button</button>
  <button class="tk-button tk-button--secondary--destructive "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--secondary--destructive ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--secondary--destructive tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--secondary--destructive" disabled>Disabled</button>
  <button class="tk-button tk-button--secondary--destructive" disabled>Disabled <i class="tk-icon-lock"></i></button>
</div>
<div style="margin: 16px; margin-top:40px">
  <h2>Tertiary</h2>
  <button class="tk-button tk-button--tertiary">Button</button>
  <button class="tk-button tk-button--tertiary "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--tertiary ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--tertiary loading" disabled><i class="animate-spin tk-icon-loading"></i></button>
  <button class="tk-button tk-button--tertiary tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--tertiary" disabled>Disabled</button>
  <button class="tk-button tk-button--tertiary" disabled>Disabled <i class="tk-icon-lock"></i></button>
  <h4>Destructive</h4>
  <button class="tk-button tk-button--tertiary--destructive">Button</button>
  <button class="tk-button tk-button--tertiary--destructive "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--tertiary--destructive ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--tertiary--destructive tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--tertiary--destructive" disabled>Disabled</button>
  <button class="tk-button tk-button--tertiary--destructive" disabled>Disabled <i class="tk-icon-lock"></i></button>

  <h4>Active</h4>
  <button class="tk-button tk-button--tertiary--accent">Button</button>
  <button class="tk-button tk-button--tertiary--accent "><i class="tk-icon-lock"></i> Icon left</button>
  <button class="tk-button tk-button--tertiary--accent ">Icon right <i class="tk-icon-lock"></i></button>
  <button class="tk-button tk-button--tertiary--accent tk-button--icon"><i class="tk-icon-video-off"></i></button>
  <button class="tk-button tk-button--tertiary--accent" disabled>Disabled</button>
  <button class="tk-button tk-button--tertiary--accent" disabled>Disabled <i class="tk-icon-lock"></i></button>

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