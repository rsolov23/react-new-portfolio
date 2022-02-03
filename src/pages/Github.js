import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Flex, chakra } from "@chakra-ui/react";

function Github() {
  const colorTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
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
        //   theme={colorTheme}
          fontSize={16}
        />
      </Flex>
    </Box>
  );
}

export default Github;
