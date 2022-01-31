import { ButtonGroup, IconButton } from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"
export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="#"
      aria-label="LinkedIn"
      icon={<FaLinkedin fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="GitHub"
      icon={<FaGithub fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="Twitter"
      icon={<HiOutlineMail fontSize="20px" />}
    />
  </ButtonGroup>
);
