import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/layout"
import Image from "src/components/image"
import SEO from "src/components/seo"
import Banner from "src/components/banner"
import ShowCase from "src/components/showcase"
import Experts from "src/components/experts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <ShowCase />
    <Experts />
  </Layout>
)

export default IndexPage
