import React,{useEffect} from "react"
import {Link} from "gatsby"
import {TweenMax,gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

let fadeUp = null;
let fadeLeft = null;
export default () => {
    if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap
            .core
            .globals("ScrollTrigger", ScrollTrigger)
    }

    useEffect(() =>{
        TweenMax.from(fadeUp, {
            scrollTrigger: {
                trigger: fadeUp,
                toggleActions: "restart reverse restart resume"
            },
            y: 150,
            opacity: 0,
            duration: 2
        });
        TweenMax.from(fadeLeft, {
            scrollTrigger: {
                trigger: fadeLeft,
                toggleActions: "restart reverse restart resume"
            },
            x: 100,
            opacity: 0,
            duration: 2
        });
    },[])
    return (
        <section className="our-sevices">
            <div className="our-sevices-image"/>
            <div className="our-services-main">
                <div className="our-sevices-primary">
                    <div
                        className="sevices-content"
                        ref={el =>{fadeUp = el}}
                    >
                        <div className="content para-font-size">
                            <span>Our Services</span>
                            <h2>
                                We transform your product into the business tool it's meant to be
                            </h2>
                        </div>
                        <div className="btn-div">
                            <Link to="/our-services">
                                <button className="btn-orange-color who-btn">
                                    View Services
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="services-card-container"
                        ref={el =>{fadeLeft = el}}
                    >
                        <div className="card-container">
                            <div className="head-img">
                                <img src={require("../../images/whiterect.png")} alt="GeeksHub-Media" loading="lazy"/>
                            </div>
                            <div className="card-content para-font-size">
                                <h2>Creative Design</h2>
                                <p>
                                    Designing UI and UX is our area of expertise, and remains the
                                    lifeblood of our business to this day.
                                </p>
                            </div>
                        </div>
                        <div className="card-container card-set">
                            <div className="head-img vert-card service-card">
                                <img src={require("../../images/ribbon.png")} alt="GeeksHub-Media" loading="lazy"/>
                            </div>
                            <div className="card-content para-font-size">
                                <h2>Web App Development</h2>
                                <p>
                                    Bring your vision to life with next-generation web solutions
                                </p>
                            </div>
                        </div>
                        <div className="card-container card-set">
                            <div className="head-img vert-card service-card">
                                <img src={require("../../images/whiterect.png")} alt="GeeksHub-Media" loading="lazy"/>
                            </div>
                            <div className="card-content para-font-size">
                                <h2>Mobile App Development</h2>
                                <p>Transform your idea into the next killer mobile app</p>
                            </div>
                        </div>
                        <div className="card-container card-set">
                            <div className="head-img vert-card service-card">
                                <img src={require("../../images/ribbon.png")} alt="GeeksHub-Media" loading="lazy"/>
                            </div>
                            <div className="card-content para-font-size">
                                <h2>Technology Modernization</h2>
                                <p>Don't stand still - future-proof your legacy software</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
