import React from "react";
import { Server } from "../Types/Server";
import {
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface ServerListProps {
  servers: Server[];
}

const ServerTable: React.FC<ServerListProps> = ({ servers }) => {
  return (
    <div>
      <Heading>Server List Table</Heading>
      <ul>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>ServerTable</TableCaption>
            <Thead>
              <Tr>
                <Th>number</Th>
              </Tr>
            </Thead>
          </Table>
        </TableContainer>
        {servers.map((server) => (
          <li key={server.hostname}>
            {server.hostname} - {server.ipAddress}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerTable;
