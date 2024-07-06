import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopPage: React.FC = () => {
  const [userid, setUserid] = useState<string>("");
  const navigate = useNavigate();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserid(event.target.value);
  };
  const handleRedirect = () => {
    if (userid) {
      navigate(`/admin?userid=${userid}`);
    }
  };
  return (
    <>
      <Heading>Top</Heading>
      <Box p={4}>
        <Input
          placeholder="Enter your ID"
          value={userid}
          onChange={handleInputChange}
          mb={4}
        />
        <Button onClick={handleRedirect} colorScheme="teal">
          Enter
        </Button>
      </Box>
    </>
  );
};

export default TopPage;
