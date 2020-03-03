import React from "react"
import styled from "styled-components"
import { DownloadApp } from "./global/"
import scrollTo from 'gatsby-plugin-smoothscroll'

const Navigation = () => (
  <nav
    style={{
      width: "50%",
    }}
  >
    <LinksWrapper>
      <li>
        <span  onClick={() => scrollTo("#home")} >Home</span>
      </li>
      <li>
        <span  onClick={() => scrollTo("#whatweoffer")} >What we offer</span>
      </li>
      <li>
        <span  onClick={() => scrollTo("#howitworks")} >How it works</span>
      </li>
      <li>
        <span  onClick={() => scrollTo("#foddies")} >Foddies</span>
      </li>
      <li>
        <DownloadApp width="149px" height="42px" />
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
      span {
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
        cursor: pointer;
        &:hover {
          border-bottom: 2px solid #e83b54;
          padding-bottom: 14px;
          box-sizing: border-box;
        }
      }
    }
    @media only screen and (max-width: 699px) {
      li {
        display: none;
      }
    }
  }
`

export default Navigation
