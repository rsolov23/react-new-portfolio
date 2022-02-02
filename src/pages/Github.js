import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Flex, chakra } from "@chakra-ui/react";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#6d00b7",
    grade4: "#2c1666",
    grade3: "#6d00b7",
    grade2: "#7d94e8",
    grade1: "#1268ac",
    grade0: "#c8d9bb",
  };
  return (
    <Box p={5} m={10} borderRadius="md" id="tools">
      <chakra.h1
        display="flex"
        justifyContent="center"
        fontWeight="bold"
        fontSize="2.5rem"
        mb={5}
      >
        Days I Code
      </chakra.h1>
      <Flex display="flex" justifyContent="space-evenly">
        <GitHubCalendar
          username="rsolov23"
          blockSize={15}
          blockMargin={5}
          theme={colourTheme}
          fontSize={16}
        />
      </Flex>
    </Box>
  );
}

export default Github;
