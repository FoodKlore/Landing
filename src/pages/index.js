import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import Banner from "src/components/banner"
import ShowCase from "src/components/showcase"
import Experts from "src/components/experts"
import DownloadAppSection from "../components/downloadAppSection"
import ContactForm from "../components/contactForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <ShowCase />
    <Experts />
    <DownloadAppSection />
    <ContactForm />
  </Layout>
)

export default IndexPage
