import React, { useState, memo } from "react"
import styled from "styled-components"
import Arrow from "src/images/arrow.svg"

const carouselData = [
  {
    id: "ab73e144-e2e0-4dc7-ba7e-0d05b9a7d9c8",
    commentParagraph:
      'I tried the "Elemental Plate" in Juan Mean Restaurant and all I can say is that it took me back to the Japanese Food 2 years ago',
    commentAuthor: "Takehiro Ohno - Japanese professional chef",
    commentToRestaurant: "To Juan Mean Restaurant",
  },
  {
    id: "f2dd5cb4-37aa-48a3-8717-a8adc7419666",
    commentParagraph:
      'The moment I visited "Salvadorean Place" in Florida has been one of the most great experiences I have ever been',
    commentAuthor: "Takehiro Ohno - Japanese prof",
    commentToRestaurant: "To Salvadorean Place Restaurantessional chef",
  },
  {
    id: "168459a0-6509-4a8f-bc21-807168abb19d",
    commentParagraph:
      'I thought I would have not been able to try the tacos I had on Mexico last year, but when I visited "Jorge\'s Place" I rediscovered my love to tacos',
    commentAuthor: "Takehiro Ohno - Japanese professional chef",
    commentToRestaurant: "To Jorge's Place Restaurant",
  },
]

let currentComment = 0

const Carousel = memo(() => {
  const [comment, setComment] = useState(carouselData[currentComment])
  const handleCommentChangeToTheRight = () => {
    if (currentComment === carouselData.length - 1) {
      currentComment = -1
    }
    currentComment++
    setComment(carouselData[currentComment])
  }
  const handleCommentChangeToTheLeft = () => {
    if (currentComment === 0) {
      currentComment = carouselData.length
    }
    currentComment--
    setComment(carouselData[currentComment])
  }
  return (
    <CarouselWrapper>
      <ButtonResetted onClick={handleCommentChangeToTheLeft}>
        <ArrowToTheLeft
          src={Arrow}
          alt="Arrow inside button for left direction"
        />
      </ButtonResetted>
      <Comment>
        <CommentParagraph>{comment.commentParagraph}</CommentParagraph>
        <AuthorSign>{comment.commentAuthor}</AuthorSign>
        <CommentToRestaurant>{comment.commentToRestaurant}</CommentToRestaurant>
      </Comment>
      <ButtonResetted onClick={handleCommentChangeToTheRight}>
        <ArrowToTheRight
          src={Arrow}
          alt="Arrow inside button for right direction"
        />
      </ButtonResetted>
    </CarouselWrapper>
  )
})

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
`

const ButtonResetted = styled.button`
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  padding-bottom: 50px;
  z-index: 1;
`

const Comment = styled.div`
  padding: 12px 22px 0 22px;
`

const CommentParagraph = styled.p`
  color: #3b3b3b;
  font-size: 15px;
  margin-bottom: 14px;
  line-height: 19px;
  position: relative;
  z-index: 0;
  &::before {
    content: '"';
    position: absolute;
    font-size: 9rem;
    font-style: italic;
    left: -3rem;
    top: 1rem;
    opacity: 6%;
    color: #37496d;
    z-index: -1;
  }
`

const AuthorSign = styled.p`
  font-weight: 600;
  font-size: 13px;
  color: #9292af;
  margin: 0;
`

const CommentToRestaurant = styled.p`
  font-size: 11px;
  color: #9292af;
  margin: 0;
`

const ArrowToTheLeft = styled.img`
  height: 24px;
  width: 18px;
`

const ArrowToTheRight = styled.img`
  transform: rotate(180deg);
  height: 24px;
  width: 18px;
`

export default Carousel
