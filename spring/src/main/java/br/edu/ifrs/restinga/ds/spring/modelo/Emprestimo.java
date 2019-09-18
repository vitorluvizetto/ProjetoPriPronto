/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.edu.ifrs.restinga.ds.spring.modelo;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author 10070232
 */
@Entity
public class Emprestimo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    /*
    Adicionar este numero no banco para na 
    data de entrega ser dataDeRetirada + diasDeEmprestimo
    private int diasDeEmprestimo;
     */

    private String dataDeRetirada;

    private String dataDeEntrega;

    @ManyToOne
    @JoinColumn(name = "emprestimo_nome")
    private Leitor leitor;

    @ManyToOne
    @JoinColumn(name = "emprestimo_titulo")
    private Livro livro;

    @ManyToOne
    @JoinColumn(name = "emprestimo_biblio")
    private Bibliotecario biblio;

    /**
     * @return the id
     */
    public int getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * @return the dataDeRetirada
     */
    public String getDataDeRetirada() {
        return dataDeRetirada;
    }

    /**
     * @param dataDeRetirada the dataDeRetirada to set
     */
    public void setDataDeRetirada(String dataDeRetirada) {
        this.dataDeRetirada = dataDeRetirada;
    }

    /**
     * @return the dataDeEntrega
     */
    public String getDataDeEntrega() {
        return dataDeEntrega;
    }

    /**
     * @param dataDeEntrega the dataDeEntrega to set
     */
    public void setDataDeEntrega(String dataDeEntrega) {
        this.dataDeEntrega = dataDeEntrega;
    }

    /**
     * @return the leitor
     */
    public Leitor getLeitor() {
        return leitor;
    }

    /**
     * @param leitor the leitor to set
     */
    public void setLeitor(Leitor leitor) {
        this.leitor = leitor;
    }

    /**
     * @return the livro
     */
    public Livro getLivro() {
        return livro;
    }

    /**
     * @param livro the livro to set
     */
    public void setLivro(Livro livro) {
        this.livro = livro;
    }

    /**
     * @return the biblio
     */
    public Bibliotecario getBiblio() {
        return biblio;
    }

    /**
     * @param biblio the biblio to set
     */
    public void setBiblio(Bibliotecario biblio) {
        this.biblio = biblio;
    }

}