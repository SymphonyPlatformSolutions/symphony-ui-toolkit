
import * as React from 'react';

type NavProps = {
  /** List of items displayed on the Navigation bar */
  items: NavItem[];
  /** If is not defined, the first item will be active by default. */
  activeItemId?: number;
  onActiveTabChange?: (id: number) => void;
};
type NavState = {
  activeNavItemId;
};

export interface NavItem {
  label: string;
  id: number;
  isDisabled?: boolean;
}

class Nav extends React.Component<NavProps, NavState> {

  state = {
    activeNavItemId: this.props?.activeItemId || 0,
  }

  onClick = (e: React.MouseEvent<HTMLElement>, key: number) => {
    this.setState({ activeNavItemId: key});
    if(this.props.onActiveTabChange) {
      this.props.onActiveTabChange(key);
    }
  };

  render() {
    const {items} = this.props;
    const {activeNavItemId} = this.state;

    return (
      <div>
        <nav className="tk-nav">
          <ul className="tk-nav--tabs">
            {items.map((item, key) => (
              <li
                key={key}
                onClick={(e) => this.onClick(e, key)}
                className={
                  activeNavItemId === key
                    ? 'tk-nav-item tk-nav-item--active'
                    : 'tk-nav-item '
                }
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
