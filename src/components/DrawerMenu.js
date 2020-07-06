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
            <Stack spacing={8}>
              <PseudoBox
                py={2}
                as={GatsbyLink}
                to="/"
                _hover={{ bg: "gray.200", borderRadius: 5 }}
                _focus={{
                  outline: "none",
                  bg: "gray.200",
                  boxShadow: "outline",
                  borderRadius: 5,
                }}
              >
                <Box px={4}>
                  <Icon name="home" color="black" mr="12px" size="24px" />
                  Home
                </Box>
              </PseudoBox>
              <PseudoBox
                py={2}
                as={GatsbyLink}
                to="/about"
                _hover={{ bg: "gray.200", borderRadius: 5 }}
                _focus={{
                  outline: "none",
                  bg: "gray.200",
                  boxShadow: "outline",
                  borderRadius: 5,
                }}
              >
                <Box px={4}>
                  <Icon name="astronaut" color="black" mr="12px" size="24px" />
                  About
                </Box>
              </PseudoBox>
              <PseudoBox
                py={2}
                as={GatsbyLink}
                to="/music"
                _hover={{ bg: "gray.200", borderRadius: 5 }}
                _focus={{
                  outline: "none",
                  bg: "gray.200",
                  boxShadow: "outline",
                  borderRadius: 5,
                }}
              >
                <Box px={4}>
                  <Icon name="music" color="black" mr="12px" size="24px" />
                  Music
                </Box>
              </PseudoBox>
              <PseudoBox
                py={2}
                as={GatsbyLink}
                to="/notes"
                _hover={{ bg: "gray.200", borderRadius: 5 }}
                _focus={{
                  outline: "none",
                  bg: "gray.200",
                  boxShadow: "outline",
                  borderRadius: 5,
                }}
              >
                <Box px={4}>
                  <Icon name="notes" color="black" mr="12px" size="24px" />
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
