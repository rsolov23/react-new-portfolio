import React from "react";
import { Icon } from "@iconify/react";
import { Box, Flex, chakra, Text } from "@chakra-ui/react";

export default function Skills() {
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
          Profesional Skillset
        </chakra.h1>
        <Flex display="flex" justifyContent="space-evenly" mb={5}>
          <Icon className="test" icon="logos:mongodb" width="75" height="75" />
          <Icon
            icon="simple-icons:express"
            color="white"
            className="test"
            width="75"
            height="75"
          />
          <Icon className="test" icon="logos:react" width="75" height="75" />
          <Icon className="test" icon="logos:nodejs" width="75" height="75" />
          <Icon
            className="test"
            icon="vscode-icons:file-type-html"
            width="75"
            height="75"
          />

          <Icon
            className="test"
            icon="vscode-icons:file-type-css"
            width="75"
            height="75"
          />
          <Icon
            className="test"
            icon="logos:javascript"
            width="75"
            height="75"
          />
          <Icon
            className="test"
            icon="dashicons:rest-api"
            color="purple"
            width="75"
            height="75"
          />

          <Icon
            className="test"
            icon="logos:bootstrap"
            width="75"
            height="75"
          />
          <Icon className="test" icon="logos:markdown" width="75" height="75" />
        </Flex>
        <Flex display="flex" justifyContent="space-evenly" mb={5}>
          <Icon className="test" icon="logos:jquery" width="75" height="75" />

          <Icon className="test" icon="logos:jest" width="75" height="75" />
          <Icon
            className="test"
            icon="logos:material-ui"
            width="75"
            height="75"
          />
          <Icon className="test" icon="logos:mysql" width="75" height="75" />
          <Icon className="test" icon="logos:graphql" width="75" height="75" />
          <Icon
            className="test"
            icon="logos:handlebars"
            width="75"
            height="75"
          />
          <Icon
            className="test"
            icon="vscode-icons:file-type-npm"
            width="75"
            height="75"
          />
          <Icon className="test" icon="logos:react" width="75" height="75" />
          <Icon
            className="test"
            icon="logos:node-sass"
            width="75"
            height="75"
          />
          <Icon className="test" icon="logos:webpack" width="75" height="75" />
        </Flex>
      </Box>
    </>
  );
}
