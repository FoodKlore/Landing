import React from "react"
import Logo from 'src/images/logotipo.svg'
import styled from "styled-components"

const FoodKloreImg = styled.img`
  .gatsby-image-wrapper {
    width: 100%;
  }
`

const FoodKloreLogo = () => {
  return <FoodKloreImg src={Logo} />
}

export default FoodKloreLogo
