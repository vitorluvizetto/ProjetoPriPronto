import React from 'react';
import LivroSearch from '../uiPesquisa/LivroSearch';
import LivrosForm from '../uiCadastro/LivrosForm';

import API from '../API';



/*
Está é a classe pai, que será responsavel por todas as interações com as filhas
*/

export default class LivrosHome extends React.Component {

    constructor() {
        super();
        this.state = {
            livros: [],
            pesquisa: ''
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

    componentDidMount() {
        this.pesquisa();
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
        } else {
            this.inserir(item);
        }
    }

    inserir(item) {
        API.post("livros/",item).then(
            ()=>{
                this.listar();
                this.limpar();
            }
        ).catch((erro) => this.tratarErro(erro));
        
    }

    atualizar(item) {
        API.put("livros/"+item.id,item).then(
            ()=>{
                this.listar();
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
        API.delete("livros/"+item.id).then(
            ()=>{
                this.listar();
                this.limpar();
            }
        ).catch((erro) => this.tratarErro(erro));
    }

    pesquisa(pesquisa) {
        API.get("livros/pesquisar/nome?contem=" + this.state.pesquisa).then(
            (retorno) => {
                this.setState({ livros: retorno.data });
            }
        ).catch((erro) => this.tratarErro(erro));
    }

    

    
    /* DESCOBRIR COMO EDITAR UM ITEM */
    
    editar(item) {
        this.setState({
            exibirFormulario:true,
            editar:item
        });
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
            <LivroSearch 
                onEditar={(item)=>this.editar(item)}
                onExcluir={(item)=>this.excluir(item)}
                livros={this.state.livros} /><br/><br/>
            {this.state.exibirFormulario?
                <LivrosForm
                    onConfirmar={(item) =>this.confirmar(item)}
                    onCancelar={() =>this.limpar()}
                    editar={this.state.editar} />:
                    <button type="button" class="btn btn-info"style={{marginLeft:'30px'}} onClick={()=>this.novo()}>Novo Livro</button>}
        </div>;

    }

}