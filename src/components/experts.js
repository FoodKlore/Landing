import React from "react"
import styled from "styled-components"
import ExpertsSectionBackground from "./expertBackgroundImage"
import { P, DownloadApp } from "./global/"

const Experts = () => (
  <ResponsiveExpertsSection>
    <ResponsiveBackground backgrounds={ExpertsSectionBackground()}>
      <P color="white" weight="600" lineheight="25px">
        Different experts of every country working with us who verify each meal
        and guarantee that our allies have the ability to make you experience
        flavors from other countries.
      </P>
      <DownloadApp/>
    </ResponsiveBackground>
  </ResponsiveExpertsSection>
)

const ResponsiveExpertsSection = styled.section`
  max-width: 1080px;
  width: 1080px;
  margin: 0 auto;
  z-index: 1;

  @media only screen and (max-width: 699px) {
    width: 90vw;
    max-width: 90vw;
    z-index: 1;
    p {
      width: 100%;
      padding: 7vw;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.67;
      color: #ffffff;
    }
  }
`
const ResponsiveBackground = styled.div`
  padding: 175px 220px;
  background-color: #e83b54;
  background-position: bottom left, top right;
  background-repeat: no-repeat;
  border-radius: 50px 0;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 699px) {
    padding: 175px 0px;
    height: 776px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  background-image: url(${prop => prop.backgrounds.expertsSectionBackgroundImage.childImageSharp.fluid.src}),
    url(${prop => prop.backgrounds.expertsSectionBackgroundImageRotated.childImageSharp.fluid.src});
`

export default Experts
