import React from "react"
import styled from "styled-components"
import { H3 } from "./global/"

const ShowCaseItem = ({ title, img, children }) => (
  <ItemWrapper>
    <figure>{img}</figure>
    <H3> {title} </H3>
    {children}
  </ItemWrapper>
)

const ItemWrapper = styled.section`
  padding: 0% 2.5%;
  display: flex;
  flex-direction: column;
`

export default ShowCaseItem
