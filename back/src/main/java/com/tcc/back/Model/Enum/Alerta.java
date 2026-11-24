package com.tcc.back.Model.Enum;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Alerta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_aluno")
    private Long idAluno;

    @Column(name = "nome_aluno")
    private String nomeAluno;

    private String turma;

    private String mensagem;

    @Column(name = "limite_atingido")
    private boolean limiteAtingido;

    // Totais e frequência semanal (últimos 7 dias)
    @Column(name = "atrasos_semanal")
    private int atrasosSemanal;

    @Column(name = "saidas_semanal")
    private int saidasAntecipadasSemanal;

    // Totais e frequência mensal (últimos 30 dias)
    @Column(name = "atrasos_mensal")
    private int atrasosMensal;

    @Column(name = "saidas_mensal")
    private int saidasAntecipadasMensal;

    @Column(name = "data_alerta")
    private LocalDateTime dataAlerta;

    private boolean lido;

    // Lista das ocorrências recentes (atrasos e saídas antecipadas) para exibir no histórico do front-end
    @Transient
    private List<Acao> historicoOcorrencias;

    public Alerta() {
    }

    public Alerta(Long id, Long idAluno, String nomeAluno, String turma, String mensagem,
                  boolean limiteAtingido, int atrasosSemanal, int saidasAntecipadasSemanal,
                  int atrasosMensal, int saidasAntecipadasMensal, LocalDateTime dataAlerta, boolean lido) {
        this.id = id;
        this.idAluno = idAluno;
        this.nomeAluno = nomeAluno;
        this.turma = turma;
        this.mensagem = mensagem;
        this.limiteAtingido = limiteAtingido;
        this.atrasosSemanal = atrasosSemanal;
        this.saidasAntecipadasSemanal = saidasAntecipadasSemanal;
        this.atrasosMensal = atrasosMensal;
        this.saidasAntecipadasMensal = saidasAntecipadasMensal;
        this.dataAlerta = dataAlerta;
        this.lido = lido;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getIdAluno() { return idAluno; }
    public void setIdAluno(Long idAluno) { this.idAluno = idAluno; }

    public String getNomeAluno() { return nomeAluno; }
    public void setNomeAluno(String nomeAluno) { this.nomeAluno = nomeAluno; }

    public String getTurma() { return turma; }
    public void setTurma(String turma) { this.turma = turma; }

    public String getMensagem() { return mensagem; }
    public void setMensagem(String mensagem) { this.mensagem = mensagem; }

    public boolean isLimiteAtingido() { return limiteAtingido; }
    public void setLimiteAtingido(boolean limiteAtingido) { this.limiteAtingido = limiteAtingido; }

    public int getAtrasosSemanal() { return atrasosSemanal; }
    public void setAtrasosSemanal(int atrasosSemanal) { this.atrasosSemanal = atrasosSemanal; }

    public int getSaidasAntecipadasSemanal() { return saidasAntecipadasSemanal; }
    public void setSaidasAntecipadasSemanal(int saidasAntecipadasSemanal) { this.saidasAntecipadasSemanal = saidasAntecipadasSemanal; }

    public int getAtrasosMensal() { return atrasosMensal; }
    public void setAtrasosMensal(int atrasosMensal) { this.atrasosMensal = atrasosMensal; }

    public int getSaidasAntecipadasMensal() { return saidasAntecipadasMensal; }
    public void setSaidasAntecipadasMensal(int saidasAntecipadasMensal) { this.saidasAntecipadasMensal = saidasAntecipadasMensal; }

    public LocalDateTime getDataAlerta() { return dataAlerta; }
    public void setDataAlerta(LocalDateTime dataAlerta) { this.dataAlerta = dataAlerta; }

    public boolean isLido() { return lido; }
    public void setLido(boolean lido) { this.lido = lido; }

    public List<Acao> getHistoricoOcorrencias() { return historicoOcorrencias; }
    public void setHistoricoOcorrencias(List<Acao> historicoOcorrencias) { this.historicoOcorrencias = historicoOcorrencias; }
}