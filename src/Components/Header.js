import React, { Component, Fragment } from 'react';


export default class About extends Component {

    render(){
        return(
<Fragment>
  <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu" /></button>
  {/* ======= Header ======= */}
  <header id="header">
    <div className="d-flex flex-column">
      <div className="profile">
        <img src="assets/img/profile-img.jpg" alt className="img-fluid rounded-circle" />
        <h1 className="text-light"><a href="index.html">Alex Smith</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
        </div>
      </div>
      <nav className="nav-menu">
        <ul>
          <li className="active"><a href="index.html"><i className="bx bx-home" /> <span>Home</span></a></li>
          <li><a href="#about"><i className="bx bx-user" /> <span>About</span></a></li>
          <li><a href="#resume"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
          <li><a href="#portfolio"><i className="bx bx-book-content" /> Portfolio</a></li>
          <li><a href="#services"><i className="bx bx-server" /> Services</a></li>
          <li><a href="#contact"><i className="bx bx-envelope" /> Contact</a></li>
        </ul>
      </nav>{/* .nav-menu */}
      <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu" /></button>
    </div>
  </header>
</Fragment>
)
}
}