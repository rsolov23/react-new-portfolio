import React from "react";
import {
  Image,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import avatar from "../assets/images/avatar.svg";
import ScrollToTop from "./ScrollToTop";

export default function Bio() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          id="bio"
          color={"#FFF"}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          LET ME&nbsp;
          <Text as={"span"} color={"#6d00b7"}>
            INTRODUCE MYSELF
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
        I am a Full Stack Web Developer enjoying life in Cedar Park, Texas. In
          my free time I enjoy going to concerts and exploring the outdoors with
          my two dogs Apollo and Hercules. My new love/obsession with coding has
          changed my life. I am fulfilled in my journey of learning something
          new each day. Currently a Teaching Assistant for a Full Stack Coding
          Bootcamp looking to break into a career in Web Development.
        </Text>
        <Stack w={"full"} align={"center"}>
          <Image alt={"avatar"} objectFit={"fill"} src={avatar} />
        </Stack>
        <a href="/contact" target="blank">
          <button className="bn30">Hire Me!</button>
        </a>
        <ScrollToTop />
      </Stack>
    </Container>
  );
}
