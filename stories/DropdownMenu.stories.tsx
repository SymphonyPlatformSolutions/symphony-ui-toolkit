import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuDivider,
} from '../src/components/dropdown-menu';
import { Icon } from '../src/components';
import 'styles/dropdownMenu.stories.css';

const Default: React.FC = () => {
  return (
    <div className="flex-col">
      <h3>Default</h3>
      <DropdownMenu className="dropdownMenu">
        <DropdownMenuItem>New direct chat</DropdownMenuItem>
        <DropdownMenuItem>New room...</DropdownMenuItem>
        <DropdownMenuDivider />
        <DropdownMenuItem>Cut</DropdownMenuItem>
        <DropdownMenuItem className="withRightIcon">
          Copy <Icon iconName="check" className="rightIcon" />
        </DropdownMenuItem>
        <DropdownMenuItem>Paste</DropdownMenuItem>
        <DropdownMenuDivider />
        <DropdownMenuItem>Full screen</DropdownMenuItem>
        <DropdownMenuItem>Minimize</DropdownMenuItem>
      </DropdownMenu>
    </div>
  );
};

const WithIcons: React.FC = () => {
  return (
    <div className="flex-col">
      <h3>With icons</h3>
      <DropdownMenu className="dropdownMenu">
        <DropdownMenuItem>
          <Icon iconName="plus" className="leftIcon" />
          New direct chat
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon iconName="chats" className="leftIcon" />
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
  return (
    <div className="flex-row">
      <Default />
      <WithIcons />
    </div>
  );
};

export default {
  title: 'Components/Dropdown Menu',
  component: DropdownList,
};
