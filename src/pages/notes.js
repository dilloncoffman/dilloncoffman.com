import React from "react"
import { Heading } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotesPage = () => {
  return (
    <Layout>
      <SEO title="Notes" />
      <Heading as="h1" size="xl" mt={[2, 5, 5, 8]}>
        Notes
      </Heading>
    </Layout>
  )
}

export default NotesPage
