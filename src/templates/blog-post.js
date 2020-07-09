import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import { Box, Divider, Flex, Heading, PseudoBox, Text } from "@chakra-ui/core"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  console.log(post)
  return (
    <Layout>
      <SEO title="Music" />
      <PseudoBox
        bg="white"
        borderWidth="1px"
        borderColor="slate.500"
        rounded="lg"
        overflow="hidden"
        m={[0, 4, 6, 8]}
      >
        <Box p={6}>
          <Heading as="h1" mt={0}>
            {post.frontmatter.title}
          </Heading>
          <Flex color="slate.400" fontSize="sm" fontWeight="bold" mb={2}>
            <Text as="span">{post.timeToRead} minute read</Text>
            <Divider borderColor="slate.200" orientation="vertical" />
            <Text as="span">{post.frontmatter.date.toUpperCase()}</Text>
          </Flex>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
      </PseudoBox>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      timeToRead
    }
  }
`
