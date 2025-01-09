import { ToastContainer } from 'react-toastify';
import '../src/Components/Assets/css/style.css';
import '../src/Components/Assets/css/style2.css';
import '../src/Components/Assets/css/style3.css';
import "./App.css";

import RouteRoutes from './Components/Common/RouteRoutes/routes';

function App() {
  return (
    <>
    <ToastContainer/>
     <RouteRoutes/> 
    </>
  );
}

export default App;
