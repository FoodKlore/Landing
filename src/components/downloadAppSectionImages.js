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
      <ResponsiveFoodKloreImgLeft fluid={data.iphone.childImageSharp.fluid} />
      <ResponsiveFoodKloreImgRight fluid={data.iphone.childImageSharp.fluid} />
    </>
  )
}

const ResponsiveFoodKloreImgLeft = styled(FoodKloreImg)`
  width: 269px;
  height: 542px;
  z-index: 2;
  margin-right: -15.5%;
  @media only screen and (max-width: 699px) {
    width: 142px;
    height: 290px;
  }
`

const ResponsiveFoodKloreImgRight = styled(FoodKloreImg)`
  width: 231px;
  height: 491px;
  z-index: 1;
  @media only screen and (max-width: 699px) {
    width: 131px;
    height: 264px;
  }
`

export default DownloadAppSectionImages
