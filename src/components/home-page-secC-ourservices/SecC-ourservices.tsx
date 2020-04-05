import React from 'react'
import '../../Style/main.scss'
import '../home-page-secC-ourservices/style.scss'
import Whiterectangle from '../../images/whiterect.png'
import Cardbackimg from '../../images/vector-smart-12.jpg'
import Sideimg from '../../images/side-image.jpg'
import AOS from 'aos'
import Whiteribbonimg from '../../images/ribbon.png'
import '../../Responsivecss/home-page-secC-responsive.scss'
typeof document !== "undefined" && AOS.init();
export default () => {
    return (
        <>
            <div className="container-fluid sec-C-main flex mt-40">
                <div className="Our-Services w-full flex">
                    <div className="sec-C-start w-1/2 flex flex-col" data-aos="fade-right" data-aos-duration="2000">
                        <div className="our-services-heading"><h1 className="f-s-18 f-fm clr-5a f-w-b mr-12 our-services-head">Our Services</h1></div>
                        <div className="our-services-p"> <h1 className="Sec-C-main-heading f-s-44 f-fm f-w-b clr-black">We transform your product into the business tool it's meant to be</h1></div>
                        <div className="read-succes-story-button-C">
                            <button className="read-success-button-C f-fm btn-clr clr-half-white">Read Success Story</button>
                        </div>
                    </div>

                    <div className="deadA flex flex-wrap" data-aos="fade-left" data-aos-duration="2000">
                        <div className="SecB-credentials flex  mt-10">
                            <div className="card-background-img float-right">
                                <img className="back-img absolute" src={Cardbackimg} alt="card4" />
                            </div>
                            <div className="product-design">
                                <div className="rectangle-image">
                                    <img src={Whiterectangle} alt="rectangle" />
                                </div>
                                <div className="product-design-text absolute">
                                    <h1 className="f-s-25 f-fm f-clr-black f-w-600">Creative Design</h1>
                                    <p className="design-text f-s-18 f-fm clr-5a">Designing UI and UX is our area of expertise, and
                                    remains the lifeblood of our business to this today. </p>
                                </div>

                            </div>
                        </div>
                        <div className="SecB-credentials flex  mt-10">
                            <div className="card-background-img float-right">
                                <img className="back-img absolute" src={Cardbackimg} alt="card4" />
                            </div>
                            <div className="product-design">
                                <div className="rectangle-image">
                                    <img src={Whiteribbonimg} alt="rectangle" />
                                </div>
                                <div className="product-design-text absolute">
                                    <h1 className="f-s-25 f-fm f-clr-black f-w-600">Web App Development</h1>
                                    <p className="design-text f-s-18 f-fm clr-5a">Bring your vision to life with next-generation web solutions </p>
                                </div>

                            </div>
                        </div>
                        <div className="SecB-credentials flex  mt-10">
                            <div className="card-background-img float-right">
                                <img className="back-img absolute" src={Cardbackimg} alt="card4" />
                            </div>
                            <div className="product-design">
                                <div className="rectangle-image">
                                    <img src={Whiterectangle} alt="rectangle" />
                                </div>
                                <div className="product-design-text absolute">
                                    <h1 className="f-s-25 f-fm f-clr-black f-w-600">Mobile App Development</h1>
                                    <p className="design-text f-s-18 f-fm clr-5a">Transform your idea into the next killer mobile app</p>
                                </div>

                            </div>
                        </div>
                        <div className="SecB-credentials flex  mt-10">
                            <div className="card-background-img float-right">
                                <img className="back-img absolute" src={Cardbackimg} alt="card4" />
                            </div>
                            <div className="product-design">
                                <div className="rectangle-image">
                                    <img src={Whiteribbonimg} alt="rectangle" />
                                </div>
                                <div className="product-design-text absolute">
                                    <h1 className="f-s-25 f-fm f-clr-black f-w-600">Technology Modernization</h1>
                                    <p className="design-text f-s-18 f-fm clr-5a">Don't stand still - future-proof your legacy software </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="read-succes-story-button-C-mobile mt-10  ">
                        <button className="read-success-button-C-mobileview f-fm btn-clr clr-half-white mt-16">Read Success Story</button>
                    </div>

                </div>
                <div className="background-style-img -mt-10">
                    <img src={Sideimg} alt="side-style" />
                </div>
            </div>
        </>
    )
}