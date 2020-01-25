import React from "react"
import styled from "styled-components"
import { H3 } from "./global/"
import Lottie from "react-lottie"

const ShowCaseItem = ({ title, animationData, children }) => {
  console.log(animationData)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      // preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <ItemWrapper>
      <Lottie
        options={defaultOptions}
        isStopped={false}
        isPaused={false}
        width={600}
        position="absolute"
        style={{
          width: "200px",
          right: 0,
          height: "auto",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      />
      <H3> {title} </H3>
      {children}
    </ItemWrapper>
  )
}

const ItemWrapper = styled.section`
  padding: 0% 2.5%;
  display: flex;
  flex-direction: column;
`

export default ShowCaseItem
