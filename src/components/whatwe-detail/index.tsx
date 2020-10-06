import React, {useEffect} from "react"
import AOS from "aos"
import {gsap, TweenMax} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
typeof document !== "undefined" && AOS.init();
let fadeRight = null;
export default() => {
    if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap
            .core
            .globals("ScrollTrigger", ScrollTrigger)
    }
    useEffect(() => {
        TweenMax.from(fadeRight, {
            scrollTrigger: {
                trigger: fadeRight,
                toggleActions: "restart complete complete complete"
            },
            x: -100,
            opacity: 0,
            duration: 1
        });
    }, [])
    return (
        <section className="what-we-detail">
            <div className="what-we-primary">
                <div className="whatwe-main">
                    <div className="image-container">
                        <div className="img-one" ref={el => {
                            fadeRight = el
                        }}></div>
                        <div
                            className="img-two"
                            data-aos="flip-left"
                            data-aos-delay="50"
                            data-aos-duration="1000"></div>
                    </div>
                    <div className="content-container para-font-size">
                        <div>
                            <h2>Why us?</h2>
                            <p>
                                We have an urge, an enthusiasm for underrepresented, minority claimed
                                organizations. Aiming to make a difference in this world by our skill, we
                                partner with organizations that do not generally have the assets to put
                                resources into modern advertisements. Each business ought to have an online,
                                social existence that communicates their exceptional contribution to the world.
                                We believe every business owner should have an online presence that clearly
                                expresses their unique offering to the world. We have a unique passion for under
                                represented, minority owned businesses who don’t always have the resources to
                                invest in modern marketing.
                            </p>
                        </div>
                        <div>
                            <h2>How do we do it?</h2>
                            <p>
                                Understanding the significance of the chief objectives of your organization, we
                                make sure all we create revolves around the vision and aim of the organization.
                            </p>
                            <p>We ensure your product mirrors your business objective and embeds in the
                                product what success means to you.</p>
                            <p>Our values are what we respect and care about!</p>
                        </div>
                        <div>
                            <h2>What Do We Do Best?</h2>
                            <p>
                                Driven out of passion, We create top-notch marketing techniques, custom web
                                applications, mobile applications for all screens and provide tech-consultancy
                                for multicultural entrepreneurs
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
