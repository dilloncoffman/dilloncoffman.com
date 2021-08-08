import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Heading, Flex } from "@chakra-ui/react"
import DrawerMenu from "./DrawerMenu"

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
        position: "fixed",
        right: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg="slate.800"
        color="white"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"} m={0}>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                textShadow: "none",
                textUnderlinePosition: "none",
                backgroundImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #B3DEFF 1px, #B3DEFF 2px, rgba(0, 0, 0, 0) 20px)",
              }}
            >
              {siteTitle}
            </Link>
          </Heading>
        </Flex>
        <DrawerMenu />
      </Flex>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
