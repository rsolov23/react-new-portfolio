import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import Avatar from "avataaars";
export default function Bio() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          color={"#FFF"}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          LET ME&nbsp;
          <Text as={"span"} color={"#6d00b7"}>
            INTRODUCE MYSELF
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
        </Text>
        <Stack w={"full"}  align={"center"}>
          <Avatar
            avatarStyle="Circle"
            topType="LongHairStraight"
            accessoriesType="Prescription02"
            hairColor="Brown"
            facialHairType="Blank"
            clotheType="ShirtVNeck"
            clotheColor="Blue03"
            eyeType="Happy"
            eyebrowType="RaisedExcitedNatural"
            mouthType="Smile"
            skinColor="Light"
          />
        </Stack>
      </Stack>
    </Container>
  );
}
