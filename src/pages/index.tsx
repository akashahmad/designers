import React, { ReactElement, useState, useEffect } from "react"
import Header from "../components/home-page-header/index"
import Footer from "../components/footer/index"
import Fantacy from "../components/fantacy-card/index"
import Whowe from "../components/who-we-are/index"
import Services from "../components/services/index"
import Agency from "../components/agency-task/index"
import { Helmet } from "react-helmet"

interface Props {}

function Index({}: Props): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Geeks Hub</title>
      </Helmet>
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