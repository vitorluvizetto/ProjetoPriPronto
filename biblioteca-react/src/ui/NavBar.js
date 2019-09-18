import React, {Component} from 'react';
import { Link } from 'react-router';

import {hashHistory} from 'react-router';

/*
Esta classe é da nav-bar ou seja a barra de menus da página
*/
export default class Login extends Component {

    /*
    Botão para sair da aplicação
    */
    buttonSair={
        title: 'Sign in',
        actionLogin:()=> hashHistory.push('Login')
    }


    render () {
        return (

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <Link to='/' class="navbar-brand">Biblioteca</Link>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <Link to='/emprestimosSearch' class="nav-link">Emprestimos</Link>  
                    </li>
                    <li class="nav-item">
                        <Link to='/leitoresSearch' class="nav-link">Leitores</Link> 
                    </li>
                    <li class="nav-item">
                        <Link to='/livrosSearch' class="nav-link">Livros</Link> 
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <button class="btn btn-outline-success my-2 my-sm-0" onClick={this.buttonSair.actionLogin} type="submit">Sair</button>
                    </form>
                </div>

            </nav>

        );
    }

}