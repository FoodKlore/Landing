import React from "react"
import styled from "styled-components"
import { H2, P } from "./global/index"
const FromExperts = () => {
  return (
    <FromExpertsSection>
      <FromExpertsWrapper>
        <div style={{ paddingRight: "35px" }}>
          <H2 style={{ marginBottom: "5px", height: "auto", width: "auto" }}>
            We hear the experts
          </H2>
          <P
            fontsize="16px"
            color="#9292af"
            style={{ marginBottom: "5px", paddingRight: "65px" }}
          >
            Prepare your palate to enjoy the true flavor of each of the world's
            culture
          </P>
          <P fontsize="11px" color="#3b3b3b">
            We have the opinion of experts in gastronomy from different
            countries and thus authenticate the taste of the food you want to
            enjoy.
          </P>
          <div>Carousel</div>
        </div>
        <div style={{ paddingLeft: "35px", minWidth: "50%" }}>
          <h1>Test</h1>
        </div>
      </FromExpertsWrapper>
    </FromExpertsSection>
  )
}

const FromExpertsSection = styled.section`
  background-color: #f7f8f9;
  width: 100%;
`

const FromExpertsWrapper = styled.section`
  background-color: #fff;
  margin: -35px auto;
  padding: 125px 168px;
  border-radius: 5px;
  min-width: 1240px;
  position: relative;
  max-width: 1392px;
  min-height: 627px;
  display: flex;
`

export default FromExperts
