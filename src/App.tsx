import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./App.css";
import { Server } from "./Types/Server";
import ServerTable from "./components/ServerTable";
import { useState, useEffect } from "react";
const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

function App() {
  const [servers, setServers] = useState<Server[]>([]);

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error("Network respones was not ok");
        }
        const data: Server[] = await response.json();
        setServers(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchServers();
  }, []);
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
          <ServerTable servers={servers}></ServerTable>
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
