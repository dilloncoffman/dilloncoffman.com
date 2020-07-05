import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Icon,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/core";

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState("right");

  return (
    <>
      <IconButton variant="outline" aria-label="Open navigation menu" icon="menu" onClick={onOpen} />
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Drawer O'Links</DrawerHeader>
          <DrawerBody>
            <Stack spacing={8}>
              <Box>
                <Link as={GatsbyLink} to="/">
                  <Icon name="home" color="black" mr="12px" size="24px" />
                  Home
                </Link>
              </Box>
              <Box>
                <Link as={GatsbyLink} to="/about">
                  <Icon name="astronaut" color="black" mr="12px" size="24px" />
                  About
                </Link>
              </Box>
              <Box>
                <Link as={GatsbyLink} to="/music">
                  <Icon name="music" color="black" mr="12px" size="24px" />
                  Music
                </Link>
              </Box>
              <Box>
                <Link as={GatsbyLink} to="/notes">
                  <Icon name="notes" color="black" mr="12px" size="24px" />
                  Notes
                </Link>
              </Box>

            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerMenu;
