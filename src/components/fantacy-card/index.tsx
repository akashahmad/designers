import React, {useEffect} from "react"
import AOS from "aos"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {gsap, TweenMax} from 'gsap';

typeof document !== "undefined" && AOS.init()
export default() => {
    if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap
            .core
            .globals("ScrollTrigger", ScrollTrigger)
    }
    let fadeRight = null;
    let fadeLeft = null;

    useEffect(() => {
        TweenMax.from(fadeRight, {
            scrollTrigger: {
                trigger: fadeRight,
                toggleActions: "restart pause pause pause"
            },
            x: -100,
            opacity: 0,
            duration: 2
        });
        TweenMax.from(fadeLeft, {
            scrollTrigger: {
                trigger: fadeLeft,
                toggleActions: "restart pause pause pause"
            },
            x: 100,
            opacity: 0,
            duration: 2
        });
    })
    return (
        <section className="fantacy">
            <div className="fantacy-container">
                <div
                    className="text-container"
                    ref={el => {
                    fadeRight = el
                }}>
                    <div>
                        <h2>Providing Tech Talent at the easiest</h2>
                    </div>
                </div>
                <div
                    className="card-main"
                    ref={el => {
                    fadeLeft = el
                }}>
                    <div className="card-container">
                        <div className="head-img">
                            <img
                                src={require("../../images/product design.png")}
                                alt="GeeksHub-Media"
                                loading="lazy"/>
                        </div>
                        <div className="card-content para-font-size">
                            <h2>Product Design</h2>
                            <p>
                                We’re here to design your product with an interactive display, handpicked
                                combinations, and approaches to justify your business goals and objectives into
                                insightful UX and remarkable UI.
                            </p>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="head-img">
                            <img
                                src={require("../../images/moonpng.png")}
                                alt="GeeksHub-Media"
                                loading="lazy"/>
                        </div>
                        <div className="card-content para-font-size">
                            <h2>Creative Web Solutions</h2>
                            <p>
                                Our skilled team realizes the potential of online business.</p>
                            <p>
                                GeeksHub offers building and re-building powerful web applications that will
                                accelerate your business with an even faster and innovative experience.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
