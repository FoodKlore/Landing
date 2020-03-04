import React from "react"
import styled from "styled-components"

const DownloadApp = ({ width, height }) => (
  <Button width={width} height={height}>
    Download App
  </Button>
)

const Button = styled.button`
  color: white;
  width: ${props => (props.width ? props.width : "196px")};
  height: ${props => (props.height ? props.height : "46px")};
  border-radius: 8px;
  background-color: #e83b54;
  border: 0px;
  font-size: 11px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.27;
`

export default DownloadApp
