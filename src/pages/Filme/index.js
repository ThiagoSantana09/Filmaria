/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './filme-info.css';

export default class Filme extends Component{
  constructor(props){
    super(props);
    this.state = {
      filme: []
    };
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
    fetch(url).then((r) => r.json()).then((json) =>{
      this.setState({ filme: json});
      console.log(json);
    });
  }
  render(){
    return (
      <div className="filme-info">
        <h1 className="titulo">{this.state.filme.nome}</h1>
        <img src={this.state.filme.foto} className="imgDetalhe"/>
        {this.state.filme.length !== 0 &&
          <h3>Sinopse</h3>
        }
        <p className="sinopse">{this.state.filme.sinopse}</p>
        {this.state.filme.length !== 0 &&
          <Link to="/"className="linkVoltarInicio">Voltar</Link>
        }
      </div>
    );
  }
}