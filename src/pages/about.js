import React from "react"
import { graphql } from "gatsby"
import { Flex, Heading, Link, Box, Text } from "@chakra-ui/react"
import MainLayout from "../components/MainLayout"
import Seo from "../components/Seo"

const AboutPage = ({ data }) => {
  return (
    <MainLayout>
      <Seo title="About" />
      <Heading as="h1" size="xl" mt={[2, 5, 5, 8]}>
        About{" "}
        <span role="img" aria-label="Emoji of hand waving">
          👋
        </span>
      </Heading>
      <Heading as="h2" size="lg">
        Completely Authentic Third Person Bio
      </Heading>
      <Text>
        Dillon Coffman is a developer from Pittsburgh, PA. He recently graduated
        in May of 2020 with a Bachelor of Science in Computer Science from
        Temple University in Philadelphia, PA. He's currently a Senior Web
        Developer at Wolfe LLC. In his free time he plays{" "}
        <Link href="https://www.dilloncoffman.com/music" color="blue.600">
          music
        </Link>{" "}
        on all kinds of instruments and tries to read a lot of books on
        philosophy and life. Here he is trying to pet a Philly bookstore cat
        unsuccessfully:
      </Text>
      <Box
        bg="white"
        borderWidth="1px"
        borderColor="slate.500"
        rounded="lg"
        overflow="hidden"
        m={[0, 4, 6, 8]}
      >
        <Flex
          height={[
            "35vh", // base
            "45vh", // 480px upwards
            "65vh", // 768px upwards
            "65vh", // 992px upwards
          ]}
          p={5}
          justifyContent="flex-start"
          alignItems="flex-end"
          background="lightblue"
          backgroundImage={`url(${data.bookstoreCat.childImageSharp.fluid.src})`}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        ></Flex>
      </Box>
      <Heading as="h2" size="lg">
        Hey there!
      </Heading>
      <Text>
        Thanks for checking out my site. This site is a conglomeration of all
        things me. Here you'll find everything from my thoughts on tech and
        philosophy to little songs and covers I've made. Ever since I was little
        I've been playing guitar (yes, the Fisher-Price piece of plastic with
        buttons and sounds totally counts!) and find myself most at ease when
        listening to or playing music. You could say music is my.. ...{" "}
        <strong>jam</strong>. Sorry about that.
      </Text>
      <Text>
        Outside of music, I find myself hacking on side projects. I've recently
        set out on a mission to help those in my local community build an online
        presence. So far I've helped a local nonprofit by building them an{" "}
        <Link
          href="https://walk-our-watershed.netlify.com"
          color="blue.600"
          isExternal
        >
          event website
        </Link>{" "}
        to raise money and get our community active during COVID-19. Thanks to
        University, a couple rad internships, a cool job and an insatiable
        curiosity, I've had the opportunity to work with all kinds of
        technology. From writing C programs to developing Android applications
        to building web apps in the cloud, you can find it all on{" "}
        <Link
          href="https://github.com/dilloncoffman"
          color="blue.600"
          isExternal
        >
          my GitHub
        </Link>
        . Currently I'm interested in building web apps with{" "}
        <Link href="https://www.gatsbyjs.com/" color="blue.600" isExternal>
          Gatsby
        </Link>{" "}
        and serverless technologies like{" "}
        <Link href="https://docs.amplify.aws/" color="blue.600" isExternal>
          AWS Amplify
        </Link>
        .
      </Text>
      <Text>
        Want to say{" "}
        <span role="img" aria-label="Emoji of hand waving">
          👋
        </span>
        ? Want to talk tech, music or philosophy? Feel free to reach out any
        time by{" "}
        <Link color="blue.600" href="mailto:dillcoff@gmail.com">
          emailing me
        </Link>
        .
      </Text>
    </MainLayout>
  )
}

export const query = graphql`
  query {
    profilePic: file(relativePath: { eq: "dillon-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bookstoreCat: file(relativePath: { eq: "dillon-bookstore-cat.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
