import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navigation = () => (
  <nav>
    <LinksWrapper>
      <li>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Why us?
        </Link>
      </li>
      <li>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          How it works
        </Link>
      </li>
      <li>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Foddies
        </Link>
      </li>
      <li>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Download App
        </Link>
      </li>
    </LinksWrapper>
  </nav>
)

const LinksWrapper = styled.ul`
  & {
    display: flex;
    justify-content: space-evenly;
  }
  li {
    list-style: none;
    padding: 2%;
    box-sizing: border-box;
  }
`

export default Navigation
