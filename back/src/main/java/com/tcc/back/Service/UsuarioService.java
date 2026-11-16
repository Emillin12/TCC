package com.tcc.back.Service;

import com.tcc.back.Model.Usuario;
import com.tcc.back.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Salva um novo usuário no banco
    public Usuario salvar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    // Lista todos os usuários cadastrados
    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    // Busca um usuário pelo ID
    public Optional<Usuario> buscarPorId(Long id) {
        return usuarioRepository.findById(id);
    }
}

