import React from "react"
import "../header/style.scss"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import "../../Responsivecss/Header-responsive.scss"
import Logo from "../../images/logo.png"
import Hamburgersvg from "../../images/hamburger.png"
import Headerimg from "../../images/Shape2.jpg"
import "../../Style/main.scss"
import "../../../node_modules/tailwindcss/dist/tailwind.min.css"
// import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
export default () => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "30rem"
    document.getElementById("mySidenav").style.height = "910rem"
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
  }
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />{" "}
        */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway,family=FontAwesome:500,600,700&display=swap"
          rel="stylesheet"
        />
        {/* //,,,,,,SCRIPTS  FOR AOS .......... */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        {/* responsive link */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" />
      </Helmet>
      <nav>
        <div className="flex header-desktop-view">
          <div className="logo-image-designers w-2/6 mt-10 ml-16">
            <div className="logo flex justify-center">
              {" "}
              <Link to="/">
                <img className="mob-header w-64" src={Logo} alt="logo"  />
              </Link>
            </div>
          </div>
          <div className="list-nav-items w-2/3 flex justify-end mr-auto ">
            <div className="the-designers-nav-img absolute">
              <div className="header-backimage absolute ">
                <div className="header-image-main">
                  <img className="header-image " src={Headerimg} alt="header" />
                </div>
              </div>
              <ul className="listing-nav flex pl-20 pr-20 f-s-22 f-fm mt-16 f-clr-black">
                <li>
                  <Link to="/who-we-are/">Who We Are</Link>
                </li>
                <li>
                  <Link to="/our-services/">Services</Link>
                </li>
                <li>
                  <Link to="/our-services/">Protfolio</Link>
                </li>
                {/* <li>Protfolio</li> */}
                <li>
                  <Link to="contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile view starts */}
        {/* <div className="ham-burger"><img src={ Hamburgersvg}/></div> */}
        <div id="mySidenav" className="sidenav">
          <a
            href="javascript:void(0)"
            class="closebtn"
            onClick={() => closeNav()}
          >
            &times;
          </a>
          <img className="" src={Logo} style={{ marginLeft: "70px" }} />
          <div className="d-flex flex-column" style={{ marginLeft: "10rem" }}>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="Ham">
          <img
            className="ham-burger"
            src={Hamburgersvg}
            onClick={() => openNav()}
          />
        </div>
      </nav>
    </>
  )
}
