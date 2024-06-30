import "./App.css";
import { Server } from "./Types/Server";
import ServerTable from "./components/ServerTable";

const sampleServers: Server[] = [
  {
    hostname: "test1",
    ipAddress: "10.1.1.1",
    username: "root",
    password: "password",
    assignUser: "user1",
  },
  {
    hostname: "test2",
    ipAddress: "10.1.1.2",
    username: "root",
    password: "password",
    assignUser: "user2",
  },
];

function App() {
  return (
    <>
      <div>
        <ServerTable servers={sampleServers}></ServerTable>
      </div>
    </>
  );
}

export default App;
