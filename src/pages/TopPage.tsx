import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopPage: React.FC = () => {
  const [userid, setUserid] = useState<string>("");
  const navigate = useNavigate();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserid(event.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userid) {
      navigate(`/user?userid=${userid}`);
    }
  };

  return (
    <>
      <Center height="80vh">
        <Box
          as="form"
          onSubmit={handleSubmit}
          borderWidth="1px"
          borderRadius="lg"
          p="6"
          boxShadow="lg"
        >
          <VStack spacing="4">
            <Heading>Welcome</Heading>
            <FormControl>
              <FormLabel htmlFor="userid">UserID</FormLabel>
              <Input
                placeholder="xxxxxxxx"
                value={userid}
                onChange={handleInputChange}
                mb={4}
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" width="100%">
              Enter
            </Button>
            <Button
              type="button"
              colorScheme="orange"
              width="100%"
              onClick={() => navigate("/admin")}
            >
              ADMIN
            </Button>
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default TopPage;
