import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import pdf_url from "../assets/images/resume.pdf";
export default function Resume() {
  return (
    <Box>
      <Flex justifyContent="center">
        <object
          width="65%"
          height="1000"
          data={pdf_url}
          type="application/pdf"
          aria-label="resume-pdf"
        ></object>
      </Flex>
    </Box>
  );
}
