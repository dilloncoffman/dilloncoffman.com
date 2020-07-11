import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  PseudoBox,
  Text,
} from "@chakra-ui/core"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <PseudoBox
        bg="white"
        borderWidth="1px"
        borderColor="slate.500"
        rounded="lg"
        overflow="hidden"
        m={[0, 4, 6, 8]}
      >
        <Flex
          height={[
            "17vh", // base
            "25vh", // 480px upwards
            "35vh", // 768px upwards
            "40vh", // 992px upwards
          ]}
          p={5}
          justifyContent="flex-start"
          alignItems="flex-end"
          background="lightblue"
          backgroundImage={`url(${post.frontmatter.cover})`}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        >
          {post.frontmatter.coverCreditName ? (
            <Box>
              <Badge fontSize="0.75rem" variantColor="green">
                Credit:{" "}
              </Badge>
              <Link
                bg="white"
                ml={3}
                p={1}
                borderWidth="1px"
                borderColor="slate.500"
                rounded="sm"
                fontSize={13}
                fontWeight="bold"
                textTransform="uppercase"
                href={post.frontmatter.coverCreditLink}
                isExternal
              >
                {post.frontmatter.coverCreditName}
              </Link>
            </Box>
          ) : (
            <></>
          )}
        </Flex>

        <Box p={6}>
          <Heading as="h1" mt={0}>
            {post.frontmatter.title}
          </Heading>
          <Flex color="slate.400" fontSize="sm" fontWeight="bold" mb={2}>
            <Text as="span">{post.timeToRead} minute read</Text>
            <Divider borderColor="slate.200" orientation="vertical" />
            <Text as="span" textTransform="uppercase">
              {post.frontmatter.date}
            </Text>
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
        cover
        coverCreditName
        coverCreditLink
        date(formatString: "DD MMMM, YYYY")
      }
      timeToRead
    }
  }
`
