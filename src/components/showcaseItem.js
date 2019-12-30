import React from "react"
import styled from "styled-components"

const ShowCaseItem = ({ title, img, children }) => (
  <ItemWrapper>
    <figure>
      <img src={img} />
    </figure>
    <h3> {title} </h3>
    {children}
  </ItemWrapper>
)

const ItemWrapper = styled.section`
  padding: 5%;
  display: flex;
  flex-direction: column;
`

export default ShowCaseItem
