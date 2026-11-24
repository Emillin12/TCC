package com.tcc.back.Service;

import com.tcc.back.Model.Enum.Usuario;
import com.tcc.back.Repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuario> listarUsuarios() {
        return usuarioRepository.getLista();
    }

    public String cadastrarUsuario(Usuario usuario) {
        if (usuario.getNome() == null || usuario.getNome().isBlank()) {
            return "O nome do usuário é obrigatório.";
        }
        if (usuario.getEmailInstitucional() == null || usuario.getEmailInstitucional().isBlank()) {
            return "O e-mail institucional é obrigatório.";
        }
        if (usuario.getTurno() == null) {
            return "O turno é obrigatório.";
        }
        return usuarioRepository.addUsuario(usuario);
    }

    public String atualizarUsuario(String nome, Usuario usuarioAtualizado) {
        return usuarioRepository.updateUsuario(nome, usuarioAtualizado);
    }
}
