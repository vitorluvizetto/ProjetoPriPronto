import React, {Component}from 'react';

export default class EmprestimoSearch extends Component {


    render() {

        
        return <div class="container-fluid">
        
        <div class="container-fluid">
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome do Leitor</th>
                            <th scope="col">Nome do Livro</th>
                            <th scope="col">Data de Retirada</th>
                            <th scope="col">Data de Entrega</th>
                            <th scope="col">Renovar</th>
                            <th scope="col">Devolver</th>
                            <th scope="col">Excluir</th>

                        </tr>
                    </thead>

                    <tbody>
                        {this.props.emprestimos? this.props.emprestimos.map((emprestimo, index) => {
                            return (<tr key={emprestimo.id}>
                                <td>{emprestimo.id}</td>
                                <td>{emprestimo.leitor.nome}</td>
                                <td>{emprestimo.livro.titulo}</td>
                                <td>{emprestimo.dataDeRetirada}</td>
                                <td>{emprestimo.dataDeEntrega}</td>
                                <td>
                                    <button type="button" class="btn btn-primary" onClick={()=>this.props.onEditar(emprestimo)}>Renovar</button>    
                                </td>
                                <td>
                                    <button type="button" class="btn btn-success" onClick={()=>this.props.onDevolver(emprestimo)}>Devolver</button>    
                                </td>
                                <td> 
                                    <button type="button" class="btn btn-danger"onClick={()=>this.props.onExcluir(emprestimo)}>Excluir</button>
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