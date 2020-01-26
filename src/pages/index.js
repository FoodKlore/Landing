import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import Banner from "src/components/banner"
import ShowCase from "src/components/showcase"
import Experts from "src/components/experts"
import HowItWorks from "src/components/howItWorks"
import DownloadAppSection from "../components/downloadAppSection"
import ContactForm from "../components/contactForm"
import LegalComponent from "../components/legalComponent"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <ShowCase />
    <Experts />
    <HowItWorks />
    <DownloadAppSection />
    <ContactForm />
    <Footer />
    <LegalComponent />
  </Layout>
)

export default IndexPage
