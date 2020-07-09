import React, { useState } from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  IconButton,
  PseudoBox,
  Stack,
  useDisclosure,
} from "@chakra-ui/core"

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement] = useState("right")

  return (
    <>
      <IconButton
        style={{ backgroundColor: "transparent" }}
        variant="outline"
        aria-label="Open navigation menu"
        icon="menu"
        onClick={onOpen}
      />
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            mt="6px"
            _focus={{
              outline: "none",
              bg: "gray.200",
              boxShadow: "outline",
              borderRadius: 5,
            }}
          />
          <DrawerHeader borderBottomWidth="1px">
            <br />
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={8} textTransform="uppercase">
              <PseudoBox
                py={2}
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
                <Box px={4}>
                  <Icon name="home" mr="15px" size="30px" />
                  Home
                </Box>
              </PseudoBox>
              <PseudoBox
                py={2}
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
                <Box px={4}>
                  <Icon name="astronaut" mr="15px" size="30px" />
                  About
                </Box>
              </PseudoBox>
              <PseudoBox
                py={2}
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
                <Box px={4}>
                  <Icon name="music" mr="15px" size="30px" />
                  Music
                </Box>
              </PseudoBox>
              <PseudoBox
                py={2}
                as={GatsbyLink}
                to="/notes"
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
                <Box px={4}>
                  <Icon name="notes" mr="15px" size="30px" />
                  Notes
                </Box>
              </PseudoBox>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerMenu
