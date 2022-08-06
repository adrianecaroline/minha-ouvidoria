import { createContext } from 'react';
import { useState, useEffect } from 'react';

//criando contexto e guardando na constante
export const Contexto = createContext();

//children todos os componentes entre as aberturas e fechamentos
export default function AuthContext ({ children }) {

  // const navigate = useNavigate();
  const [user, setUser] = useState({})

  const [token, setToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, []);
  
  return (
    <Contexto.Provider value={{token, setToken, user, setUser}}>
      {children}
    </Contexto.Provider>
  );
}

