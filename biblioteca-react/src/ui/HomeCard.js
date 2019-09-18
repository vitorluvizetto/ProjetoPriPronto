import React from 'react'

/*
Esta classe nada mais é do que os cards usados na home para redirecionar para as telas de 
-Emprestimo
-Leitor
-Livro
*/

const HomeCard = (props) => {

    return (
        <div className='col-12 col-sm-4' style={{paddingTop: '40px'}}>
            <div class="border border-muted rounded">
            <img className="card-img-top rounded mx-auto d-block" 
            style={{paddingTop: '10px', width: '100px', heigt: '100px'}} 
            src={props.img} alt='imagem descritiva do card'/>
              <div class="card-block" style={{paddingTop:'20px', paddingBottom: '20px'}}>
                    <h4 class="card-title">{props.title}</h4>
                    <p class="card-text">{props.text}</p>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-primary" onClick={props.actionSearch}>{props.buttonSearch}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;