import React from "react"
import styled from "styled-components"

const Banner = () => (
  <MainSection>
    <div>
      <h1> Enjoy a world </h1> <h2> culture flavors around you </h2>
      <p>
        Find thatt place who has the same test you were looking for and share
        the best of cuisines with your friends
      </p>
      <section>
        <button> Play store </button> <button> apple sttore </button>
      </section>
    </div>
  </MainSection>
)

const MainSection = styled.section`
  padding: 5%;
  background-color: #69bc8b;
`

export default Banner
