import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FkDownloadApp } from "./global/"
const Navigation = () => (
  <nav
    style={{
      width: "50%",
    }}
  >
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
        <FkDownloadApp />
      </li>
    </LinksWrapper>
  </nav>
)

const LinksWrapper = styled.ul`
  & {
    display: flex;
    justify-content: space-between;
    margin: 0;
    align-items: center;
    li {
      list-style: none;
      * {
        white-space: nowrap;
      }
      a {
        color: white;
        text-decoration: none;
        &:hover {
          border-bottom: 2px solid #e83b54;
          padding-bottom: 14px;
          box-sizing: border-box;
        }
      }
    }
  }
`

export default Navigation
