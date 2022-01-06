export default {
    title: 'Components/Toast',
};

export const Toast = () => {
    return (`
    <div style="min-height: 600px">
    <h2>Toast</h2>
      <h3 class="tk-mt-5">Regular</h3>
      <div id="toast-123456" role="toast" class="tk-toast">
        <span>Toast<span>
      </div>

      <h3 class="tk-mt-5">With left icon</h3>
      <div id="toast-123456" role="toast" class="tk-toast">
        <i class="tk-icon-alert-triangle tk-toast__icon-left"></i>
        <span>Toast<span>
      </div>

      <h3 class="tk-mt-5">With left warning icon</h3>
      <div id="toast-123456" role="toast" class="tk-toast tk-toast--warning">
        <i class="tk-icon-alert-triangle tk-toast__icon-left"></i>
        <span>Toast<span>
      </div>

      <h3 class="tk-mt-5">With left and right icon</h3>
      <div id="toast-123456" role="toast" class="tk-toast">
        <i class="tk-icon-alert-triangle tk-toast__icon-left"></i>
        <span>Toast<span>
        <i class="tk-icon-cross tk-toast__icon-right"></i>
      </div>

      <h3 class="tk-mt-5">Centered</h3>
      <div style="background: grey; height: 250px; position: relative; width: 100%;">
        <div id="toast-123456" role="toast" class="tk-toast tk-toast__vertical-horizontal-center">
          <i class="tk-icon-alert-triangle tk-toast__icon-left"></i>
          <span>Toast<span>
          <i class="tk-icon-cross tk-toast__icon-right"></i>
        </div>
      </div>

      <h3 class="tk-mt-5">Bottom right</h3>
      <div style="background: grey; height: 250px; position: relative; width: 100%;">
        <div id="toast-123456" role="toast" class="tk-toast tk-toast__horizontal-right tk-toast__vertical-bottom">
          <i class="tk-icon-alert-triangle tk-toast__icon-left"></i>
          <span>Toast<span>
          <i class="tk-icon-cross tk-toast__icon-right"></i>
        </div>
      </div>
      
    </div>
    `);
};
