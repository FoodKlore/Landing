import React from "react"
import styled from "styled-components"
import AndroidDownloadButton from "../androidDownloadButton"
import IOSDownloadButton from "../iOSDownloadButton"

const DownloadApp = () => (
  <DownloadWrapper
  >
    <AndroidDownloadButton />
    <IOSDownloadButton />
  </DownloadWrapper>
)

const DownloadWrapper = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    z-index: 4;
`

export default DownloadApp
