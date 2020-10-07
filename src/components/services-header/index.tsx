import React, {useEffect} from "react"
import {TweenMax, gsap} from 'gsap'
import AOS from "aos";

import {ScrollTrigger} from "gsap/ScrollTrigger";
let bean = null;
let fadeRight = null;
export default() => {
    if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap
            .core
            .globals("ScrollTrigger", ScrollTrigger);
        AOS.init();
    }
    useEffect(() => {
        TweenMax.to(bean, 2, {
            y: -10,
            repeat: -1,
            ease: "none",
            yoyo: true
        });

        TweenMax.from(fadeRight, {
            scrollTrigger: {
                trigger: fadeRight,
                toggleActions: "restart complete complete complete"
            },
            x: -100,
            opacity: 1,
            duration: 2
        });
    }, [])
    return (
        <section className="home-header services-section">
            <div className="slider-image-res">
                <div className="responsive-slider image-unset">
                    <div className="header-res-content">
                        <h2>Our Agency Services</h2>
                        <p>
                            We, being a team of self-driven enthusiasts are determined to bring to you the
                            ease and reliability in your business that we believe you deserve by providing
                            you and your users the finest running web and mobile application experience.
                        </p>
                    </div>
                </div>
            </div>
            <div className="slider-section">
                <div className="image-gril"></div>
                <div className="image-pink"></div>
                <div className="home-setting">
                    <div className="content-slider">
                        <div className="content-image" ref= {el=>{fadeRight=el}}>
                            <div className="content-div para-font-size">
                                <h2>Our Agency Services</h2>
                                <p>
                                    We, being a team of self-driven enthusiasts are determined to bring to you the
                                    ease and reliability in your business that we believe you deserve by providing
                                    you and your users the finest running web and mobile application experience.
                                </p>
                            </div>
                        </div>
                        <div className="home-right-slider">
                            <div className="stroke-container" data-aos="fade-up" data-aos-duration="2000">
                                <div className="slider-image"/>
                                <div className="follower-image">
                                    <img
                                        src={require("../../images/boti.png")}
                                        alt="GeeksHub-Media"
                                        loading="lazy"/>
                                </div>
                                <div
                                    className="been-image"
                                    ref={el => {
                                    bean = el
                                }}>
                                    <img
                                        src={require("../../images/bean.svg")}
                                        alt="GeeksHub-Media"
                                        loading="lazy"/>
                                    <img
                                        className="dots-been"
                                        src={require("../../images/b-dots.png")}
                                        alt="GeeksHub-Media"
                                        loading="lazy"/>
                                    <img
                                        className="dots-right"
                                        src={require("../../images/b-dots.png")}
                                        alt="GeeksHub-Media"
                                        loading="lazy"/>
                                </div>
                            </div>
                            <div className="below-side">
                                <img
                                    src={require("../../images/side-image.jpg")}
                                    alt="GeeksHub-Media"
                                    loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
