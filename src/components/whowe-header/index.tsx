import React, {useEffect} from "react"
import AOS from "aos"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {TweenMax, gsap} from "gsap";
typeof document !== "undefined" && AOS.init();
let fadeRight = null;
export default() => {
    if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger);
        gsap
            .core
            .globals("ScrollTrigger", ScrollTrigger)
    }

    useEffect(() => {
        TweenMax.from(fadeRight, {
            scrollTrigger: {
                trigger: fadeRight,
                toggleActions: "restart pause pause pause"
            },
            x: -100,
            opacity: 1,
            duration: 2
        });
    }, [])
    return (
        <section className="home-header whowe-header">
            <div className="slider-image-res">
                <div className="responsive-slider">
                    <div className="header-res-content">
                        <h2>Who We Are</h2>
                        <p>We are a team derived to achieve our goals efficiently and successfully and
                            we won't settle for anything less than perfect.</p>
                    </div>
                </div>
            </div>
            <div className="slider-section">
                <div className="image-gril"></div>
                <div className="image-pink"></div>
                <div className="home-setting">
                    <div className="content-slider">
                        <div
                            className="content-image"
                            ref={el => {
                            fadeRight = el
                        }}>
                            <div className="content-div para-font-size">
                                <h2>Who We Are</h2>
                                <p>
                                    We are a team derived to achieve our goals efficiently and successfully and we
                                    won't settle for anything less than perfect.</p>
                            </div>
                        </div>
                        <div className="home-right-slider">
                            <div className="stroke-container" data-aos="zoom-in" data-aos-duration="2000">
                                <div className="services-head-image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
