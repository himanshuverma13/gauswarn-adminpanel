import { ToastContainer } from 'react-toastify';
import "../src/Components/Assets/css/style.css";
import "../src/Components/Assets/css/style2.css";
import "../src/Components/Assets/css/style3.css";
import "./App.css";

import RouteRoutes from "./Components/Common/RouteRoutes/routes";
import { UserProvider } from "./Components/Common/useContext/useContext";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <ToastContainer/>
      <UserProvider>
        <BrowserRouter>
        <RouteRoutes />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
