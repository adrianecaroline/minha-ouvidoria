import house from '../../images/house.png'
import owlfront from '../../images/owl-front.png'
import { Link } from "react-router-dom";
import { Principal, Frame1, Frame2 } from './HomeStyle';
// import { useContext, useState } from 'react';
// import { Contexto }  from '../../context/AuthContext'

export default function Home () {

  return (
    <Principal>
      <Frame1>
        <img src={owlfront} alt="logotipo"  width="100%" />

        <h1>Ajude a gerir os desafios de infraestrutura da sua comunidade!</h1>
        
        <Link to="/login">
        <button type="button">Começar</button>
        </Link>
        
      </Frame1>

      <Frame2>
        <img src={house} alt="" />
      </Frame2>
    </Principal>
  )
}