import React from "react"
import Vectorimg from "../../images/vector-smart.png"
import Designimg from "../../images/boti.png"
import Beanimg from "../../images/bean.svg"
import Bdotsimg from "../../images/b-dots.png"
// import SliderImg1 from '../../images/slider-image1.png'
// import SliderImg2 from '../../images/slider-image2.png'
// import SliderImg3 from '../../images/slider-image3.png'
// import Stroke from '../../images/stroke.png'
import Lines from "../../images/lines.png"
import Fadeinout from "../../images/res-sec1-bg.png"
import Mobileimg from "../../images/ftf.png"
import "../../Responsivecss/homepage-responsive.scss"
import "../homepage/style.scss"
import "../../Style/main.scss"
export default () => {
  return (
    <>
      <div className="container-fluid home-page-main  pt-10">
        <div className="home-page-first-sec flex">
          <div className="home-page-text  w-1/2 flex justify-center flex-col items-center">
            <div className="vector-styles flex">
              <img className="v1" src={Vectorimg} alt="vector" />
              <div>
                <img className="v2" src={Vectorimg} alt="vector" />
              </div>
              <img className="v3" src={Vectorimg} alt="vector" />
            </div>
            <div className="ambitions">
              <h1
                className="f-s-48 f-clr-black f-fm l-h-1-1 f-w-b home-page-heading-main "
              >
                Let’s talk about your <br />
                great ambitions
              </h1>
              <p className="f-s-20 f-fm f-clr-gray mt-4">
                We partner with organizations that are looking to create <br />
                greater impact in their work and the world around them.
              </p>
            </div>
          </div>
          <div className="home-page-image w-1/2 flex justify-end ">
            <div className="trans">
              <div className="fade-section">
                <div
                  className=" imageDiv image0 "
                  style={{
                    width: "520px",
                    height: "515px",
                    marginTop: "-31rem",
                  }}
                />
                <div
                  className=" imageDiv image1 fadeInClass"
                  style={{
                    width: "520px",
                    height: "515px",
                    marginTop: "-31rem",
                  }}
                />
                <div
                  className=" imageDiv image2 fadeInClass"
                  style={{
                    width: "520px",
                    height: "515px",
                    marginTop: "-31rem",
                  }}
                />
                <div
                  className=" imageDiv image3 "
                  style={{
                    width: "520px",
                    height: "515px",
                    marginTop: "-31rem",
                  }}
                />
                <div className="imgDiv00" style={{ marginTop: "" }}>
                  <img className="" src={Designimg} alt="design" />
                </div>
                <div className="imgDiv0" style={{ marginTop: "" }}>
                  <img className="bean" src={Beanimg} alt="bean" />
                </div>
                <div className="imgDiv2" style={{ marginTop: "" }}>
                  <img
                    className=""
                    style={{
                      width: "44px",
                      height: "46px",
                      marginLeft: "-10rem",
                      marginTop: "-12rem",
                    }}
                    src={Bdotsimg}
                    alt="dotts"
                  />
                </div>
                <div className="imgDiv2" style={{ marginTop: "" }}>
                  <img
                    className=""
                    style={{
                      width: "44px",
                      height: "46px",
                      marginTop: "-12rem",
                      marginLeft: "-16rem",
                    }}
                    src={Bdotsimg}
                    alt="dotts"
                  />
                </div>
              </div>

              <div
                className="d-flex back-img justify-content-start"
                style={{ width: "100%", marginTop: "-4rem" }}
              >
                <div className="sec1-net" style={{ width: "286px" }}>
                  <img src={Lines} alt="line" />
                </div>
                <div className="">
                  <div className="res-sec1-bg-img" style={{ display: "none" }}>
                    <img
                      src={Fadeinout}
                      style={{
                        width: "479px",
                        height: "322px",
                        marginLeft: "-14px",
                      }}
                      alt="fade-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view of home-page */}
        <div className="home-page-mobile">
          <div className="mobile-view-header">
            <img
              className="background-mobile-image "
              src={Mobileimg}
              alt="mobile"
            />
            <div className="mobile-view-heading absolute">
              <h1 className="heading-first clr-half-white f-s-24 f-w-b f-fm-mob">
                Let’s talk about your <br />
                great ambitions
              </h1>
              <p className=" clr-half-white f-s-18 f-fm-mob">
                We partner with organizations that are looking to create greater
                impact in their work and the world around them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
