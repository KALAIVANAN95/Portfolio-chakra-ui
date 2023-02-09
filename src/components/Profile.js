import React from "react";
import {
  useMediaQuery,
  Box,
  Flex,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";
import { DiMongodb, DiExtjs, DiReact, DiNodejs } from "react-icons/di";
const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="8" py="4">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          1
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Year of Experience
        </Text>
      </Box>

      <Box alignSelf="center" px="4" py="2">
        <Text fontWeight='bold' fontSize="2xl">Product Specialist and Developer, specialised in web app development.</Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon color="white" p="4" w="24" h="24" as={DiMongodb} />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Mongodb
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{bg:"teal.400"}}
          >
            <Icon color="black" p="4" w="24" h="24" as={DiExtjs} />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Express
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            // _hover={{bg:"green.400"}}
          >
            <Icon color="white" p="4" w="24" h="24" as={DiReact} />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              React
            </Text>
          </Flex>

          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{bg:"yellow.400"}}
          >
            <Icon color="black" p="4" w="24" h="24" as={DiNodejs} />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Node
            </Text>
          </Flex>
        </Flex>
      </Box>
      
    </Flex>
  );
};

export default Profile;
