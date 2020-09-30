import React from "react"
import { Box, Flex, PseudoBox } from "@chakra-ui/core"
import { motion } from "framer-motion"
import moment from "moment"
import Img from "gatsby-image"

const MotionCard = motion.custom(PseudoBox)

const YouTubeCard = ({ title, localThumbnail, publishedAt }) => {
  return (
    <MotionCard
      bg="white"
      rounded="lg"
      overflow="hidden"
      _hover={{
        boxShadow: "0 8px 6px -6px gray",
        cursor: "pointer",
      }}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      maxW={[270, 400, 350, 400]}
      minH={[200, 300, 300, 300]}
      margin="0 auto"
    >
      <Img
        fluid={localThumbnail.childImageSharp.fluid}
        alt={title}
        imgStyle={{ height: 200, width: 400 }}
        style={{ maxHeight: 200, marginBottom: 20 }}
      />
      <Flex
        color="slate.800"
        fontSize="17px"
        fontWeight="bold"
        mb={[0, 0, 2, 2]}
        justify="center"
        textTransform="uppercase"
        textAlign="center"
      >
        {title.split("Guitar Cover")}
      </Flex>
      <Box px={4} py={2}>
        <Box d="flex" justifyContent="center" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {moment(publishedAt).format("D MMMM, YYYY")}
          </Box>
        </Box>
      </Box>
    </MotionCard>
  )
}

export default YouTubeCard
