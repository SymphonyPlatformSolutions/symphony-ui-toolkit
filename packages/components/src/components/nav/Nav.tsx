import * as React from 'react';
import { clsx } from 'clsx';
import { Keys } from '../common/eventUtils';

export type NavProps = {
  /** List of items displayed in the navigation bar */
  items: NavItem[];
  /** Active item */
  activeItemId?: number | string;
  /** Function called when an item is clicked */
  onActiveTabChange?: (navItem: NavItem) => void;
};

export interface NavItem {
  label: string;
  id: number | string;
  panelId?: number | string;

  // Not supported so far keep until supported
  // isDisabled?: boolean;
}

export const Nav: React.FC<NavProps> = ({
  items,
  activeItemId,
  onActiveTabChange,
}: NavProps) => {

  const tabs = [];

  const [activeNavItemId, setActiveNavItemId] = React.useState(items?.[0]?.id);

  React.useEffect(() => {
    if (activeItemId) {
      setActiveNavItemId(activeItemId);
    }
  }, [activeItemId]);

  const handleClick = (item: NavItem) => {
    setActiveNavItemId(item.id);
    if (onActiveTabChange) {
      onActiveTabChange(item);
    }
  }

  const handleKeydown = (key: string) => {
    const localDocument = tabs[0]?.ownerDocument;
    const focusedElementIndex = tabs.findIndex(el => el === localDocument?.activeElement);

    if (!localDocument || focusedElementIndex < 0) return;

    switch (key) {
    case Keys.ARROW_RIGHT:
      tabs[(focusedElementIndex + 1) % (tabs.length)].focus();
      break;
    case Keys.ARROW_LEFT:
      focusedElementIndex === 0 ? tabs[tabs.length - 1].focus() : tabs[focusedElementIndex - 1].focus();
      break;
    }
  }

  return (
    <div role="tablist" className="tk-nav--tabs">
      {items.map((item, idx) => (
        <button
          role = "tab"
          ref={ref => {tabs[idx] = ref}}
          key={item.id}
          id={'tk-tab-' + item.id}
          aria-controls={item.panelId && 'tk-panel-' + item.panelId}
          aria-selected={activeNavItemId === item.id}
          onClick={() => handleClick(item)}
          onKeyDown={(evt) => handleKeydown(evt.key)}
          tabIndex={activeNavItemId === item.id ? 0 : -1}
          className={clsx('tk-nav-item', { 'tk-nav-item--active': activeNavItemId === item.id })}>
          {item.label}
        </button>
      ))}
    </div>
  )
};

export default Nav;
