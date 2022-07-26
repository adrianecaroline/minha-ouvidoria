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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/solicitacao" element={<Solicitacao/>}/>
        <Route exact path="/reclamacao" element={<Reclamacao/>}/>
        <Route exact path="/perfil-user" element={<User/>}/>
      </Routes>
    </>
    
  );
}

export default App;
