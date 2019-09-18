/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.edu.ifrs.restinga.ds.spring.dao;

import br.edu.ifrs.restinga.ds.spring.modelo.Livro;
import java.awt.print.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author 10070232
 */

@Repository
public interface LivroDAO extends CrudRepository<Livro, Integer> {
    
    /*
    Para fazer a paginação
    */
    
    Iterable<Livro> findByTitulo(String titulo); 
    
    Iterable<Livro> findByTituloContaining(String titulo);

    
    
}
