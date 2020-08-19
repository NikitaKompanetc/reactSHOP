import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import TopbarMail from "./TopbarMail";
import TopbarNotification from "./TopbarNotification";

const TopbarNav = () => (
  // <nav className="topbar__nav">
  //   <Link className="topbar__nav-link" to="/dashboard_e_commerce">Dashboard</Link>
  // </nav>
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
            Admin
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link"
            activeClassName="active"
            exact
            to="/billing"
          >
            Billing
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link"
            activeClassName="active"
            exact
            to="/catalog/product/step/1"
          >
            Catalog
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
            to="/orders"
          >
            Orders
          </NavLink>
        </NavItem>
      </Nav>
      <div className="notifications">
        <div className="balance__div">
          <span>Balance:</span>
          <span>€8930</span>
        </div>
        <div className="notify__div">
          <TopbarNotification />
          <TopbarMail />
        </div>
      </div>
    </div>
  </div>
);

export default TopbarNav;
