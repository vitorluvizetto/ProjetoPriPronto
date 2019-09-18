import React, { Component } from 'react';

import {hashHistory} from 'react-router';

/*
Classe usada para realizar o login no sistema da biblioteca
*/
export default class Login extends Component {

    //vai para a home se o login estiver ok
    buttonSignIn={
        title: 'Sign in',
        actionLogin:()=> hashHistory.push('')
    }

    /*
    cadastrando um novo bibliotecario
    */
    buttonCadastrarBiblio={
        title: 'Cadastrar',
        actionLogin:()=> hashHistory.push('CadastroBiblio')
    }

    render () {
        return (

            <div class='d-flex justify-content-center' style={{paddingTop:'250px'}}>

                <form class='card shadow-lg' style={{paddingTop:'70px',paddingBottom:'70px',paddingLeft:'30px',paddingRight:'30px' }}>
                    <label style={{paddingBottom:'20px'}}>Login</label>
                    <div class="form-group">
                        <input type="text" class="form-control" id="inputUsuario" aria-describedby="emailHelp" placeholder="usuario"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="inputSenha" placeholder="senha"/>
                    </div>   
                    <div class="form-row">
                        <div class="form-group" style={{paddingLeft:'60px'}}>
                            <button type="submit" class="btn btn-primary mr-2" onClick={this.buttonSignIn.actionLogin}>{this.buttonSignIn.title}</button>
                            <button type="button" class="btn btn-outline-primary mr-2" onClick={this.buttonCadastrarBiblio.actionLogin}>{this.buttonCadastrarBiblio.title}</button>
                        </div>
                    </div>
                </form>

            </div>
            

        );
    }
}
