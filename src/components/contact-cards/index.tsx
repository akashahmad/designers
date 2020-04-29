import React, { useState } from 'react';


export default () => {
    const [desktop, setdesktop] = useState(false);
    const [mobile, setmobile] = useState(false);
    const [other, setother] = useState(false);

    const [front, setfront] = useState(false);
    const [back, setback] = useState(false);
    const [design, setdesign] = useState(false);

    const handle = (key: any) => {
        switch (key) {
            case 'desktop':
                setdesktop(!desktop)
                break;
            case 'mobile':
                setmobile(!mobile)
                break;
            case 'other':
                setother(!other)
                break;
            case 'front':
                setfront(!front)
                break;
            case 'back':
                setback(!back)
                break;
            case 'design':
                setdesign(!design)
                break;
        }
    }
    return (
        <section className="contant-cards-section">
            <div className="card-primary">
                <div className="card-contact">
                    <div className="content-head">
                        <h2>What is the device of your project?</h2>
                    </div>
                    <div className="con-cards">
                        <div>
                            <div className={`contact-main-cards ${desktop ? 'active-card' : ''}`} onClick={() => handle('desktop')}>
                                <div className="logo-icon">
                                    <img src={require('../../images/desktop-contact.png')} alt=""/>
                                </div>
                                <div>
                                    <p>Desktop</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={`contact-main-cards ${mobile ? 'active-card' : ''}`} onClick={() => handle('mobile')}>
                                <div className="logo-icon">
                                    <img src={require('../../images/mobile.png')} alt=""/>
                                </div>
                                <div>
                                    <p>Mobile</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={`contact-main-cards ${other ? 'active-card' : ''}`} onClick={() => handle('other')}>
                                <div className="logo-icon">
                                    <img src={require('../../images/desk.png')} alt=""/>
                                </div>
                                <div>
                                    <p>Other</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-primary">
                <div className="card-contact">
                    <div className="content-head">
                        <h2>What is the scope of your project?</h2>
                    </div>
                    <div className="con-cards">
                        <div>
                            <div className={`contact-main-cards ${front ? 'active-card' : ''}`} onClick={() => handle('front')}>
                                <div className="logo-icon">
                                    <img src={require('../../images/html.png')} alt=""/>
                                </div>
                                <div>
                                    <p>Front End</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={`contact-main-cards ${back ? 'active-card' : ''}`} onClick={() => handle('back')}>
                                <div className="logo-icon">
                                    <img src={require('../../images/mobile.png')} alt=""/>
                                </div>
                                <div>
                                    <p>Back End</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={`contact-main-cards ${design ? 'active-card' : ''}`} onClick={() => handle('design')}>
                                <div className="logo-icon">
                                    <img src={require('../../images/desk.png')} alt=""/>
                                </div>
                                <div>
                                    <p>Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}