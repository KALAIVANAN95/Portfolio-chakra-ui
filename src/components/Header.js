import React from "react";
import {
  useColorMode,
  Button,
  Image,
  Circle,
  Stack,
  Flex,
  Box,
  Text,
  useMediaQuery,

} from "@chakra-ui/react";

import myimage from '../images/myimage.jpeg'

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen]=useMediaQuery("(min-width:600px)")

  return (
    <Stack>
        {isNotSmallerScreen && (
            <Circle 
            position="absolute"
            bg="blue.100"
            opacity="0.1"
            w="300px"
            h="300px"
            alignSelf="flex-end"
            />
        )}
      <Flex direction={isNotSmallerScreen ? "row" : "column"}
      p={isNotSmallerScreen ? "32":0}
      alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? 0 : 16} alignSelf='flex-start'>
            <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
            <Text fontSize="7xl" fontWeight="bold" bgClip="text"
            bgGradient="linear(to-r,cyan.400,blue.500,purple.600)">K KALAI VANAN</Text>
            <Text color={isDark ? "gray.200":"gray.500"}>Mentor,Developer at Ocean Software. Mentor by Day and Freelancer by Night.</Text>
            <Button mt={8} colorScheme="blue">Hire Me</Button>
        </Box>
        <Image 
        mt={isNotSmallerScreen ? "0":"12"}
        mb={isNotSmallerScreen ? "0":"12"}
       
        alignSelf='center'
        borderRadius="full"
        backgroundColor="transparent"
        boxShadow="lg"
        boxSize="300px"
        zIndex={1}
        
        src={myimage} />
      </Flex>
    </Stack>
  );
};

export default Header;
