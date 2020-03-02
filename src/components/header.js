import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import FoodKloreLogo from "./foodKloreLogo"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <ResponsiveHeader>
    <div style={styles.navBar}>
      <div style={{ width: `101px` }}>
        <FoodKloreLogo />
      </div>
      <Navigation />
    </div>
  </ResponsiveHeader>
)

const ResponsiveHeader = styled.header`
  background: #69BC8B;
  height: 15vh;
  display: flex;

  @media screen and (max-width: 699px) {
    height: 10vh;
  }
`

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
