import ServerTable from "../components/ServerTable";
import { Server } from "../Types/Server";

interface ServerListProps {
  servers: Server[];
}

const TopPage: React.FC<ServerListProps> = ({ servers }) => {
  return <ServerTable servers={servers} />;
};

export default TopPage;
