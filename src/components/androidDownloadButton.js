import React from "react"
import AndroidDownloadImage from "src/images/AndroidBadgeBanner.svg"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const AndroidDownloadButton = props => (
  <a
    onClick={() => {
      scrollTo("#subscribe");
      document.getElementById("input_name").focus();
    }}
    onKeyDown={() => {
      scrollTo("#subscribe");
      document.getElementById("input_name").focus();
    }}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    <ResponsiveImg alt="Download the App for Android" src={AndroidDownloadImage}></ResponsiveImg>
  </a>
)

const ResponsiveImg = styled.img`
  width: 155px;
  height: 60px;
  cursor: pointer;
  @media screen and (max-width: 699px) {

  }
`

export default AndroidDownloadButton
