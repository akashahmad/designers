import React, { useState } from "react";
import AOS from "aos";
import "./style.css";
import { Link } from 'gatsby';
import { Carousel } from 'react-responsive-carousel';
typeof document !== "undefined" && AOS.init()
export default () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState(false);
  const [eight, setEight] = useState(false);
  const [nine, setNine] = useState(false);
  const [ten, setTen] = useState(false);
  const [eleven, setEleven] = useState(false);
  const [tw, setTw] = useState(false);
  const handleCheck = (key: any) => {
    switch (key) {
      case '1':
        setFirst(!first)
        break;
      case '2':
        setSecond(!second)
        break;
      case '3':
        setThird(!third)
        break;
      case '4':
        setFour(!four)
        break;
      case '5':
        setFive(!five)
        break;
      case '6':
        setSix(!six)
        break;
      case '7':
        setSeven(!seven)
        break;
      case '8':
        setEight(!eight)
        break;
      case '9':
        setNine(!nine)
        break;
      case '10':
        setTen(!ten)
        break;
      case '11':
        setEleven(!eleven)
        break;
      case '12':
        setTw(!tw)
        break;
    }
  }
  const handleClose = () => {
    setFirst(false);
    setSecond(false);
    setThird(false);
    setFour(false);
    setFive(false);
    setSix(false);
    setSeven(false);
    setEight(false);
    setNine(false);
    setTen(false);
    setEleven(false);
    setTw(false);
  }
  return (
    <section className="agency">
      <div className="agency-main">
        <div className="agency-primary">
          <div className="agency-head" data-aos="fade-right">
            <div className="leaf-image vert-move" />
            <div className="agency-header">
              <h2>We have done lot of Agency Task</h2>
            </div>
          </div>
          <div className="agency-carousel">
            <Carousel>
              <div className="task-container-primary">
                <div>
                  {first && <div className="popup">
                    <div className="agency-popup">
                      <div className="agency-content">
                        <div>
                          <div className="image-popup" style={{
                            backgroundImage: "url(" + require('../../images/finance.png') + ")"
                          }}></div>
                        </div>
                        <div>
                          <div className="content-info">
                            <div className="close-icon" onClick={() => handleClose()}><span>&#10006;</span></div>
                            <h2>AB|FINANCE</h2>
                            <span><a href="https://ab.finance/" target="_blank">Website Link</a></span>
                            <p>We help you finance a purchase the yacht of your dreams<br />
                            AB|Finance is a member of the Azimut Benetti group, incorporated to assist in financingacquisitions of Azimut yachts.</p>
                            <p>The company will offer finance to customers to assist in the initial purchase of the vessel andshall contribute up to 50% of the purchase price net of taxes.<br />
                             The company provides a standard term of 5 years, or 60 monthly installments. In someexceptions, this can be modified to suit the client's needs, however this is at AB Finance's solediscretion.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                  <div className="task-container" style={{
                    backgroundImage: "url(" + require('../../images/finance.png') + ")"
                  }} onClick={() => handleCheck("1")}>
                    <div className="task-overlay">
                      <div className="centent-center">
                        <p>
                          AB|FINANCE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {second && <div className="popup">
                    <div className="agency-popup">
                      <div className="agency-content">
                        <div>
                          <div className="image-popup" style={{
                            backgroundImage: "url(" + require('../../images/equil.png') + ")"
                          }}></div>
                        </div>
                        <div>
                          <div className="content-info">
                            <div className="close-icon" onClick={() => handleClose()}><span>&#10006;</span></div>
                            <h2>Equal parts</h2>
                            <span><a href="https://equalparts.com/" target="_blank">Website Link</a></span>
                            <p>Meet high-quality cookware designed to cook faster and clean easier<br />
                            Equal Parts cookware is coated with non-toxic ceramic, so you don’t have to worry aboutharmful chemicals (no PFOA or PTFE) making their way into your food as you cook. And withnon-stick properties, it serves and cleans easily.
                            </p>
                            <p>We want to help you build a kitchen you love without taking up valuable space. We consciouslydesigned our products to be multi-purpose, suitable for cooking and serving. Plus, our pots andpans and mixing bowls also feature universal lids.<br />
                            We chose matte black so our products feel at home in any kitchen. Our gender-neutralapproach makes them classic and accessible for any home cook.
                            </p>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                  <div className="task-container" style={{
                    backgroundImage: "url(" + require('../../images/equil.png') + ")"
                  }} onClick={() => handleCheck('2')}>
                    <div className="task-overlay">
                      <div className="centent-center">
                        <p>
                          Equal parts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {third && <div className="popup">
                    <div className="agency-popup">
                      <div className="agency-content">
                        <div>
                          <div className="image-popup" style={{
                            backgroundImage: "url(" + require('../../images/chaboni.png') + ")"
                          }}></div>
                        </div>
                        <div>
                          <div className="content-info">
                            <div className="close-icon" onClick={() => handleClose()}><span>&#10006;</span></div>
                            <h2>Chaboni Foodservice</h2>
                            <span><a href="https://www.chobanifoodservice.com/" target="_blank">Website Link</a></span>
                            <p>Something for everyone<br />
                            Chobani® Greek Yogurt is the perfect option for delivering on great taste and functionality. Yourmenu can do it all with these healthy replacements.<br />
                            Chobani is on a mission to provide better food for more people, including those withmedically-based dietary restrictions. This resource provides information and tips for building adelicious, balanced gluten-free diet using nutrient-rich Chaboni Greek Yogurt.
                            </p>
                            <p>With a power-packed protein profile that outweighs the small amount of sugar used to balancetaste, Chaboni Greek Yogurt is a nutritious protein choice that can help people meet dietaryrecommendations and achieve an overall healthier diet conveniently and easily.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                  <div className="task-container" style={{
                            backgroundImage: "url(" + require('../../images/chaboni.png') + ")"
                          }} onClick={() => handleCheck('3')}>
                    <div className="task-overlay">
                      <div className="centent-center">
                        <p>
                          Chaboni Foodservice
                    </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {four && <div className="popup">
                    <div className="agency-popup">
                      <div className="agency-content">
                        <div>
                          <div className="image-popup" style={{
                            backgroundImage: "url(" + require('../../images/neo.png') + ")"
                          }}></div>
                        </div>
                        <div>
                          <div className="content-info">
                            <div className="close-icon" onClick={() => handleClose()}><span>&#10006;</span></div>
                            <h2>NEORig</h2>
                            <span><a href="https://neo-rig.com/">Website Link</a></span>
                            <p>Where German quality & engineering meet American craft <br />
                            The company offers high-quality automated land drilling systems and rig components thatsatisfy the needs of our customers
                            </p>
                            <p>
                              Their worldwide network of state-of-the-art facilities and highly trained staff allows us to offer awide range of services that meet industry specifications<br />
                            hey expand our global manufacturing footprint with fit-for-purpose rig and well constructionsystems that mobilize the future inland drilling.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                  <div className="task-container" style={{
                            backgroundImage: "url(" + require('../../images/neo.png') + ")"
                          }} onClick={() => handleCheck('4')}>
                    <div className="task-overlay">
                      <div className="centent-center">
                        <p>
                          NEORig
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {five && <div className="popup">
                    <div className="agency-popup">
                      <div className="agency-content">
                        <div>
                          <div className="image-popup" style={{
                            backgroundImage: "url(" + require('../../images/letsgets.png') + ")"
                          }}></div>
                        </div>
                        <div>
                          <div className="content-info">
                            <div className="close-icon" onClick={() => handleClose()}><span>&#10006;</span></div>
                            <h2>Letsgetwavy</h2>
                            <span><a href="https://letsgetwavey.com/" target="_blank">Website Link</a></span>
                            <p>Join People Around You Doing Cool Things<br />
                            Joining a party get’s easier than ever with wavy,You can now join the and share the fun with other people.All you have to do is open wavy and click join on any of the party or event that suits you more.
                            </p>
                            <p>Not only parties you can now invite or join anyone on the beach for a little sunbath, joinsomeone for a ride or a Gym session, or in dance practice.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                  <div className="task-container" style={{
                            backgroundImage: "url(" + require('../../images/letsgets.png') + ")"
                          }} onClick={() => handleCheck('5')}>
                    <div className="task-overlay">
                      <div className="centent-center">
                        <p>
                          Letsgetwavy
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {six && <div className="popup">
                    <div className="agency-popup">
                      <div className="agency-content">
                        <div>
                          <div className="image-popup" style={{
                            backgroundImage: "url(" + require('../../images/jpower.jpg') + ")"
                          }}></div>
                        </div>
                        <div>
                          <div className="content-info">
                            <div className="close-icon" onClick={() => handleClose()}><span>&#10006;</span></div>
                            <h2>J.Powers Events</h2>
                            <span><a href="https://jpowers.events/">Website Link</a></span>
                            <p>Elegance in every moment.<br />
                            J.Powers are a team of experienced event managers, luxury event venue and cateredexperience that delivers exceptional service and exquisite cuisine working for more than 3decades in Rochester.<br />
                            They provide event spaces that are fully equipped with state-of-the-art audiovisual technologyand first-class amenities.
                            </p>
                            <p>Whether you’re planning a wedding reception, corporate meeting, or social gathering, eachspace is designed to deliver a luxurious experience.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                  <div className="task-container"  style={{
                            backgroundImage: "url(" + require('../../images/jpower.jpg') + ")"
                          }} onClick={() => handleCheck('6')}>
                    <div className="task-overlay">
                      <div className="centent-center">
                        <p>
                          J.Powers Events
                    </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="task-container-primary">
                <div>
                  {seven && <div className="popup">
                    <div className="agency-popup">
                      <div className="agency-content">
                        <div>
                          <div className="image-popup"  style={{
                            backgroundImage: "url(" + require('../../images/styles.jpg') + ")"
                          }}></div>
                        </div>
                        <div>
                          <div className="content-info">
                            <div className="close-icon" onClick={() => handleClose()}><span>&#10006;</span></div>
                            <h2>The Stylist Group.</h2>
                            <span><a to="https://www.thestylistgroup.com/" target="_blank">Website Link</a></span>
                            <p>The Stylist Group creates content women are proud to enjoy<br />
                            The stylist group are the content creators and magazine designers for the stylists women. Thestylist group are the digital publishers and with pioneering brands Stylist and Stylist Loves.
                            </p>
                            <p>The Stylist Group is committed to nurturing talent – positively encouraging people to buildsatisfying careers within the company.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                  <div className="task-container"  style={{
                            backgroundImage: "url(" + require('../../images/styles.jpg') + ")"
                          }} onClick={() => handleCheck('7')}>
                    <div className="task-overlay">
                      <div className="centent-center">
                        <p>
                          The Stylist Group.
                    </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {seven && <div className="popup">
                    <div className="agency-popup">
                      <div className="agency-content">
                        <div>
                          <div className="image-popup" style={{
                            backgroundImage: "url(" + require('../../images/epress.jpg') + ")"
                          }}></div>
                        </div>
                        <div>
                          <div className="content-info">
                            <div className="close-icon" onClick={() => handleClose()}><span>&#10006;</span></div>
                            <h2>The Everpress</h2>
                            <span><a href="https://everpress.com/" target="_blank">Website Link</a></span>
                            <p>REAL DESIGNS BY REAL ARTISTS FOR REAL PEOPLE<br />
                            Everpress is a global marketplace for independent creativity. By offering the tools to sell,manufacture, and distribute your own creations; they’re changing the way things get made. No risk.No waste. ​A genuine alternative to the tyranny and wastefulness of conventional retail.
                            </p>
                            <p>Their further features include:</p>
                            <ul>
                              <li>Shipping & handling</li>
                              <li>Marketing tips, tricks and tools</li>
                              <li>Payment processing</li>
                              <li>Exporting customer data</li>
                              <li>Evergreen campaigns</li>
                              <li>Online stores</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                  <div className="task-container" style={{
                            backgroundImage: "url(" + require('../../images/epress.jpg') + ")"
                          }} onClick={() => handleCheck('7')}>
                    <div className="task-overlay">
                      <div className="centent-center">
                        <p>
                          The Everpress
                    </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {eight && <div className="popup">
                    <div className="agency-popup">
                      <div className="agency-content">
                        <div>
                          <div className="image-popup" style={{
                            backgroundImage: "url(" + require('../../images/jeans.jpg') + ")"
                          }}></div>
                        </div>
                        <div>
                          <div className="content-info">
                            <div className="close-icon" onClick={() => handleClose()}><span>&#10006;</span></div>
                            <h2>Nudie Jeans</h2>
                            <span><a href="https://www.nudiejeans.com/" target="_blank">Website Link</a></span>
                            <p>Safe shopping at Nudie jeans Home deliveries for all<br />
                            Nudie Jeans is an online Jeans outlet providing the best quality fabric all around the world. In2013, Nudie Jeans launched the Repair Shop concept. With this came a promise; every pair ofNudie Jeans, no matter where you got them, is eligible for free repairs forever.
                            </p>
                            <p>The website hosts Re-use facilities to reduce the textile and water waste. Their Re-use Dropsare launched every now and then to make the best and defectless use of the product</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                  <div className="task-container" style={{
                            backgroundImage: "url(" + require('../../images/jeans.jpg') + ")"
                          }} onClick={() => handleCheck('8')}>
                    <div className="task-overlay">
                      <div className="centent-center">
                        <p>
                          Nudie Jeans
                    </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {nine && <div className="popup">
                    <div className="agency-popup">
                      <div className="agency-content">
                        <div>
                          <div className="image-popup" style={{
                            backgroundImage: "url(" + require('../../images/nodle.jpg') + ")"
                          }}></div>
                        </div>
                        <div>
                          <div className="content-info">
                            <div className="close-icon" onClick={() => handleClose()}><span>&#10006;</span></div>
                            <h2>GYMBOX</h2>
                            <span><a href="https://gymbox.com">Website Link</a></span>
                            <p>Add clean and Jerks to your employee works<br />
                            Gymbox is the chain of non-traditional gyms operating successfully in London. It is home to themost unique and diverse classes in London. Olympic sized boxing rings, combat cages,world-class free weights sections, live DJs and larger-than-life personal trainers.
                            </p>
                            <p>It is a playground designed to motivate people through fitness, fun, and full-on sweat-fests. Witha schedule of 110 classes each week, there’s something for everyone – whether you’re after achallenge that’ll put hairs on your chest or send you soaring to a celestial plane.They also provide very Personal Trainers and all the latest state-of-the-art equipment a gymshould ever have.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                  <div className="task-container" style={{
                            backgroundImage: "url(" + require('../../images/nodle.jpg') + ")"
                          }} onClick={() => handleCheck('9')}>
                    <div className="task-overlay">
                      <div className="centent-center">
                        <p>
                          GYMBOX
                    </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {ten && <div className="popup">
                    <div className="agency-popup">
                      <div className="agency-content">
                        <div>
                          <div className="image-popup" style={{
                            backgroundImage: "url(" + require('../../images/nodle.jpg') + ")"
                          }}></div>
                        </div>
                        <div>
                          <div className="content-info">
                            <div className="close-icon" onClick={() => handleClose()}><span>&#10006;</span></div>
                            <h2>Noodle.Ai</h2>
                            <span><Link to="https://noodle.ai/">Website Link</Link></span>
                            <p>To create a world without waste.<br />
                            Partnering with the world's pioneering organizations to make business more radically efficient,and pushing each other to minimize waste and maximize our resourcefulness.
                            </p>
                            <p>Their quirky, smart, interdisciplinary team of data scientists, engineers, designers, hardwarenerds, and supply chain experts have researched, calculated, coded, designed, and built theleading portfolio of Enterprise AI® products to reduce waste across complex supply chains andmanufacturing companies.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                  <div className="task-container" style={{
                            backgroundImage: "url(" + require('../../images/nodle.jpg') + ")"
                          }} onClick={() => handleCheck('10')}>
                    <div className="task-overlay">
                      <div className="centent-center">
                        <p>
                          Noodle.Ai
                    </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {eleven && <div className="popup">
                    <div className="agency-popup">
                      <div className="agency-content">
                        <div>
                          <div className="image-popup" style={{
                            backgroundImage: "url(" + require('../../images/qc.jpg') + ")"
                          }}></div>
                        </div>
                        <div>
                          <div className="content-info">
                            <div className="close-icon" onClick={() => handleClose()}><span>&#10006;</span></div>
                            <h2>The QC Terme Shop</h2>
                            <span><a href="https://shop.qcterme.com/en" target="_blank">Website Link</a></span>
                            <p>Experiences that improve the quality of life.<br />
                            The QC Terme Wellness Centres offer the best well-being experiences in vast architecturalspaces and large gardens, such as whirlpools, saunas, Turkish baths, Kneipp paths, Japanesebaths, foot baths, waterfalls, Vichy showers, relaxation rooms and massage areas.<br />
                            QC Terme creates comprehensive wellness experiences for those who want to improve theirquality of life in the centers located in Bormio, Pré-Saint Didier, Milan, Turin, Rome, SanPellegrino, The Friulian Dolomites and Chamonix-Mont-Blanc.
                            </p>
                            <p>The centers offer revitalization through the healing properties of the spa water and experiencesthat improve the quality of life.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                  <div className="task-container" style={{
                            backgroundImage: "url(" + require('../../images/qc.jpg') + ")"
                          }} onClick={() => handleCheck('11')}>
                    <div className="task-overlay">
                      <div className="centent-center">
                        <p>
                          The QC Terme Shop
                    </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="task-container-primary">
                <div>
                  {tw && <div className="popup">
                    <div className="agency-popup">
                      <div className="agency-content">
                        <div>
                          <div className="image-popup" style={{
                            backgroundImage: "url(" + require('../../images/isupport.png') + ")"
                          }}></div>
                        </div>
                        <div>
                          <div className="content-info">
                            <div className="close-icon" onClick={() => handleClose()}><span>&#10006;</span></div>
                            <h2>Isupportcause</h2>
                            <span><a href="https://www.isupportcause.com/" target="_blank">Website Link</a></span>
                            <p>Create a viral campaign to support your cause, raise awareness, and promote yourorganization.<br />
                            Over 700,000+ supporters have used iSupportCause to advocate for various social causes andcampaigns. Thousands of non-profit, NGOs, and corporate organizations are usingiSupportCause daily to launch new campaigns, gather supporters, and raise awareness.
                            </p>
                            <ul>
                              <li>Use branding your audience is familiar with to increase trust and engagement.</li>
                              <li>Link to your organization's donation page or other external pages for additional ways tosupport your cause.</li>
                              <li>Keep your supporters focused on your cause by removing advertisements.</li>
                              <li>Link your social accounts to increase your followers.</li>
                              <li>Provide additional images and mission statements to further explain your cause.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
                  <div className="task-container" style={{
                            backgroundImage: "url(" + require('../../images/isupport.png') + ")"
                          }} onClick={() => handleCheck('12')}>
                    <div className="task-overlay">
                      <div className="centent-center">
                        <p>
                          Isupportcause
                    </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <div className="task-slider">
            <Carousel showThumbs={false}>
              <div>
                <img src={require('../../images/c1.jpg')} alt="GeeksHub-Media" loading="lazy" />
              </div>
              <div>
                <img src={require('../../images/c2.jpg')} alt="GeeksHub-Media" loading="lazy" />
              </div>
              <div>
                <img src={require('../../images/c3.jpg')} alt="GeeksHub-Media" loading="lazy" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
