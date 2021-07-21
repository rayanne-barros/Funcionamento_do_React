import React, { Component } from "react";
import  ListaDeNotas  from "./componentes/ListaDeNota";
import  FormularioCadastro  from "./componentes/FormularioCadastro/index";
import ListaDeCategorias from "./componentes/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";
class App extends Component {
  constructor(){
    super();  
    this.categorias = new Categorias();    
    this.notas = new ArrayDeNotas();
  }
  
  render(){
    return (
      <section className="conteudo">   
        <FormularioCadastro
         criarNota={this.notas.adicionarNota.bind(this.notas)}
         categorias={this.categorias} 
        />
        <main className="conteudo__principal">
          <ListaDeCategorias
           adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
           apagarNota= {this.notas.apagarNota.bind(this.notas)} 
          notas={this.notas}
          />
        </main>
      </section>
    ); 
  }
  
}

export default App;
