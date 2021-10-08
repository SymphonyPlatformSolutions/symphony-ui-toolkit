import * as React from 'react';
import classnames from 'classnames';

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

  // Not supported so far keep until supported
  // isDisabled?: boolean;
}

export const Nav: React.FC<NavProps> = ({
  items,
  activeItemId,
  onActiveTabChange,
}: NavProps) => {

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

  return (
    <div>
      <nav className="tk-nav">
        <ul className="tk-nav--tabs">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item)}
              className={classnames('tk-nav-item', { 'tk-nav-item--active': activeNavItemId === item.id })}>
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
};

export default Nav;
