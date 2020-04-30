import React, {useState} from "react"
import axios from 'axios';
import Cards from '../contact-cards/index';
// import Data from '../config';
export default () => {
    // console.log(Data)
    const [isSubmited, setIsSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [content, setContent] = useState('');
    const submitHandler = (event) => {
        setIsSubmitted(true);
    axios.post(`https://geekshub.herokuapp.com/contact`,
        {
            "Name": name,
            "Email": email,
            "Website": website,
            "Message": content
        })
      .then(res => {
        console.log(res.statusText)
      })
    }
    return (
        <div className="form-cards">
            <Cards/>
            
            <section className="contact-form" >
            <div className="contact-primary">
                <div className="contact-head">
                    <h2 id="form">Get In Touch With Us</h2>
                </div>
                <div className="form-container">
                    <div className="jaliright-container"></div>
                    <div className="form-div">
                        <div className="jali-container"></div>
                        <div className="form-main">
                            {isSubmited?<div className="container-success">
                                <div className="tick-image"></div>
                                  <div><h2>Form Successfully Submitted. We'll Get Back To You Soon!</h2></div>
                                </div>:
                                <form onSubmit={(event) => submitHandler(event)}>
                                <div className="name-input">
                                    <input type="text" placeholder="Name" onChange={event => setName(event.target.value)} required/>
                                </div>
                                <div className="emailpass">
                                    <input type="email" placeholder="Email" onChange={event => setEmail(event.target.value)} required/>
                                    <input type="text" placeholder="Website" onChange={event => setWebsite(event.target.value)}/>
                                </div>
                                <div className="text-from">
                                    <textarea placeholder="How can we help ?" onChange={event => setContent(event.target.value)} required/>
                                </div>
                                <div className="btn-container">
                                    <button type="submit" className="btn-orange-color btn-form">Submit</button>
                                </div>
                            </form>}
                        </div>
                    </div>
                    <div className="quick-links">
                        <div className="quick-head">
                            <h2>Quick Find Us </h2>
                        </div>
                        <div className="quick-detail">
                            <h3>Email:</h3>
                            <p>info@geekshub.org</p>
                        </div>
                        <div className="quick-detail">
                            <h3>Contact Number</h3>
                            <h3>+92 (0) 3333453636</h3>
                            <p>Monday–Friday 9am-6pm</p>
                        </div>
                        <div className="quick-detail">
                            <h3>Address</h3>
                            <p>Suit 8/A First floor IT Park</p>
                            <p>Abbottabad, Pakistan</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
