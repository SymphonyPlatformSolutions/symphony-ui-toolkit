export default {
    title: 'Components/Toast',
};

export const Toast = () => {
    return (`
    <div style="min-height: 600px">
    <h2>Toast</h2>
      <h3 class="tk-mt-5">Regular</h3>
      <div id="toast-123456" role="toast" class="tk-toast" position: relative">
        <span>Toast<span>
      </div>
      <h3 class="tk-mt-5">With left icon</h3>
      <div id="toast-123456" role="toast" class="tk-toast" position: relative">
        <i class="tk-icon-alert-triangle tk-toast__icon-left"></i>
        <span>Toast<span>
      </div>
      <h3 class="tk-mt-5">With left warning icon</h3>
      <div id="toast-123456" role="toast" class="tk-toast" position: relative">
        <i class="tk-icon-alert-triangle tk-toast__icon-left tk-toast__icon-warning"></i>
        <span>Toast<span>
      </div>
      <h3 class="tk-mt-5">With left and right icon</h3>
      <div id="toast-123456" role="toast" class="tk-toast" position: relative">
        <i class="tk-icon-alert-triangle tk-toast__icon-left"></i>
        <span>Toast<span>
        <i class="tk-icon-cross tk-toast__icon-right"></i>
      </div>
      </div>
    `);
};
