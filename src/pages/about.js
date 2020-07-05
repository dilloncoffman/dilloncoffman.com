import React from 'react'
import { Heading } from '@chakra-ui/core'
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Heading>About</Heading>
    </Layout>
  )
}

export default AboutPage