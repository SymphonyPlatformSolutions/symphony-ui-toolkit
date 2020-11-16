
import personAvatar  from './static/personAvatar.png';

export default {
  title: 'Avatar',
};

export const Avatars = () => `
<h2>Rounded avatars</h2>
<div class="tk-m-5h" style="display:flex; justify-content: space-between; width:75%">
  <div class="tk-avatar tk-avatar--xxlarge">
    <img alt="avatar" src=${personAvatar}>
  </div>
  <div class="tk-avatar tk-avatar--xlarge">
    <img alt="avatar" src=${personAvatar}>
  </div>
  <div class="tk-avatar tk-avatar--large">
    <img alt="avatar" src=${personAvatar}>
  </div>
  <div class="tk-avatar tk-avatar--medium">
    <img alt="avatar" src=${personAvatar}>
  </div>
  <div class="tk-avatar tk-avatar--small">
    <img alt="avatar" src=${personAvatar}>
  </div>
  <div class="tk-avatar tk-avatar--xsmall">
    <img alt="avatar" src=${personAvatar}>
  </div>
</div>

<h2>Square avatars</h2>
<div class="tk-m-5h" style="display:flex; justify-content: space-between; width:75%">
  <div class="tk-avatar tk-avatar--square tk-avatar--xxlarge">
    <img alt="avatar" src=${personAvatar}>
  </div>
  <div class="tk-avatar tk-avatar--square tk-avatar--xlarge">
    <img alt="avatar" src=${personAvatar}>
  </div>
  <div class="tk-avatar tk-avatar--square tk-avatar--large">
    <img alt="avatar" src=${personAvatar}>
  </div>
  <div class="tk-avatar tk-avatar--square tk-avatar--medium">
    <img alt="avatar" src=${personAvatar}>
  </div>
  <div class="tk-avatar tk-avatar--square tk-avatar--small">
    <img alt="avatar" src=${personAvatar}>
  </div>
  <div class="tk-avatar tk-avatar--square tk-avatar--xsmall">
    <img alt="avatar" src=${personAvatar}>
  </div>
</div>

<h2>Bordered avatars</h2>
<div class="tk-m-5h" style="display:flex; justify-content: space-between; width:75%">
  <div class="tk-avatar tk-avatar--square tk-avatar--xxlarge tk-avatar--border tk-text-color--primary">
    AL
  </div>
  <div class="tk-avatar tk-avatar--square tk-avatar--xlarge tk-avatar--border tk-text-color--primary">
    AL
  </div>
  <div class="tk-avatar tk-avatar--square tk-avatar--large tk-avatar--border tk-text-color--primary">
    AL
  </div>
  <div class="tk-avatar tk-avatar--square tk-avatar--medium tk-avatar--border tk-text-color--primary">
    AL
  </div>
  <div class="tk-avatar tk-avatar--square tk-avatar--small tk-avatar--border tk-text-color--primary">
    AL
  </div>
  <div class="tk-avatar tk-avatar--square tk-avatar--xsmall tk-avatar--border tk-text-color--primary">
    AL
  </div>
</div>
<div class="tk-m-5h" style="display:flex; justify-content: space-between; width:75%">
  <div class="tk-avatar tk-avatar--xxlarge tk-avatar--border tk-text-color--primary">
    AL
  </div>
    <div class="tk-avatar tk-avatar--xlarge tk-avatar--border tk-text-color--primary">
    AL</div>
  <div class="tk-avatar tk-avatar--large tk-avatar--border tk-text-color--primary">
    AL
  </div>
  <div class="tk-avatar tk-avatar--medium tk-avatar--border tk-text-color--primary">
    AL
  </div>
  <div class="tk-avatar tk-avatar--small tk-avatar--border tk-text-color--primary">
    AL
  </div>
  <div class="tk-avatar tk-avatar--xsmall tk-avatar--border tk-text-color--primary">
    AL
  </div>
</div>
`