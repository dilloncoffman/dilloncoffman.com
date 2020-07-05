import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading } from "@chakra-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>Home - A Commonplace Book</Heading>
  </Layout>
)

export default IndexPage
