import React from 'react'
import '../../Style/main.scss'
import '../home-pages-secB/Style.scss'
import '../../Responsivecss/home-page-secb-responsive.scss'
import Cardbackimg from '../../images/vector-smart-12.jpg'
import Productdesign from '../../images/product design.png'
import Createweb from '../../images/moonpng.png'
import AOS from 'aos'
import Diamondimg from '../../images/diamond.png'
import Layer from '../../images/layer2.png'
import Sideimg from '../../images/side-image.jpg'
import Mobileview from '../../images/res-bg2.png'
import Dott3img from '../../images/dotted3.png'
typeof document !== "undefined" && AOS.init();
export default () => {
    return (
        <>
            <div className="container-fluid sec-B-main flex mt-64">
                <div className="what-we-do w-full flex ">
                    <div className="secB-start flex justify-center mt-10 " data-aos="fade-right" data-aos-duration="2000">
                        <h1 className="f-s-38 mt-0 f-fm f-w-b f-clr-black l-h-1-19">We Are Fantasy <br />We've got you <br />covered on</h1>
                    </div>
                    <div className="dead flex" data-aos="fade-left" data-aos-duration="2000">
                        <div className="SecB-credentials flex  mt-10">
                            <div className="card-background-img float-right">
                                <img className="back-img absolute" src={Cardbackimg} alt="card6" />
                            </div>
                            <div className="product-design">
                                <div className="rectangle-image">
                                    <img src={Productdesign} alt="rectangle" />
                                </div>
                                <div className="product-design-text absolute">
                                    <h1 className="mt-10 mb-10 f-s-22 f-fm f-clr-black f-w-600">Product Design</h1>
                                    <p className="design-text f-s-18 f-fm clr-5a ">Every product must make a statement and we’re ready to create it with holistic approach to
                                                    design. </p>
                                    <p className="design-textB f-s-18 f-fm clr-5a" >We translate your business goals and objectives into insightful UX, remarkable UI
                                                    and distinctive</p>
                                </div>

                            </div>
                        </div>
                        <div className="SecB-credentials flex  mt-10">
                            <div className="card-background-img float-right">
                                <img className="back-img absolute" src={Cardbackimg} alt="card6" />
                            </div>
                            <div className="product-design">
                                <div className="rectangle-image">
                                    <img src={Productdesign} alt="rectangle" />
                                </div>
                                <div className="product-design-text absolute">
                                    <h1 className="mt-10 mb-10 f-s-22 f-fm f-clr-black f-w-600">Product Design</h1>
                                    <p className="design-text f-s-18 f-fm clr-5a ">Every product must make a statement and we’re ready to create it with holistic approach to
                                                    design. </p>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                    <div className="side-image-leaf ml-16">
                        <img src={Sideimg} alt="side-img" />
                    </div>

                </div>
            </div>

            <div className="container-fluid home-page-second-part-main animated-new-area">
                <div className="image-mobile"><div><img className="mobile-image" src={Mobileview} alt="mobile" /></div></div>
                <div className="who-we-are w-full flex">
                    <img className="threedott" src={Dott3img} alt="dot" />
                    <div className="partB-start w-1/2 flex flex-col justify-center ml-24 mt-10" data-aos="fade-right" data-aos-duration="2000">
                        <div className="diamond-image">
                            <img className="diamond" src={Diamondimg} alt="diamond" />
                        </div>
                        <div className="who-we-are-heading w-2/3"><h1 className="f-s-18 f-fm clr-5a f-w-b our-services-head">Who We Are</h1></div>
                        <div className="who-we-are-heading" >
                            <h1 className="f-s-42 f-fm f-clr-black f-w-b">Insights and resources to help drive your business forward faster.</h1>
                        </div>
                        <div className="second-part-text">
                            <p className="f-s-18 f-fm clr-rgba-90-9  ">We build results-oriented brand strategies and continually refine your campaigns for the greatest
                            outcome. From full-scale design interface to development,
                                               right through to our precise execution and reporting...that's right, we've got you covered</p>
                        </div>
                        <div className="read-succes-story-button mt-10">
                            <button className="read-success-button f-fm btn-clr clr-half-white">Read Success Story</button>
                        </div>
                    </div>
                    <div className="partB-image w-1/2 mt-48" data-aos="fade-left" data-aos-duration="2000">
                        <div className="layer-img">
                            <img src={Layer} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}