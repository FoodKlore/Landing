import React from "react"
import iOSDownloadImage from "src/images/iOsBadgeBanner.svg"

const IOSDownloadButton = props => (
  <a href="https://example.com" target="_blank" {...props}>
    <img src={iOSDownloadImage}></img>
  </a>
)

export default IOSDownloadButton
