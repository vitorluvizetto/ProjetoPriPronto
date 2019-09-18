/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.edu.ifrs.restinga.ds.spring.controller;

import br.edu.ifrs.restinga.ds.spring.dao.LeitorDAO;
import br.edu.ifrs.restinga.ds.spring.erros.RequisicaoInvalida;
import br.edu.ifrs.restinga.ds.spring.erros.NaoEncontrado;
import br.edu.ifrs.restinga.ds.spring.modelo.Leitor;


import br.edu.ifrs.restinga.ds.spring.erros.NaoEncontrado;
import br.edu.ifrs.restinga.ds.spring.erros.RequisicaoInvalida;
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
public class LeitorController {
    
    @Autowired
    LeitorDAO leitorDAO;
    
    /*
    Listar todos os itens do banco para os leitores
    */

    @RequestMapping(path = "/leitores/", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Leitor> listar() {
        return leitorDAO.findAll();
    }
    
    /*
    PROCURAR LEITOR PELO NOME
    */

    @RequestMapping(path = "/leitores/pesquisar/nome", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Leitor> pesquisarLivro(
            @RequestParam(required = false) String igual,
            @RequestParam(required = false) String contem) {
        if (igual != null && !igual.isEmpty()) {
            return leitorDAO.findByNome(igual); // se o nome for igual
        } else {
            return leitorDAO.findByNomeContaining(contem); // ou se contem uma parte do nome

        }
    }
    
    
    /*
    ADICIONANDO LEITORES AO BANCO DE REGISTRO
    */
    @RequestMapping(path = "/leitores/", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Leitor inserir(@RequestBody Leitor leitor) {
        leitor.setId(0);
        
        if(leitor.getNome() == null || leitor.getNome().isEmpty()){
            throw new RequisicaoInvalida("Leitor sem nome");
        }
        
        if(leitor.getTelefone()== null || leitor.getTelefone().isEmpty()){
            throw new RequisicaoInvalida("Leitor sem telefone");
        }
        
        if(leitor.getEndereco()== null || leitor.getEndereco().isEmpty()){
            throw new RequisicaoInvalida("Leitor sem endereço");
        }
        
        if(leitor.getCidade()== null || leitor.getCidade().isEmpty()){
            throw new RequisicaoInvalida("Leitor sem Cidade ");
        }
        
        if(leitor.getEstado()== null || leitor.getEstado().isEmpty()){
            throw new RequisicaoInvalida("Leitor sem ESTADO");
        }
        
        if(leitor.getCep()== null || leitor.getCep().isEmpty()){
            throw new RequisicaoInvalida("Leitor sem CEP");
        }
        
        Leitor leitorsave = leitorDAO.save(leitor);
        return leitorsave;
    }

    /*
    ATUALIZAR OS DADOS DE ALGUM LEITOR
    */
    
    @RequestMapping(path = "/leitores/{id}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Leitor atualizar(@PathVariable int id,  @RequestBody Leitor leitor) {
        if(!leitorDAO.existsById(id)) {
            throw new NaoEncontrado("Id não encontrada");
        }
        
        leitor.setId(id);
        
        if(leitor.getNome() == null || leitor.getNome().isEmpty()){
            throw new RequisicaoInvalida("Leitor sem nome");
        }
        
        if(leitor.getTelefone()== null || leitor.getTelefone().isEmpty()){
            throw new RequisicaoInvalida("Leitor sem telefone");
        }
        
        if(leitor.getEndereco()== null || leitor.getEndereco().isEmpty()){
            throw new RequisicaoInvalida("Leitor sem endereço");
        }
        
        if(leitor.getCidade()== null || leitor.getCidade().isEmpty()){
            throw new RequisicaoInvalida("Leitor sem Cidade ");
        }
        
        if(leitor.getEstado()== null || leitor.getEstado().isEmpty()){
            throw new RequisicaoInvalida("Leitor sem ESTADO");
        }
        
        if(leitor.getCep()== null || leitor.getCep().isEmpty()){
            throw new RequisicaoInvalida("Leitor sem CEP");
        }
        
        Leitor leitorsave = leitorDAO.save(leitor);
        return leitorsave;
    }
    
    @RequestMapping(path = "/leitores/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void apagar(@PathVariable int id) {
        if(!leitorDAO.existsById(id)) {
            throw new NaoEncontrado("Id não encontrada");
        }
        leitorDAO.deleteById(id);
    }
    
    
    /*
    ORDENAÇÃO DA PAGINA
    */

}
