import React from "react"
import styled from "styled-components"
import BannerImage from "./bannerImage"
import { H1, P } from "./global/"
import AndroidDownloadButton from "./androidDownloadButton"
import IOSDownloadButton from "./iOSDownloadButton"

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
      padding: "0% 5% 10% 5%",
      width: "100%",
      height: "610px",
      objectFit: "contain",
    }}
  >
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <H1> Enjoy a world </H1>
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "Medium",
          margin: 0,
        }}
      >
        culture flavors around you
      </h2>
      <P fontsize="15px" margintop="0px">
        Find that place who has the same test you were looking for and share the
        best of cuisines with your friends
      </P>
      <section
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <AndroidDownloadButton />
        <IOSDownloadButton />
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
