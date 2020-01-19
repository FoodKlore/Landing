import React from "react"
import AndroidDownloadImage from "src/images/AndroidBadgeBanner.svg"

const AndroidDownloadButton = props => (
  <a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    <img alt="Download the App for Android" src={AndroidDownloadImage}></img>
  </a>
)

export default AndroidDownloadButton
