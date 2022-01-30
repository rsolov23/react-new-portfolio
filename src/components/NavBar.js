import React from "react";
import { Link } from "react-router-dom";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  // Link,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

export function NavBar() {
  const bg = useColorModeValue("white");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a href="/" title="Nav" display="flex" alignItems="center">
              <VisuallyHidden>&lt; Rachel Solov /&gt;</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="2xl" fontWeight="medium" ml="2" id="logo">
              &lt; Rachel Solov /&gt;
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link to="/about" p={5}>
                About
              </Link>
              <Link to="/projects" p={5}>
                Projects
              </Link>
              <Link to="/resume" p={5}>
                Resume
              </Link>
            </HStack>

            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
