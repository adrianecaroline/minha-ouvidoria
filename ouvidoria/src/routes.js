import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Solicitacao from "./pages/Solicitacao";
import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

export default function Routes () {
  return(
    <>
      <BrowserRouter>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/solicitacao" element={<Solicitacao/>}/>
      </BrowserRouter>
    </>
  )


}
