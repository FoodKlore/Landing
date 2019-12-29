import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navigation = () => (
  <nav>
    <LinksWrapper>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Why us?</Link>
      </li>
      <li>
        <Link to="/">How it works</Link>
      </li>
      <li>
        <Link to="/">Foddies</Link>
      </li>
      <li>
        <Link to="/">Download App</Link>
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
    padding: 0% 5% 0% 5%;
    a {
      white-space: nowrap;
      /* margin-top: 2px; */
      color: white;
      text-decoration: none;
      &:hover {
        border-bottom: 2px solid #e83b54;
        padding-bottom: 14px;
        box-sizing: border-box;
      }
    }
  }
`

export default Navigation
