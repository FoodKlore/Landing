import React from "react"
import styled from "styled-components"
import { P } from "./global"
import AndroidDownloadButton from "./androidDownloadButton"
import IOSDownloadButton from "./iOSDownloadButton"

const Footer = () => (
  <ResponsiveFooter>
    <div>
      <P fontsize={"14px"} fontweight={500} lineheight={2.29} color="#2c2e3f">
        Contact info
      </P>
    </div>
    <InfoWrapper>
      <div>
        <P fontsize={"14px"} fontweight={500} lineheight={2.29} color="#2c2e3f">
          Lorem ipsum
        </P>
        <P
          fontsize={"10px"}
          fontweight={"normal"}
          lineheight={1.3}
          color={"#9292af"}
        >
          1-3 Abbey Street Eynsham Oxford OX29 4TB
        </P>
      </div>
      <div>
        <P fontsize={"14px"} fontweight={500} lineheight={2.29} color="#2c2e3f">
          Oxford (UK)
        </P>
        <P
          fontsize={"10px"}
          fontweight={"normal"}
          lineheight={1.3}
          color={"#9292af"}
        >
          1-3 Abbey Street Eynsham Oxford OX29 4TB
        </P>
      </div>
    </InfoWrapper>
    <section
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <AndroidDownloadButton />
      <IOSDownloadButton />
    </section>
  </ResponsiveFooter>
)

const ResponsiveFooter = styled.footer`
  display: flex;
  margin-top: 50px;
  width: 100%;
  padding-right: 61px;
  padding-left: 61px;
  @media only screen and (max-width: 699px) {
    display: none;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  & div {
    margin-right: 44px;
  }
`

export default Footer
