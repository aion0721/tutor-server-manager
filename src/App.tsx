import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./App.css";
import { Server } from "./Types/Server";
import ServerTable from "./components/ServerTable";

const sampleServers: Server[] = [
  {
    id: "aaaaaaaa",
    hostname: "test1",
    ipAddress: "10.1.1.1",
    username: "root",
    password: "password",
    assignUser: "user1",
  },
  {
    id: "bbbbbbbb",
    hostname: "test2",
    ipAddress: "10.1.1.2",
    username: "root",
    password: "password",
    assignUser: "user2",
  },
];

function App() {
  return (
    <>
      <Flex direction={"column"} minHeight={"100vh"}>
        <Box as="nav" bg={"teal.500"} color={"white"} padding={"4"}>
          <Flex align="center">
            <Image
              src="/logo.png"
              alt="Logo"
              boxSize={"40px"}
              marginRight={"4"}
            />
            <Text fontSize={"xl"} fontWeight={"bold"}>
              Tutorial Server Manager
            </Text>
          </Flex>
        </Box>
        <Box flex={"1"} padding={"4"} bg={"gray.50"}>
          <ServerTable servers={sampleServers}></ServerTable>
        </Box>
        <Box
          as="footer"
          bg={"gray.700"}
          color={"white"}
          padding={"4"}
          textAlign={"center"}
        >
          <Text fontSize={"md"}>Copy rights</Text>
        </Box>
      </Flex>
    </>
  );
}

export default App;
