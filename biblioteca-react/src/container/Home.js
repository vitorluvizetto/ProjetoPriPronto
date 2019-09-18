import React, {Component} from 'react';

import HomeCard from '../ui/HomeCard'
import {hashHistory} from 'react-router';

export default class Home extends Component {

    homeCardEmprestimo={
        title: 'Emprestimos',
        text: 'Administrar Emprestimos',
        buttonCadastrar: 'Registrar',
        buttonSearch: 'Procurar',
        img: 'https://image.flaticon.com/icons/svg/167/167756.svg',
        
        actionSearch:()=> hashHistory.push('/emprestimosSearch')
    }

    homeCardLeitor={
        title: 'Leitores',
        text: 'Administrar Leitores',
        buttonCadastrar: 'Cadastrar',
        buttonSearch: 'Procurar',
        img: 'https://image.flaticon.com/icons/svg/201/201608.svg',
        
        actionSearch:()=> hashHistory.push('/leitoresSearch')
    }

    homeCardLivro={
        title: 'Livros',
        text: 'Administrar Livros',
        buttonCadastrar: 'Cadastrar',
        buttonSearch: 'Procurar',
        img: 'https://image.flaticon.com/icons/svg/167/167755.svg',
        
        actionSearch:()=> hashHistory.push('/livrosSearch')
    }

    render(){
        return(
            <div class="container-fluid">
                <div class="container text-center">
                    <div class='row'>
                        <HomeCard title={this.homeCardEmprestimo.title}
                        text={this.homeCardEmprestimo.text}
                        img={this.homeCardEmprestimo.img}
                       
                        buttonSearch={this.homeCardEmprestimo.buttonSearch}
                        
                        actionSearch = {this.homeCardEmprestimo.actionSearch}/>

                        <HomeCard title={this.homeCardLeitor.title}
                        text={this.homeCardLeitor.text}
                        img={this.homeCardLeitor.img}
                       
                        buttonSearch={this.homeCardLeitor.buttonSearch}
                       
                        actionSearch = {this.homeCardLeitor.actionSearch}/>

                        <HomeCard title={this.homeCardLivro.title}
                        text={this.homeCardLivro.text}
                        img={this.homeCardLivro.img}
                       
                        buttonSearch={this.homeCardLivro.buttonSearch}
                        
                        actionSearch = {this.homeCardLivro.actionSearch}/>
                    </div>
                </div>
            </div>
        );
    }
}