export default {
  title: 'Components/Spinner',
};

export const Spinner = () =>
  `
<div class="tk-ml-2">
<div class="tk-ml-2">
  <h2>Default</h2>
  <i class="tk-loader-spinner"></i>
  <h4 class="tk-mt-5">Variants</h4>

  <i class="tk-loader-spinner tk-loader--primary"></i>
  <i class="tk-loader-spinner tk-loader--ok tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-loader--warning tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-loader--attention tk-ml-2h "></i>

  <h2 class="tk-mt-5">Sizes</h2>
  <h4 class="tk-mt-5">Small</h4>
  <i class="tk-loader-spinner tk-loader--small"></i>
  <i class="tk-loader-spinner tk-loader--small tk-ml-2h tk-loader--primary tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-loader--small tk-ml-2h tk-loader--ok tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-loader--small tk-ml-2h tk-loader--warning tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-loader--small tk-ml-2h tk-loader--attention tk-ml-2h"></i>
  <h4 class="tk-mt-5">Medium</h4>
  <i class="tk-loader-spinner tk-loader--medium"></i>
  <i class="tk-loader-spinner tk-loader--medium tk-ml-2h tk-loader--primary tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-loader--medium tk-ml-2h tk-loader--ok tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-loader--medium tk-ml-2h tk-loader--warning tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-loader--medium tk-ml-2h tk-loader--attention tk-ml-2h"></i>
  <h4 class="tk-mt-5">Large</h4>
  <i class="tk-loader-spinner tk-loader--large"></i>
  <i class="tk-loader-spinner tk-loader--large tk-ml-2h tk-loader--primary tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-loader--large tk-ml-2h tk-loader--ok tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-loader--large tk-ml-2h tk-loader--warning tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-loader--large tk-ml-2h tk-loader--attention tk-ml-2h"></i>

  <h2 class="tk-mt-5">Loading Text Positions</h2>
  <div class="tk-loader-container">
    <div class="tk-ml-h tk-loader-textPos--bottom">
    <i class="tk-ml-h tk-loader-spinner"></i>
    <p class="tk-loader-text">Loading...<p>
    </div>
    <div class="tk-ml-2h tk-loader-textPos--right">
    <i class="tk-ml-2h tk-loader-spinner"></i>
    <p class="tk-loader-text">Loading...<p>
    </div>
  </div>
</div>
`;
