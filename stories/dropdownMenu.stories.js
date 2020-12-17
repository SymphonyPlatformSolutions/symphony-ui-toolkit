export default {
  title: 'Components/Dropdown Menu',
};

export const DropdownMenu = () => {
  return `
  <div class="tk-m-4">
  <h2>Dropdown Menu</h2>
  <div class="flex-row">
    <div class="flex-col tk-mr-5h">
      <h3>Default</h3>
      <div class="tk-dropdown-menu" style="width:200px">
        <div class="tk-dropdown-menu__item">New direct chat</div>
        <div class="tk-dropdown-menu__item">New room...</div>
        <div class="tk-dropdown-menu-divider"></div>
        <div class="tk-dropdown-menu__item">Cut</div>
        <div class="tk-dropdown-menu__item">Copy
          <i class="tk-dropdown-menu--selected"></i>
        </div>
        <div class="tk-dropdown-menu__item">Paste</div>
        <div class="tk-dropdown-menu-divider"></div>
        <div class="tk-dropdown-menu__item">Full screen</div>
        <div class="tk-dropdown-menu__item">Minimize</div>
      </div>
    </div>
    <div class="flex-col tk-mr-5h">
      <h3>With icons</h3>
      <div class="tk-dropdown-menu" style="width:200px">
        <div class="tk-dropdown-menu__item">
          <i class="tk-dropdown-menu__icon tk-icon-plus"></i>
          New direct chat
        </div>
        <div class="tk-dropdown-menu__item">
        <i class="tk-dropdown-menu__icon tk-icon-chats"></i>New room...</div>
        <div class="tk-dropdown-menu-divider"></div>
        <div class="tk-dropdown-menu__item">
          <i class="tk-dropdown-menu__icon tk-icon-minus-round"></i>Cut</div>
        <div class="tk-dropdown-menu__item">
          <i class="tk-dropdown-menu__icon tk-icon-copy"></i>Copy</div>
        <div class="tk-dropdown-menu__item">
          <i class="tk-dropdown-menu__icon tk-icon-forward"></i>Paste
          <i class="tk-dropdown-menu--selected"></i>
        </div>
        <div class="tk-dropdown-menu-divider"></div>
        <div class="tk-dropdown-menu__item">
          <i class="tk-dropdown-menu__icon tk-icon-fullscreen-on"></i>Full screen</div>
        <div class="tk-dropdown-menu__item">
          <i class="tk-dropdown-menu__icon tk-icon-fullscreen-off"></i>Minimize</div>
      </div>
    </div>
    <div class="flex-col">
      <h3>Expandable</h3>
      <div class="tk-dropdown-menu" style="width:200px">
        <div class="tk-dropdown-menu__item">
          <i class="tk-dropdown-menu__icon tk-icon-star"></i>Star</div>
          <div class="tk-dropdown-menu-divider"></div>
        <div class="tk-dropdown-menu__item tk-pl-5">Move to
        <i class="tk-dropdown-menu--expandable"></i>
        </div>
        <div class="tk-dropdown-menu-divider"></div>
        <div class="tk-dropdown-menu__item tk-pl-5">Hide</div>
        <div class="tk-dropdown-menu__item tk-pl-5">Mute
          <i class="tk-dropdown-menu--selected"></i>
        </div>
      </div>
    </div>
  </div>
</div>
`}
