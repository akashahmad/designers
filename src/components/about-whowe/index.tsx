import React, {useEffect} from "react"
import AOS from "aos"
import {TweenMax, gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
typeof document !== "undefined" && AOS.init();

let dots = null;
let diamond = null;
let fadeRight = null;
export default() => {
    if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger);
        gsap
            .core
            .globals("ScrollTrigger", ScrollTrigger)
    }
    useEffect(() => {
            TweenMax.to([
                dots, diamond
            ], 2, {
                y: -10,
                repeat: -1,
                ease: "none",
                yoyo: true
            });
            TweenMax.from(fadeRight, {
                scrollTrigger: {
                    trigger: fadeRight,
                    toggleActions: "restart pause pause pause"
                },
                x: -100,
                opacity: 0,
                duration: 2
            });
    }, []);
    return (
        <section className="who-we who-we-page shadow-who-we whowe-response">
            <div
                className="three-dots"
                ref={el => {
                    dots = el
                }}/>
            <div className="whowe-primary">
                <div className="whowe-secondery">
                    <div
                        className="whowe-left-content"
                        ref={el => {
                            fadeRight = el
                        }}>
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
                            <span>About</span>
                            <h2>
                                Accelerate your business through the right insights and resources.
                            </h2>
                            <p>
                                We believe in the power of technology to reduce the complexity of our jobs. At
                                GeeksHub, we make work, work better for people with modern digital workflows,
                                help build result-oriented brand strategies, and develop your product. From
                                full-scale design interface to deployment and post-support. That’s right, we’ve
                                got you covered!
                            </p>
                            <p>
                                Moving toward challenges with inspiration, we are comprehensive - imparting our
                                abilities and experience to collaborators and customers. Our geeks are highly
                                professional, technical, and well bound by the culture of an organization.
                                Always aiming high and endeavoring to accomplish more; we apply agile procedures
                                and imagination to all processes.
                            </p>
                        </div>
                    </div>
                    <div className="res-bg-whowe"></div>
                    <div
                        className="image-container"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="2000">
                        <div className="image-bg img-who-we"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
