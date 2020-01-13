import React from "react"
import styled from "styled-components"

const Test = styled.p`
  width: ${props => props.width};
  height: ${props => props.height};
  font-family: Montserrat;
  font-size: ${props => props.fontsize};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: normal;
  text-align: left;
  margin-top: ${props => (props.margintop ? props.margintop : "auto")}
  color: ${props => props.color};
`

const FkP = ({ children, width, color, fontsize, height, margintop }) => (
  <Test
    width={width}
    color={color}
    fontsize={fontsize}
    height={height}
    margintop={margintop}
  >
    {children}
  </Test>
)

export default FkP
