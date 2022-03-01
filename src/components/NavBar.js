import React from "react";
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
  Link,
  Text,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        // bg={bg}
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
            <chakra.a
              fontSize="xl"
              fontWeight="medium"
              ml="2"
              id="logo"
              href="/"
            >
              &lt; Rachel Solov /&gt;
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link href="/about" spacing="8">
                <Text
                  m={5}
                  fontSize="1.5rem"
                  className="navlinks hover-underline-animation"
                >
                  About
                </Text>
              </Link>
              <Link href="/projects" spacing="8">
                <Text
                  m={5}
                  fontSize="1.5rem"
                  className="navlinks hover-underline-animation"
                >
                  Projects
                </Text>
              </Link>
              <Link href="/resume" spacing="8">
                <Text
                  m={5}
                  fontSize="1.5rem"
                  className="navlinks hover-underline-animation"
                >
                  {" "}
                  Resume
                </Text>
              </Link>
            </HStack>
            {/* <Button colorScheme="brand" size="sm">
              Get Started
            </Button> */}
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

                <Button w="full" variant="ghost">
                  <Link href="/about">About</Link>
                </Button>
                <Button w="full" variant="ghost">
                  <Link href="/projects">Projects</Link>
                </Button>
                <Button w="full" variant="ghost">
                  <Link href="/resume">Resume</Link>
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
export default NavBar;
// import React from "react";
// import {
//   chakra,
//   Link,
//   Box,
//   Flex,
//   Text,
//   useColorModeValue,
//   VisuallyHidden,
//   HStack,
//   useDisclosure,
//   VStack,
//   IconButton,
//   CloseButton,
// } from "@chakra-ui/react";
// import { AiOutlineMenu } from "react-icons/ai";

// function NavBar() {
//   const mobileNav = useDisclosure();

//   return (
//     <React.Fragment>
//       <chakra.header w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
//         <Flex alignItems="center" justifyContent="space-between" mx="auto">
//           <Flex>
//             <chakra.a
//               href="/about"
//               title="Nav"
//               display="flex"
//               alignItems="center"
//             >
//               <VisuallyHidden>&lt; Rachel Solov /&gt;</VisuallyHidden>
//             </chakra.a>
//             <Link ml="2" id="logo" href="/header">
//               &lt; Rachel Solov /&gt;
//             </Link>
//           </Flex>
//           <HStack display="flex" alignItems="center" spacing={1}>
//             <HStack
//               spacing={1}
//               mr={1}
//               color="brand.500"
//               display={{ base: "none", md: "inline-flex" }}
//             >
//               <Link href="/about" spacing="8">
//                 <Text
//                   m={5}
//                   fontSize="1.5rem"
//                   className="navlinks hover-underline-animation"
//                 >
//                   About
//                 </Text>
//               </Link>
//               <Link href="/projects" spacing="8">
//                 <Text
//                   m={5}
//                   fontSize="1.5rem"
//                   className="navlinks hover-underline-animation"
//                 >
//                   Projects
//                 </Text>
//               </Link>
//               <Link href="/resume" spacing="8">
//                 <Text
//                   m={5}
//                   fontSize="1.5rem"
//                   className="navlinks hover-underline-animation"
//                 >
//                   {" "}
//                   Resume
//                 </Text>
//               </Link>
//             </HStack>

//             <Box display={{ base: "inline-flex", md: "none" }}>
//               <IconButton
//                 display={{ base: "flex", md: "none" }}
//                 aria-label="Open menu"
//                 fontSize="20px"
//                 color={useColorModeValue("gray.800", "inherit")}
//                 variant="ghost"
//                 icon={<AiOutlineMenu />}
//                 onClick={mobileNav.onOpen}
//               />

//               <VStack
//                 pos="absolute"
//                 top={0}
//                 left={0}
//                 right={0}
//                 display={mobileNav.isOpen ? "flex" : "none"}
//                 flexDirection="column"
//                 p={2}
//                 pb={4}
//                 m={2}
//                 spacing={3}
//                 rounded="sm"
//                 shadow="sm"
//               >
//                 <CloseButton
//                   aria-label="Close menu"
//                   onClick={mobileNav.onClose}
//                 />

//                 <Link to="/about">About</Link>
//                 <Link to="/projects">Projects</Link>
//                 <Link to="/resume">Resume</Link>
//               </VStack>
//             </Box>
//           </HStack>
//         </Flex>
//       </chakra.header>
//     </React.Fragment>
//   );
// }
// export default NavBar;
