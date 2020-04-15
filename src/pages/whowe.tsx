import React, { ReactElement, useState, useEffect } from "react"
import Header from "../components/whowe-header/index"
import Footer from "../components/footer/index"
import About from "../components/about-whowe"
import Detail from "../components/whatwe-detail"
import Projects from "../components/project-score"
import Ourteam from "../components/our-team"
export default () => {
  return (
    <div>
      <Header />
      <About />
      <Detail />
      <Projects />
      <Ourteam />
      <Footer />
    </div>
  )
}
