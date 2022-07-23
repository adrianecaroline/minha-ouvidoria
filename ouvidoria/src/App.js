import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Solicitacao from "./pages/Solicitacao";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/solicitacao" element={<Solicitacao/>}/>
    </Routes>
  );
}

export default App;
