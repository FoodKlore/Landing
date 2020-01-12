import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import FoodKloreLogo from "./foodKloreLogo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#69BC8B`,
      paddingTop: "2.5%",
      paddingBottom: "2.5%",
    }}
  >
    <div style={styles.navBar}>
      <div style={{ width: `101px` }}>
        <FoodKloreLogo />
      </div>
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
    alignItems: "center",
    width: "100%",
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
