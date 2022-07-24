import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Solicitacao from "./pages/Solicitacao";
import Reclamacao from "./pages/Reclamacao";
import User from "./pages/User/Perfil";

// import Routes from "./routes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/solicitacao" element={<Solicitacao/>}/>
        <Route path="/reclamacao" element={<Reclamacao/>}/>
        <Route path="/perfil-user" element={<User/>}/>
      </Routes>
    </>
    
  );
}

export default App;
