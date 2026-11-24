package com.tcc.back.Repository;

import com.tcc.back.Model.Enum.Acao;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

@Repository
public class AcaoRepository {

    private final JdbcTemplate jdbc;

    public AcaoRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public List<Acao> getLista() {
        return jdbc.query(
                "SELECT id, id_aluno, id_turma, data_ocorrencia, hora_ocorrencia, tipo_ocorrencia, " +
                        "justificativa, observacao, tipo_documento, imagem_documento, descricao_documento " +
                        "FROM acao ORDER BY data_ocorrencia DESC, hora_ocorrencia DESC",
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
                )
        );
    }

    public String addAcao(Acao acao) {
        jdbc.update(
                "INSERT INTO acao (id_aluno, id_turma, data_ocorrencia, hora_ocorrencia, tipo_ocorrencia, " +
                        "justificativa, observacao, tipo_documento, imagem_documento, descricao_documento) " +
                        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                acao.getIdAluno(),
                acao.getIdTurma(),
                acao.getDataOcorrencia() != null ? Date.valueOf(acao.getDataOcorrencia()) : null,
                acao.getHoraOcorrencia() != null ? Time.valueOf(acao.getHoraOcorrencia()) : null,
                acao.getTipoOcorrencia(),
                acao.getJustificativa(),
                acao.getObservacao(),
                acao.getTipoDocumento(),
                acao.getImagemDocumento(),
                acao.getDescricaoDocumento()
        );
        return "Registro de ocorrência salvo com sucesso!";
    }

    public String updateAcao(Long id, Acao acaoAtualizada) {
        int linhas = jdbc.update(
                "UPDATE acao SET id_aluno = ?, id_turma = ?, data_ocorrencia = ?, hora_ocorrencia = ?, " +
                        "tipo_ocorrencia = ?, justificativa = ?, observacao = ?, tipo_documento = ?, " +
                        "imagem_documento = ?, descricao_documento = ? WHERE id = ?",
                acaoAtualizada.getIdAluno(),
                acaoAtualizada.getIdTurma(),
                acaoAtualizada.getDataOcorrencia() != null ? Date.valueOf(acaoAtualizada.getDataOcorrencia()) : null,
                acaoAtualizada.getHoraOcorrencia() != null ? Time.valueOf(acaoAtualizada.getHoraOcorrencia()) : null,
                acaoAtualizada.getTipoOcorrencia(),
                acaoAtualizada.getJustificativa(),
                acaoAtualizada.getObservacao(),
                acaoAtualizada.getTipoDocumento(),
                acaoAtualizada.getImagemDocumento(),
                acaoAtualizada.getDescricaoDocumento(),
                id
        );
        return linhas > 0 ? "Ocorrência atualizada com sucesso!" : "Ocorrência não encontrada.";
    }

    public String deleteAcao(Long id) {
        int linhas = jdbc.update("DELETE FROM acao WHERE id = ?", id);
        return linhas > 0 ? "Ocorrência removida com sucesso!" : "Ocorrência não encontrada.";
    }
}
