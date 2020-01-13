import React from "react"
import styled from "styled-components"
import BannerImage from "./bannerImage"
import { H1, P } from "./global/"

const Banner = () => (
  <MainSection
    style={{
      backgroundImage: `url(${BannerImage().background1}), url(${
        BannerImage().background2
      }), url(${BannerImage().background3})`,
      backgroundColor: "#69bc8b",
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundPositionX: "right, left, 30px",
      backgroundPositionY: "bottom, bottom, -100px",
      backgroundSize: "80%, 35%",
      padding: "5%",
      width: "100%",
      height: "610px",
      objectFit: "contain",
    }}
  >
    <div>
      <H1> Enjoy a world </H1> <h2> culture flavors around you </h2>
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
