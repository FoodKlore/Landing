import React from "react"
import styled from "styled-components"
import ExpertsSectionBackground from "./expertBackgroundImage"
import AndroidDownloadButton from "./androidDownloadButton"
import IOSDownloadButton from "./iOSDownloadButton"

const Experts = () => (
  <ExpertsSection
    style={{
      maxWidth: "1360px",
      width: "1360px",
      margin: "0 auto",
      padding: "0 70px",
      position: "relative",
    }}
  >
    <div
      style={{
        padding: "200px 190px",
        backgroundImage: `url(${
          ExpertsSectionBackground().expertsSectionBackgroundImage
            .childImageSharp.fluid.src
        }), url(${
          ExpertsSectionBackground().expertsSectionBackgroundImageRotated
            .childImageSharp.fluid.src
        })`,
        backgroundColor: `#e83b54`,
        backgroundPosition: `bottom left, top right`,
        backgroundRepeat: `no-repeat`,
        borderRadius: "50px 0",
      }}
    >
      <p>
        Different experts of every country working with us who verify each meal
        and guarantee that our allies have the ability to make you experience
        flavors from other countries.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AndroidDownloadButton style={{ marginRight: "15px" }} />
        <IOSDownloadButton style={{ padding: "9px 0" }} />
      </div>
    </div>
  </ExpertsSection>
)

const ExpertsSection = styled.section`
  h1,
  p {
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
  }
`

export default Experts
