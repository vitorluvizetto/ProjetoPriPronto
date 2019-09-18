import React, {Component}from 'react';

import {hashHistory} from 'react-router';

/* Classe para cadastro de novos bibliotecarios */
export default class BiblioForm extends Component {

    buttonSair={
        title: 'Cancelar',
        actionLogin:()=> hashHistory.push('Login')
    }

    render(){
        return(
            <div class="container-fluid">
                <form>
                    <div class="row"  style={{paddingTop:'30px'}}>
                        <div class="col-12 shadow p-3 mb-5 bg-white rounded border border-primary" >
                            <h4 class="text-md-left">Cadastro de novo Bibliotecario</h4> 
                        </div>   
                    </div> 

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputName">Nome</label>
                            <input type="text" class="form-control" id="inputName" placeholder="Nome completo"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputTelefone">Telefone</label>
                            <input type="phone" class="form-control" id="inputTelefone" placeholder="Telefone"/>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="inputAddress">Endereço</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Endereço"/>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">Cidade</label>
                            <input type="text" class="form-control" id="inputCity" placeholder="Cidade"/>
                        </div>

                        <div class="form-group col-md-2">
                            <label for="inputZip">CEP</label>
                            <input type="text" class="form-control" id="inputZip" placeholder="CEP"/>
                        </div>

                        <div class="form-group col-md-4">
                            <label for="inputState">Estado</label>
                            <select id="inputState" class="form-control">
                                <option selected>Estado...</option>
                                <option value="Acre">Acre</option>
                                <option value="Alagoas">Alagoas</option>
                                <option value="Amapá">Amapá</option>
                                <option value="Amazonas">Amazonas</option>
                                <option value="Bahia">Bahia</option>
                                <option value="Ceará">Ceará</option>
                                <option value="Distrito Federal">Distrito Federal</option>
                                <option value="Espírito Santo">Espírito Santo</option>
                                <option value="Goiás">Goiás</option>
                                <option value="Maranhão">Maranhão</option>
                                <option value="Mato Grosso">Mato Grosso</option>
                                <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                                <option value="Minas Gerais">Minas Gerais</option>
                                <option value="Pará">Pará</option>
                                <option value="Paraíba">Paraíba</option>
                                <option value="Paraná">Paraná</option>
                                <option value="Pernambuco">Pernambuco</option>
                                <option value="Piauí">Piauí</option>
                                <option value="Rio de Janeiro">Rio de Janeiro</option>
                                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                                <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                                <option value="Rondônia">Rondônia</option>
                                <option value="Roraima">Roraima</option>
                                <option value="Santa Catarina">Santa Catarina</option>
                                <option value="São Paulo">São Paulo</option>
                                <option value="Sergipe">Sergipe</option>
                                <option value="Tocantins">Tocantins</option>
                            </select>
                        </div>
                        
                    </div>

                

                <div class="form-row" style={{paddingTop:'40px'}}>
                    <div class="form-group col-md-4">
                        <label for="inputUsuario">Nome de usuário</label>
                        <input type="text" class="form-control" id="inputUsuario" placeholder="nome usuário"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputSenha">Senha</label>
                        <input type="password" class="form-control" id="inputSenha" placeholder="senha"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputSenha2">Repetir Senha</label>
                        <input type="password" class="form-control" id="inputSenha2" placeholder="senha"/>
                    </div>
                </div>

                <div class="btn-group" role="group" style={{paddingTop:'30px', float:'right'}}> 
                        <button type="submit" class="btn btn-success" onClick={this.buttonSair.actionLogin} >OK</button>
                        <button type="reset" class="btn btn-outline-secondary" onClick={this.buttonSair.actionLogin} >{this.buttonSair.title}</button>
                </div>
                    
                </form>
            </div>


        );
    }





}