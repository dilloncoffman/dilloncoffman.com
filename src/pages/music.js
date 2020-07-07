import React from "react"
import { Heading } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MusicPage = () => {
  return (
    <Layout>
      <SEO title="Music" />
      <Heading as="h1" size="2xl">
        Music
      </Heading>
    </Layout>
  )
}

export default MusicPage
