import React, { ReactElement, useState } from "react"
import Header from "../components/header/header.tsx"
import Home from "../components/homepage/home"
import HomesecB from "../components/home-pages-secB/sec-B.tsx"
import HomesecC from '../components/home-page-secC-ourservices/SecC-ourservices.tsx'
import Homelastsec from '../components/home-page-last/last-sec.tsx'
import Footer from '../components/footer/footer.tsx'
interface Props {}

function Index({}: Props): ReactElement {
  const [show, setShow] = useState(true);
    const [popup, setPopup] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div>
        <Header />
        <Home />
         <HomesecB/> 
        <HomesecC/> 
        <Homelastsec show={show} setShow={setShow} popup={popup} setPopup={setPopup}/>
        {/* <Modal  popup={popup} setPopup={setPopup} show={show} setShow={setShow}/>   */}
        <Footer/>  
      </div>
    </>
  )
}

export default Index
