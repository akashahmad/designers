import React, { ReactElement, useState, useEffect } from "react"
import Header from "../components/contact-header/index"
import Footer from "../components/footer/index"
import Contactform from "../components/contact-form"

interface Props {}

function Index({}: Props): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div>
        <Header />
        <Contactform />
        <Footer />
      </div>
    </>
  )
}

export default Index
