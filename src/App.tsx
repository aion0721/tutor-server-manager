import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./App.css";
import { Server } from "./Types/Server";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import TopPage from "./pages/TopPage";
import UserPage from "./pages/UserPage";
import { useSearchParams } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

function App() {
  const [servers, setServers] = useState<Server[]>([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const userid = searchParams.get("userid");

  useEffect(() => {
    const fetchServers = async () => {
      try {
        let url = apiEndpoint;
        if (userid) {
          url += `?assignUser=${userid}`;
        }
        const response = await fetch(url);
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
  }, [userid]);
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
            <Text
              fontSize={"xl"}
              fontWeight={"bold"}
              onClick={() => navigate("/")}
            >
              Tutorial Server Manager
            </Text>
          </Flex>
        </Box>
        <Box flex={"1"} padding={"4"} bg={"gray.50"}>
          <Routes>
            <Route path="admin" element={<AdminPage servers={servers} />} />
            <Route path="user" element={<UserPage servers={servers} />} />
            <Route path="/" element={<TopPage />} />
          </Routes>
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
