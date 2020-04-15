import React from "react"
import Header from "../components/home-page-header/index"
import Footer from "../components/footer/index"
import {Helmet} from "react-helmet";
import { Link } from "gatsby"


export default () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>Geeks Hub</title>
        </Helmet>
        <div>
            <Header />
            <h1>Page not found</h1>
            <p>Oops! The page you are looking for has been removed or relocated.</p>
            <Link to="/">
                <p>Go Back</p>
            </Link>
            <Footer />
        </div>
        </>
    )
}
