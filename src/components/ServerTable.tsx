import React from "react";
import { Server } from "../Types/Server";
import {
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface ServerListProps {
  servers: Server[];
}

const ServerTable: React.FC<ServerListProps> = ({ servers }) => {
  return (
    <>
      <Heading>Server List Table</Heading>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>ServerTable</TableCaption>
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>hostname</Th>
              <Th>ipAddress</Th>
              <Th>username</Th>
              <Th>password</Th>
              <Th>assignUser</Th>
              <Th>-</Th>
            </Tr>
          </Thead>
          <Tbody>
            {servers.map((server) => (
              <Tr key={server.hostname}>
                <Td>{server.id}</Td>
                <Td>{server.hostname}</Td>
                <Td>{server.ipAddress}</Td>
                <Td>{server.username}</Td>
                <Td>{server.password}</Td>
                <Td>{server.assignUser}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ServerTable;
