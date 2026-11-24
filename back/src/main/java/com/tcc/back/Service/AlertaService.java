package com.tcc.back.Service;

import com.tcc.back.Model.Enum.Alerta;
import com.tcc.back.Repository.AlertaRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AlertaService {

    private static final int LIMITE_ATRASOS_SEMANAL = 3;
    private static final int LIMITE_ATRASOS_MENSAL = 5;

    private final AlertaRepository alertaRepository;

    public AlertaService(AlertaRepository alertaRepository) {
        this.alertaRepository = alertaRepository;
    }

    public List<Alerta> listarAlertas() {
        return alertaRepository.getLista();
    }

    // Monta o painel completo de Alerta do aluno (semanal + mensal + histórico)
    public Alerta montarPainelAlertaAluno(Long idAluno) {
        String[] dadosAluno = alertaRepository.buscarDadosAluno(idAluno);
        String nomeAluno = dadosAluno[0];
        String turma = dadosAluno[1];

        int atrasosSemanal = alertaRepository.contarOcorrenciasPorPeriodo(idAluno, "ATRASO", 7);
        int saidasSemanal = alertaRepository.contarOcorrenciasPorPeriodo(idAluno, "SAIDA_ANTECIPADA", 7);
        int atrasosMensal = alertaRepository.contarOcorrenciasPorPeriodo(idAluno, "ATRASO", 30);
        int saidasMensal = alertaRepository.contarOcorrenciasPorPeriodo(idAluno, "SAIDA_ANTECIPADA", 30);

        boolean atingiuLimite = (atrasosSemanal >= LIMITE_ATRASOS_SEMANAL) || (atrasosMensal >= LIMITE_ATRASOS_MENSAL);

        String mensagem;
        if (atingiuLimite) {
            mensagem = "ALERTA: O aluno " + nomeAluno + " atingiu o limite de atrasos (" +
                    atrasosSemanal + " na semana / " + atrasosMensal + " no mês).";
        } else {
            mensagem = "Frequência regular: " + atrasosSemanal + " atraso(s) na semana e " +
                    atrasosMensal + " no mês.";
        }

        Alerta alerta = new Alerta(
                null,
                idAluno,
                nomeAluno,
                turma,
                mensagem,
                atingiuLimite,
                atrasosSemanal,
                saidasSemanal,
                atrasosMensal,
                saidasMensal,
                LocalDateTime.now(),
                false
        );

        alerta.setHistoricoOcorrencias(alertaRepository.buscarHistoricoAluno(idAluno, 30));
        return alerta;
    }

    // Verifica e salva no banco caso o aluno tenha atingido o limite de atrasos
    public String verificarEGerarAlerta(Long idAluno) {
        Alerta alerta = montarPainelAlertaAluno(idAluno);

        if (alerta.isLimiteAtingido()) {
            alertaRepository.salvarAlerta(alerta);
        }

        return alerta.getMensagem();
    }

    public String marcarComoLido(Long id) {
        return alertaRepository.marcarComoLido(id);
    }

    public String deletarAlerta(Long id) {
        return alertaRepository.deleteAlerta(id);
    }
}
