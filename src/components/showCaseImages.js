import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const ShowCaseImages = () => {
  const data = useStaticQuery(graphql`
    query {
      inYourArea: file(relativePath: { eq: "InYourArea@3x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      culturalFood: file(relativePath: { eq: "NewCultureFood@3x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      newMoments: file(relativePath: { eq: "moments@3x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      experiences: file(relativePath: { eq: "Share@3x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return {
    inYourArea: <Img fluid={data.inYourArea.childImageSharp.fluid} />,
    newMoments: <Img fluid={data.newMoments.childImageSharp.fluid} />,
    experiences: <Img fluid={data.experiences.childImageSharp.fluid} />,
    culturalFood: <Img fluid={data.culturalFood.childImageSharp.fluid} />,
  }
}

export default ShowCaseImages
