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
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react"
import radTheme from "../../rad-theme"
import Footer from "./Footer"

const extendedRadTheme = extendTheme(radTheme)

const MainLayout = ({ children }) => {
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
    <ChakraProvider theme={extendedRadTheme} resetCSS={false}>
      <Box bg="slate.50" minHeight="100vh" color="black">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main style={{ paddingTop: 90 }}>{children}</main>
        </div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </Box>
    </ChakraProvider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
