package com.tcc.back.Repository;

import com.tcc.back.Model.Enum.Acao;
import com.tcc.back.Model.Enum.Alerta;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public class AlertaRepository {

    private final JdbcTemplate jdbc;

    public AlertaRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    // Lista todos os alertas salvos já anexando o histórico de ocorrências de cada aluno
    public List<Alerta> getLista() {
        List<Alerta> alertas = jdbc.query(
                "SELECT id, id_aluno, nome_aluno, turma, mensagem, limite_atingido, " +
                        "atrasos_semanal, saidas_semanal, atrasos_mensal, saidas_mensal, data_alerta, lido " +
                        "FROM alerta ORDER BY data_alerta DESC",
                (linha, numero) -> new Alerta(
                        linha.getLong("id"),
                        linha.getLong("id_aluno"),
                        linha.getString("nome_aluno"),
                        linha.getString("turma"),
                        linha.getString("mensagem"),
                        linha.getBoolean("limite_atingido"),
                        linha.getInt("atrasos_semanal"),
                        linha.getInt("saidas_semanal"),
                        linha.getInt("atrasos_mensal"),
                        linha.getInt("saidas_mensal"),
                        linha.getTimestamp("data_alerta") != null ? linha.getTimestamp("data_alerta").toLocalDateTime() : null,
                        linha.getBoolean("lido")
                )
        );

        for (Alerta alerta : alertas) {
            alerta.setHistoricoOcorrencias(buscarHistoricoAluno(alerta.getIdAluno(), 30));
        }
        return alertas;
    }

    // Conta ocorrências (ATRASO ou SAIDA_ANTECIPADA) nos últimos X dias (7 = semanal, 30 = mensal)
    public int contarOcorrenciasPorPeriodo(Long idAluno, String tipoOcorrencia, int dias) {
        Integer total = jdbc.queryForObject(
                "SELECT COUNT(*) FROM acao " +
                        "WHERE id_aluno = ? AND UPPER(tipo_ocorrencia) = UPPER(?) " +
                        "AND data_ocorrencia >= CURRENT_DATE - (? * INTERVAL '1 day')",
                Integer.class,
                idAluno,
                tipoOcorrencia,
                dias
        );
        return total != null ? total : 0;
    }

    // Busca as ocorrências detalhadas do aluno no período para compor o histórico do alerta
    public List<Acao> buscarHistoricoAluno(Long idAluno, int dias) {
        return jdbc.query(
                "SELECT id, id_aluno, id_turma, data_ocorrencia, hora_ocorrencia, tipo_ocorrencia, " +
                        "justificativa, observacao, tipo_documento, imagem_documento, descricao_documento " +
                        "FROM acao " +
                        "WHERE id_aluno = ? AND data_ocorrencia >= CURRENT_DATE - (? * INTERVAL '1 day') " +
                        "ORDER BY data_ocorrencia DESC, hora_ocorrencia DESC",
                (linha, numero) -> new Acao(
                        linha.getLong("id"),
                        linha.getLong("id_aluno"),
                        linha.getLong("id_turma"),
                        linha.getDate("data_ocorrencia") != null ? linha.getDate("data_ocorrencia").toLocalDate() : null,
                        linha.getTime("hora_ocorrencia") != null ? linha.getTime("hora_ocorrencia").toLocalTime() : null,
                        linha.getString("tipo_ocorrencia"),
                        linha.getString("justificativa"),
                        linha.getString("observacao"),
                        linha.getString("tipo_documento"),
                        linha.getBytes("imagem_documento"),
                        linha.getString("descricao_documento")
                ),
                idAluno,
                dias
        );
    }

    // Busca nome e turma do aluno
    public String[] buscarDadosAluno(Long idAluno) {
        List<String[]> dados = jdbc.query(
                "SELECT nome, turma FROM aluno WHERE id = ?",
                (linha, numero) -> new String[]{linha.getString("nome"), linha.getString("turma")},
                idAluno
        );
        return dados.isEmpty() ? new String[]{"Aluno ID " + idAluno, "Sem turma"} : dados.get(0);
    }

    public void salvarAlerta(Alerta alerta) {
        jdbc.update(
                "INSERT INTO alerta (id_aluno, nome_aluno, turma, mensagem, limite_atingido, " +
                        "atrasos_semanal, saidas_semanal, atrasos_mensal, saidas_mensal, data_alerta, lido) " +
                        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                alerta.getIdAluno(),
                alerta.getNomeAluno(),
                alerta.getTurma(),
                alerta.getMensagem(),
                alerta.isLimiteAtingido(),
                alerta.getAtrasosSemanal(),
                alerta.getSaidasAntecipadasSemanal(),
                alerta.getAtrasosMensal(),
                alerta.getSaidasAntecipadasMensal(),
                Timestamp.valueOf(alerta.getDataAlerta() != null ? alerta.getDataAlerta() : LocalDateTime.now()),
                alerta.isLido()
        );
    }

    public String marcarComoLido(Long id) {
        int linhas = jdbc.update("UPDATE alerta SET lido = true WHERE id = ?", id);
        return linhas > 0 ? "Alerta marcado como lido!" : "Alerta não encontrado.";
    }

    public String deleteAlerta(Long id) {
        int linhas = jdbc.update("DELETE FROM alerta WHERE id = ?", id);
        return linhas > 0 ? "Alerta removido com sucesso!" : "Alerta não encontrado.";
    }
}
