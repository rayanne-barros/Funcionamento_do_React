import React, { Component } from "react";
import  ListaDeNotas  from "./componentes/ListaDeNota";
import  FormularioCadastro  from "./componentes/FormularioCadastro/index";
import "./assets/App.css";
import "./assets/index.css";
class App extends Component {
  render(){
    return (
      <section className="conteudo">   
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
  
}

export default App;
