import React from "react"
import iOSDownloadImage from "src/images/iOsBadgeBanner.svg"

const IOSDownloadButton = props => (
  <a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    <img alt="Download the App for iOS" src={iOSDownloadImage}></img>
  </a>
)

export default IOSDownloadButton
