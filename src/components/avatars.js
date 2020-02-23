import React from "react"
import styled from "styled-components"
import Avatar01 from "src/images/Avatar01.png"
import Avatar02 from "src/images/Avatar02.png"
import Avatar03 from "src/images/Avatar03.png"
import Avatar04 from "src/images/Avatar04.png"

const Avatars = () => {
  return (
    <AvatarsGrid>
      <div className="grid-container">
        <div className="avatar-active">
          <img src={Avatar01} alt="Expert thumbnail" />
        </div>
        <div className="avatar01">
          <img src={Avatar02} alt="Expert thumbnail" />
        </div>
        <div className="avatar02">
          <img src={Avatar03} alt="Expert thumbnail" />
        </div>
        <div className="avatar03">
          <img src={Avatar04} alt="Expert thumbnail" />
        </div>
      </div>
    </AvatarsGrid>
  )
}

const AvatarsGrid = styled.div`
  .grid-container {
    display: grid;
    grid-template-columns: 1.4fr 1fr 0.7fr 0.3fr 1.6fr;
    grid-template-rows: 0.7fr 0.9fr 0.7fr 1.7fr 0.1fr;
    grid-template-areas: ". avatar01 avatar01 . ." ". avatar01 avatar01 avatar02 avatar02" "avatar-active avatar-active avatar-active avatar02 avatar02" "avatar-active avatar-active avatar-active . avatar03" "avatar-active avatar-active avatar-active . .";
  }

  .avatar01 {
    grid-area: avatar01;
  }

  .avatar02 {
    grid-area: avatar02;
  }

  .avatar-active {
    grid-area: avatar-active;
  }

  .avatar03 {
    grid-area: avatar03;
  }
`

/*
 */

export default Avatars
