import React, { useState, memo } from "react"
import styled from "styled-components"

import SignUp1 from "src/images/SignUp1x.png"
import SignUp2 from "src/images/SignUp2x.png"
import SignUp3 from "src/images/SignUp3x.png"

const howItWorksData = [
  {
    id: "8d569978-6fe9-4382-b258-36d3aca59a8d",
    step: 1,
    title: "Download the App",
    description:
      "We are available on any Operating System, just Google us and you will find us on Apple or Play Store.",
  },
  {
    id: "edf69fa2-17bc-4707-b138-596832bfa677",
    step: 2,
    title: "Select cuisine's country",
    description:
      "Choose the culture flavor you want to eat and discover the variety of restaurant options that around you.",
  },
  {
    id: "14ac32ae-24c8-487a-9fa1-effa36dbebde",
    step: 3,
    title: "Enjoy",
    description:
      "Choose the restaurant you prefer, visit it and enjoy the experience of cultural flavor.",
  },
]

const HowItWorksItem = props => {
  const handleStepChange = () => {
    props.onClick(props.element.step)
  }
  return (
    <button
      key={props.element.id}
      style={{
        display: "flex",
        marginBottom: "12px",
        borderColor: "transparent",
        backgroundColor: "transparent",
        textAlign: "left",
      }}
      onClick={handleStepChange}
    >
      <div>
        <span
          style={{
            display: "inline-flex",
            borderRadius: "100%",
            width: "40px",
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "15px",
            fontWeight: "600",
            fontSize: "15px",
            border: "1px solid #37496d",
          }}
          className={props.className}
        >
          {props.element.step}
        </span>
      </div>
      <div>
        <h4
          style={{
            fontSize: "13px",
            fontWeight: "600",
            color: "#3b3b3b",
            marginBottom: "16px",
          }}
        >
          {props.element.title}
        </h4>
        <p
          style={{
            fontSize: "11px",
            lineHeight: "14px",
            color: "#3b3b3b",
          }}
        >
          {props.element.description}
        </p>
      </div>
    </button>
  )
}

const HowItWorks = memo(() => {
  const [step, setStep] = useState(1)
  const handleStepChange = step => {
    setStep(step)
    switch (step) {
      case 1:
        setStepImage(SignUp1)
        break
      case 2:
        setStepImage(SignUp2)
        break
      case 3:
        setStepImage(SignUp3)
        break
      default:
        console.error(
          new Error("No step selected, therefore, not sure what image to show")
        )
    }
  }
  const [stepImage, setStepImage] = useState(SignUp1)
  return (
    <HowItWorksSection id="howitworks">
      <ResponsiveRow
      >
        <ResponsiveContainer
        >
          <ResponsiveWrapper
          >
            <ResponsiveFigure>
              <ResponsiveImg src={stepImage} alt="placeholder" />
              <ResponsiveFigCaption
              >
                The app will show you more information about the country and
                food you will try
              </ResponsiveFigCaption>
            </ResponsiveFigure>
          </ResponsiveWrapper>
          <ResponsiveSteps>
            <h2
              style={{
                fontWeight: "600",
                fontSize: "30px",
                marginBottom: "5px",
              }}
            >
              How it works?
            </h2>
            <p
              id="how-it-works-label"
            >
              Using our application is very easy and practical, just follow
              these steps
            </p>
            {howItWorksData.map(element => (
              <HowItWorksItem
                key={element.id}
                element={element}
                className={element.step === step ? "active" : "inactive"}
                onClick={handleStepChange}
              ></HowItWorksItem>
            ))}
          </ResponsiveSteps>
        </ResponsiveContainer>
      </ResponsiveRow>
    </HowItWorksSection>
  )
})

const HowItWorksSection = styled.section`

  background-color: #f7f8f9;
  width: 100%;
  margin-top: -75px;

  .active {
    background-color: #37496d;
    color: #fff;
  }
  h1,
  p {
  }

  @media screen and (max-width: 699px) {
    width: 100vw;
    margin-top: -149px;
  }
`

const ResponsiveRow = styled.div`
  max-width: 1080px;
  width: 1080px;
  margin: 0 auto -70px auto;
  padding: 215px 0;

  @media screen and (max-width: 699px) {
    width: 90vw;
  }
`

const ResponsiveWrapper = styled.div`
  padding-top: 60px;
  padding-left: 145px;
  padding-right: 75px;

  @media screen and (max-width: 699px) {
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
  }
`

const ResponsiveContainer = styled.div`
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: 699px) {
    flex-direction: column;
  }
`

const ResponsiveFigure = styled.figure`
  @media screen and (max-width: 699px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`

const ResponsiveImg = styled.img`
  @media screen and (max-width: 699px) {
    width: 200px;
    height: auto;
    overflow: hidden;
    margin: 0px auto;
    outline: none;
    right: 0px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`

const ResponsiveSteps = styled.div`
  padding-right: 25px;
  @media screen and (max-width: 699px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;

    p#how-it-works-label {
      text-align: center;
      margin: 20px 0 35px 0;
    }
  }

  font-size: 16px;
  line-height: 19px;
  color: #9292af;
`

const ResponsiveFigCaption = styled.figcaption`
  font-size: 10px;
  line-height: 13px;
  color: #a3a3a3;
  text-align: center;
  @media screen and (max-width: 699px) {
    padding: 5vw;
  }
`
export default HowItWorks
