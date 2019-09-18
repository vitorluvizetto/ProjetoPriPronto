import React, {Component}from 'react';

import API from '../API';
import moment from 'moment';

/* Classe para cadastro de novos emprestimos
-Nesta classe tu irá informar o nome do leitor que está realizando o emprestimo do livr
- Nome do livro que será retirado no emprestimo
- A data de emprestimo: data será pega no banco, pegando assim a data atual
- A data de entrega: no banco será acrescido 7 dias na data de emprestimo

*/
export default class EmprestimoForm extends Component {


    constructor(props){
        super(props);
        this.state={
            id:null,
            idEditado: null,
            emprestimos: [],
            leitores: [],
            livros: [],
            dataDeRetirada: moment().format('DD/MM/YYYY'), 
            dataDeEntrega: moment().add(7,'days').calendar()
        }
        
    }

    /*
    RENDERIZAR A PAGINA APOS UMA ATUALIZAÇÃO DE ALGUM ITEM DA LISTA
    */
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.editar&&nextProps.editar.id !== prevState.idEditado) {
            return {
                idEditado:nextProps.editar.id,
                leitor: nextProps.editar.leitorId,
                livro: nextProps.editar.livroId,
                dataDeRetirada: nextProps.editar.dataDeRetirada,
                dataDeEntrega: nextProps.editar.dataDeEntrega
            }
        }
        return null;
    }

    /*
    adicionando um novo valor na página
    */
    setValor(campo, valor) {
        this.setState(
                (anterior) =>{
                    anterior[campo]=valor;
                    return anterior;
                }
        );
        
    }

    /*
    a confirmação só ocorre depois de validar se todos os campos estão
    preenchidos do formulario
    */ 
    confirmar() {  
        if (this.state.dataDeRetirada && this.state.dataDeEntrega) {
        let cadEmprestimo={
            id:this.props.editar?
                this.props.editar.id:null,
                leitor: this.state.leitorId,
                livro: this.state.livroId,
                dataDeRetirada: this.state.dataDeRetirada,
                dataDeEntrega: this.state.dataDeEntrega
                
        };
        if (this.state.leitorId) {
            cadEmprestimo.leitor = {
                id: this.state.leitorId
            };
        }
        if(this.state.livroId) {
            cadEmprestimo.livro = {
                id: this.state.livroId
            };
        }
        this.props.onConfirmar(cadEmprestimo);
        } else {
            alert('Falta preencher campos')
        }
        
    } 
    
    /* 
    ASSOCIAÇÕES COM AS OUTRAS CLASSES 
    */

    tratarErro(erro) {
        console.log(erro.response);
        if(erro.response.data.message)
            alert(erro.response.data.message);
        else
            alert(erro.response.data);

    }

    listarEmprestimos() {
        API.get("emprestimos/").then(
            (retorno) => {
                this.setState({ emprestimos: retorno.data })
            }
        ).catch((erro) => this.tratarErro(erro));
    }
    
    listarLivros() {
        API.get("livros/").then(
            (retorno) => {
                this.setState({ livros: retorno.data });
            }
        ).catch((erro) => this.tratarErro(erro));
    }

    listarLeitores(){
        API.get("leitores/").then(
            (retorno) => {
                this.setState({ leitores: retorno.data})
            }
        ).catch((erro) => this.tratarErro(erro));
    }

    componentDidMount() {
        this.listarEmprestimos();
        this.listarLeitores();
        this.listarLivros();
    }

    

    render() {
    
        return (
            <div class="container-fluid">
                <form>
                    <div class="row"  style={{paddingTop:'30px'}}>
                        <div class="col-12 shadow p-3 mb-5 bg-white rounded border border-primary" >
                            <h4 class="text-md-left">Registro de Emprestimo</h4> 
                        </div>   
                    </div> 

                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputLeitor">Leitor</label>
                            <select id="inputLeitor" class="form-control"
                             value = {this.state.leitorId}
                             onChange={(evento)=>this.setValor('leitorId',evento.target.value)}
                             >  <option selected>Selecionar...</option>
                                {this.state.leitores?this.state.leitores.map(
                                    (leitor) => 
                                    <option value={leitor.id}>{leitor.nome}</option>
                                ):""};
                                
                            </select>
                        </div>

                        <div class="form-group col-md-4">
                            <label for="inputLivro">Livro</label>
                            <select id="inputLivro" class="form-control"
                             value = {this.state.livroId}
                             onChange={(evento)=>this.setValor('livroId',evento.target.value)}
                             >  <option selected>Selecionar...</option>
                                {this.state.livros?this.state.livros.map(
                                    (livro) => 
                                    <option value={livro.id}>{livro.titulo}</option>
                                ):""};
                                
                            </select>
                        </div>

                        
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <label for="inputCity">Data de Retirada</label>
                            <input type="text" class="form-control" id="dateRetirada" readonly="true" 
                            value={this.state.dataDeRetirada}
                            onChange={(evento)=> this.setValor('dataDeRetirada', evento.target.value)}/>
                        </div>

                        <div class="form-group col-md-2">
                            <label for="inputZip">Data de Entrega</label>
                            <input type="text" class="form-control" id="dateEntrega" readonly="true" 
                            value={this.state.dataDeEntrega}
                            onChange={(evento)=> this.setValor('dataDeEntrega', evento.target.value)}
                            />
                        </div>
                    </div>

                    <div class="btn-group" role="group" style={{paddingTop:'30px', float:'right'}}> 
                        <button type="submit" class="btn btn-success"  onClick={(evento)=>{ this.confirmar()}}>OK</button>
                        <button type="reset" class="btn btn-outline-secondary" onClick={(evento)=>{this.props.onCancelar()}}>Cancelar</button>
                    </div>

                </form>
            </div>
        );
    }
}
