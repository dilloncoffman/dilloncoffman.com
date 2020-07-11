import React from "react"
import { Box, Flex, Link, Text } from "@chakra-ui/core"

const Footer = ({ siteTitle }) => (
  <Flex
    as="footer"
    justify="space-between"
    alignItems="center"
    flexDirection="column"
    mt="1.25rem"
    fontSize={["sm", "md", "lg", "xl"]}
  >
    {siteTitle} © {new Date().getFullYear()}
    <Box>
      Proudly published with
      {` `}
      <Link href="https://www.netlify.com/" isExternal>
        Netlify
      </Link>{" "}
    </Box>
    <Text>
      Built with
      {` `}
      <Link href="https://www.gatsbyjs.org" isExternal>
        Gatsby
      </Link>{" "}
      &amp;{" "}
      <Link href="https://chakra-ui.com/" isExternal>
        Chakra UI
      </Link>
    </Text>
  </Flex>
)

export default Footer
