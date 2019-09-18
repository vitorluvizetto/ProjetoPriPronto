/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.edu.ifrs.restinga.ds.spring.controller;

import br.edu.ifrs.restinga.ds.spring.dao.BibliotecarioDAO;
import br.edu.ifrs.restinga.ds.spring.erros.RequisicaoInvalida;
import br.edu.ifrs.restinga.ds.spring.erros.NaoEncontrado;
import br.edu.ifrs.restinga.ds.spring.modelo.Bibliotecario;

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
public class BibliotecarioController {
    
    @Autowired
    BibliotecarioDAO biblio;
    
    
    public void validaObjetoBibliotecario(Bibliotecario bibliotecario) {
        
        if(bibliotecario.getNome() == null || bibliotecario.getNome().isEmpty()){
            throw new RequisicaoInvalida("Bibliotecario sem nome");
        }
        
        if(bibliotecario.getLogin()== null || bibliotecario.getLogin().isEmpty()){
            throw new RequisicaoInvalida("Bibliotecario sem login");
        }
        
        if(bibliotecario.getSenha()== null || bibliotecario.getSenha().isEmpty()){
            throw new RequisicaoInvalida("Bibliotecario sem senha");
        }
        
        
    }

    @RequestMapping(path = "/bibliotecarios/", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Bibliotecario> listar() {
        return biblio.findAll();
    }

    @RequestMapping(path = "/bibliotecarios/{id}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public Bibliotecario recuperar(@PathVariable int id) {
        if(!biblio.existsById(id)) {
            throw new NaoEncontrado("Id não encontrada");
        }
        return biblio.findById(id).get();
    }
    
    @RequestMapping(path = "/bibliotecario/", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Bibliotecario inserir(@RequestBody Bibliotecario bibliotecario) {
        bibliotecario.setId(0);
        validaObjetoBibliotecario(bibliotecario);
        return biblio.save(bibliotecario);
    }

    @RequestMapping(path = "/bibliotecarios/{id}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable int id,  @RequestBody Bibliotecario bibliotecario) {
        if(!biblio.existsById(id)) {
            throw new NaoEncontrado("Id não encontrada");
        }
        bibliotecario.setId(id);
        validaObjetoBibliotecario(bibliotecario);
        biblio.save(bibliotecario);
    }
    
    @RequestMapping(path = "/bibliotecarios/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void apagar(@PathVariable int id) {
        if(!biblio.existsById(id)) {
            throw new NaoEncontrado("Id não encontrada");
        }
        biblio.deleteById(id);
    }
    

    
    
}
