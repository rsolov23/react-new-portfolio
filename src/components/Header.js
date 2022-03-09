import React from "react";
import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import about from "../assets/images/about.svg";
import Type from "../pages/Type";
import Bio from "../pages/Bio";

export default function Header() {
  return (
    <>
      <Stack
        minH={"90vh"}
        direction={{ base: "column", md: "row" }}
        className="anchor"
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                color={"#fff"}
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}
              >
                Hello<span className="wave">👋 </span>,
              </Text>
              <br />{" "}
              <Text color={"#6d00b7"} as={"span"} className="anchor">
                I'm Rachel Solov
              </Text>{" "}
            </Heading>
            <Type />
            <Text className="word"></Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={4}
            ></Stack>
          </Stack>
        </Flex>
        <a href="#bio">
          <div class="arrow">
            <span></span>
            {/* <span></span> */}
            {/* <span></span> */}
          </div>
        </a>
        <Flex flex={1}>
          <Image alt={"Login Image"} objectFit={"fill"} src={about} />
        </Flex>

        {/* <div id="down-arrow">
        <span>
          <a href="#about">
            <IconButton
              as="a"
              aria-label="LinkedIn"
              icon={<HiOutlineChevronDoubleDown fontSize="20px" color="#fff" />}
            />
          </a>
        </span>
      </div> */}
      </Stack>

      <Bio />
    </>
  );
}
