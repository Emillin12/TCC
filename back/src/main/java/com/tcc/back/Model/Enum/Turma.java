package com.tcc.back.Model.Enum;

import jakarta.persistence.*;

@Entity
public class Turma {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome; // Ex: "Turma A", "2º Ano B"

    private String serie; // Ex: "1º Ano", "2º Ano", "3º Ano", "9º Ano"

    @Enumerated(EnumType.STRING)
    private Turno turno;

    @Column(name = "ano_letivo")
    private Integer anoLetivo; // Ex: 2026

    public Turma() {
    }

    public Turma(Long id, String nome, String serie, Turno turno, Integer anoLetivo) {
        this.id = id;
        this.nome = nome;
        this.serie = serie;
        this.turno = turno;
        this.anoLetivo = anoLetivo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSerie() {
        return serie;
    }

    public void setSerie(String serie) {
        this.serie = serie;
    }

    public Turno getTurno() {
        return turno;
    }

    public void setTurno(Turno turno) {
        this.turno = turno;
    }

    public Integer getAnoLetivo() {
        return anoLetivo;
    }

    public void setAnoLetivo(Integer anoLetivo) {
        this.anoLetivo = anoLetivo;
    }
}