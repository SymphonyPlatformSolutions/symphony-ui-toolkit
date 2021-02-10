
import * as React from 'react';

export type NavProps = {
  /** List of items displayed on the Navigation bar */
  items: NavItem[];
  /** If is not defined, the first item will be active by default. */
  activeItemId?: number|string;
  onActiveTabChange?: (navItem: NavItem) => void;
};
type NavState = {
  activeNavItemId;
};

export interface NavItem {
  label: string;
  id: number|string;
  
  // Not supported so far keep until supported
  // isDisabled?: boolean;
}

export class Nav extends React.Component<NavProps, NavState> {

  state = {
    activeNavItemId: this.props?.activeItemId || 0,
  }

  onClick = (e: React.MouseEvent<HTMLElement>, navItem: NavItem) => {
    this.setState({ activeNavItemId: navItem.id});
    if(this.props.onActiveTabChange) {
      this.props.onActiveTabChange(navItem);
    }
  };

  render() {
    const {items} = this.props;
    const {activeNavItemId} = this.state;

    return (
      <div>
        <nav className="tk-nav">
          <ul className="tk-nav--tabs">
            {items.map((item) => (
              <li
                key={item.id}
                onClick={(e) => this.onClick(e, item)}
                className={`tk-nav-item ${activeNavItemId === item.id? 'tk-nav-item--active':''}`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
