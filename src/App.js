import "../src/Components/Assets/css/style.css";
import "../src/Components/Assets/css/style2.css";
import "../src/Components/Assets/css/style3.css";
import "./App.css";

import RouteRoutes from "./Components/Common/RouteRoutes/routes";
import { UserProvider } from "./Components/Common/useContext/useContext";

function App() {
  return (
    <>
      <UserProvider>
        <RouteRoutes />
      </UserProvider>
    </>
  );
}

export default App;
