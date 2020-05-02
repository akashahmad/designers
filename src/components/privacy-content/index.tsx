import React from 'react'
import { Link } from "gatsby"

export default () => {
    return(
        <div className="fourofour-page privacy-page">
            <div>
                <div className="content-section">
                    <h2>What are cookies</h2>
                    <p>As per common practice by almost all modern professional websites; this site uses cookies. Cookies are tiny files that are downloaded to a user’s computer, to improve their over all browsing experience. This page describes what information they gather, how we use it and whywe sometimes need to store cookies. We will also share how you can prevent cookies from being stored. You should know that doing so may downgrade or ‘break’ certain elements of this site’s functionality, We use cookies for a variety of reasons listed below.</p>
                    <h2>Why we use cookies</h2>
                    <p>We collect information that your browser sends whenever you visit our Site (“Log Data”). This Log Data may include information such as your computer’s  ​IP ​address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
                    <h2>Personal Information give out</h2>
                    <p>Geekshub never shares your personal information and documents with any third-party, If it’s not for any valid legal processes.</p>
                    <h2>Data security</h2>
                    <p>None of the Geekshub’s personals have access to your information, except for the manager incharge of the customer communications.</p>
                    <h2>We use Third Party Cookies</h2>
                    <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.Third-party analytics are used to track and measure usage of this site so that we can continue toproduce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.From time to time we test new features and make subtle changes to the way that this site is delivered. When we are in the process of testing new features, cookies may be used to ensure that you receive a consistent experience whilst on the site. Doing so helps us understand which new features users appreciate the most.</p>
                    <h2>Contact us</h2>
                    <p>If you  have any queries regarding cookies or the information shared on this page, feel free to contact us.</p>
                    <div className="space-top"><Link to="/contact-us#form"> info@geekshub.org</Link></div>
                </div>
            </div>
        </div>
    )
}