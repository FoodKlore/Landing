import React from "react"
import styled from "styled-components"
import ShowCaseItem from "./showcaseItem"

const ShowCase = () => (
  <section>
    <div>
      <h2> Every culture near to you </h2>
      <p> A new era of discoveries you can share</p>
    </div>
    <ShowCaseItemWrapper>
      <ShowCaseItem
        title="In your area"
        img="https://s3.amazonaws.com/FringeBucket/image_placeholder.png"
      >
        <p>
          From the palm of your hand you can discover a rich network of folklore
          flavors you don't know YET
        </p>
      </ShowCaseItem>
      <ShowCaseItem
        title="New culture food"
        img="https://s3.amazonaws.com/FringeBucket/image_placeholder.png"
      >
        <p>
          It's easy to find restaurants offering divers food, but only here you
          will discover a variety of cultural flavors.
        </p>
      </ShowCaseItem>
      <ShowCaseItem
        title="Exciting new moments"
        img="https://s3.amazonaws.com/FringeBucket/image_placeholder.png"
      >
        <p>
          Get to know other countries' cuisine, way of living and histtory
          without the cost of a plane ticket or living the citty
        </p>
      </ShowCaseItem>
      <ShowCaseItem
        title="Share your experiences"
        img="https://s3.amazonaws.com/FringeBucket/image_placeholder.png"
      >
        <p>
          Don't enjoy only the different cultural flavors, share the different
          places of culinary art with your friends
        </p>
      </ShowCaseItem>
    </ShowCaseItemWrapper>
  </section>
)

const ShowCaseItemWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export default ShowCase
