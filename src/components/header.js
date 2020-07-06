import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Heading, Flex } from "@chakra-ui/core"
import DrawerMenu from "./DrawerMenu"

const Header = props => {
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
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
        {...props}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {props.siteTitle}
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
