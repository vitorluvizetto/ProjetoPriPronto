import React, {Component}from 'react';

import API from '../API';
import EmprestimoSearch from '../uiPesquisa/EmprestimoSearch';
import EmprestimoForm from '../uiCadastro/EmprestimoForm';


/*
Está é a classe pai, que será responsavel por todas as interações com as filhas
*/

export default class EmprestimoHome extends Component {

    constructor() {
        super();
        this.state = {
            emprestimos: [],
            pesquisa:''
        }
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
    FAZER PESQUISA
    */
    pesquisa(pesquisa) {
        API.get("/leitores/pesquisar/nome?contem=" + this.state.pesquisa).then(
            (retorno) => {
                this.setState({ leitores: retorno.data });
            }
        ).catch((erro) => this.tratarErro(erro));
    }

    listarEmprestimo() {
        API.get("emprestimos/").then(
            (retorno) => {
                this.setState({emprestimos: retorno.data});
            }
        ).catch((erro) => this.tratarErro(erro));
    }

    componentDidMount() {
        this.pesquisa();
        this.listarEmprestimo();
    }

    tratarErro(erro) {
        console.log(erro.response);
        if(erro.response.data.message)
            alert(erro.response.data.message);
        else
            alert(erro.response.data);
    
    }

    novo() {
        this.setState({
            exibirFormulario:true,
            editar:null
        });
    }

    /*
    CONFIRMANDO OS DADOS TANTO PARA INSERIR QUANTO ATUALIZAR
    */
    confirmar(item) {
        if(item.id) {
            this.atualizar(item);
        }else {
            this.inserir(item);
        }
    }

    inserir(item) {
        API.post("emprestimos/",item).then(
            ()=>{
                this.listarEmprestimo();
                this.limpar();
            }
        ).catch((erro) => this.tratarErro(erro));
        
    }

    editar(item) {
        this.setState({
            exibirFormulario:true,
            editar:item
        });
    }

    atualizar(item) {
        API.put("emprestimos/"+item.id,item).then(
            ()=>{
                this.listarEmprestimo();
                this.limpar();
            }
        ).catch((erro) => this.tratarErro(erro));
    }

    limpar() {
        this.setState({
            exibirFormulario:false,
            editar:null
        });
    }

    /*DELETAR ALGUM ITEM DA PAGINA*/
    excluir(item) {
        API.delete("emprestimos/"+item.id).then(
            ()=>{
                this.listarEmprestimo();
                this.limpar();
            }
        ).catch((erro) => this.tratarErro(erro));
    }

    



    
    render() {

        return <div>

            <div class="row" style={{paddingBottom:'30px'}} aria-label="Basic example">
                <form class="form-inline col-6" style={{marginLeft:'30px', paddingTop: '50px', marginBottom: '10px'}}>
                    <input  class="form-control col-6" type="search" placeholder="Procurar Livros" aria-label="Search"
                    value={this.state.pesquisa}
                    onChange={(evento)=> this.setValor('pesquisa', evento.target.value)}                    
                    />
                    <button class="btn btn-outline-success" type="submit"
                    onClick = {(pesquisa) => this.pesquisa(pesquisa)}
                    >OK</button>
                </form>
            </div>  

            <EmprestimoSearch 
                onEditar={(item)=>this.editar(item)}
                onExcluir={(item)=>this.excluir(item)}
                emprestimos={this.state.emprestimos} /><br/><br/>
            {this.state.exibirFormulario?
                <EmprestimoForm
                    onConfirmar={(item) =>this.confirmar(item)}
                    onCancelar={() =>this.limpar()}
                    editar={this.state.editar} />:
                    <button type="button" class="btn btn-info"style={{marginLeft:'30px'}} onClick={()=>this.novo()}>Novo Emprestimo</button>}
        </div>;

    }

}