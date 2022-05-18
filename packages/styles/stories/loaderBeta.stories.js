export default {
  title: 'Components/LoaderBeta',
};

export const Linear = () =>
  `
<div class="tk-ml-2">
  <h3 class="tk-mt-5">Default (determinate)</h3>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-determinate" style="width: 50%"></div>
  </div>
  <h3 class="tk-mt-5">Indeterminate</h3>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-indeterminate"></div>
  </div>
  <h3 class="tk-mt-5">With text</h3>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-determinate"></div>
  </div>
  <p class="tk-loader--linear-text">100%<p>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-indeterminate"></div>
  </div>
  <p class="tk-loader--linear-text">Loading...<p>
  <h3 class="tk-mt-5">With value</h3>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-determinate" style="width: 25%"></div>
  </div>
  <p class="tk-loader--linear-text">25%<p>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-determinate" style="width: 50%"></div>
  </div>
  <p class="tk-loader--linear-text">50%<p>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-determinate" style="width: 75%"></div>
  </div>
  <p class="tk-loader--linear-text">75%<p>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-determinate" style="width: 100%"></div>
  </div>
  <p class="tk-loader--linear-text">100%<p>
</div>
`;
