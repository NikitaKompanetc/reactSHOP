import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Topbar from './topbar/Topbar';
import Sidebar from './sidebar/Sidebar';
import TopbarWithNavigation from './topbar_with_navigation/TopbarWithNavigation';
import SidebarMobile from './topbar_with_navigation/sidebar_mobile/SidebarMobile';

import { changeThemeToDark, changeThemeToLight } from '../../redux/actions/themeActions';
import { changeMobileSidebarVisibility, changeSidebarVisibility } from '../../redux/actions/sidebarActions';
import { SidebarProps } from '../../shared/prop-types/ReducerProps';

class Layout extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    sidebar: SidebarProps.isRequired,
  };

  changeSidebarVisibility = () => {
    const { dispatch } = this.props;
    dispatch(changeSidebarVisibility());
  };

  changeMobileSidebarVisibility = () => {
    const { dispatch } = this.props;
    dispatch(changeMobileSidebarVisibility());
  };

  changeToDark = () => {
    const { dispatch } = this.props;
    dispatch(changeThemeToDark());
  };

  changeToLight = () => {
    const { dispatch } = this.props;
    dispatch(changeThemeToLight());
  };

  render() {
    const { sidebar } = this.props;

    const layoutClass = classNames({
      layout: true,
      'layout--collapse': sidebar.collapse,
    });

    return (
      <div className={layoutClass}>
        <TopbarWithNavigation
          changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
        />
        <SidebarMobile
          sidebar={sidebar}
          changeToDark={this.changeToDark}
          changeToLight={this.changeToLight}
          changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
        />
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  sidebar: state.sidebar,
}))(Layout));
