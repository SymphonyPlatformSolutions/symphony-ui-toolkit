export default {
  title: 'Components/Badge',
};

export const Badge = () => `
  <div style="margin: 16px;">
    <h3>Default badge</h3>
    <div class="tk-badge">Badge</div>
    <div class="tk-badge"><i class="tk-icon-lock"></i> Badge</div>
    <h3>Positive badge</h3>
    <div class="tk-badge tk-badge--positive">Badge</div>
    <div class="tk-badge tk-badge--positive"><i class="tk-icon-check"></i> Badge</div>
    <h3>Neutral badge</h3>
    <div class="tk-badge tk-badge--neutral">Badge</div>
    <div class="tk-badge tk-badge--neutral"><i class="tk-icon-announce"></i> Badge</div>
    <h3>Attention badge</h3>
    <div class="tk-badge tk-badge--attention">Badge</div>
    <div class="tk-badge tk-badge--attention"><i class="tk-icon-alert-round"></i> Badge</div>
    <h3>Warning badge</h3>
    <div class="tk-badge tk-badge--warning">Badge</div>
    <div class="tk-badge tk-badge--warning"><i class="tk-icon-alert-triangle"></i> Badge</div>
    <h3>EXTernal badge</h3>
    <div class="tk-badge tk-badge--external">EXT</div>

    <h2 class="tk-mt-4h">Sizes</h2>
    <p>There are 2 sizes available, including medium and small. By default, the badge
    size is medium.</p>
    <div>
      <div class="tk-badge tk-badge--medium">Badge</div>
      <div class="tk-badge tk-badge--small">Badge</div>
    </div>
    <div class="tk-mt-h">
      <div class="tk-badge tk-badge--positive tk-badge--medium">Badge</div>
      <div class="tk-badge tk-badge--positive tk-badge--small">Badge</div>
    </div>
    <div class="tk-mt-h">
      <div class="tk-badge tk-badge--neutral tk-badge--medium">Badge</div>
      <div class="tk-badge tk-badge--neutral tk-badge--small">Badge</div>
    </div>
    <div class="tk-mt-h">
      <div class="tk-badge tk-badge--attention tk-badge--medium">Badge</div>
      <div class="tk-badge tk-badge--attention tk-badge--small">Badge</div>
    </div>
    <div class="tk-mt-h">
      <div class="tk-badge tk-badge--warning tk-badge--medium">Badge</div>
      <div class="tk-badge tk-badge--warning tk-badge--small">Badge</div>
    </div>
    <div class="tk-mt-h">
      <div class="tk-badge tk-badge--external tk-badge--medium">Badge</div>
      <div class="tk-badge tk-badge--external tk-badge--small">Badge</div>
    </div>
  </div>
  `;
