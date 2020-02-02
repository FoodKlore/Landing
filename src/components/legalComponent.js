import React from "react"
import styled from "styled-components"
import { P } from "./global"
import facebookSvg from "../images/facebook.svg"
import twitterSvg from "../images/instagram.svg"
import instagramSvg from "../images/twitter.svg"

const LegalComponent = () => (
  <LegalWrapper>
    <P
      fontsize={"10px"}
      lineheight={1.4}
      color="#9292af"
      margin={"0 0 0 70.8px"}
    >
      © 2019 Folklore, Designed by Totuxs
    </P>
    <SocialMediaWrapper>
      <figure>
        <img src={facebookSvg} />
      </figure>
      <figure>
        <img src={twitterSvg} />
      </figure>
      <figure>
        <img src={instagramSvg} />
      </figure>
    </SocialMediaWrapper>
  </LegalWrapper>
)

const LegalWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 71px;
  padding-right: 61px;
  padding-left: 61px;
  align-items: center;
  @media only screen and (max-width: 699px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 90%;
    margin-top: 62px;
    p {
      margin: 0;
      padding: 0;
    }
  }
`

const SocialMediaWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-right: 70.8px;
  && figure {
    margin: 0 15px 0 15px;
    &:last-child {
      margin: 0 0px 0 15px;
    }
  }
  @media only screen and (max-width: 699px) {
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    justify-content: space-evenly;
    figure {
      margin: 0 !important;
    }
  }
`

export default LegalComponent
