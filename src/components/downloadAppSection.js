import React from "react"
import { H1, P } from "./global"
import BannerImage from "./bannerImage"
import FoodKloreLogo from "./foodKloreLogo"
import AndroidDownloadButton from "./androidDownloadButton"
import IOSDownloadButton from "./iOSDownloadButton"
import DownloadAppSectionImages from "./downloadAppSectionImages"

const DownloadAppSection = () => {
  return (
    <section
      style={{
        width: "100%",
        height: "1052px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#37496d",
        backgroundImage: `url(${BannerImage().background3}), url(${
          BannerImage().backgroundImage3Rotated
        })`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "left, right",
        backgroundPositionY: "bottom, top",
        backgroundSize: "642.2px 411.3px, 642.2px 411.3px",
        padding: "0% 5%",
        objectFit: "contain",
      }}
    >
      <figure>
        <div style={{ width: `123px`, height: "52.7px" }}>
          <FoodKloreLogo />
        </div>
      </figure>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <H1> Let's explore more cultures </H1>
        <P fontsize="18px" lineheight={1.22} color="#ffffff">
          Lover of culture flavors
        </P>
      </div>
      <figure
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AndroidDownloadButton />
        <IOSDownloadButton />
      </figure>
      <figure
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <DownloadAppSectionImages />
      </figure>
    </section>
  )
}

export default DownloadAppSection
