import React from "react";
import {
  Flex,
  Image,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
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
