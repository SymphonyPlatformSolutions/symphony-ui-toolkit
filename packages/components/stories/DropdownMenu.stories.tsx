import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuDivider,
} from '../src/components/dropdown-menu';
import { Icon, Button, Typography } from '../src/components';
import './styles/dropdownMenu.stories.css';
import { useState } from 'react';

export const Default: React.FC = () => (
  <>
    <h3>Default</h3>
    <Typography>This menu is always visible</Typography>
    <div className="tk-mb-1" />
    <DropdownMenu className="dropdownMenu">
      <DropdownMenuItem>New direct chat</DropdownMenuItem>
      <DropdownMenuItem>New room...</DropdownMenuItem>
      <DropdownMenuDivider />
      <DropdownMenuItem>
        <Icon iconName="minus-round"/>
        Cut
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Icon iconName="copy"/>
        Copy
        <i className="tk-dropdown-menu--selected" />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Icon iconName="forward"/>
        Paste
      </DropdownMenuItem>
      <DropdownMenuDivider />
      <DropdownMenuItem>
        <Icon iconName="fullscreen-on"/>
        Full screen
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Icon iconName="fullscreen-off"/>
        Minimize
      </DropdownMenuItem>
    </DropdownMenu>
  </>
);

export const Closable: React.FC = () => {
  const [isShown, toggleVisibility] = useState(true);
  return (
    <>
      <h3>Closable</h3>
      <Typography>
        This menu can be closed. You can click outside of the menu or press Esc
        to close this menu
      </Typography>
      <div className="tk-mb-1" />
      <Button onClick={() => toggleVisibility(!isShown)}>
        {isShown ? 'Clear' : 'Open'}
      </Button>
      <div className="tk-mb-1" />
      {isShown && (
        <>
          <DropdownMenu
            className="dropdownMenu"
            show={isShown}
            onClose={() => toggleVisibility(false)}
          >
            <DropdownMenuItem>New direct chat</DropdownMenuItem>
            <DropdownMenuItem>New room...</DropdownMenuItem>
            <DropdownMenuDivider />
            <DropdownMenuItem>
              <Icon iconName="minus-round" className="leftIcon" />
              Cut
            </DropdownMenuItem>
            <DropdownMenuItem className="withRightIcon">
              <Icon iconName="copy" className="leftIcon" />
              Copy
              <i className="tk-dropdown-menu--selected" />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon iconName="forward" className="leftIcon" />
              Paste
            </DropdownMenuItem>
            <DropdownMenuDivider />
            <DropdownMenuItem>
              <Icon iconName="fullscreen-on" className="leftIcon" />
              Full screen
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon iconName="fullscreen-off" className="leftIcon" />
              Minimize
            </DropdownMenuItem>
          </DropdownMenu>
        </>
      )}
    </>
  );
};

export default {
  title: 'Components/Dropdown Menu',
};
