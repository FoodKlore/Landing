import React from "react"
import { P } from "./global"
import styled from "styled-components"
import ExpertsSectionBackground from "./expertBackgroundImage"

const ContactForm = () => (
  <ContactFormWrapper
    id="subscribe"
    style={{
      backgroundImage: `url(${
        ExpertsSectionBackground().expertsSectionBackgroundImageRotated
          .childImageSharp.fluid.src
      })`,
      backgroundColor: `#e83b54`,
      backgroundPosition: `top right`,
      backgroundRepeat: `no-repeat`,
    }}
  >
    <TitleWrapper>
      <P margin={0} fontsize={"22px"} weight={600} lineheight={"normal"}>
        Come and experience <br /> the &nbsp;
        <span>
          taste of culture <br />
        </span>
        on your palate
      </P>
      <P className="temp_message" margin={0} fontsize={"14px"} weight={600} lineheight={"normal"}>
        Our application is under <br /> contruction &nbsp;
        <span>
          subscribe <br />
        </span>
        to be one of the first to get notify.
        {/* Nuestra aplication esta under develop, suscribete para ser uno de los primeros en enterarse. */}
      </P>
    </TitleWrapper>
    <ContactFormComponent>
      <InputText type="text" placeholder="Name" id="input_name"/>
      <InputText type="email" placeholder="Email" />
      <InputSubmit type="submit" value="Suscribe Now" />
    </ContactFormComponent>
  </ContactFormWrapper>
)

const TitleWrapper = styled.div`
  display: flex;
  color: white;
  font-weight: 900;
  align-items: center;
  margin: 0% 5% 0% 0%;
  flex: 1;
  flex-direction: column;

  .temp_message {
    background-color: #ed5a6f;
    margin-top: 35px;
    width: 60%;
    padding: 5%;
  }

  @media only screen and (max-width: 699px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1;

    .temp_message {
      width: auto;
    }
  }
`

const ContactFormWrapper = styled.section`
  width: 1322px;
  padding: 5%;
  background-color: #e83b54;
  display: flex;
  border-radius: 25px 0px 25px 0px;
  margin-top: -149px;
  z-index: 2;

  @media only screen and (max-width: 699px) {
    width: 90%;
    max-width: 90%;
    padding: 0px 12px 0px 12px;
    height: 568px;
    margin-top: -10vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const ContactFormComponent = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: center;
  margin: 0;
  @media only screen and (max-width: 699px) {
    width: 100%;
    justify-content: center;
    flex: 0.5;
    input {
      width: 100%;
    }
  }
`

const InputSubmit = styled.input.attrs(props => ({
  type: "submit",
}))`
  width: 180px;
  height: 46px;
  border-radius: 8px;
  background-color: #ffffff;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  align-self: flex-end;
  color: #e83b54;
  @media only screen and (max-width: 699px) {
    width: 50% !important;
    align-self: center;
  }
`

const InputText = styled.input`
  width: 620px;
  height: 46px;
  border-radius: 8px;
  background-color: #ed5a6f;
  border: 0;
  margin-bottom: 2%;
  padding: 0% 2%;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  @media only screen and (max-width: 699px) {
    font-size: 16px;
  }
`

export default ContactForm
