import React from "react"
import styled from "styled-components"
import ShowCaseItem from "./showcaseItem"
import { H2, P } from "./global/index"
import { DownloadApp } from "./global"
import shareYourExperiences from "../components/shareYourExperiences.json"
import inYourArea from "../components/inYourArea.json"
import newMoments from "../components/newMoments.json"
import newCulturalFood from "../components/newCulturalFood.json"

const ShowCase = () => (
  <ShowCaseContainer id="whatweoffer">
    <ShowCaseTitleWrapper>
      <H2> Every culture near to you </H2>
      <P
        width="489px"
        height="22px"
        fontsize="16px"
        // line-height: 1.19;
        margintop="2px"
        color="#9292af"
      >
        A new era of discoveries you can share
      </P>
    </ShowCaseTitleWrapper>
    <ShowCaseItemWrapper>
      <ShowCaseItem title="In your area" animationData={inYourArea}>
        <P
          width="242px"
          color="#3b3b3b"
          fontsize="11px"
          height="52px"
          margintop="24px"
        >
          From the palm of your hand you can discover a rich network of folklore
          flavors you don't know YET
        </P>
      </ShowCaseItem>
      <ShowCaseItem title="New culture food" animationData={newCulturalFood}>
        <P
          width="242px"
          color="#3b3b3b"
          fontsize="11px"
          height="52px"
          margintop="24px"
        >
          It's easy to find restaurants offering divers food, but only here you
          will discover a variety of cultural flavors.
        </P>
      </ShowCaseItem>
      <ShowCaseItem title="Exciting new moments" animationData={newMoments}>
        <P
          width="242px"
          color="#3b3b3b"
          fontsize="11px"
          height="52px"
          margintop="24px"
        >
          Get to know other countries' cuisine, way of living and histtory
          without the cost of a plane ticket or living the citty
        </P>
      </ShowCaseItem>
      <ShowCaseItem
        title="Share your experiences"
        animationData={shareYourExperiences}
      >
        <P
          width="242px"
          color="#3b3b3b"
          fontsize="11px"
          height="52px"
          margintop="24px"
        >
          Don't enjoy only the different cultural flavors, share the different
          places of culinary art with your friends
        </P>
      </ShowCaseItem>
    </ShowCaseItemWrapper>
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        marginBottom: 109.6,
        marginTop: 45,
      }}
    >
      <DownloadApp />
    </div>
  </ShowCaseContainer>
)

const ShowCaseContainer = styled.section`
  padding: 5% 5% 0% 5%;
  @media only screen and (max-width: 699px) {
    margin-top: 5vh;
    width: 90vw;
    padding: 0;
  }
`

const ShowCaseTitleWrapper = styled.div`
  h1 {
    margin: 0;
  }

  @media only screen and (max-width: 699px) {
    width: 100%;
    h1 {
      font-size: 24px;
      text-align: center;
    }

    p {
      text-align: center;
    }
  }
`

const ShowCaseItemWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 699px) {
    flex-direction: column;
  }
`

export default ShowCase
