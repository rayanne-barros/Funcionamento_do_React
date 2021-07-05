import React, { Component } from 'react';
import "./estilo.css"
class CardNota extends Component {    
    render() { 
        return ( 
           <section className="card__nota">
                <header className="card__nota-cabecalho">
                    <h3 className="card__nota-titulo">Título </h3>
                </header>
                <p className="card__nota-texto">Escreva sua Nota </p>
           </section> 
           );
    }
}
 
export default CardNota;