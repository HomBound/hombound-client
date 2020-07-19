import React from "react";
import "../Style.css";

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
            <a className="nav-link link text-white display-4" href="/ContactUs">
              <span className="mbri-home mbr-iconfont mbr-iconfont-btn"></span>
              Contact us
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
