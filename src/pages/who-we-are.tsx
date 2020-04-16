import React from "react"
import Header from "../components/whowe-header/index"
import Footer from "../components/footer/index"
import About from "../components/about-whowe"
import Detail from "../components/whatwe-detail"
import Projects from "../components/project-score"
import Ourteam from "../components/our-team"
import Headernav from "../components/header/index"
import {Helmet} from "react-helmet"

export default () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>Geeks Hub</title>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="website"/>
            <meta name="description"
                  content="We build business web and application development services that balance code, cost, and compliance. Premium quality. Ethical sourcing."/>
            <meta name="keywords"
                  content="Development, Mobile Development, UX/UI, NodeJS, javascript, web design, web dev, geekshub, geeks, hub, geekshub.org"/>
            <meta name="author" content="GeeksHub"/>
            <meta property="og:title" content="GeeksHub"/>
            <meta property="og:description"
                  content="We build business web and application development services that balance code, cost, and compliance. Premium quality. Ethical sourcing."/>
            <meta property="og:url" content="https://www.geekshub.org/"/>
            <meta property="og:site_name" content="GeeksHub"/>
            <meta property="og:image" content={require("../images/geekshub-black-logo.png")}/>
            <meta property="og:image:width" content="420"/>
            <meta property="og:image:height" content="420"/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:description"
                  content="We build business web and application development services that balance code, cost, and compliance. Premium quality. Ethical sourcing."/>
            <meta name="twitter:title" content="GeeksHub"/>
            <meta name="twitter:site" content="@Geeks__Hub"/>
            <meta name="twitter:image" content={require("../images/geekshub-black-logo.png")}/>
            <meta name="twitter:creator" content="@Geeks__Hub"/>
            <meta property="DC.date.issued" content="date when website was created"/>
            <meta name="google-site-verification" content="JSDvTu058M1UuhdASFVpudUNAhW8rLEJGaIVj4VmyuE"/>
        </Helmet>
        <Headernav />
        <Header />
        <About />
        <Detail />
        <Projects />
        <Ourteam />
        <Footer />
        </>
    )
}
