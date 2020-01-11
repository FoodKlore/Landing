import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import FoodKloreLogo from "./foodKloreLogo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#69BC8B`,
    }}
  >
    <div style={styles.navBar}>
      <figure style={styles.logoWrapper}>
        <FoodKloreLogo />
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
