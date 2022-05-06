export default {
  title: 'Components/Spinner',
};

export const Spinner = () =>
  `
<div class="tk-ml-2">
  <h3>Default (determinate)</h3>
  <i class="tk-loader-spinner-determinate tk-loader--default"></i>
  <h3>Indeterminate</h3>
  <i class="tk-loader-spinner-indeterminate tk-loader--default"></i>
  <h3 class="tk-mt-5">Variants</h3>
  <i class="tk-loader-spinner-determinate tk-loader--default"></i>
  <i class="tk-loader-spinner-determinate tk-loader--primary tk-ml-2h"></i>
  <i class="tk-loader-spinner-determinate tk-loader--ok tk-ml-2h"></i>
  <i class="tk-loader-spinner-determinate tk-loader--warning tk-ml-2h"></i>
  <i class="tk-loader-spinner-determinate tk-loader--attention tk-ml-2h "></i>

  <h3 class="tk-mt-5">Sizes</h3>
  <h4 class="tk-mt-5">Small</h4>
  <i class="tk-loader-spinner-determinate tk-loader--small"></i>
  <i class="tk-loader-spinner-determinate tk-loader--small tk-ml-2h tk-loader--primary tk-ml-2h"></i>
  <i class="tk-loader-spinner-determinate tk-loader--small tk-ml-2h tk-loader--ok tk-ml-2h"></i>
  <i class="tk-loader-spinner-determinate tk-loader--small tk-ml-2h tk-loader--warning tk-ml-2h"></i>
  <i class="tk-loader-spinner-determinate tk-loader--small tk-ml-2h tk-loader--attention tk-ml-2h"></i>
  <h4 class="tk-mt-5">Medium</h4>
  <i class="tk-loader-spinner-determinate tk-loader--medium"></i>
  <i class="tk-loader-spinner-determinate tk-loader--medium tk-ml-2h tk-loader--primary tk-ml-2h"></i>
  <i class="tk-loader-spinner-determinate tk-loader--medium tk-ml-2h tk-loader--ok tk-ml-2h"></i>
  <i class="tk-loader-spinner-determinate tk-loader--medium tk-ml-2h tk-loader--warning tk-ml-2h"></i>
  <i class="tk-loader-spinner-determinate tk-loader--medium tk-ml-2h tk-loader--attention tk-ml-2h"></i>
  <h4 class="tk-mt-5">Large</h4>
  <i class="tk-loader-spinner-determinate tk-loader--large"></i>
  <i class="tk-loader-spinner-determinate tk-loader--large tk-ml-2h tk-loader--primary tk-ml-2h"></i>
  <i class="tk-loader-spinner-determinate tk-loader--large tk-ml-2h tk-loader--ok tk-ml-2h"></i>
  <i class="tk-loader-spinner-determinate tk-loader--large tk-ml-2h tk-loader--warning tk-ml-2h"></i>
  <i class="tk-loader-spinner-determinate tk-loader--large tk-ml-2h tk-loader--attention tk-ml-2h"></i>

  <h3 class="tk-mt-5">Loading Text Positions</h3>
  <h4 class="tk-mt-5"> Vertical </h4>
  <div class="tk-loader-container">
    <div class="tk-ml-h tk-loader-spinner--vertical">
      <i class="tk-ml-h tk-loader-spinner-determinate"></i>
      <p class="tk-loader-text">Loading...<p>
    </div>
  </div>
      <h4 class="tk-mt-5">Horizontal</h4>
  <div class="tk-loader-container">
    <div class="tk-ml-2h tk-loader-spinner--horizontal">
    <i class="tk-ml-2h tk-loader-spinner-determinate"></i>
    <p class="tk-loader-text">Loading...<p>
    </div>
  </div>

</div>
`;

export const Linear = () =>
  `
<div class="tk-ml-2">
  <h3 class="tk-mt-5">Default (determinate)</h3>
  <div class="tk-loader-linear-container">
    <div class="tk-loader-linear-determinate"></div>
  </div>
  <h3 class="tk-mt-5">Indeterminate</h3>
  <div class="tk-loader-linear-container">
    <div class="tk-loader-linear-indeterminate"></div>
  </div>
  <h3 class="tk-mt-5">With text</h3>
  <div class="tk-loader-linear-container">
    <div class="tk-loader-linear-determinate"></div>
  </div>
  <p class="tk-loader-linear-text">Loading...<p>
  <h3 class="tk-mt-5">With text and value</h3>
  <div class="tk-loader-linear-container">
    <div class="tk-loader-linear-determinate tk-loader--25"></div>
  </div>
  <p class="tk-loader-linear-text">25%<p>
  <div class="tk-loader-linear-container">
    <div class="tk-loader-linear-determinate tk-loader--50"></div>
  </div>
  <p class="tk-loader-linear-text">50%<p>
  <div class="tk-loader-linear-container">
    <div class="tk-loader-linear-determinate tk-loader--75"></div>
  </div>
  <p class="tk-loader-linear-text">75%<p>
  <div class="tk-loader-linear-container">
    <div class="tk-loader-linear-determinate tk-loader--100"></div>
  </div>
  <p class="tk-loader-linear-text">100%<p>
</div>
`;
