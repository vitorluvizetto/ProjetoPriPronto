import React, {Component}from 'react';


/*
Está é a classe filha responsavel por exibir o cadastro de todos os livros cadastrrados
na base.
*/

export default class LivroSearch extends Component {



    render() {

        
            return <div class="container-fluid">
            
                     
          
            <div class="container-fluid">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Autor(a)</th>
                                <th scope="col">Editora</th>
                                <th scope="col">Edição</th>
                                <th scope="col">Gênero</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Excluir</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.props.livros? this.props.livros.map((livro, index) => {
                                return (<tr key={livro.id}>
                                    <td>{livro.id}</td>
                                    <td>{livro.titulo}</td>
                                    <td>{livro.autor}</td>
                                    <td>{livro.editora}</td>
                                    <td>{livro.edicao}</td>
                                    <td>{livro.genero}</td>
                                    <td>
                                        <button type="button" class="btn btn-info" onClick={()=>this.props.onEditar(livro)}>Editar</button>    
                                    </td>
                                    <td> 
                                        <button type="button" class="btn btn-danger"onClick={()=>this.props.onExcluir(livro)} >Excluir</button>
                                    </td>
                                </tr>)
                            }):
                            ''
                            }
                        </tbody>

                    </table>
                    
            </div>  
            
        </div>
            
           
        
       
    }
}