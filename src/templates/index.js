import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pager from "../components/Pager"
import {
  Box,
  Divider,
  Heading,
  Text,
  Flex,
  PseudoBox,
  Link,
} from "@chakra-ui/core"
import { Link as GatsbyLink, graphql } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import { SocialIcon } from "react-social-icons"
import "../css/index.css"

const MotionCard = motion.custom(PseudoBox)

const Blog = ({ data, pageContext }) => (
  <Layout>
    <SEO title="Home" image="/../../daisydillon.jpg" />
    <Img
      fluid={data.profilePic.childImageSharp.fluid}
      imgStyle={{
        marginTop: 30,
        marginBottom: 0,
        height: 200,
        width: 200,
        borderRadius: 100,
        left: "50%",
        transform: "translateX(-50%)",
      }}
      style={{
        maxHeight: 230,
      }}
    />
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mb={30}
    >
      {/* <Img
          fluid={data.profilePic.childImageSharp.fluid}
          imgStyle={{ height: 200, width: 200, borderRadius: 100 }}
          style={{
            paddingTop: 100,
            maxHeight: 200,
          }}
        /> */}

      <Heading as="h1" size="2xl" mt={[2, 5, 5, 5]}>
        Dillon Coffman
      </Heading>

      <Box>
        <Text display="inline" fontWeight="bold" fontSize={[17, 17, 22, 24]}>
          Developer &amp; Musician
        </Text>
        <SocialIcon
          className="my-social-icon no-hover-gradient"
          bgColor="#305479"
          url="https://twitter.com/_dilloncoffman_"
          style={{
            height: 50,
            width: 50,
            marginLeft: 55,
          }}
        />
        <SocialIcon
          className="my-social-icon no-hover-gradient"
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

    <Divider borderColor="slate.200" />

    <Box mt={[5, 5, 5, 10]} mb={[2, 5, 5, 5]}>
      <Link
        fontSize={["1.7rem", "1.8rem", "2rem", "2.25rem"]}
        fontWeight="bold"
        as={Link}
        href="https://joelhooks.com/digital-garden"
      >
        Digital Garden{" "}
        <span role="img" aria-label="Emoji of a seedling">
          🌱
        </span>
      </Link>
    </Box>

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
    profilePic: file(relativePath: { eq: "dillon-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
