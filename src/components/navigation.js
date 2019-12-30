import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navigation = () => (
  <nav>
    <LinksWrapper>
      <div id="linksInnerWrapper">
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
      </div>
      <li>
        <button>
          <span> Download App </span>
        </button>
      </li>
    </LinksWrapper>
  </nav>
)

const LinksWrapper = styled.ul`
  & {
    display: flex;
    justify-content: space-evenly;
    margin: 0;
  }
  #linksInnerWrapper {
    display: flex;
    align-items: center;
  }
  li {
    list-style: none;
    padding: 0% 5% 0% 5%;
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
`

export default Navigation
