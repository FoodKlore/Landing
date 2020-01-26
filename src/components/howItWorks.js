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
              marginBottom: "5px",
            }}
          >
            How it works?
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "19px", color: "#9292af" }}>
            Using our application is very easy and practical, just follow these
            steps
          </p>
          <div style={{ display: "flex", marginBottom: "12px" }}>
            <div>
              <span
                style={{
                  display: "inline-flex",
                  borderRadius: "100%",
                  color: "#fff",
                  width: "40px",
                  height: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                  backgroundColor: "#37496d",
                  fontWeight: "600",
                  fontSize: "15px",
                  border: "1px solid #37496d",
                }}
              >
                1
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
                Download the App
              </h4>
              <p
                style={{
                  fontSize: "11px",
                  lineHeight: "14px",
                  color: "#3b3b3b",
                }}
              >
                We are available on any operating system, just search on Google
                Play or Apple Store
              </p>
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: "12px" }}>
            <div>
              <span
                style={{
                  display: "inline-flex",
                  borderRadius: "100%",
                  color: "#37496d",
                  width: "40px",
                  height: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                  backgroundColor: "#fff",
                  fontWeight: "600",
                  fontSize: "15px",
                  border: "1px solid #37496d",
                }}
              >
                2
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
                Select cuisine's country
              </h4>
              <p
                style={{
                  fontSize: "11px",
                  lineHeight: "14px",
                  color: "#3b3b3b",
                }}
              >
                Choose the culture flavor you want to eat and discover the variety of restaurant options that around you
              </p>
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: "12px" }}>
            <div>
              <span
                style={{
                  display: "inline-flex",
                  borderRadius: "100%",
                  color: "#37496d",
                  width: "40px",
                  height: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                  backgroundColor: "#fff",
                  fontWeight: "600",
                  fontSize: "15px",
                  border: "1px solid #37496d",
                }}
              >
                3
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
                Enjoy
              </h4>
              <p
                style={{
                  fontSize: "11px",
                  lineHeight: "14px",
                  color: "#3b3b3b",
                }}
              >
                Choose the restaurant you prefer, visit it and enjoy the experience of cultural flavor
              </p>
            </div>
          </div>
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
