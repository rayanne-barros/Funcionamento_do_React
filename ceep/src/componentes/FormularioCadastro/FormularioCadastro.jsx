import React, { Component } from 'react';
import "./estilo.css";
class FormularioCadastro extends Component {
    render(){
        return( 
        <form className="form__cadastro"> 
            <input type="text" placeholder="Título" className="form__cadastro-input" />
            <textarea rows={15} placeholder="Escreva sua nota" className="form__cadastro-input" />
            <button className="form__cadastro-input form__cadastro-submit">Criar Nota </button>      
        </form>);
    }
}

export default FormularioCadastro;