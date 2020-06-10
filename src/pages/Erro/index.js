import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './erro.css';

export default class Erro extends Component{
  render(){
    return (
      <div>
        <img src="https://rifletti.com.br/img/icons/404.png" alt="imgErro" className="imgErro"/>
        <Link to="/"className="linkVoltarInicio">Voltar</Link>
      </div>
    );
  }
}