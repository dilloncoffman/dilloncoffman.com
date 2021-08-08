import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Button, Center, Divider, Flex, useMediaQuery } from "@chakra-ui/react"
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons"

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  const [isMobile] = useMediaQuery("(max-width: 600px)")

  return (
    <Flex justify="center" alignItems="center">
      {previousPagePath && (
        <>
          <Button
            as={GatsbyLink}
            to={previousPagePath}
            aria-label="Previous Page"
            leftIcon={<ArrowBackIcon />}
            minW={{ base: isMobile && 90, sm: 144 }}
          >
            {!isMobile && <>Previous</>}
          </Button>
          {pageContext.humanPageNumber !== pageContext.numberOfPages && (
            <Center h={50}>
              <Divider
                m="10px"
                borderWidth={1}
                borderColor="slate.200"
                orientation="vertical"
              />
            </Center>
          )}
        </>
      )}
      {nextPagePath && (
        <Button
          as={GatsbyLink}
          to={nextPagePath}
          aria-label="Next Page"
          rightIcon={<ArrowForwardIcon />}
          minW={{ base: isMobile && 90, sm: 144 }}
        >
          {!isMobile && <>Next</>}
        </Button>
      )}
    </Flex>
  )
}

Pager.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Pager
