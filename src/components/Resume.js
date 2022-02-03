import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import resume from "../assets/images/resume.png";

export default function Resume() {
  return (
    <Box>
      <Flex justifyContent="center">
        <img
          src={resume}
          style={{ width: "50rem" }}
          alt="resume"
          className="resume"
        />
      </Flex>
    </Box>
  );
}
