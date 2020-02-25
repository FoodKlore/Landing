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
  <MainSection backgroundImage={BannerImage()}>
    <ResponsiveContainer>
      <ResponsiveLottie>
        <Lottie options={defaultOptions} isStopped={false} isPaused={false} />
      </ResponsiveLottie>
      <ResponsivePitch>
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
      </ResponsivePitch>
    </ResponsiveContainer>
  </MainSection>
)

const MainSection = styled.section`
  h1,
  p,
  h2 {
    color: white;
  }

  background-image: url(${prop => prop.backgroundImage.background2}),
    url(${prop => prop.backgroundImage.background3});
  background-color: #69bc8b;
  background-repeat: no-repeat, no-repeat;
  background-position: 0px bottom, 0px bottom;
  background-size: 35%, 75%;
  padding: 0% 0% 5% 5%;
  width: 100%;
  height: 610px;
  object-fit: contain;

  @media only screen and (max-width: 699px) {
    background-image: none !important;
    overflow: hidden;
    background-color: #69bc8b;
    /* padding: 0% 0% 5% 5%; */
    width: 100%;
    height: 77vh;
    object-fit: contain;
  }
`

const ResponsiveContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  @media only screen and (max-width: 699px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 10vh;
  }
`
const ResponsiveLottie = styled.div`
  width: 1025px;
  position: absolute;
  right: 0;
  height: 696px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media only screen and (max-width: 699px) {
    width: 650px;
    position: absolute;
    right: 0;
    height: 346px;
    bottom: -25px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    transform: translate(70px, 0px);
  }
`

const ResponsivePitch = styled.div`
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 699px) {
    height: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    h1 {
      width: 100%;
      font-size: 32px;
      line-height: 1.16;
      margin-bottom: 15px !important;
    }

    h2 {
      width: 100%;
      font-size: 24px !important;
      font-weight: 500;
      line-height: 1.54;
      margin-bottom: 15px !important;
    }

    p {
      width: 100%;
      font-size: 16px;
      line-height: 1.19;
      margin-bottom: 15px !important;
    }

    section {
      flex-direction: column;
      z-index: 4;
    }
  }
`

export default Banner
