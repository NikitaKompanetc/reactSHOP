import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { changeToLight, changeToDark } = this.props;

    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink
            title="Dashboard"
            icon="store"
            route="/admin"
            onClick={this.hideSidebar}
          />
           <SidebarLink
            title="Billing"
            icon="store"
            route="/billing"
            onClick={this.hideSidebar}
          />
           <SidebarLink
            title="Faq"
            icon="store"
            route="/faq"
            onClick={this.hideSidebar}
          />
           <SidebarLink
            title="Shipping Info"
            icon="store"
            route="/shipping"
            onClick={this.hideSidebar}
          />
           <SidebarLink
            title="Orders"
            icon="store"
            route="/orders"
            onClick={this.hideSidebar}
          />
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
