import React from "react"
import { Link } from "gatsby"
export default () => {
  return (
    <section>
      <ul>
        <li>
          <Link to="whowe">Who We Are</Link>
        </li>
        <li>
          <Link to="services">Services</Link>
        </li>
        <li>
          <Link to="#">Protfolio</Link>
        </li>
        <li>
          <Link to="contact">Contact Us</Link>
        </li>
      </ul>
    </section>
  )
}
