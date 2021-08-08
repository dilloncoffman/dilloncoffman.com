import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../components/MainLayout"
import Seo from "../components/Seo"
import { Badge, Box, Flex, Heading, Link, Text } from "@chakra-ui/react"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <MainLayout>
      <Seo title={post.frontmatter.title} />
      <Box
        bg="white"
        borderColor="slate.500"
        rounded="lg"
        overflow="hidden"
        m={[0, 4, 6, 8]}
      >
        <Flex
          height={[
            "29vh", // base
            "35vh", // 480px upwards
            "38vh", // 768px upwards
            "43vh", // 992px upwards
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
              <Badge fontSize="0.75rem" colorScheme="green">
                Credit:{" "}
              </Badge>
              <Link
                bg="white"
                ml={3}
                p={1}
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
          <Flex
            color="slate.400"
            fontSize="sm"
            fontWeight="bold"
            mb={2}
            justifyContent="space-between"
          >
            <Text as="span" textTransform="uppercase">
              {post.frontmatter.date}
            </Text>
            <Text as="span">{post.timeToRead} minute read</Text>
          </Flex>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
      </Box>
    </MainLayout>
  )
}

export const query = graphql`
  query ($slug: String!) {
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
