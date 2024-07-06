import { useEffect } from "react";
import ServerTable from "../components/ServerTable";
import { Server } from "../Types/Server";
import { useToast } from "@chakra-ui/react";
import ServerCard from "../components/ServerCard";

interface ServerListProps {
  servers: Server[];
}

const UserPage: React.FC<ServerListProps> = ({ servers }) => {
  const toast = useToast();
  useEffect(() => {
    toast({
      title: "Loggeed in",
    });
  }, []);
  return <ServerCard servers={servers} />;
};

export default UserPage;
