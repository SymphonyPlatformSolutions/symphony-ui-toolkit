export default {
  title: 'Components/Button',
};

export const Button = () => `
<div style="margin: 16px;">
  <h3>Primary button</h3>
  <button class="tk-button tk-button--primary">Button</button>
  <button class="tk-button tk-button--primary"><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--primary tk-button--icon"><i class="tk-icon-more"></i></button>
  <button class="tk-button tk-button--primary" disabled>Button</button>
  <button class="tk-button tk-button--primary" disabled><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--primary" disabled><i class="tk-icon-check tk-color-action-ok"></i></button>
</div>

<div style="margin: 16px;">
  <h3>Secondary button</h3>
  <button class="tk-button tk-button--secondary">Button</button>
  <button class="tk-button tk-button--secondary"><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--secondary tk-button--icon"><i class="tk-icon-more"></i></button>
  <button class="tk-button tk-button--secondary" disabled>Button</button>
  <button class="tk-button tk-button--secondary" disabled><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--secondary" disabled><i class="tk-icon-check tk-color-action-ok"></i></button>
</div>

<div style="margin: 16px;">
  <h3>Tertiary button</h3>
  <button class="tk-button tk-button--tertiary">Button</button>
  <button class="tk-button tk-button--tertiary"><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--tertiary tk-button--icon"><i class="tk-icon-more"></i></button>
  <button class="tk-button tk-button--tertiary" disabled>Button</button>
  <button class="tk-button tk-button--tertiary" disabled><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--tertiary" disabled><i class="tk-icon-check tk-color-action-ok"></i></button>
</div>

<div style="margin: 16px;">
  <h3>Destructive button</h3>
  <button class="tk-button tk-button--destructive">Button</button>
  <button class="tk-button tk-button--destructive"><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--destructive tk-button--icon"><i class="tk-icon-more"></i></button>
  <button class="tk-button tk-button--destructive" disabled>Button</button>
  <button class="tk-button tk-button--destructive" disabled><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--destructive" disabled><i class="tk-icon-check tk-color-action-ok"></i></button>
</div>
`;

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