/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Box, CSSReset, Flex, Link, Text } from "@chakra-ui/core"
import { ThemeProvider } from "emotion-theming"
import radTheme from "../../rad-theme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={radTheme}>
      <CSSReset />
      <Box bg="slate.50" minHeight="100vh" color="black">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main style={{ paddingTop: 85 }}>{children}</main>
          <Flex as="footer" justify="space-between">
            {data.site.siteMetadata.title} © {new Date().getFullYear()}
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
        </div>
      </Box>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
