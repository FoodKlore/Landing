import React, { memo } from "react"
import styled from "styled-components"
import Arrow from "src/images/arrow.svg"

const Carousel = memo(() => {
  return (
    <CarouselWrapper>
      <ButtonResetted>
        <ArrowToTheLeft src={Arrow} />
      </ButtonResetted>
      <Comment>
        <CommentParagraph>
          I tasted the “Elemental Plate” of Juan Mean Restaurant and y can say,
          that it’s so good food. It’s like a original Japanese Food
        </CommentParagraph>
        <AuthorSign>Takehiro Ohno - Japanese professional chef</AuthorSign>
        <CommentToRestaurant>To Juan Mean Restaurant</CommentToRestaurant>
      </Comment>
      <ButtonResetted>
        <ArrowToTheRight src={Arrow} />
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
