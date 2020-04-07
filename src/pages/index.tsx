import React, { ReactElement, useState } from "react"
import Header from "../components/home-page-header/index"
import Footer from "../components/footer/index"
import Fantacy from "../components/fantacy-card/index"
import Whowe from "../components/who-we-are/index"
import Services from "../components/services/index"
import Agency from "../components/agency-task/index"

interface Props {}

function Index({}: Props): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div>
        <Header />
        <Fantacy />
        <Whowe />
        <Services />
        <Agency />
        <Footer />
      </div>
    </>
  )
}

export default Index
