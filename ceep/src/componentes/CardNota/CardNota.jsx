import React, { Component } from 'react';
import "./estilo.css";
import {ReactComponent as DeleteSVG} from  "../../assets/img/delete.svg"
class CardNota extends Component { 
    apagar(){
        const indice = this.props.indice;
        this.props.apagarNota(indice);
    }   
    render() { 
        return ( 
           <section className="card__nota">
                <header className="card__nota-cabecalho">
                    <h3 className="card__nota-titulo">{this.props.titulo}</h3>
                    <DeleteSVG onClick={this.apagar.bind(this)} />
                </header>
                <p className="card__nota-texto">{this.props.texto}</p>
           </section> 
           );
    }
}
 
export default CardNota;