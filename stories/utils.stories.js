export default {
  title: "Utils",
};

export const TextColors = () =>
  `<div class="tk-ml-2">
    <h1>Text colors</h1>
    <div class="tk-mb-2 tk-text-color">Default text color</div>
    <div class="tk-mb-2 tk-text-color--primary">Primary text color</div>
    <div class="tk-mb-2 tk-text-color--warning">Warning text color</div>
    <div class="tk-mb-2 tk-text-color--ok">Ok text color</div>
    <div class="tk-mb-2 tk-text-color--attention">Attention text color</div>
  </div>`;


export const spacing = () =>
  `<div class="tk-ml-2 tk-text-color">
    <h1>Spacing</h1>
    <div >UI Toolkit Styles include a set of spacing utilities for 
    <span class="tk-text-color--primary"> margin</span> and <span class="tk-text-color--primary">padding</span> properties based on a global white space scale.
    </div>
    <div class="tk-mt-3h">
      <h2 class="tk-mb-3h">Use cases</h2>
      <h4> .tk-mr-2h</h4>
      <div class="flex-container tk-mb-5">
        <div class="box tk-mr-2h tk-bg-color--primary"></div>
        <div class="box tk-mr-2h tk-bg-color--primary"></div>
        <div class="box tk-mr-2h tk-bg-color--primary"></div>
        <div class="box tk-mr-2h tk-bg-color--primary"></div>
        <div class="box tk-mr-2h tk-bg-color--primary"></div>
        <div class="box tk-mr-2h tk-bg-color--primary"></div>
      </div>
      <h4>.tk-mr-2h and .tk-mt-3h</h4>
      <div class="flex-container tk-mb-5">
        <div class="box tk-mr-2h tk-bg-color--ok"></div>
        <div class="box tk-mr-2h tk-mt-3h tk-bg-color--ok"></div>
        <div class="box tk-mr-2h tk-bg-color--ok"></div>
        <div class="box tk-mr-2h tk-mt-3h tk-bg-color--ok"></div>
        <div class="box tk-mr-2h tk-bg-color--ok"></div>
        <div class="box tk-mr-2h tk-mt-3h tk-bg-color--ok"></div>
      </div>
      <h4>.tk-p-h and .tk-mr-h</h4>
      <div class="flex-container tk-mb-5">
        <div class="box tk-p-h tk-mr-h tk-bg-color--warning"></div>
        <div class="box tk-p-h tk-mr-h tk-bg-color--warning"></div>
        <div class="box tk-p-h tk-mr-h tk-bg-color--warning"></div>
        <div class="box tk-p-h tk-mr-h tk-bg-color--warning"></div>
        <div class="box tk-p-h tk-mr-h tk-bg-color--warning"></div>
        <div class="box tk-p-h tk-mr-h tk-bg-color--warning"></div>
        <div class="box tk-p-h tk-mr-h tk-bg-color--warning"></div>
        <div class="box tk-p-h tk-mr-h tk-bg-color--warning"></div>
      </div>
      <h4>.tk-mx-5</h4>
      <div class="flex-container tk-mb-5">
        <div class="box tk-mx-5 tk-bg-color--attention"></div>
        <div class="box tk-mx-5 tk-bg-color--attention"></div>
        <div class="box tk-mx-5 tk-bg-color--attention"></div>
      </div>
      <h4>.tk-pr-2h and .tk-mx-2h</h4>
      <div class="flex-container tk-mb-5">
        <div class="box tk-pr-2h tk-bg-color--primary"></div>
        <div class="box tk-mx-2h tk-bg-color--primary"></div>
        <div class="box tk-mx-2h tk-bg-color--primary"></div>
        <div class="box tk-pr-2h tk-bg-color--primary"></div>
      </div>
  </dv>   
</div>`;