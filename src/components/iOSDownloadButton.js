import React from "react"
import iOSDownloadImage from "src/images/iOsBadgeBanner.svg"
import styled from 'styled-components'

const IOSDownloadButton = props => (
  <a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    <ResponsiveImg alt="Download the App for iOS" src={iOSDownloadImage} width={125.1} height={41.8}></ResponsiveImg>
  </a>
)

const ResponsiveImg = styled.img`
  width: 125.1px;
  height: 41.8px;

  @media screen and (max-width: 699px) {
    width: 148.1px;
    height: 45.8px;
  }
`

export default IOSDownloadButton
