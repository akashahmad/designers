import React from 'react'
import '../footer/style.scss'
import '../../Style/main.scss'
import '../../Responsivecss/footer-responsive.scss'
import Footerimg from '../../images/footer-img1.png'
import Footerimg2 from '../../images/footer-bg.png'
import Dottedimg from '../../images/dots.png'
import Logo from '../../images/logo.png'
import Twittericon from '../../images/twitter.png'
import Football from '../../images/football.png'
import Facebook from '../../images/2020-03-04.png'
export default () => {
    return (
        <div className="the-designers-footer ">
            <div className="contact-us-image flex justify-center ">
                <div className="contact-us-popup bg-white rounded-lg shadow-lg h-64 flex absolute">
                    <div className="back-image">
                        <img src={Footerimg} alt="ssda" />
                    </div>
                   <div className="new-class">
                   <div className="contact-us-information">
                        <h1 className="f-s-28 f-fm f-clr-black f-w-b l-h-35">We are creatives, so it might be about <br/>
                          minions and stuff</h1>
                        <p className=" clr-rgba-90-7 f-s-16 mt-5">We’d love to learn more about your project, business, and users.<br/>
                       Drop us a note to tell us more about what you’re looking to do!</p>
                    </div>
                    <div className="Button-contact-us">
                        <div className="BtN">
                            <button className="contact-us btn-clr clr-half-white f-s-18 f-fm f-w-500">Contact Us</button>
                        </div>
                        <div className="dotted-img">
                            <img className="dotts ml-48 " src={Dottedimg} alt="dott" />
                        </div>
                    </div>
                   </div>
                </div>
            </div>
            <div className="footer-image-designers">
                <img className="footer-image" src={Footerimg2} alt="footer1" />
            </div>
            <div className="footer-image-lists flex justify-center ">
                <div className="footer-links  rounded-lg flex absolute flex justify-around">
                    <div className="new-dev">
                        <div className="flex-setting">
                            <div>
                                <div className="image-container"><a href="#"><img className="footer-logo-img " src={Logo} alt="footer-logo" /> </a>  </div>
                            </div>
                            <div className="ul-setting">
                                <ul>
                                    <li><a href="#"> <img className="football-pic" src={Facebook} alt="football" /></a></li>
                                    <li> <li><a href="#"> <img className="football-pic" src={Twittericon} alt="football" /></a></li></li>
                                    <li> <li><a href="#"> <img className="football-pic" src={Football} alt="football" /></a></li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="copyrights  text-center mt-40 f-s-18  clr-rgba-90-7"><h1 className=" f-s-18">© Copyright  2019   |   All Rights Reserved</h1></div>
                    </div>
                    
                    {/* <div className="flex-initial footer-logo ">
                        <img className="footer-logo-img " src={Logo} alt="footer-logo" />
                    </div>
                    <div className="copyrights w-1/3 text-right mt-40 f-s-18  clr-rgba-90-7"><h1 className=" f-s-18">© Copyright  2019   |   All Rights Reserved</h1></div>

                    <div className="w-1/3 footer-icons flex justify-end">
                        <div className="twitter-icon w-1/3 flex justify-around mt-5 ">
                            <div>
                                <img className="football-pic" src={Facebook} alt="football" />
                            </div>
                            <div>
                                <img className="twiiter-pic" src={Twittericon} alt="twitter" />
                            </div>
                            <div>
                                <img className="football-pic" src={Football} alt="football" />
                            </div>
                        </div>
                        <div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}