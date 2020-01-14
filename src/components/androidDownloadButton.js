import React from "react"
import AndroidDownloadImage from "src/images/AndroidBadgeBanner.svg"

const AndroidDownloadButton = props => (
  <a href="https://example.com" target="_blank" {...props}>
    <img src={AndroidDownloadImage}></img>
  </a>
)

export default AndroidDownloadButton
