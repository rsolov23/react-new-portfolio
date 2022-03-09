import React from "react";
import { Icon } from "@iconify/react";
import { Box, Flex, chakra } from "@chakra-ui/react";
import Skills from "../pages/Skills";
import Github from "../pages/Github";
export default function About() {
  return (
    <>
      <Box p={5} m={10} borderRadius="md" id="tools">
        <chakra.h1
          display="flex"
          justifyContent="center"
          fontWeight="bold"
          fontSize="2.5rem"
          mb={5}
        >
          Tools I Use
        </chakra.h1>
        <Flex display="flex" justifyContent="space-evenly" mb={5}>
          <Icon
            className="test"
            icon="logos:visual-studio-code"
            width="75"
            height="75"
          />
          <Icon
            className="test"
            icon="logos:heroku-icon"
            width="75"
            height="75"
          />
          <Icon
            className="test"
            icon="icon-park:github"
            width="75"
            height="75"
          />
          <Icon
            className="test"
            icon="logos:lighthouse"
            width="75"
            height="75"
          />
          <Icon
            className="test"
            icon="flat-color-icons:google"
            width="75"
            height="75"
          />
          <Icon
            className="test"
            icon="logos:bash-icon"
            width="75"
            height="75"
          />
        </Flex>
      </Box>
      <Skills />
      <Github />
    </>
  );
}
