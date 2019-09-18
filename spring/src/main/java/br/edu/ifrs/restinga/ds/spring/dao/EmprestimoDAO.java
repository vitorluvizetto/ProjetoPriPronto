/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.edu.ifrs.restinga.ds.spring.dao;

import br.edu.ifrs.restinga.ds.spring.modelo.Emprestimo;
import br.edu.ifrs.restinga.ds.spring.modelo.Leitor;
import br.edu.ifrs.restinga.ds.spring.modelo.Livro;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author 10070232
 */
@Repository
public interface EmprestimoDAO extends CrudRepository<Emprestimo, Integer> {
    

}

