import React, {useEffect} from "react"
import AOS from "aos"
import {TweenMax} from 'gsap'
typeof document !== "undefined" && AOS.init();
let dots = null;
let diamond = null;
export default() => {


    useEffect(() => {

        TweenMax.to([
            dots, diamond
        ], 2, {
            y: -10,
            repeat: -1,
            ease: "none",
            yoyo: true
        });

    }, []);
    return (
        <section className="who-we">
            <div
                className="three-dots"
                ref={el => {
                    dots = el
                }}/>
            <div className="whowe-primary">
                <div className="whowe-secondery">
                    <div
                        className="whowe-left-content"
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="2000">
                        <div
                            className="diamond-img"
                            ref={el => {
                                diamond = el
                            }}>
                            <img
                                src={require("../../images/diamond.png")}
                                alt="GeeksHub-Media"
                                loading="lazy"/>
                        </div>
                        <div className="content para-font-size">
                            <span>Who We Are</span>
                            <h2>
                                Accelerate your business through the right insights and resources
                            </h2>
                            <p>
                                We believe in the power of technology to reduce the complexity of our jobs. At
                                GeeksHub, we make work, work better for people with modern digital workflows,
                                help build result-oriented brand strategies, and develop your product. From
                                full-scale design interface to deployment and post-support. That’s right, we’ve
                                got you covered!
                            </p>
                        </div>
                        {/* <div className="btn-div">
                         <button className="btn-orange-color who-btn">
                         Read Success Story
                         </button>
                         </div> */}
                    </div>
                    <div className="res-bg-image"></div>
                    <div
                        className="image-container"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="2000">
                        <div className="image-bg"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
