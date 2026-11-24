package com.tcc.back.Model.Enum;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class Acao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_aluno")
    private Long idAluno;

    @Column(name = "id_turma")
    private Long idTurma;

    @Column(name = "data_ocorrencia")
    private LocalDate dataOcorrencia;

    @Column(name = "hora_ocorrencia")
    private LocalTime horaOcorrencia;

    @Column(name = "tipo_ocorrencia")
    private String tipoOcorrencia; // "ATRASO" ou "SAIDA_ANTECIPADA"

    private String justificativa;

    private String observacao;

    @Column(name = "tipo_documento")
    private String tipoDocumento;

    @Lob
    @Column(name = "imagem_documento")
    private byte[] imagemDocumento;

    @Column(name = "descricao_documento")
    private String descricaoDocumento;

    public Acao() {
    }

    public Acao(Long id, Long idAluno, Long idTurma, LocalDate dataOcorrencia, LocalTime horaOcorrencia,
                String tipoOcorrencia, String justificativa, String observacao,
                String tipoDocumento, byte[] imagemDocumento, String descricaoDocumento) {
        this.id = id;
        this.idAluno = idAluno;
        this.idTurma = idTurma;
        this.dataOcorrencia = dataOcorrencia;
        this.horaOcorrencia = horaOcorrencia;
        this.tipoOcorrencia = tipoOcorrencia;
        this.justificativa = justificativa;
        this.observacao = observacao;
        this.tipoDocumento = tipoDocumento;
        this.imagemDocumento = imagemDocumento;
        this.descricaoDocumento = descricaoDocumento;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdAluno() {
        return idAluno;
    }

    public void setIdAluno(Long idAluno) {
        this.idAluno = idAluno;
    }

    public Long getIdTurma() {
        return idTurma;
    }

    public void setIdTurma(Long idTurma) {
        this.idTurma = idTurma;
    }

    public LocalDate getDataOcorrencia() {
        return dataOcorrencia;
    }

    public void setDataOcorrencia(LocalDate dataOcorrencia) {
        this.dataOcorrencia = dataOcorrencia;
    }

    public LocalTime getHoraOcorrencia() {
        return horaOcorrencia;
    }

    public void setHoraOcorrencia(LocalTime horaOcorrencia) {
        this.horaOcorrencia = horaOcorrencia;
    }

    public String getTipoOcorrencia() {
        return tipoOcorrencia;
    }

    public void setTipoOcorrencia(String tipoOcorrencia) {
        this.tipoOcorrencia = tipoOcorrencia;
    }

    public String getJustificativa() {
        return justificativa;
    }

    public void setJustificativa(String justificativa) {
        this.justificativa = justificativa;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }

    public String getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(String tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public byte[] getImagemDocumento() {
        return imagemDocumento;
    }

    public void setImagemDocumento(byte[] imagemDocumento) {
        this.imagemDocumento = imagemDocumento;
    }

    public String getDescricaoDocumento() {
        return descricaoDocumento;
    }

    public void setDescricaoDocumento(String descricaoDocumento) {
        this.descricaoDocumento = descricaoDocumento;
    }
}