import React from "react";
// import { FooterStyle } from "../../styles/FooterStyles";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
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
    // <FooterStyle>
    //   <div>
    //     <p>Designed and Developed by Rachel Solov</p>
    //     <p>Copyright © {year} RS </p>
    //   </div>
    //   <div className="icons">
    //     <a href="https://github.com/rsolov23" target="blank">
    //       {" "}
    //       <SiGithub />
    //     </a>

    //     <a
    //       href="https://www.linkedin.com/in/rachel-solov-80bb3a174"
    //       target="blank"
    //     >
    //       <SiLinkedin />
    //     </a>
    //     <a href="mailto:rachelswebdev@gmail.com" target="blank">
    //       <AiOutlineMail />
    //     </a>
    //   </div>
    // </FooterStyle>
  );
}
