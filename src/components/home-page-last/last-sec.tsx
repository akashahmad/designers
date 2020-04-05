import React from 'react'
import '../../Style/main.scss'
import '../home-page-last/style.scss'
import Leafimg from '../../images/leaves.png'
import Backgroundimg from '../../images/bgimg2.png'
import Cardimg1 from '../../images/c1.png'
import Cardimg2 from '../../images/c2.png'
import Cardimg3 from '../../images/c3.png'
import Cardimg4 from '../../images/c4.png'
import Cardimg5 from '../../images/c5.png'
import Cardimg6 from '../../images/c6.png'
// import Modal from '../../../node_modules/react-modal-bootstrap/dist/react-modal-bootstrap'

export default (props) => {
    let { show, setShow, setPopup } = props;
    const openPopup = () => {
        setShow(true);
        setPopup(true);
    }
    return (
        <>
            {
                show ?
                    <div id="cards" className=" container-fluid hhghg">
                        <div className="container-fluid Last-section-Agency-Task ">
                            <div className="Last-section w-full flex justify-center">
                                <div className="background-img">
                                    <img ClassName="mt-40" src={Backgroundimg} alt="main-img" />
                                </div>
                                <div className="Agency-tasks w-11/12 absolute  ">
                                    <div className="class-set ml-40">
                                        <div className="leaf-design-img">
                                            <img className="leaf h-20" src={Leafimg} alt="leaf-img" />
                                        </div>
                                        <div className="main-head-last-sec f-fm  f-w-b">
                                            <h1 className="f-s-44">We have done lot of<br/> Agency Task</h1>
                                        </div>
                                    </div>

                                    <div className="cards first-container flex justify-around ">
                                        <div className="Card1 ">
                                            <img className="cardimg" src={Cardimg1} alt="card1" />
                                            <div className="overlay" onClick={() => { openPopup() }}>
                                                <div className="text"> A team of experienced developers and designers, ready to help you
                            </div>
                                            </div>
                                        </div>
                                        <div className="Card1">
                                            <img className="cardimg" src={Cardimg2} alt="card1" />
                                            <div className="overlay" onClick={() => { openPopup() }} >
                                                <div className="text"> A team of experienced developers and designers, ready to help you
                            </div>
                                            </div>
                                        </div>
                                        <div className="Card1">
                                            <img className="cardimg" src={Cardimg3} alt="card1" />
                                            <div className="overlay" onClick={() => { openPopup() }} >
                                                <div className="text"> A team of experienced developers and designers, ready to help you
                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cards flex justify-around mt-10">
                                        <div className="Card1">
                                            <img className="cardimg" src={Cardimg4} alt="card1" />
                                            <div className="overlay" onClick={() => { openPopup() }} >
                                                <div className="text"> A team of experienced developers and designers, ready to help you
                            </div>
                                            </div>
                                        </div>
                                        <div className="Card1">
                                            <img className="cardimg" src={Cardimg5} alt="card1" />
                                            <div className="overlay" onClick={() => { openPopup() }} >
                                                <div className="text"> A team of experienced developers and designers, ready to help you
                            </div>
                                            </div>
                                        </div>
                                        <div className="Card1">
                                            <img className="cardimg" src={Cardimg6} alt="card1" />
                                            <div className="overlay" onClick={() => { openPopup() }} >
                                                <div className="text"> A team of experienced developers and designers, ready to help you
                            </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    : ""}
        </>
    )
}