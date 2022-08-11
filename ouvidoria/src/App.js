import React from "react";
import { Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "./api_services/ouvidoriaApi";
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
import PerguntasFrequentes from "./pages/Ajuda/Perguntas/PerguntasFreq";
import CondominioPerfil from "./pages/Registros/Condominio/RegistroLista";
import EsqueciSenha from "./pages/EsqueciSenha/EsqueciSenha";
import Desenvolvedores from "./pages/Desenvolvedores/Desenvolvedores";
import FaleConosco from "./pages/FaleConosco/FaleConosco"


export const Contexto = React.createContext({});

function App() {

  const [user, setUser] = useState({});

  const [token, setToken] = useState("");

  useEffect(() => {
    localStorage.getItem("token") && setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    }
    axiosInstance.get("/userByToken").then((res) => {
      setUser(res.data.usuario);
    });
  }, [token]);

  function ProtectedRoute(props) {
    if (localStorage.getItem("token")) return <>{props.children}</>;
    return <Login />;
  }

  return (
    <Contexto.Provider value={{ token, setToken, user, setUser }}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/solicitacao" element={<ProtectedRoute><Solicitacao /></ProtectedRoute>}/>
        <Route exact path="/reclamacao" element={<ProtectedRoute><Reclamacao /></ProtectedRoute>}/>
        <Route exact path="/elogio" element={<ProtectedRoute><Elogio /></ProtectedRoute>}/>
        <Route exact path="/sugestao" element={<ProtectedRoute><Sugestao /></ProtectedRoute>}/>
        <Route exact path="/perfil-user" element={<ProtectedRoute><User /></ProtectedRoute>}/>
        <Route exact path="/condominio-cadastro" element={<CondominioCad />} />
        <Route exact path="/login-usuario" element={<LoginUser />} />
        <Route exact path="/morador-cadastro" element={<MoradorCadastro />} />
        <Route exact path="/*" element={<NotFound />} />
        <Route exact path="/sobre-nos" element={<SobreNos />} />
        <Route exact path="/ajuda" element={<ProtectedRoute><Ajuda /></ProtectedRoute>}/>
        <Route exact path="/perguntas-frequentes" element={<ProtectedRoute><PerguntasFrequentes /></ProtectedRoute>}/>
        <Route exact path="/login-condominio" element={<LoginUserCond />} />
        <Route exact path="/perfil-condominio" element={<CondominioPerfil />} />
        <Route exact path="/esqueci-senha" element={<EsqueciSenha />} />
        <Route exact path="/desenvolvedores" element={<ProtectedRoute><Desenvolvedores /></ProtectedRoute>}/>
        <Route exact path="/fale-conosco" element={<ProtectedRoute><FaleConosco /></ProtectedRoute>}/>
      </Routes>
    </Contexto.Provider>
  );
}

export default App;
