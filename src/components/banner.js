import React from "react"
import styled from "styled-components"
import BannerImage from "./bannerImage"

const Banner = () => (
  <MainSection
    style={{
      background: `#69bc8b url(${BannerImage()}) no-repeat center`,
      padding: "5%",
      width: "100%",
    }}
  >
    <div>
      <h1> Enjoy a world </h1> <h2> culture flavors around you </h2>
      <p>
        Find that place who has the same test you were looking for and share the
        best of cuisines with your friends
      </p>
      <section>
        <button> Play store </button> <button> apple sttore </button>
      </section>
    </div>
  </MainSection>
)

const MainSection = styled.section`
  h1,
  p,
  h2 {
    color: white;
  }
`

export default Banner
