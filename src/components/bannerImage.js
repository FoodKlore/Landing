import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BannerImage = () => {
  const data = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "Banner@3x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return data.bannerImage.childImageSharp.fluid.src
}

export default BannerImage
