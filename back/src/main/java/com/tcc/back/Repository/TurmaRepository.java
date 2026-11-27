package com.tcc.back.Repository;

import com.tcc.back.Model.Enum.Turma;
import com.tcc.back.Model.Enum.Turno;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TurmaRepository {

    private final JdbcTemplate jdbc;

    public TurmaRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public List<Turma> getLista() {
        return jdbc.query(
                "SELECT id, nome, serie, turno, ano_letivo FROM turmas ORDER BY serie, nome",
                (linha, numero) -> new Turma(
                        linha.getLong("id"),
                        linha.getString("nome"),
                        linha.getString("serie"),
                        Turno.valueOf(linha.getString("turno")),
                        linha.getObject("ano_letivo", Integer.class)
                )
        );
    }

    public String addTurma(Turma turma) {
        jdbc.update(
                "INSERT INTO turmas (nome, serie, turno, ano_letivo) VALUES (?, ?, ?, ?)",
                turma.getNome(),
                turma.getSerie(),
                turma.getTurno().name(),
                turma.getAnoLetivo()
        );
        return "Turma cadastrada com sucesso!";
    }

    public String updateTurma(Long id, Turma turmaAtualizada) {
        int linhas = jdbc.update(
                "UPDATE turmas SET nome = ?, serie = ?, turno = ?, ano_letivo = ? WHERE id = ?",
                turmaAtualizada.getNome(),
                turmaAtualizada.getSerie(),
                turmaAtualizada.getTurno().name(),
                turmaAtualizada.getAnoLetivo(),
                id
        );
        return linhas > 0 ? "Turma atualizada com sucesso!" : "Turma não encontrada.";
    }

    public String deleteTurma(Long id) {
        int linhas = jdbc.update("DELETE FROM turmas WHERE id = ?", id);
        return linhas > 0 ? "Turma removida com sucesso!" : "Turma não encontrada.";
    }
}
