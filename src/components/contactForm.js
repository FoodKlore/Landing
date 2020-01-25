import React from "react"
import { P } from "./global"
import styled from "styled-components"
import ExpertsSectionBackground from "./expertBackgroundImage"

const ContactForm = () => (
  <ContactFormWrapper
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
    <div
      style={{
        display: "flex",
        color: "white",
        fontWeight: "900",
        alignItems: "center",
        margin: "0% 5% 0% 0%",
        flex: 1,
      }}
    >
      <P margin={0} fontsize={22} weight={600} lineheight={1.45}>
        Come and experience <br /> the &nbsp;
        <span
          style={{
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          taste of culture <br />
        </span>
        on your palate
      </P>
    </div>
    <ContactFormComponent>
      <InputText type="text" placeholder="Name" />
      <InputText type="email" placeholder="Email" />
      <InputSubmit type="submit" value="Suscribe Now" />
    </ContactFormComponent>
  </ContactFormWrapper>
)

const ContactFormWrapper = styled.section`
  width: 1322px;
  height: 316px;
  padding: 5%;
  background-color: #e83b54;
  display: flex;
  border-radius: 25px 0px 25px 0px;
  margin-top: -149px;
  z-index: 2;
`

const ContactFormComponent = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: center;
  margin: 0;
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
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  align-self: flex-end;
  color: #e83b54;
`

const InputText = styled.input`
  width: 620px;
  height: 46px;
  border-radius: 8px;
  background-color: #ed5a6f;
  border: 0;
  margin-bottom: 2%;
  padding: 0% 2%;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`

export default ContactForm
