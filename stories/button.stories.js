export default {
  title: 'Button',
};

export const Button = () => `
<div style="margin: 16px;">
  <h3>Primary button</h3>
  <button class="tk-button tk-button--primary">Button</button>
  <button class="tk-button tk-button--primary"><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--primary tk-button--icon"><i class="tk-icon-more-_"></i></button>
  <button class="tk-button tk-button--primary" disabled>Button</button>
  <button class="tk-button tk-button--primary" disabled><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--primary" disabled><i class="tk-icon-check tk-color-action-ok"></i></button>
</div>

<div style="margin: 16px;">
  <h3>Secondary button</h3>
  <button class="tk-button tk-button--secondary">Button</button>
  <button class="tk-button tk-button--secondary"><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--secondary tk-button--icon"><i class="tk-icon-more-_"></i></button>
  <button class="tk-button tk-button--secondary" disabled>Button</button>
  <button class="tk-button tk-button--secondary" disabled><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--secondary" disabled><i class="tk-icon-check tk-color-action-ok"></i></button>
</div>

<div style="margin: 16px;">
  <h3>Tertiary button</h3>
  <button class="tk-button tk-button--tertiary">Button</button>
  <button class="tk-button tk-button--tertiary"><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--tertiary tk-button--icon"><i class="tk-icon-more-_"></i></button>
  <button class="tk-button tk-button--tertiary" disabled>Button</button>
  <button class="tk-button tk-button--tertiary" disabled><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--tertiary" disabled><i class="tk-icon-check tk-color-action-ok"></i></button>
</div>

<div style="margin: 16px;">
  <h3>Destructive button</h3>
  <button class="tk-button tk-button--destructive">Button</button>
  <button class="tk-button tk-button--destructive"><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--destructive tk-button--icon"><i class="tk-icon-more-_"></i></button>
  <button class="tk-button tk-button--destructive" disabled>Button</button>
  <button class="tk-button tk-button--destructive" disabled><i class="tk-icon-lock"></i> Button</button>
  <button class="tk-button tk-button--destructive" disabled><i class="tk-icon-check tk-color-action-ok"></i></button>
</div>
`;
