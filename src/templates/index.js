import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pager from "../components/Pager"
import {
  Box,
  Divider,
  Heading,
  Image,
  Text,
  Flex,
  PseudoBox,
} from "@chakra-ui/core"
import { Link as GatsbyLink, graphql } from "gatsby"
import { motion } from "framer-motion"
import { SocialIcon } from "react-social-icons"
import "./index.css"

const MotionCard = motion.custom(PseudoBox)

const Blog = ({ data, pageContext }) => (
  <Layout>
    <SEO title="Home" />
    <Flex alignItems="center">
      <Image
        display={["none", "none", "block", "block"]}
        m={0}
        rounded="full"
        size={["50px", "75px", "125px", "150px"]}
        src="https://pbs.twimg.com/profile_images/1266034010901397506/RSZmaVNL_400x400.jpg"
        alt="Dillon Coffman"
      />
      <Flex justifyContent="center" flexDirection="column" ml={[0, 0, 10, 10]}>
        <Heading as="h1" size="2xl">
          Dillon Coffman
        </Heading>
        <Box>
          <Text display="inline" fontWeight="bold" fontSize={[17, 17, 22, 24]}>
            Developer &amp; Musician
          </Text>
          <SocialIcon
            className="my-social-icon"
            bgColor="#305479"
            url="https://twitter.com/_dilloncoffman_"
            style={{
              height: 50,
              width: 50,
              marginLeft: 10,
            }}
          />
          <SocialIcon
            className="my-social-icon"
            bgColor="#305479"
            url="https://github.com/dilloncoffman"
            style={{
              height: 50,
              width: 50,
              marginLeft: 10,
            }}
          />
        </Box>
      </Flex>
    </Flex>

    <Divider borderColor="slate.200" />

    <Heading as="h2" size="xl">
      Digital Garden{" "}
      <span role="img" aria-label="Emoji of a seedling">
        🌱
      </span>
    </Heading>
    <Text>
      Page {pageContext.humanPageNumber} of {pageContext.numberOfPages}
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
            <Heading as="h3" size="lg" color="slate.800" mt="1.45rem">
              {node.frontmatter.title}
            </Heading>
            <Flex color="slate.400" fontSize="sm" fontWeight="bold" mb={2}>
              <Text as="span">{node.timeToRead} minute read</Text>
              <Divider borderColor="slate.200" orientation="vertical" />
              <Text as="span" textTransform="uppercase">
                {node.frontmatter.date}
              </Text>
            </Flex>
            <Text>{node.excerpt}</Text>
          </Box>
        </MotionCard>
      </GatsbyLink>
    ))}
    <Pager pageContext={pageContext} />
  </Layout>
)

Blog.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
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

export default Blog
