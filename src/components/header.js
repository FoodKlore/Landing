import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#69BC8B`,
    }}
  >
    <div style={styles.navBar}>
      <figure style={styles.logoWrapper}>
        {/* <img
          style={styles.logo}
          src="https://bccic.ca/wp-content/uploads/2016/12/example-logo-660x330.png"
        /> */}
      </figure>
      <Navigation />
    </div>
  </header>
)

const styles = {
  logo: {
    width: "100px",
    height: "100px",
  },
  navBar: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
  logoWrapper: {
    display: "flex",
  },
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
