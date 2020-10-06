import React, {useEffect} from "react"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {TweenMax, gsap} from "gsap";
import AOS from "aos";
if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap
        .core
        .globals("ScrollTrigger", ScrollTrigger);
    AOS.init();
}

let bean = null;
let fadeRight1 = null;
export default() => {
    useEffect(() => {
        TweenMax.to(bean, 2, {
            y: -10,
            repeat: -1,
            ease: "none",
            yoyo: true
        });
        TweenMax.from(fadeRight1, {
            scrollTrigger: {
                trigger: fadeRight1,
                toggleActions: "play pause pause pause"
            },
            x: -100,
            opacity: 1,
            duration: 2
        });

    }, [])
    return (
        <section className="home-header">
            <div className="slider-image-res">
                <div className="slider-home-res p-set">
                    <div className="overlay">
                        <div className="header-res-content">
                            <h2>We want you to grow beyond limits!</h2>
                            <p>Collaborating with organizations to provide a sound technical foundation, an
                                on-demand IT solution, a gateway to success to your business.
                            </p>
                        </div>
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
                                fadeRight1 = el
                            }}>
                            <div className="content-div para-font-size">
                                <h2>We want you to grow beyond limits!</h2>
                                <p>Collaborating with organizations to provide a sound technical foundation, an
                                    on-demand IT solution, a gateway to success to your business.
                                </p>
                            </div>
                        </div>
                        <div className="home-right-slider">
                            <div
                                className="stroke-container"
                                data-aos="fade-up"
                                data-aos-duration="2000">
                                <div className="homepage"/>
                                <div className="follower-image">
                                    <img
                                        src={require("../../images/boti.png")}
                                        alt="GeeksHub-Media"
                                        loading="lazy"/>
                                </div>
                                <div className="been-image" ref={el => bean = el}>
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
