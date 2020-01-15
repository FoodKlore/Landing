import React from "react"
import styled from "styled-components"

const DownloadApp = ({ width, height }) => (
  <Button width={width} height={height}>
    <span> Download App </span>
  </Button>
)

const Button = styled.button`
  color: white;
  width: ${props => (props.width ? props.width : "196px")};
  height: ${props => (props.height ? props.height : "46px")};
  border-radius: 8px;
  background-color: #e83b54;
  border: 0px;
  span {
    width: 85px;
    height: 14px;
    font-size: 11px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`

export default DownloadApp