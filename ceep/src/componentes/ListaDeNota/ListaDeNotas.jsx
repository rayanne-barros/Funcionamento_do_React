import React, { Component } from "react"
import CardNota from "../CardNota"
import "./estilo.css"

class ListaDeNotas extends Component{

    render(){
        return( 
        <ul className="lista__notas">
            {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                return( 
                    <li className="lista__notas-item" key= {index}>
                       
                        <CardNota />
                    </li>
                );
            })}
        </ul>
        );
    }
   
}

export default ListaDeNotas;
