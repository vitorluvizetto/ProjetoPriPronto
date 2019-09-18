/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.edu.ifrs.restinga.ds.spring.controller;

import br.edu.ifrs.restinga.ds.spring.dao.LivroDAO;
import br.edu.ifrs.restinga.ds.spring.erros.RequisicaoInvalida;
import br.edu.ifrs.restinga.ds.spring.erros.NaoEncontrado;
import br.edu.ifrs.restinga.ds.spring.modelo.Livro;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author 10070232
 */
@RestController
@RequestMapping("/api")

public class LivroController {
    
    @Autowired
    LivroDAO livroDAO;
    
    
    @RequestMapping (path= "/livros", method = RequestMethod.GET)
    public Iterable <Livro> listarLivros() {
        return  livroDAO.findAll();
    }
     
    /*
    FAZER A PESQUISA PELO NOME DO LIVRO
    */
    @RequestMapping(path = "/livros/pesquisar/nome", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Livro> pesquisarLivro(
            @RequestParam(required = false) String igual,
            @RequestParam(required = false) String contem) {
        if (igual != null && !igual.isEmpty()) {
            return livroDAO.findByTitulo(igual); // se o nome for igual
        } else {
            return livroDAO.findByTituloContaining(contem); // ou se contem uma parte do nome

        }
    }
    
    /*
    Porque estamos usando o requestBody neste metodo ?????
    */
    @RequestMapping( path = "/livros" , method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Livro inserirLivro (@RequestBody Livro livro) {
        livro.setId(0);
        
        if (livro.getTitulo()== null || livro.getTitulo().isEmpty()) {
            throw new RequisicaoInvalida("Preencher o nome do livro");
        }
        if (livro.getAutor() == null || livro.getAutor().isEmpty()) {
            throw new RequisicaoInvalida("Preencher o nome do autor");
        }
        if (livro.getEdicao()== null || livro.getEdicao().isEmpty()) {
            throw new RequisicaoInvalida("Preencher a edição");
        }
        if (livro.getEditora()== null || livro.getEditora().isEmpty()) {
            throw new RequisicaoInvalida("Preencher o nome da editora");
        }
        if (livro.getGenero()== null || livro.getGenero().isEmpty()) {
            throw new RequisicaoInvalida("Preencher o genero do livro");
        }
        
        
        Livro livroSave = livroDAO.save(livro);
        return livroSave;
    }
    
    /*
    ATUALIZAR OS CAMPOS
    */
    @RequestMapping(path = "/livros/{id}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Livro atualizar(@PathVariable int id, @RequestBody Livro livro) {
        if (livro.getTitulo()== null || livro.getTitulo().isEmpty()) {
            throw new RequisicaoInvalida("Preencher o nome do livro");
        }
        
        Optional<Livro> optionalLivroBanco = livroDAO.findById(id);
        if(!optionalLivroBanco.isPresent())
            throw new NaoEncontrado("ID não encontrada");
        Livro livroBanco = optionalLivroBanco.get();
        livroBanco.setTitulo(livro.getTitulo());
        livroBanco.setAutor(livro.getAutor());
        livroBanco.setEdicao(livro.getEdicao());
        livroBanco.setEditora(livro.getEditora());
        livroBanco.setGenero(livro.getGenero());
        
        Livro livroSave = livroDAO.save(livro);
        return livroSave;
    }

    /*
    APAR LIVRO DO BANCO
    */
    @RequestMapping(path = "/livros/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void apagar(@PathVariable int id) {

        if (!livroDAO.existsById(id)) {
            throw new NaoEncontrado("ID não encontrada");
        }

        livroDAO.deleteById(id);

    }
    
    
    
    
    
    
} // fim da classe
