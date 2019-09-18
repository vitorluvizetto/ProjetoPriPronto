/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.edu.ifrs.restinga.ds.spring.controller;

import br.edu.ifrs.restinga.ds.spring.dao.BibliotecarioDAO;
import br.edu.ifrs.restinga.ds.spring.dao.EmprestimoDAO;
import br.edu.ifrs.restinga.ds.spring.dao.LeitorDAO;
import br.edu.ifrs.restinga.ds.spring.dao.LivroDAO;
import br.edu.ifrs.restinga.ds.spring.erros.RequisicaoInvalida;
import br.edu.ifrs.restinga.ds.spring.erros.NaoEncontrado;
import br.edu.ifrs.restinga.ds.spring.modelo.Emprestimo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author 10070232
 */
@RestController
@RequestMapping("/api")
public class EmprestimoController {
    
    @Autowired
    EmprestimoDAO emprestimoDAO;
    
    @RequestMapping (path= "/emprestimos", method = RequestMethod.GET)
    public Iterable <Emprestimo> listarEmprestimos() {
        return  emprestimoDAO.findAll();
    }
    
    /*
    RELACIONAMENTO PARA O CRUD COM AS CLASSES DE LEITORES, LIVROS E BIBLIOTECARIO
    */
    @Autowired
    LivroDAO livroDAO;
    
    @Autowired
    LeitorDAO leitorDAO;
    
    @Autowired
    BibliotecarioDAO biblio;
    
    
    /*
    VALIDAR O CADASTRO DE UM NOVO EMPRESTIMO
    */
    
    @RequestMapping( path = "/emprestimos" , method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Emprestimo inserirEmprestimo (@RequestBody Emprestimo emprestimo) {
        emprestimo.setId(0);
        
        if(emprestimo.getDataDeEntrega()== null){
            throw new RequisicaoInvalida("sem Data de entrega");
        }
        
        if(emprestimo.getDataDeRetirada()==null) {
            throw new RequisicaoInvalida("sem data de retirada");
        }
        
        if(emprestimo.getLeitor() == null){
            throw new RequisicaoInvalida("Emprestimo com Leitor sem nome");
        }
        
        if(emprestimo.getLivro()==null){
            throw new RequisicaoInvalida("Emprestimo sem livro");
        }
        
        
        Emprestimo empresimoSave = emprestimoDAO.save(emprestimo);
        return empresimoSave;
    }
    
    
    /*
    DEVOLUÇÃO
    */
    @RequestMapping(path = "/emprestimos/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void apagar(@PathVariable int id) {

        if (!emprestimoDAO.existsById(id)) {
            throw new NaoEncontrado("ID não encontrada");
        }

        emprestimoDAO.deleteById(id);

    }
    
    
    
    /*
    ALTERAR UM EMPRESTIMO = RENOVAR UM LIVRO
    ALTERAR APENAS A DATA
    */
    
    
    
    /*
    PESQUISAR A ENTREGA PELO NOME DO LIVRO
    */

    
    
    /*
    PESQUISAR A ENTREGA PELO NOME DO LEITOR
    */
    
   
   
    
    
}
