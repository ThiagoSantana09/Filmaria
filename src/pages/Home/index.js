import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      filmes: []
    };
    
    this.loadFilmes = this.loadFilmes.bind(this);
  }

  componentDidMount(){
    this.loadFilmes();
  }

  loadFilmes(){
    let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
    fetch(url).then((r) => r.json()).then((json) =>{
      this.setState({ filmes: json});
      //console.log(json);
    });
  }
  render(){
    return (
      <div className="container">
        <div className="lista-filmes">
          {this.state.filmes.map((filme)=>{
            return(
              <article key={filme.id} className="filme">
                <strong className="tituloFilme">{filme.nome}</strong>
                <img src={filme.foto} alt="capa" className="imgFilme"/>
                <Link to={`/filme/${filme.id}`} className="acesso">Acessar</Link>
              </article>
            );
          })}
        </div>
      </div>
    );
 }
}