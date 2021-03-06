/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ResponsiveMain
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </ResponsiveMain>
      <footer></footer>
    </>
  )
}

const ResponsiveMain = styled.main`
  margin-top: -1px;
  @media only screen and (max-width: 699px) {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
