
import avatar  from './static/avatar.png';
import avatar1  from './static/avatar1.png';
import avatar2  from './static/avatar2.png';

export default {
  title: 'Components/Avatar',
};

export const Avatars = () => `
<div class="tk-mx-5h">

  <h1>Avatar</h1>
  <p class="tk-mb-5h">UIToolkit Styles has defined several Avatar variants that can be displayed in different sizes.
  </p>

  <h2 class="tk-mt-5h">Rounded avatars</h2>
  <div class="avatar-box flex-row">
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xlarge">
        <img alt="avatar" src=${avatar}>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xlarge tk-ml-5h">
        <img alt="avatar" src=${avatar1}>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xlarge tk-ml-5h">
        <img alt="avatar" src=${avatar2}>
      </div>
    </div>
  </div>
  <h2 class="tk-mt-4h">Square avatars</h2>
  <div class="avatar-box flex-row">
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--square tk-avatar--xlarge">
        <img alt="avatar" src=${avatar}>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--square tk-avatar--xlarge tk-ml-5h">
        <img alt="avatar" src=${avatar1}>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--square tk-avatar--xlarge tk-ml-5h">
        <img alt="avatar" src=${avatar2}>
      </div>
    </div>
  </div>
  <h2 class="tk-mt-4h">Bordered avatars</h2>
  <p>The bordered avatar has the square and rounded variant and it can include letters or images inside:</p>
  <div class="avatar-box flex-row ">
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--square tk-avatar--xlarge tk-avatar--border tk-text-color--primary tk-mr-5h">
        AB
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--square tk-avatar--xlarge tk-avatar--border tk-text-color--primary tk-mr-5h">
        <img alt="avatar" src=${avatar}>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--rounded tk-avatar--xlarge tk-avatar--border tk-text-color--primary tk-mr-5h">
      AB
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--rounded tk-avatar--xlarge tk-avatar--border tk-text-color--primary">
        <img alt="avatar" src=${avatar2}>
      </div>
    </div>
  </div>

  <h2 class="tk-mt-4h">Sizes</h2>
  <p>There are 6 additional sizes available, including xxlarge, xlarge, medium, small and xsmall. By default, the avatar
    size is medium.</p>
  <div class="avatar-box flex-row">
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xxlarge">
        <img alt="avatar" src=${avatar}>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xlarge tk-ml-3h">
        <img alt="avatar" src=${avatar1}>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--large tk-ml-3h">
        <img alt="avatar" src=${avatar2}>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--medium tk-ml-3h">
        <img alt="avatar" src=${avatar}>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--small tk-ml-3h">
        <img alt="avatar" src=${avatar1}>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xsmall tk-ml-3h">
        <img alt="avatar" src=${avatar2}>
      </div>
    </div>
  </div>

  <h2 class="tk-mt-4h">Avatar with text or an Icon inside</h2>
  <p>The Avatar has defined a default fontsize for each Avatar size</p>
  <div class="avatar-box flex-row">
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xxlarge tk-avatar--border ">
      <i class=" tk-icon-adjust"></i>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xlarge tk-avatar--border ">
      AB
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--large tk-avatar--border ">
      <i class=" tk-icon-adjust"></i>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--medium tk-avatar--border ">
      AB
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--small tk-avatar--border">
      <i class=" tk-icon-adjust"></i>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xsmall tk-avatar--border ">
      AB
      </div>
    </div>
    
  </div>
</div>
`
;

export const AvatarWithBadge = () => `
<div class="tk-ml-5h">
  <h1>Avatar with badges</h1>
  <p>Avatars variants (square, rounded and bordered) can also include a badge displayed on the top right or the bottom
    right side of it.</p>

  <h2>Simple use cases</h2>
  <p>The classes defined for the badge component provide a default position and size that adapts to the avatar size. You
    can either use the default ones or style it. </p>

  <h3>Badge on the top</h3>
  <div class="avatar-box flex-row">
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xxlarge tk-mr-5h">
        <img alt="avatar" class="tk-avatar" src=${avatar}>
        <span class="tk-badge tk-badge--top tk-bg-color--warning"
          style="width:30%; height:30%; border-radius:50%;"></span>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xlarge tk-mr-5h">
        <img alt="avatar" class="tk-avatar" src=${avatar1}>
        <span class="tk-badge tk-badge--top tk-bg-color--ok" style="width:30%; height:30%; border-radius:50%;"></span>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--large tk-mr-5h">
        <img alt="avatar" class="tk-avatar" src=${avatar2}>
        <span class="tk-badge tk-badge--top tk-bg-color--attention"
          style="width:30%; height:30%; border-radius:50%;"></span>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--medium tk-mr-5h">
        <img alt="avatar" class="tk-avatar" src=${avatar}>
        <span class="tk-badge tk-badge--top tk-bg-color--warning"
          style="width:30%; height:30%; border-radius:50%;"></span>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--small tk-mr-5h">
        <img alt="avatar" class="tk-avatar" src=${avatar1}>
        <span class="tk-badge tk-badge--top tk-bg-color--ok" style="width:30%; height:30%; border-radius:50%;"></span>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xsmall tk-mr-5h">
        <img alt="avatar" class="tk-avatar" src=${avatar2}>
        <span class="tk-badge tk-badge--top tk-bg-color--attention"
          style="width:30%; height:30%; border-radius:50%;"></span>
      </div>
    </div>
  </div>


  <h3>Badge on the bottom</h3>
  <div class="avatar-box flex-row">
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xxlarge tk-mr-5h">
        <img alt="avatar" class="tk-avatar" src=${avatar}>
        <span class="tk-badge tk-badge--bottom tk-bg-color--warning"
          style="width:30%; height:30%; border-radius:50%;"></span>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xlarge tk-mr-5h">
        <img alt="avatar" lass="tk-avatar" src=${avatar1}>
        <span class="tk-badge tk-badge--bottom tk-bg-color--ok"
          style="width:30%; height:30%; border-radius:50%;"></span>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--large tk-mr-5h">
        <img alt="avatar" class="tk-avatar" src=${avatar2}>
        <span class="tk-badge tk-badge--bottom tk-bg-color--attention"
          style="width:30%; height:30%; border-radius:50%;"></span>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--medium tk-mr-5h">
        <img alt="avatar" class="tk-avatar" src=${avatar}>
        <span class="tk-badge tk-badge--bottom tk-bg-color--warning"
          style="width:30%; height:30%; border-radius:50%;"></span>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--small tk-mr-5h">
        <img alt="avatar" class="tk-avatar" src=${avatar1}>
        <span class="tk-badge tk-badge--bottom tk-bg-color--ok"
          style="width:30%; height:30%; border-radius:50%;"></span>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xsmall tk-mr-5h">
        <img alt="avatar" class="tk-avatar" src=${avatar2}>
        <span class="tk-badge tk-badge--bottom tk-bg-color--attention"
          style="width:30%; height:30%; border-radius:50%;"></span>
      </div>
    </div>
  </div>

  <h2>Advanced use cases</h2>
  <p>To have a specific shapes for the Avatar component you can create your own clip-plath and include as a url. Use a
    svg with the class 'tk-avatar__clip-path' for your own clip-path and reference the svg ID on the avatar. See the
    example below.</p>
  <h3>Badge with icon</h3>
  <div class="avatar-box flex-row">
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xxlarge tk-mr-5h">
        <svg class="tk-avatar__clip-path" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="avatar_badge" clipPathUnits="objectBoundingBox">
            <path id="avatar-presence-clip-path" d="M 0.6635 0.9727 C 0.6594 0.9478 0.6563 0.9156 0.6563 0.875 C 0.6563 0.8159
                    0.6628 0.77460.6696 0.7478 C 0.6793 0.709 0.709 0.6793 0.7478 0.6696 C 0.7746
                    0.6628 0.8159 0.6563 0.875 0.6563 C 0.9156 0.6563 0.9478 0.6594 0.9727 0.6635
                    C 0.9904 0.6123 1 0.5573 1 0.5 C 1 0.2239 0.7761 0 0.5 0 C 0.2239 0 0 0.2239
                    0 0.5 C 0 0.7761 0.2239 1 0.5 1 C 0.5573 1 0.6123 0.9904 0.6635 0.9727 Z">
            </path>
          </clipPath>
        </svg>
        <img alt="avatar" src=${avatar} style="clip-path:url(#avatar_badge);">
        <div style="font-size:0.85em">
          <i class="tk-badge tk-badge--bottom tk-icon-busy tk-text-color--warning"></i>
        </div>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--xlarge tk-mr-5h">
        <img alt="avatar" src=${avatar1} style="clip-path:url(#avatar_badge);">
        <div style="font-size:0.8em">
          <i class="tk-badge tk-badge--bottom tk-icon-offline"></i>
        </div>
      </div>
    </div>
    <div class="flex-col">
      <div class="tk-avatar tk-avatar--large tk-mr-5h">
        <img alt="avatar" src=${avatar2} style="clip-path:url(#avatar_badge);">
        <div style="font-size:0.7em">
          <i class="tk-badge tk-badge--bottom tk-icon-online tk-text-color--ok"></i>
        </div>
      </div>
    </div>

    <div class="flex-col">
      <div class="tk-avatar tk-avatar--medium tk-mr-5h">
        <img alt="avatar" src=${avatar} style="clip-path:url(#avatar_badge);">
        <div style="font-size:0.75em">
          <i class="tk-badge tk-badge--bottom tk-icon-idle tk-text-color--attention" ></i>
        </div>
      </div>
    </div>
    <div class="flex-col">
    <div class="tk-avatar tk-avatar--small tk-mr-5h">
      <img alt="avatar" src=${avatar} style="clip-path:url(#avatar_badge);">
      <div style="font-size:0.6em">
        <i class="tk-badge tk-badge--bottom tk-icon-busy tk-text-color--warning"></i>
      </div>
    </div>
  </div>
  <div class="flex-col">
    <div class="tk-avatar tk-avatar--xsmall tk-mr-5h">
      <img alt="avatar" src=${avatar1} style="clip-path:url(#avatar_badge);">
      <div style="font-size:0.7em">
        <i class="tk-badge tk-badge--bottom tk-icon-offline"></i>
      </div>
    </div>
  </div>
  </div>
</div>
`