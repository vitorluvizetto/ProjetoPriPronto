import React from 'react';

/*
Está é a classe filha, responsavel por adicionar novos livros
*/
export default class LivroForm extends React.Component {


    constructor(props){
        super(props);
        this.state={
            id:null,
            idEditado:null,
            titulo:"",
            autor:"",
            editora:"",
            edicao:"",
            genero:""
        }
        
    }

    /*  
    este metodo é chamado depois de renderizar a pagina, depois de um update, ou seja, apos a inclusão, exclusão ou editação
    de algum conteudo que está presente na página. 
    Se o id do Livro que for ser editado é diferente do id que já está cadastro então ele vai salvar os novos dados
    */
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.editar&&nextProps.editar.id !== prevState.idEditado) {
            return {
                idEditado:nextProps.editar.id,
                titulo:nextProps.editar.titulo,
                autor: nextProps.editar.autor,
                editora:nextProps.editar.editora,
                edicao:nextProps.editar.edicao,
                genero:nextProps.editar.genero

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
        if (this.state.titulo && this.state.autor && this.state.editora
        && this.state.edicao && this.state.genero){
            let cadLivro={
                id:this.props.editar?
                    this.props.editar.id:null,
                    titulo:this.state.titulo,
                    autor:this.state.autor,
                    editora: this.state.editora,
                    edicao : this.state.edicao,
                    genero : this.state.genero
            };
            this.props.onConfirmar(cadLivro);
            } else {
                alert("Preencha todos os campos!");
            }
    }


    render() {
        return (
            <div class="container-fluid">
                <form>
                    <div class="row"  style={{paddingTop:'30px'}}>
                        <div class="col-12 shadow p-3 mb-5 bg-white rounded border border-primary" >
                            <h4 class="text-md-left">Cadastro de novo Livro</h4> 
                        </div>   
                    </div> 

                    <div class="form-group">
                        <label for="formGroupExampleInput">Livro</label>
                        <input type="text" class="form-control" id="inputLivro" placeholder="Nome do Livro"
                        value={this.state.titulo}
                        onChange={(evento)=> this.setValor('titulo', evento.target.value)}                
                        />
                    </div>
                    
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Autor(a)</label>
                        <input type="text" class="form-control" id="inputAutor" placeholder="Nome do autor(a)"
                        value={this.state.autor}
                        onChange={(evento)=> this.setValor('autor', evento.target.value)}
                        />
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEditora">Editora</label>
                            <input type="text" class="form-control" id="inputEditora" placeholder="Editora"
                            value={this.state.editora}
                            onChange={(evento)=> this.setValor('editora',evento.target.value)}
                            />
                        </div>

                        <div class="form-group col-md-2">
                            <label for="inputEdicao">Edição</label>
                            <input type="text" class="form-control" id="inputEdicao" placeholder="Edição"
                            value={this.state.edicao}
                            onChange={(evento)=> this.setValor('edicao', evento.target.value)}         
                            />
                        </div>

                        <div class="form-group col-md-4">
                            <label for="inputGenero">Gênero</label>
                             <select id="inputGenero" class="form-control"
                             value = {this.state.selectValue}
                             onChange={(evento)=>this.setValor('genero',evento.target.value)}
                             >
                                <option value='default'>Gênero...</option>
                                <option value="autoajuda">Auto Ajuda</option>
                                <option value="academicos">Acadêmicos</option>
                                <option value="aventura">Aventura</option>
                                <option value="biograficos">Biográficos</option>
                                <option value="cietificos">Cietíficos</option>
                                <option value="contos">Contos</option>
                                <option value="crônicas">Crônicas</option>
                                <option value="didáticos">Didáticos</option>
                                <option value="fantasia">Fantasia</option>
                                <option value="ficcao-cientifica">Ficção Científica</option>
                                <option value="ficcao-historico">Ficção Histórica‎</option>
                                <option value="viagem">Guias de viagem</option>
                                <option value="horror">Horror‎ </option>
                                <option value="infantojuvenis"> Infantojuvenis‎</option>
                                <option value="infantis">Infantis</option>
                                <option value="livro-jogos">Livros-jogos‎</option>
                                <option value="manuais">Manuais‎ </option>
                                <option value="poesia">Poesia‎</option>
                                <option value="politica">Política</option>
                                
                            </select>
                        </div>
                    </div> 
                    

                    <div class="btn-group" role="group" style={{paddingTop:'30px', float:'right'}}> 
                        <button type="submit" class="btn btn-success"  onClick={(evento)=>{ this.confirmar()}}>OK</button>
                        <button type="reset" class="btn btn-outline-secondary" onClick={(evento)=>{this.props.onCancelar()}} 
                        >Cancelar</button>
                    </div>

                </form>
            </div>
        );
    }
}