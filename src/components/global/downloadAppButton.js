import React from "react"
import styled from "styled-components"

const FkDownloadApp = () => (
  <Button>
    <span> Download App </span>
  </Button>
)

const Button = styled.button`
  color: white;
  width: 149px;
  height: 42px;
  border-radius: 8px;
  background-color: #e83b54;
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

export default FkDownloadApp
