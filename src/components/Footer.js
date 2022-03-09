import React from "react";
import { Box, Stack, StackDivider } from "@chakra-ui/react";
import { Copyright } from "../pages/Copyright";
import { SocialMediaLinks } from "../pages/SocialIcons";

export default function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{ base: "4", md: "8" }}
    >
      <Stack spacing="10" divider={<StackDivider />}>
        <Stack
          direction={{ base: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Copyright />
          <SocialMediaLinks />
        </Stack>
      </Stack>
    </Box>
  );
}
