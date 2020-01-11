import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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

  return <Img fluid={data.foodKloreLogo.childImageSharp.fluid} />
}

export default FoodKloreLogo
