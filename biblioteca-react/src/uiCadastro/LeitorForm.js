import React, {Component}from 'react';
import {hashHistory} from 'react-router';


/* Classe para cadastro de novos Leitores */
export default class LeitorForm extends Component {

    buttonHome={
        title: 'Cancelar',
        actionHome:()=> hashHistory.push('')
    }

    constructor(props){
        super(props);
        this.state={
            id:null,
            idEditado:null,
            nome:"",
            endereco:"",
            telefone:"",
            cidade: "",
            estado:"",
            cep:""
        }
        
    }

    /*
    este metodo é chamado depois de renderizar a pagina, depois de um update, ou seja, apos a inclusão, exclusão ou editação
    de algum conteudo que está presente na página. 
    */
   static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.editar&&nextProps.editar.id !== prevState.idEditado) {
            return {
                idEditado:nextProps.editar.id,
                nome:nextProps.editar.nome,
                endereco: nextProps.editar.endereco,
                cidade: nextProps.editar.cidade,
                estado: nextProps.editar.estado,
                cep: nextProps.editar.cep,
                telefone:nextProps.editar.telefone
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
        if (this.state.nome && this.state.endereco && this.state.cidade 
            && this.state.cep && this.state.estado && this.state.telefone){
            let cadLeitor={
                id:this.props.editar?
                    this.props.editar.id:null,
                    nome:this.state.nome,
                    endereco:this.state.endereco,
                    cidade: this.state.cidade,
                    estado: this.state.estado,
                    cep: this.state.cep,
                    telefone: this.state.telefone
            };
            this.props.onConfirmar(cadLeitor);
            } else {
                alert("Preencha todos os campos!");

            }
    }

    render(){
        return(
            <div class="container-fluid">
                <form>
                    <div class="row"  style={{paddingTop:'30px'}}>
                        <div class="col-12 shadow p-3 mb-5 bg-white rounded border border-primary" >
                            <h4 class="text-md-left">Cadastro de novo Leitor</h4> 
                        </div>   
                    </div> 

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputName">Nome</label>
                            <input type="text" class="form-control" id="inputName" placeholder="Nome completo"
                            value={this.state.nome}
                            onChange={(evento)=> this.setValor('nome',evento.target.value)}
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputTelefone">Telefone</label>
                            <input type="phone" class="form-control" id="inputTelefone" placeholder="Telefone"
                            value={this.state.telefone}
                            onChange={(evento)=> this.setValor('telefone',evento.target.value)}/>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="inputAddress">Endereço</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Endereço"
                        value={this.state.endereco}
                        onChange={(evento)=> this.setValor('endereco',evento.target.value)}
                        />
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">Cidade</label>
                            <input type="text" class="form-control" id="inputCity" placeholder="Cidade"
                            value={this.state.cidade}
                            onChange={(evento)=> this.setValor('cidade',evento.target.value)}
                            />
                        </div>

                        <div class="form-group col-md-2">
                            <label for="inputZip">CEP</label>
                            <input type="text" class="form-control" id="inputZip" placeholder="CEP"
                            value={this.state.cep}
                            onChange={(evento)=> this.setValor('cep',evento.target.value)}
                            />
                        </div>

                        <div class="form-group col-md-4">
                            <label for="inputState">Estado</label>
                            <select id="inputState" class="form-control"
                            value = {this.state.selectValue}
                            onChange={(evento)=>this.setValor('estado',evento.target.value)}
                            >
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

                    <div class="btn-group" role="group" style={{paddingTop:'30px', float:'right'}}> 
                        <button type="submit" class="btn btn-success" onClick={(evento)=>{this.confirmar()}}>OK</button>
                        <button type="reset" class="btn btn-outline-secondary" onClick={this.buttonHome.actionHome}>Cancelar</button>
                    </div>
                    
                </form>
            </div>


        );
    }





}