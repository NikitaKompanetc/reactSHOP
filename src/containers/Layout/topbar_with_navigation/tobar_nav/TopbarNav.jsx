import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import TopBarBilling from "./TopbarBilling";

const TopbarNav = () => (
  <div className="topbar__nav tabs tabs--bordered-top">
    <div className="tabs__wrap ">
      <Nav tabs>
        <NavItem>
          <NavLink
            className="nav-link"
            activeClassName="active"
            exact
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link"
            activeClassName="active"
            exact
            to="/orders"
          >
            Orders
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link"
            activeClassName="active"
            exact
            to="/shipping"
          >
            Shipping Info
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link"
            activeClassName="active"
            exact
            to="/faq"
          >
            FAQ
          </NavLink>
        </NavItem>
      </Nav>
      <div className="notifications">
        <div className="balance__div">
          <span>Balance:</span>
          <span>€8930</span>
        </div>
        <div className="notify__div">
          <TopBarBilling />
        </div>
      </div>
    </div>
  </div>
);

export default TopbarNav;
