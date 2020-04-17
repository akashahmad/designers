import React from "react"
import Header from "../components/header/index"
import Footer from "../components/footer/index"
import { Helmet } from "react-helmet";
import { Link } from "gatsby"


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
                <meta property="DC.date.issued" content="2017-04-04T16:12:12-05:00"/>
                <meta name="google-site-verification" content="JSDvTu058M1UuhdASFVpudUNAhW8rLEJGaIVj4VmyuE"/>
            </Helmet>
            <div>
                <Header />
                <div className="fourofour-page">
                    <div>
                        <h1>Page not found</h1>
                        <p>Oops! The page you are looking for has been removed or relocated.</p>
                        <Link to="/">
                            Go Back
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
