import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Server } from "../Types/Server";
interface ServerListProps {
  servers: Server[];
}
const ServerCard: React.FC<ServerListProps> = ({ servers }) => {
  return (
    <>
      {servers.map((server) => (
        <Card m="4">
          <CardHeader>
            <Heading size="md">Assign Server - {server.hostname}</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs">Hostname</Heading>
                <Text pt="2" fontSize="sm">
                  {server.hostname}
                </Text>
              </Box>
              <Box>
                <Heading size="xs">Ipaddress</Heading>
                <Text pt="2" fontSize="sm">
                  {server.ipAddress}
                </Text>
              </Box>
              <Box>
                <Heading size="xs">username</Heading>
                <Text pt="2" fontSize="sm">
                  {server.username}
                </Text>
              </Box>
              <Box>
                <Heading size="xs">password</Heading>
                <Text pt="2" fontSize="sm">
                  {server.password}
                </Text>
              </Box>
              <Box>
                <Heading size="xs">assignUser</Heading>
                <Text pt="2" fontSize="sm">
                  {server.assignUser}
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default ServerCard;
