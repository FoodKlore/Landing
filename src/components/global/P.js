import React from "react"
import styled from "styled-components"

const PStyled = styled.p`
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

  @media screen and (max-width: 699px) {
    width: auto;
    height: auto;
    text-align: ${props => props.mobile_align};
  }
`

const P = props => <PStyled {...props} />

export default P
