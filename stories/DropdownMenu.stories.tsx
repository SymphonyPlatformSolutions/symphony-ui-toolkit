import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuDivider,
} from '../src/components/dropdown-menu';
import { Icon, Button, Typography } from '../src/components';
import './styles/dropdownMenu.stories.css';
import { useState } from 'react';

const Default: React.FC = () => (
  <div className="flex-col">
    <h3>Default</h3>
    <DropdownMenu className="dropdownMenu">
      <DropdownMenuItem>
        New direct chat
      </DropdownMenuItem>
      <DropdownMenuItem>
        New room...
      </DropdownMenuItem>
      <DropdownMenuDivider />
      <DropdownMenuItem>
        <Icon iconName="minus-round" className="leftIcon" />
        Cut
      </DropdownMenuItem>
      <DropdownMenuItem className="withRightIcon">
        <Icon iconName="copy" className="leftIcon" />
        Copy
        <Icon iconName="check" className="rightIcon" />
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
  </div>
);

const WithOrWithoutIcons: React.FC = () => {
  const [isShown, setIsShown] = useState(true);
  return (
    <div className="flex-col">
      <h3>Closable</h3>
      <DropdownMenu className="dropdownMenu" show={isShown} onClose={() => setIsShown(false)}>
        <DropdownMenuItem>
          New direct chat
        </DropdownMenuItem>
        <DropdownMenuItem>
          New room...
        </DropdownMenuItem>
        <DropdownMenuDivider />
        <DropdownMenuItem>
          <Icon iconName="minus-round" className="leftIcon" />
          Cut
        </DropdownMenuItem>
        <DropdownMenuItem className="withRightIcon">
          <Icon iconName="copy" className="leftIcon" />
          Copy
          <Icon iconName="check" className="rightIcon" />
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
    </div>
  );
};

export const DropdownList: React.FC = () => {
  const [isShown, toggleVisibility] = useState(true);
  return (
    <div className="flex-row">
      <div className="flex-col">
        <Default />
        <div><Typography>This menu is always visible</Typography></div>
      </div>
      <div className="flex-col">
        <Button onClick={() => toggleVisibility(!isShown)}>{isShown ? 'Clear' : 'Open'}</Button>
        {isShown &&
          <div>
            <WithOrWithoutIcons />
            <Typography>This menu can be closed. You can click outside of the menu or press Esc to close this menu</Typography>
          </div>}
      </div>
    </div>
  );
};

export default {
  title: 'Components/Dropdown Menu',
  component: DropdownList,
};
