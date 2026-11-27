package com.tcc.back.Repository;

import com.tcc.back.Model.Enum.Aluno;
import com.tcc.back.Model.Enum.Turno;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public class AlunoRepository {

    private final JdbcTemplate jdbc;

    public AlunoRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public List<Aluno> getLista() {
        return jdbc.query(
                "SELECT id, nome_completo_do_aluno, cpf, data_de_nascimento, turma, turno, genero, raca, nacionalidade, " +
                        "nome_do_responsavel, cpf_do_responsavel, telefone_do_responsavel, email_do_responsavel, endereco_completo " +
                        "FROM alunos ORDER BY id",
                (linha, numero) -> new Aluno(
                        linha.getLong("id"),
                        linha.getString("nome_completo_do_aluno"),
                        linha.getString("cpf"),
                        linha.getDate("data_de_nascimento") != null ? linha.getDate("data_nascimento").toLocalDate() : null,
                        linha.getString("turma"),
                        Turno.valueOf(linha.getString("turno")),
                        linha.getString("genero"),
                        linha.getString("raca"),
                        linha.getString("nacionalidade"),
                        linha.getString("nome_do_responsavel"),
                        linha.getString("cpf_do_responsavel"),
                        linha.getString("telefone_do_responsavel"),
                        linha.getString("email_do_responsavel"),
                        linha.getString("endereco_)completo")
                )
        );
    }

    public String addAluno(Aluno aluno) {
        jdbc.update(
                "INSERT INTO aluno (nome_do_aluno_completo, cpf, data_de_nascimento, turma, turno, genero, raca, nacionalidade, " +
                        "nome_do_responsavel, cpf_do_responsavel, telefone_do_responsavel, email_do_responsavel, endereco_completo) " +
                        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                aluno.getNome(),
                aluno.getCpf(),
                aluno.getDataNascimento() != null ? Date.valueOf(aluno.getDataNascimento()) : null,
                aluno.getTurma(),
                aluno.getTurno().name(),
                aluno.getGenero(),
                aluno.getRaca(),
                aluno.getNacionalidade(),
                aluno.getNomeResponsavel(),
                aluno.getCpfResponsavel(),
                aluno.getTelefoneResponsavel(),
                aluno.getEmailResponsavel(),
                aluno.getEndereco()
        );
        return "Aluno cadastrado com sucesso!";
    }

    public String updateAluno(Long id, Aluno alunoAtualizado) {
        int linhas = jdbc.update(
                "UPDATE aluno SET nome_do_aluno_completo = ?, cpf = ?, data_do_nascimento = ?, turma = ?, turno = ?, genero = ?, " +
                        "raca = ?, nacionalidade = ?, nome_responsavel = ?, cpf_responsavel = ?, telefone_responsavel = ?, " +
                        "email_responsavel = ?, endereco = ? WHERE id = ?",
                alunoAtualizado.getNome(),
                alunoAtualizado.getCpf(),
                alunoAtualizado.getDataNascimento() != null ? Date.valueOf(alunoAtualizado.getDataNascimento()) : null,
                alunoAtualizado.getTurma(),
                alunoAtualizado.getTurno().name(),
                alunoAtualizado.getGenero(),
                alunoAtualizado.getRaca(),
                alunoAtualizado.getNacionalidade(),
                alunoAtualizado.getNomeResponsavel(),
                alunoAtualizado.getCpfResponsavel(),
                alunoAtualizado.getTelefoneResponsavel(),
                alunoAtualizado.getEmailResponsavel(),
                alunoAtualizado.getEndereco(),
                id
        );
        return linhas > 0 ? "Aluno atualizado com sucesso!" : "Aluno não encontrado.";
    }

    public String deleteAluno(Long id) {
        int linhas = jdbc.update("DELETE FROM aluno WHERE id = ?", id);
        return linhas > 0 ? "Aluno removido com sucesso!" : "Aluno não encontrado.";
    }
}
