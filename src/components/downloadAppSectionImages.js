import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const FoodKloreImg = styled(Img)`
  .gatsby-image-wrapper {
    width: 100%;
  }
`

const DownloadAppSectionImages = () => {
  const data = useStaticQuery(graphql`
    query {
      iphone: file(relativePath: { eq: "iphone@3x.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      android: file(relativePath: { eq: "android@3x.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <FoodKloreImg
        fluid={data.iphone.childImageSharp.fluid}
        style={{
          width: "269px",
          height: "542px",
          zIndex: 2,
          marginRight: "-15.5%",
        }}
      />
      <FoodKloreImg
        style={{
          width: "231px",
          height: "491px",
          zIndex: 1,
        }}
        fluid={data.iphone.childImageSharp.fluid}
      />
    </>
  )
}

export default DownloadAppSectionImages
