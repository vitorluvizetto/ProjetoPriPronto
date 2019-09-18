import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Login from './ui/Login'

//
import Emprestimo from './container/EmprestimoHome';
import Livros from './container/LivrosHome';
import Leitores from './container/LeitoresHome';
import Home from './container/Home';

//cadastro forms
import EmprestimoForm from './uiCadastro/EmprestimoForm';
import LivrosForm from './uiCadastro/LivrosForm';
import LeitoresForm from './uiCadastro/LeitorForm';
import BiblioForm from './uiCadastro/BiblioForm';

import registerServiceWorker from './registerServiceWorker';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
    
        <Router> 
            <Route path='/Login' component={Login}/>
        </Router>
        
        <Route path='/' component={App} >
            <IndexRoute component={Home} />

            <Route path='/emprestimosSearch' component={Emprestimo} />
            <Route path='/livrosSearch' component={Livros} />
            <Route path='/leitoresSearch' component={Leitores} />

            <Route path='/RegistroEmprestimos' component={EmprestimoForm} />
            <Route path='/CadastroLivros' component={LivrosForm} />
            <Route path='/CadastroLeitores' component={LeitoresForm} />
            <Route path='/CadastroBiblio' component={BiblioForm}/>
        </Route>

    </Router>
    ,
    document.getElementById('root'));
registerServiceWorker();

/*
O hash serve pra não precisar fazer rendrização
Na raiz da app vai renderizar o App 
*/

/*
<IndexRoute component={Home} />
Se não tiver nenhuma rota, ele vai carregar um componente automaticamente
*/