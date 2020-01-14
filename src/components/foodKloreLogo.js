import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const FoodKloreImg = styled(Img)`
  .gatsby-image-wrapper {
    width: 100%;
  }
`

const FoodKloreLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      foodKloreLogo: file(relativePath: { eq: "FoodKloreLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <FoodKloreImg fluid={data.foodKloreLogo.childImageSharp.fluid} />
}

export default FoodKloreLogo
