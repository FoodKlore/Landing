import React from 'react'
import styled from 'styled-components'
import scrollTo from "gatsby-plugin-smoothscroll"
import P from './P'

const DownloadApp = ({ width, height }) => (
  <Button
    width={width}
    height={height}
    onClick={() => {
      scrollTo("#subscribe")
      document.getElementById("input_name").focus()
    }}
  >
    <P> Download App </P>
  </Button>
);

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: ${props => (props.width ? props.width : "196px")};
  height: ${props => (props.height ? props.height : "46px")};
  border-radius: 8px;
  background-color: #e83b54;
  border: 0px;
  p {
    font-size: 11px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin: 0;
  @media screen and (max-width: 699px) {
      font-size: 16px;
    }
  }
`

export default DownloadApp