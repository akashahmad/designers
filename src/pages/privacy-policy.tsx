import React from "react";
import Header from "../components/header/index"
import Footer from "../components/footer/index"
import Headerb from "../components/privacy-header"
import Privacycontent from "../components/privacy-content"

export default () => {
    return (
        <>
            <Header />
            <Headerb />
            <Privacycontent />
            <Footer />
        </>
    )
}