import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Solicitacao from "./pages/Registros/Solicitacao";
import Reclamacao from "./pages/Registros/Reclamacao";
import Sugestao from "./pages/Registros/Sugestao";
import Elogio from "./pages/Registros/Elogio";
import User from "./pages/User/Perfil";
import CondominioCad from "./pages/Cadastro/Condominio/condominio_cad";
import LoginUser from "./pages/Login/LoginUsuario/Login";
import LoginUserCond from "./pages/Login/LoginCondominio/Login";
import MoradorCadastro from "./pages/Cadastro/Morador/MoradorCadastro";
import NotFound from "./pages/NotFound/NotFound";
import SobreNos from "./pages/SobreNos/SobreNos";
import Ajuda from "./pages/Ajuda/Ajuda";
import EsqueciSenha from "./pages/EsqueciSenha/EsqueciSenha";
// import Routes from "./routes";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/solicitacao" element={<Solicitacao/>}/>
        <Route exact path="/reclamacao" element={<Reclamacao/>}/>
        <Route exact path="/elogio" element={<Elogio/>}/>
        <Route exact path="/sugestao" element={<Sugestao/>}/>
        <Route exact path="/perfil-user" element={<User/>}/>
        <Route exact path="/condominio-cadastro" element={<CondominioCad/>}/>
        <Route exact path="/login-usuario" element={<LoginUser/>}/>
        <Route exact path="/morador-cadastro" element={<MoradorCadastro/>}/>
        <Route exact path="/*" element={<NotFound/>}/>
        <Route exact path="/sobre-nos" element={<SobreNos/>}/>
        <Route exact path="/ajuda" element={<Ajuda/>}/>
        <Route exact path="/login-condominio" element={<LoginUserCond/>}/>
        <Route exact path="/esqueci-senha" element={<EsqueciSenha/>}/>
        
      </Routes>
    </>
    
  );
}

export default App;
