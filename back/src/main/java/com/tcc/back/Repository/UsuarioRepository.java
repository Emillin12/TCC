package com.tcc.back.Repository;

import com.tcc.back.Model.Enum.Turno;
import com.tcc.back.Model.Enum.Usuario;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UsuarioRepository {

    private final JdbcTemplate jdbc;

    public UsuarioRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public List<Usuario> getLista() {
        return jdbc.query(
                "SELECT id, nome, masp, email_institucional, turno, senha FROM usuario ORDER BY id",
                (linha, numero) -> new Usuario(
                        linha.getLong("id"),
                        linha.getString("nome"),
                        linha.getString("masp"),
                        linha.getString("email_institucional"),
                        Turno.valueOf(linha.getString("turno")),
                        linha.getString("senha")
                )
        );
    }

    public String addUsuario(Usuario usuario) {
        jdbc.update(
                "INSERT INTO usuario (nome, masp, email_institucional, turno, senha) VALUES (?, ?, ?, ?, ?)",
                usuario.getNome(),
                usuario.getMasp(),
                usuario.getEmailInstitucional(),
                usuario.getTurno().name(),
                usuario.getSenha()
        );
        return "Deu certo!";
    }

    public String updateUsuario(String nome, Usuario usuarioAtualizado) {
        int linhas = jdbc.update(
                "UPDATE usuario SET nome = ?, masp = ?, email_institucional = ?, turno = ?, senha = ? WHERE LOWER(nome) = LOWER(?)",
                usuarioAtualizado.getNome(),
                usuarioAtualizado.getMasp(),
                usuarioAtualizado.getEmailInstitucional(),
                usuarioAtualizado.getTurno().name(),
                usuarioAtualizado.getSenha(),
                nome
        );
        return linhas > 0 ? "Usuário atualizado com sucesso!" : "Usuário não encontrado.";
    }
}