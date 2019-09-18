import React, {Component}from 'react';

import {hashHistory} from 'react-router';

export default class LeitorSearch extends Component {

    buttonCadastrar={
        title: 'Cadastrar Leitor',
        actionCadastro:()=> hashHistory.push('CadastroLeitores')
    }


    render() {

        
        return <div class="container-fluid">
        
        <div class="container-fluid">
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Estado</th>
                            <th scope="col">CEP</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Excluir</th>

                        </tr>
                    </thead>

                    <tbody>
                        {this.props.leitores? this.props.leitores.map((leitor, index) => {
                            return (<tr key={leitor.id}>
                                <td>{leitor.id}</td>
                                <td>{leitor.nome}</td>
                                <td>{leitor.endereco}</td>
                                <td>{leitor.cidade}</td>
                                <td>{leitor.estado}</td>
                                <td>{leitor.cep}</td>
                                <td>{leitor.telefone}</td>
                                <td>
                                    <button type="button" class="btn btn-info" onClick={()=>this.props.onEditar(leitor)}>Editar</button>    
                                </td>
                                <td> 
                                    <button type="button" class="btn btn-danger"onClick={()=>this.props.onExcluir(leitor)} >Excluir</button>
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