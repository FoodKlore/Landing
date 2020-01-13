import React from "react"
import styled from "styled-components"

const FkDownloadApp = () => (
  <Button>
    <span> Download App </span>
  </Button>
)

const Button = styled.button`
  color: white;
  width: 196px;
  height: 46px;
  border-radius: 8px;
  background-color: #e83b54;
  span {
    width: 115px;
    height: 15px;
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`

export default FkDownloadApp
