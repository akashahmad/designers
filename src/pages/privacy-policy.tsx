import React from "react";
import Header from "../components/header/index"
import Footer from "../components/footer/index"
import Headerb from "../components/privacy-header"
import Privacycontent from "../components/privacy-content"
import {Helmet} from "react-helmet"

export default () => {
    const translator = `function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
        }`;
    const translator1 = `function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.VERTICAL}, 'google_translate_element1');
        }`;
    return (
        <>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>Geeks Hub</title>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="website"/>
            <link rel="alternate" href="https://www.geekshub.io" hreflang="en-us" />
            <link rel="canonical" href="https://www.geekshub.io/privacy-policy/" />
            <meta name="description"
                  content="We are working with the modern technologies to build web applications and hybrid applications in both corporate and startup environments with broad and diverse experience that balance code, cost, user experience and performance."/>
            <meta name="keywords"
                  content="Development, Mobile Development, UX/UI, NodeJS, javascript, web design, web dev, geekshub, geeks, hub, geekshub.io, geekshub.org"/>
            <meta name="author" content="GeeksHub"/>
            <meta property="og:title" content="GeeksHub"/>
            <meta property="og:description"
                  content="We are working with the modern technologies to build web applications and hybrid applications in both corporate and startup environments with broad and diverse experience that balance code, cost, user experience and performance."/>
            <meta property="og:url" content="https://www.geekshub.io/"/>
            <meta property="og:site_name" content="GeeksHub"/>
            <meta property="og:image" content={require("../images/geekshub-black-logo.png")}/>
            <meta property="og:image:width" content="420"/>
            <meta property="og:image:height" content="420"/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:description"
                  content="We are working with the modern technologies to build web applications and hybrid applications in both corporate and startup environments with broad and diverse experience that balance code, cost, user experience and performance."/>
            <meta name="twitter:title" content="GeeksHub"/>
            <meta name="twitter:site" content="@Geeks__Hub"/>
            <meta name="twitter:image" content={require("../images/geekshub-black-logo.png")}/>
            <meta name="twitter:creator" content="@Geeks__Hub"/>
            <meta property="DC.date.issued" content="2017-04-04T16:12:12-05:00"/>
            <meta name="google-site-verification" content="JSDvTu058M1UuhdASFVpudUNAhW8rLEJGaIVj4VmyuE"/>
            <script type="text/javascript" async>
                {typeof document !== "undefined" && document.body.clientWidth > 991 && translator}
            </script>
            <script type="text/javascript" async>
                {typeof document !== "undefined" && document.body.clientWidth < 992 && translator1}
            </script>
            <script type="text/javascript"
                    src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        </Helmet>
        <Header />
        <Headerb />
        <Privacycontent />
        <Footer />
        </>
    )
}