package com.tcc.back.Repository;

import com.tcc.back.Model.Enum.Acao;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

// Acao = tabela "ocorrencias" + o anexo dela em "anexos"
@Repository
public class AcaoRepository {

    private final JdbcTemplate jdbc;

    public AcaoRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public List<Acao> getLista() {
        return jdbc.query(
                "SELECT o.id, o.id_aluno, o.id_turma, o.data_ocorrencia, o.hora_ocorrencia, o.tipo_ocorrencia, " +
                        "o.justificativa, o.observacao, a.tipo_documento, a.imagem_documento, a.descricao_documento " +
                        "FROM ocorrencias o " +
                        "LEFT JOIN anexos a ON a.id_ocorrencia = o.id " +
                        "ORDER BY o.data_ocorrencia DESC, o.hora_ocorrencia DESC",
                (linha, numero) -> new Acao(
                        linha.getLong("id"),
                        linha.getLong("id_aluno"),
                        linha.getObject("id_turma", Long.class),
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

    @Transactional
    public String addAcao(Acao acao) {
        Long id = jdbc.queryForObject(
                "INSERT INTO ocorrencias (id_aluno, id_turma, data_ocorrencia, hora_ocorrencia, " +
                        "tipo_ocorrencia, justificativa, observacao) " +
                        "VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING id",
                Long.class,
                acao.getIdAluno(),
                acao.getIdTurma(),
                acao.getDataOcorrencia() != null ? Date.valueOf(acao.getDataOcorrencia()) : null,
                acao.getHoraOcorrencia() != null ? Time.valueOf(acao.getHoraOcorrencia()) : null,
                acao.getTipoOcorrencia(),
                acao.getJustificativa(),
                acao.getObservacao()
        );
        salvarAnexo(id, acao);
        return "Registro de ocorrência salvo com sucesso!";
    }

    @Transactional
    public String updateAcao(Long id, Acao acaoAtualizada) {
        int linhas = jdbc.update(
                "UPDATE ocorrencias SET id_aluno = ?, id_turma = ?, data_ocorrencia = ?, " +
                        "hora_ocorrencia = ?, tipo_ocorrencia = ?, justificativa = ?, observacao = ? " +
                        "WHERE id = ?",
                acaoAtualizada.getIdAluno(),
                acaoAtualizada.getIdTurma(),
                acaoAtualizada.getDataOcorrencia() != null ? Date.valueOf(acaoAtualizada.getDataOcorrencia()) : null,
                acaoAtualizada.getHoraOcorrencia() != null ? Time.valueOf(acaoAtualizada.getHoraOcorrencia()) : null,
                acaoAtualizada.getTipoOcorrencia(),
                acaoAtualizada.getJustificativa(),
                acaoAtualizada.getObservacao(),
                id
        );
        if (linhas == 0) {
            return "Ocorrência não encontrada.";
        }
        jdbc.update("DELETE FROM anexos WHERE id_ocorrencia = ?", id);
        salvarAnexo(id, acaoAtualizada);
        return "Ocorrência atualizada com sucesso!";
    }

    // O anexo é apagado junto pelo ON DELETE CASCADE do banco
    public String deleteAcao(Long id) {
        int linhas = jdbc.update("DELETE FROM ocorrencias WHERE id = ?", id);
        return linhas > 0 ? "Ocorrência removida com sucesso!" : "Ocorrência não encontrada.";
    }

    // Só grava o anexo se a ocorrência veio com algum dado de documento
    private void salvarAnexo(Long idOcorrencia, Acao acao) {
        if (acao.getTipoDocumento() == null && acao.getImagemDocumento() == null && acao.getDescricaoDocumento() == null) {
            return;
        }
        jdbc.update(
                "INSERT INTO anexos (id_ocorrencia, tipo_documento, imagem_documento, descricao_documento) " +
                        "VALUES (?, ?, ?, ?)",
                idOcorrencia,
                acao.getTipoDocumento(),
                acao.getImagemDocumento(),
                acao.getDescricaoDocumento()
        );
    }
}
