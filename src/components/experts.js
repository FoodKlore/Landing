import React from "react"
import styled from "styled-components"
import ExpertsSectionBackground from "./expertBackgroundImage"
import AndroidDownloadButton from "./androidDownloadButton"
import IOSDownloadButton from "./iOSDownloadButton"

const Experts = () => (
  <ResponsiveExpertsSection>
    <ResponsiveBackground backgrounds={ExpertsSectionBackground()}>
      <p>
        Different experts of every country working with us who verify each meal
        and guarantee that our allies have the ability to make you experience
        flavors from other countries.
      </p>
      <section>
        <AndroidDownloadButton />
        <IOSDownloadButton />
      </section>
    </ResponsiveBackground>
  </ResponsiveExpertsSection>
)

const ResponsiveDownloadButtons = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 699px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const ResponsiveExpertsSection = styled.section`
  h1,
  p {
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
  }
  max-width: 1080px;
  width: 1080px;
  margin: 0 auto;
  z-index: 1;

  @media only screen and (max-width: 699px) {
    width: 90vw;
    max-width: 90vw;
    z-index: 1;
    p {
      width: 235px;
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
    section {
      flex-direction: column;
      z-index: 4;
    }
  }

  background-image: url(${prop =>
      prop.backgrounds.expertsSectionBackgroundImage.childImageSharp.fluid
        .src}),
    url(${prop => {
      return prop.backgrounds.expertsSectionBackgroundImageRotated
        .childImageSharp.fluid.src
    }});
`

export default Experts
