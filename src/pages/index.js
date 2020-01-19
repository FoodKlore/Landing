import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import Banner from "src/components/banner"
import ShowCase from "src/components/showcase"
import Experts from "src/components/experts"
import DownloadAppSection from "../components/downloadAppSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <ShowCase />
    <Experts />
    <DownloadAppSection />
  </Layout>
)

export default IndexPage
