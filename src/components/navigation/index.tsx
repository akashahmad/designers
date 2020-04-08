import React from "react"
import { Link } from "gatsby"
typeof document !== "undefined" && AOS.init()
export default () => {
  return (
    <section>
      <ul>
        <li>
          <Link to="">Who We Are</Link>
        </li>
        <li>
          <Link to="">Services</Link>
        </li>
        <li>
          <Link to="#">Protfolio</Link>
        </li>
        <li>
          <Link to="#">Contact Us</Link>
        </li>
      </ul>
    </section>
  )
}
