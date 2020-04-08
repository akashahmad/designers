import React, { ReactElement, useState, useEffect } from "react"
import Header from "../components/services-header/index"
import Footer from "../components/footer/index"
import Content from "../components/services-content/index"

export default () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
