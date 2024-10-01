export default {
  title: 'Components/Navigation',
};

export const Navigation = () =>
  `
<div class="tk-ml-2">
  <h2>Navs</h2>
  <h3>Default nav</h3>
  <div class="tk-nav--tabs">
    <button class="tk-nav-item">Item one</button>
    <button class="tk-nav-item">Item two</button>
    <div class="tk-nav-item">Item three</div>
    <button class="tk-nav-item tk-nav-item--active">Active</button>
    <div class="tk-nav-item tk-nav-item--active">Active</div>
  </div>
</div>
`;
