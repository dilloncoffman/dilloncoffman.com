import React from "react"
import { graphql } from "gatsby"
import { Heading, Text, Link, SimpleGrid } from "@chakra-ui/react"
import MainLayout from "../components/MainLayout"
import Seo from "../components/Seo"
import YouTubeCard from "../components/YouTubeCard"
import "../css/index.css"

const MusicPage = ({ data }) => {
  const videoCount = data.allYoutubeVideo.totalCount
  const videos = data.allYoutubeVideo.nodes
  return (
    <MainLayout>
      <Seo title="Music" />
      <Heading as="h1" size="xl" mt={[2, 5, 5, 8]}>
        Music{" "}
        <span role="img" aria-label="Emojis of headphones and a guitar">
          🎧 🎸
        </span>
      </Heading>
      <Text>{videoCount} Videos</Text>
      <SimpleGrid columns={[1, 1, 2, 2]} spacing={5}>
        {videos.map(video => (
          <Link
            key={video.videoId}
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            isExternal
            className="no-hover-gradient"
            bgImage="none"
          >
            <YouTubeCard {...video} />
          </Link>
        ))}
      </SimpleGrid>
    </MainLayout>
  )
}

export const query = graphql`
  query {
    allYoutubeVideo {
      nodes {
        title
        description
        videoId
        localThumbnail {
          childImageSharp {
            fluid(
              maxWidth: 400
              duotone: { highlight: "#B0DBFC", shadow: "#192550" }
              toFormat: PNG
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        publishedAt
      }
      totalCount
    }
  }
`

export default MusicPage
