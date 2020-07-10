import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Button, Divider, Flex } from "@chakra-ui/core"

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <Flex justify="center" alignItems="center">
      {previousPagePath && (
        <Flex>
          <Button
            as={GatsbyLink}
            to={previousPagePath}
            aria-label="Previous Page"
            leftIcon="arrow-back"
            minW={150}
          >
            Previous
          </Button>
          {pageContext.humanPageNumber !== pageContext.numberOfPages && (
            <Divider
              m="10px"
              borderWidth={3}
              borderColor="slate.200"
              orientation="vertical"
            />
          )}
        </Flex>
      )}
      {nextPagePath && (
        <Button
          as={GatsbyLink}
          to={nextPagePath}
          aria-label="Next Page"
          rightIcon="arrow-forward"
          minW={150}
        >
          Next
        </Button>
      )}
    </Flex>
  )
}

Pager.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Pager
