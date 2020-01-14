import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FkDownloadApp } from "./global"

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
        height: 14px;
        font-family: Montserrat;
        font-size: 11px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.27;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;
        &:hover {
          border-bottom: 2px solid #e83b54;
          padding-bottom: 14px;
          box-sizing: border-box;
        }
      }
      button {
        background-color: #e83b54;
        color: white;
        border-color: #e83b54;
        border-radius: 7%;
        height: 50px;
        span {
          padding: 10px;
        }
      }
    }
  }
`

export default Navigation
