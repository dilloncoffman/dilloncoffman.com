import React, { useState, useRef } from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import AstronautIcon from "./icons/AstronautIcon"
import HomeIcon from "./icons/HomeIcon"
import MusicIcon from "./icons/MusicIcon"
import CustomMenuIcon from "./icons/CustomMenuIcon"

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navBtnRef = useRef()
  const [placement] = useState("right")

  return (
    <>
      <IconButton
        ref={navBtnRef}
        style={{ backgroundColor: "transparent" }}
        variant="outline"
        aria-label="Open navigation menu"
        icon={<CustomMenuIcon />}
        onClick={onOpen}
      />
      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        finalFocusRef={navBtnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            mt="6px"
            _hover={{ bg: "gray.200", borderRadius: 5, color: "#004173" }}
            _focus={{
              outline: "none",
              bg: "gray.200",
              boxShadow: "outline",
              borderRadius: 5,
              color: "#004173",
            }}
          />
          <DrawerHeader borderBottomWidth="1px">
            <br />
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={8} textTransform="uppercase">
              <Box
                py={2}
                m={0}
                as={GatsbyLink}
                to="/"
                color="#001626"
                _hover={{ bg: "gray.200", borderRadius: 5, color: "#004173" }}
                _focus={{
                  outline: "none",
                  bg: "gray.200",
                  boxShadow: "outline",
                  borderRadius: 5,
                  backgroundImage:
                    "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #B3DEFF 1px, #B3DEFF 2px, rgba(0, 0, 0, 0) 20px)",
                  color: "#004173",
                }}
              >
                <Flex px={4} alignItems="center">
                  <HomeIcon mr="15px" boxSize="30px" />
                  <Text mb={0}>Home</Text>
                </Flex>
              </Box>
              <Box
                py={2}
                mt={0}
                as={GatsbyLink}
                to="/about"
                color="#001626"
                _hover={{ bg: "gray.200", borderRadius: 5, color: "#004173" }}
                _focus={{
                  outline: "none",
                  bg: "gray.200",
                  boxShadow: "outline",
                  borderRadius: 5,
                  backgroundImage:
                    "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #B3DEFF 1px, #B3DEFF 2px, rgba(0, 0, 0, 0) 20px)",
                  color: "#B3D004173EFF",
                }}
              >
                <Flex px={4} alignItems="center">
                  <AstronautIcon mr="15px" boxSize="30px" />
                  <Text mb={0}>About</Text>
                </Flex>
              </Box>
              <Box
                py={2}
                mt={0}
                as={GatsbyLink}
                to="/music"
                color="#001626"
                _hover={{ bg: "gray.200", borderRadius: 5, color: "#004173" }}
                _focus={{
                  outline: "none",
                  bg: "gray.200",
                  boxShadow: "outline",
                  borderRadius: 5,
                  backgroundImage:
                    "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #B3DEFF 1px, #B3DEFF 2px, rgba(0, 0, 0, 0) 20px)",
                  color: "#004173",
                }}
              >
                <Flex px={4} alignItems="center">
                  <MusicIcon mr="15px" boxSize="30px" />
                  <Text mb={0}>Music</Text>
                </Flex>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerMenu
