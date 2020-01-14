import { useStaticQuery, graphql } from "gatsby"

const ExpertsSectionBackground = () => {
  const data = useStaticQuery(graphql`
    query {
      expertsSectionBackgroundImage: file(
        relativePath: { eq: "ExpertsSectionBackground.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      expertsSectionBackgroundImageRotated: file(
        relativePath: { eq: "ExpertsSectionBackground.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, rotate: 180) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return data
}

export default ExpertsSectionBackground
