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
                "SELECT id, nome, cpf, data_nascimento, turma, turno, genero, raca, nacionalidade, " +
                        "nome_responsavel, cpf_responsavel, telefone_responsavel, email_responsavel, endereco " +
                        "FROM alunos ORDER BY id",
                (linha, numero) -> new Aluno(
                        linha.getLong("id"),
                        linha.getString("nome"),
                        linha.getString("cpf"),
                        linha.getDate("data_nascimento") != null ? linha.getDate("data_nascimento").toLocalDate() : null,
                        linha.getString("turma"),
                        Turno.valueOf(linha.getString("turno")),
                        linha.getString("genero"),
                        linha.getString("raca"),
                        linha.getString("nacionalidade"),
                        linha.getString("nome_responsavel"),
                        linha.getString("cpf_responsavel"),
                        linha.getString("telefone_responsavel"),
                        linha.getString("email_responsavel"),
                        linha.getString("endereco")
                )
        );
    }

    public String addAluno(Aluno aluno) {
        jdbc.update(
                "INSERT INTO alunos (nome, cpf, data_nascimento, turma, turno, genero, raca, nacionalidade, " +
                        "nome_responsavel, cpf_responsavel, telefone_responsavel, email_responsavel, endereco) " +
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
                "UPDATE alunos SET nome = ?, cpf = ?, data_nascimento = ?, turma = ?, turno = ?, genero = ?, " +
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
        int linhas = jdbc.update("DELETE FROM alunos WHERE id = ?", id);
        return linhas > 0 ? "Aluno removido com sucesso!" : "Aluno não encontrado.";
    }
}
