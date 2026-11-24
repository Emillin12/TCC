package com.tcc.back.Model.Enum;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Enumerated(EnumType.STRING)
    private Turno turno;

    @Column(name = "email_institucional", unique = true)
    private String emailInstitucional;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String senha;

    @Column(unique = true)
    private String masp;

    public Usuario() {
    }

    public Usuario(Long id, String nome, String masp, String emailInstitucional, Turno turno, String senha) {
        this.id = id;
        this.nome = nome;
        this.masp = masp;
        this.emailInstitucional = emailInstitucional;
        this.turno = turno;
        this.senha = senha;
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

    public Turno getTurno() {
        return turno;
    }

    public void setTurno(Turno turno) {
        this.turno = turno;
    }

    public String getEmailInstitucional() {
        return emailInstitucional;
    }

    public void setEmailInstitucional(String emailInstitucional) {
        this.emailInstitucional = emailInstitucional;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getMasp() {
        return masp;
    }

    public void setMasp(String masp) {
        this.masp = masp;
    }
}