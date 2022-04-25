export default {
  title: 'Components/Spinner',
};

export const Spinner = () =>
  `
<div class="tk-ml-2">
<div class="tk-ml-2">
  <h3>Default</h3>
  <i class="tk-loader-spinner tk-loader--default"></i>
  <h3 class="tk-mt-5">Variants</h3>
  <i class="tk-loader-spinner tk-loader--default"></i>
  <i class="tk-loader-spinner tk-loader--primary tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-loader--ok tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-loader--warning tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-loader--attention tk-ml-2h "></i>

  <h3 class="tk-mt-5">Sizes</h3>
  <i class="tk-loader-spinner tk-size-xx-small"></i>
  <i class="tk-loader-spinner tk-size-x-small tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-size-small tk-ml-2h"></i>
  <i class="tk-loader-spinner tk-size-medium tk-ml-2h "></i>
  <i class="tk-loader-spinner tk-size-large tk-ml-2h "></i>
  <i class="tk-loader-spinner tk-size-x-large tk-ml-2h "></i>
  <i class="tk-loader-spinner tk-size-xx-large tk-ml-2h "></i>

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
