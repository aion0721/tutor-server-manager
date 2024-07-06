import ServerTable from "../components/ServerTable";
import { Server } from "../Types/Server";

interface ServerListProps {
  servers: Server[];
}

const AdminPage: React.FC<ServerListProps> = ({ servers }) => {
  return <ServerTable servers={servers} />;
};

export default AdminPage;
