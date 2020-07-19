import React from "react";
import "./Style.css";

import "../Assets/mobirise-icons/mobirise-icons.css";
import "../Assets/bootstrap/css/bootstrap.min.css";
import "../Assets/bootstrap/css/bootstrap-grid.min.css";
import "../Assets/bootstrap/css/bootstrap-reboot.min.css";
import "../Assets/bootstrap/css/bootstrap.min.css";
import "../Assets/socicon/css/styles.css";
import "../Assets/theme/css/style1.css";

const Header = (props) => (
  <section className="menu Header">
    <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className="menu-logo">
        <div className="navbar-brand">
          <span className="navbar-caption-wrap">
            <a className="navbar-caption text-white" href="/">
              HOMBOUND
            </a>
          </span>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          className="navbar-nav nav-dropdown nav-right"
          data-app-modern-menu="true"
        >
          <li className="nav-item">
            <a className="nav-link link text-white display-4" href="/sign-in">
              <span className="mbri-home mbr-iconfont mbr-iconfont-btn"></span>
              Sign In
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link text-white display-4" href="/Account">
              <span className="mbri-users mbr-iconfont mbr-iconfont-btn"></span>
              Account
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </section>
);

export default Header;
