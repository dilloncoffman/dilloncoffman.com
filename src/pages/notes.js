import React from "react"
import { Heading, Text } from "@chakra-ui/react"
import MainLayout from "../components/MainLayout"
import Seo from "../components/Seo"

const NotesPage = () => {
  return (
    <MainLayout>
      <Seo title="Notes" />
      <Heading as="h1" size="xl" mt={[2, 5, 5, 8]}>
        Notes
        <span role="img" aria-label="Emoji of a pencil">
          ✏️
        </span>
      </Heading>
      <Text>
        Here you'll eventually find notes I've compiled on books that I've read{" "}
        <span role="img" aria-label="Emoji of a smiley face">
          😄
        </span>
      </Text>
    </MainLayout>
  )
}

export default NotesPage
