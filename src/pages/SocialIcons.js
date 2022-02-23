import { ButtonGroup, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="https://www.linkedin.com/in/rachel-solov-80bb3a174"
      target="blank"
      aria-label="LinkedIn"
      icon={<FaLinkedin fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://github.com/rsolov23"
      target="blank"
      aria-label="GitHub"
      icon={<FaGithub fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="mailto:rachelswebdev@gmail.com"
      target="blank"
      aria-label="Twitter"
      icon={<HiOutlineMail fontSize="20px" />}
    />
  </ButtonGroup>
);
