import React from "react"
import styled from "styled-components"

const Test = styled.p`
  width: ${props => props.width};
  height: ${props => props.height};
  font-family: Montserrat;
  font-size: ${props => props.fontsize};
  font-weight: ${props => (props.weight ? props.weight : "normal")};
  font-stretch: normal;
  font-style: normal;
  line-height: ${props => (props.lineheight ? props.lineheight : 1.27)};
  letter-spacing: normal;
  text-align: left;
  margin-top: ${props => (props.margintop ? props.margintop : "auto")};
  color: ${props => props.color};
  margin: ${props => props.margin && props.margin};
`

const P = ({
  children,
  width,
  color,
  fontsize,
  height,
  margintop,
  margin,
  weight,
  lineheight,
}) => (
  <Test
    width={width}
    color={color}
    fontsize={fontsize}
    height={height}
    lineheight={lineheight}
    margintop={margintop}
    margin={margin}
    weight={weight}
  >
    {children}
  </Test>
)

export default P
