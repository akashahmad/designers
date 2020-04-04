import React, { ReactElement, useState } from "react"
import Home from "../components/homepage/home"
import Header from "../components/header/header"
interface Props {}

function Index({}: Props): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div>
        <Header />
        <Home />
        {/* <HomesecB/>  */}
        {/* <HomesecC/>  */}
        {/* <Homelastsec show={show} setShow={setShow} popup={popup} setPopup={setPopup}/> */}
        {/* <Modal  popup={popup} setPopup={setPopup} show={show} setShow={setShow}/>   */}
        {/* <Footer/>   */}
      </div>
    </>
  )
}

export default Index
