import React from "react"
import styled from "styled-components"
import ExpertsSectionBackground from "./expertBackgroundImage"
import AndroidDownloadImage from "src/images/AndroidBadgeBanner.svg"
import iOSDownloadImage from "src/images/iOsBadgeBanner.svg"

const Experts = () => (
  <ExpertsSection
    style={{
      maxWidth: "1080px",
      width: "1080px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        padding: "175px 220px",
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
        <a
          href="https://example.com"
          target="_blank"
          style={{ marginRight: "15px" }}
        >
          <img src={AndroidDownloadImage}></img>
        </a>
        <a
          href="https://example.com"
          target="_blank"
          style={{ padding: "9px 0" }}
        >
          <img src={iOSDownloadImage}></img>
        </a>
      </div>
    </div>
  </ExpertsSection>
)

const ExpertsSection = styled.section`
  h1,
  p {
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
  }
`

export default Experts
