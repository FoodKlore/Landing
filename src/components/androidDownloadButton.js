import React from "react"
import AndroidDownloadImage from "src/images/AndroidBadgeBanner.svg"
import styled from "styled-components"

const AndroidDownloadButton = props => (
  <a
    href="https://example.com"
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

  @media screen and (max-width: 699px) {

  }
`

export default AndroidDownloadButton
