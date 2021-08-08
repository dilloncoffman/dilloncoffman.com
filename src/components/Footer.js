import React from "react"
import { Box, Flex, Link, Text } from "@chakra-ui/react"

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
      <Link href="https://www.netlify.com/" color="blue.600" isExternal>
        Netlify
      </Link>{" "}
    </Box>
    <Text>
      Built with
      {` `}
      <Link href="https://www.gatsbyjs.org" color="blue.600" isExternal>
        Gatsby
      </Link>{" "}
      &amp;{" "}
      <Link href="https://chakra-ui.com/" color="blue.600" isExternal>
        Chakra UI
      </Link>
    </Text>
  </Flex>
)

export default Footer
