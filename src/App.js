import React from "react";
import {
  VStack,
  Flex,
  Heading,
  Spacer,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";

import { FaSun, FaMoon, FaGithub, FaLinkedin, FaSign } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import "./App.css";
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          K.KALAI VANAN
        </Heading>
        <Spacer/>
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() => window.open("https://www.linkedin.com/feed/")}
        />
        <IconButton
        ml={3}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://github.com/KALAIVANAN95")}
        />
        <IconButton
       ml={3}
       mr={8}
          icon={<SiNetlify />}
          isRound="true"
          onClick={() =>
            window.open(
              "https://app.netlify.com/teams/kalaivanasrm1995/overview"
            )
          }
        />
        <IconButton
          icon={isDark ? <FaMoon /> : <FaSun />}
          isRound="true"
          onClick={toggleColorMode}
        />
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  );
}

export default App;
