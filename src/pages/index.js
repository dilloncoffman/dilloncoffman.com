import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Divider, Heading, Text, Flex, PseudoBox } from "@chakra-ui/core"
import { Link as GatsbyLink, graphql } from "gatsby"
import { motion } from "framer-motion"

const MotionCard = motion.custom(PseudoBox)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Heading as="h1" size="2xl">
      Dillon Coffman
    </Heading>
    <Text>Developer &amp; Musician</Text>
    <Divider borderColor="slate.200" />

    <Heading as="h2" size="xl">
      Blog
    </Heading>
    <Text>
      {data.allMarkdownRemark.totalCount} Post
      {data.allMarkdownRemark.totalCount === 1 ? <></> : <>s</>}
    </Text>

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <GatsbyLink key={node.id} to={node.fields.slug}>
        <MotionCard
          bg="white"
          borderWidth="1px"
          borderColor="slate.500"
          rounded="lg"
          overflow="hidden"
          _hover={{
            boxShadow: "0 8px 6px -6px gray",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.975 }}
          mb={5}
        >
          <Box p={6}>
            <Heading as="h3" size="lg" color="slate.800">
              {node.frontmatter.title}
            </Heading>
            <Flex color="slate.400" fontSize="sm" fontWeight="bold" mb={2}>
              <Text as="span">{node.timeToRead} minute read</Text>
              <Divider borderColor="slate.200" orientation="vertical" />
              <Text as="span">{node.frontmatter.date.toUpperCase()}</Text>
            </Flex>
            <Text>{node.excerpt}</Text>
          </Box>
        </MotionCard>
      </GatsbyLink>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`

export default IndexPage
