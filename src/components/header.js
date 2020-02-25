import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import FoodKloreLogo from "./foodKloreLogo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#69BC8B`,
      height: "10vh",
      display: "flex"
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
    width: "101px",
    height: "43.3px",
  },
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0% 5% 0% 5%",
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
