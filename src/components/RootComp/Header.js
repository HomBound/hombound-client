import React from "react";
import "./Style.css";


function Header () {
    return (
<section class="menu Header">
    <nav class="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
        <button 
            class="navbar-toggler navbar-toggler-right" 
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
        <div class="menu-logo">
            <div class="navbar-brand">
                <span class="navbar-caption-wrap">
                    <a class="navbar-caption text-white" href="/">
                        HOMBOUND
                    </a>
                </span>
            </div>
        </div>
        <div 
            class="collapse navbar-collapse" 
            id="navbarSupportedContent"
        >
            <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                <li class="nav-item">
                    <a class="nav-link link text-white display-4" href='/ContactUs'>
                    <span class="mbri-home mbr-iconfont mbr-iconfont-btn"></span>
                    Contact us
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link text-white display-4" href="/Account">
                        <span class="mbri-users mbr-iconfont mbr-iconfont-btn"></span>
                    Account
                    </a>
                </li></ul>
        </div>
    </nav>
</section>
    );
}
    


export default Header;
