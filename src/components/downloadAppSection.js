import React from "react"
import { H1, P, DownloadAppButton } from "./global"
import BannerImage from "./bannerImage"
import FoodKloreLogo from "./foodKloreLogo"
import DownloadAppSectionImages from "./downloadAppSectionImages"
import styled from "styled-components"

const DownloadAppSection = () => {
  return (
    <ResponsiveSection backgrounds={BannerImage()}>
      <figure>
        <div style={{ width: `123px`, height: "52.7px" }}>
          <FoodKloreLogo />
        </div>
      </figure>
      <ResponsiveTitleWrapper>
        <H1> Let's explore more cultures </H1>
        <P fontsize="18px" lineheight={1.22} color="#ffffff">
          Lover of culture flavors
        </P>
      </ResponsiveTitleWrapper>
      <ResponsiveDownloadWrapper>
        <DownloadAppButton/>
        <DownloadAppSectionWrapper>
          <DownloadAppSectionImages />
        </DownloadAppSectionWrapper>
      </ResponsiveDownloadWrapper>
    </ResponsiveSection>
  )
}

const DownloadAppSectionWrapper = styled.figure`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media only screen and (max-width: 699px) {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-top: 46px;
  }
`

const ResponsiveDownloadWrapper = styled.div`

  section {
    justify-content: center;
  }
  @media only screen and (max-width: 699px) {
    display: flex;
    flex-direction: column-reverse;

    section {
      justify-content: flex-start;
    }
  }
`

const ResponsiveTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 699px) {
    h1 {
      width: 100%;
      font-weight: 600;
      text-align: center;
      color: #ffffff;
    }

    p {
      text-align: center;
    }
  }
`

const ResponsiveSection = styled.section`
  width: 100%;
  height: 1052px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #37496d;
  background-image: url(${props => props.backgrounds.background3}),
    url(${props => props.backgrounds.backgroundImage3Rotated});
  background-repeat: no-repeat;
  background-position-x: left, right;
  background-position-y: bottom, top;
  background-size: 642.2px 411.3px, 642.2px 411.3px;
  padding: 0% 5%;
  object-fit: contain;
  @media only screen and (max-width: 699px) {
    height: 130vh;
    background-image: none;
    justify-content: center;
  }
`

export default DownloadAppSection
