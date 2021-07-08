import React from "react"
import styled from "styled-components"
import Carousel from "src/components/carousel"
import BackgroundExperts from "src/images/BackgroundExperts.svg"
import Avatars from "src/components/avatars"
import { H2 as Header, P } from "./global/index"

const FromExperts = () => {
  return (
    <FromExpertsSectionResponsive id="foddies">
      <FromExpertsWrapperResponsive>
        <FromExpertsDescription>
          <H2>
            We hear the experts
          </H2>
          <P
            fontsize="16px"
            color="#9292af"
          >
            Prepare your palate to enjoy the true flavor of each of the world's
            culture
          </P>
          <P
            className="description"
            fontsize="11px" color="#3b3b3b"
          >
            We have the opinion of experts in gastronomy from different
            countries and thus authenticate the taste of the food you want to
            enjoy.
          </P>
          <Carousel />
        </FromExpertsDescription>
        <ResponsiveAvatars backgroundexperts={BackgroundExperts}
        >
          <Avatars />
          <P
            color="#e83b54"
            fontsize="12px"
            textalign="center"
          >
            <a
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
              href="#"
            >
              View all rates
            </a>
          </P>
        </ResponsiveAvatars>
      </FromExpertsWrapperResponsive>
    </FromExpertsSectionResponsive>
  )
}

const H2 = styled(Header)`
  margin-bottom: 5px;
  height: auto;
  width: auto;

  @media screen and (max-width: 699px) {
    margin-bottom: 32px;
  }
`

const FromExpertsSectionResponsive = styled.section`
  background-color: #f7f8f9;
  width: 100%;
  @media screen and (max-width: 699px) {
    width: 100vw;
    padding: 10vw;
    margin-top: -150px;
    margin-bottom: -10vh;
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
    padding: 8vw;
    width: 100%;
    display: flex;
    min-width: 100%;
    max-width: 100%;
    flex-direction: column;
    margin: 0;
  }
`
const FromExpertsDescription = styled.div`

  @media screen and (max-width: 699px) {
    width: 100%;

    p {
      margin-bottom: 2vh;
    }
  }
`

const ResponsiveAvatars = styled.div`
  padding-left: 35px;
  min-width: 50%;
  background-image: url(${props => props.backgroundexperts});
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 699px) {
    padding: 24px 0;
    margin: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export default FromExperts
