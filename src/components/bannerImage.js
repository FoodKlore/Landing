import { useStaticQuery, graphql } from "gatsby"

const BannerImage = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage1: file(relativePath: { eq: "Banner@3x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backgroundImage2: file(relativePath: { eq: "Background2@3x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backgroundImage3: file(relativePath: { eq: "Background3@3x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return {
    background1: data.backgroundImage1.childImageSharp.fluid.src,
    background2: data.backgroundImage2.childImageSharp.fluid.src,
    background3: data.backgroundImage3.childImageSharp.fluid.src,
  }
}

export default BannerImage
