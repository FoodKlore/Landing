import React from "react"
import styled from "styled-components"
import Carousel from "src/components/carousel"
import BackgroundExperts from "src/images/BackgroundExperts.svg"
import Avatars from "src/components/avatars"
import { H2, P } from "./global/index"

const FromExperts = () => {
  return (
    <FromExpertsSectionResponsive>
      <FromExpertsWrapperResponsive>
        <FromExpertsDescription>
          <H2 style={{ marginBottom: "5px", height: "auto", width: "auto" }}>
            We hear the experts
          </H2>
          <P
            fontsize="16px"
            color="#9292af"
            class="description"
            mobile_align="center"
          >
            Prepare your palate to enjoy the true flavor of each of the world's
            culture
          </P>
          <P
            class="description"
            fontsize="11px" color="#3b3b3b"
            mobile_align="center"
          >
            We have the opinion of experts in gastronomy from different
            countries and thus authenticate the taste of the food you want to
            enjoy.
          </P>
          <Carousel />
        </FromExpertsDescription>
        <div
          style={{
            paddingLeft: "35px",
            minWidth: "50%",
            backgroundImage: `url(${BackgroundExperts})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <Avatars />
          <p
            style={{
              textAlign: "center",
              color: "#e83b54",
              fontSize: "12px",
              width: "100%",
              marginBottom: "0",
            }}
          >
            <a
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
              href="https://example.com"
            >
              View all rates
            </a>
          </p>
        </div>
      </FromExpertsWrapperResponsive>
    </FromExpertsSectionResponsive>
  )
}

const FromExpertsSectionResponsive = styled.section`
  background-color: #f7f8f9;
  width: 100%;
  @media screen and (max-width: 699px) {
    padding: 5vw;
    width: 100vw;
  }
`

const FromExpertsWrapperResponsive = styled.section`
  background-color: #fff;
  margin: -35px auto;
  padding: 125px 168px;
  border-radius: 5px;
  min-width: 1240px;
  position: relative;
  max-width: 1392px;
  min-height: 627px;
  display: flex;
  @media screen and (max-width: 699px) {
    padding: 0;
    width: 100%;
    display: flex;
    min-width: 100%;
    max-width: 100%;
  }
`
const FromExpertsDescription = styled.div`
  .description {
    margin-bottom: 5px;
    padding-right: 65px;
    @media screen and (max-width: 699px) {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 699px) {
    width: 100vw;
  }
`
export default FromExperts
