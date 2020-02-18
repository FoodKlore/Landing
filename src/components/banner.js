import React from "react"
import styled from "styled-components"
import BannerImage from "./bannerImage"
import { H1, P } from "./global/"
import AndroidDownloadButton from "./androidDownloadButton"
import IOSDownloadButton from "./iOSDownloadButton"
import bannerData from "../components/banner.json"
import Lottie from "react-lottie"

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: bannerData,
  rendererSettings: {
    // preserveAspectRatio: "xMidYMid slice",
  },
}

const Banner = () => (
  <MainSection
    style={{
      backgroundImage: `url(${BannerImage().background2}), url(${
        BannerImage().background3
      })`,
      backgroundColor: "#69bc8b",
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundPosition: "0px bottom, 0px bottom",
      backgroundSize: "35%, 75%",
      padding: "0% 0% 5% 5%",
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
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      <Lottie
        options={defaultOptions}
        isStopped={false}
        isPaused={false}
        width={600}
        position="absolute"
        style={{
          width: "1025px",
          position: "absolute",
          right: 0,
          height: "696px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      />
      <div
        style={{
          height: "100%",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <H1> Enjoy a world </H1>
        <h2
          style={{
            fontSize: "32px",
            margin: 0,
            fontWeight: 600,
            marginBottom: 10,
          }}
        >
          culture flavors around you
        </h2>
        <P fontsize="15px" margintop="0px" width="50%">
          Find that place who has the same test you were looking for and share
          the best of cuisines with your friends
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
