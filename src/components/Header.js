import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import about from "../assets/images/about.svg";
import Type from "../pages/Type";
import Bio from "../pages/Bio";
export default function Header() {
  return (
    <>
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
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
          <Stack direction={{ base: "column", md: "row" }} spacing={4}></Stack>
        </Stack>
      </Flex>
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
