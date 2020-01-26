import React from "react"
import styled from "styled-components"

import SignUp1 from "src/images/SignUp1x.png"

const HowItWorks = () => (
  <HowItWorksSection
    style={{
      backgroundColor: "#f7f8f9",
      height: "1154px",
    }}
  >
    <div
      style={{
        maxWidth: "1080px",
        width: "1080px",
        margin: "0 auto -70px auto",
        padding: "215px 0",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          display: "flex",
        }}
      >
        <div
          style={{
            paddingTop: "60px",
            paddingLeft: "245px",
            paddingRight: "75px",
          }}
        >
          <figure>
            <img src={SignUp1} alt="placeholder" />
            <figcaption
              style={{
                fontSize: "10px",
                lineHeight: "13px",
                color: "#a3a3a3",
                textAlign: "center",
              }}
            >
              The app will show you more information about the country and food
              you will try
            </figcaption>
          </figure>
        </div>
        <div style={{ paddingRight: "25px" }}>
          <h2
            style={{
              fontWeight: "600",
              fontSize: "30px",
              marginBottom: "10px",
            }}
          >
            How it works?
          </h2>
          <p>
            Using our application is very easy and practical, just follow these
            steps
          </p>
        </div>
      </div>
    </div>
  </HowItWorksSection>
)

const HowItWorksSection = styled.section`
  h1,
  p {
  }
`

export default HowItWorks
