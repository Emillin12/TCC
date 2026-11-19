package com.tcc.back.Service;

import com.tcc.back.Model.Enum.Usuario;
import com.tcc.back.Repository.UsuarioRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public Usuario cadastrar(Usuario usuario) {
        if (vazio(usuario.getNome()) || usuario.getTurno() == null
                || vazio(usuario.getEmailInstitucional())
                || vazio(usuario.getSenha()) || vazio(usuario.getMasp())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Preencha todos os campos");
        }

        String email = usuario.getEmailInstitucional().trim().toLowerCase();

        if (usuarioRepository.existsByEmailInstitucional(email)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "E-mail institucional já cadastrado");
        }
        if (usuarioRepository.existsByMasp(usuario.getMasp().trim())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "MASP já cadastrado");
        }

        usuario.setId(null);
        usuario.setNome(usuario.getNome().trim());
        usuario.setEmailInstitucional(email);
        usuario.setMasp(usuario.getMasp().trim());
        usuario.setSenha(hash(usuario.getSenha()));

        return usuarioRepository.save(usuario);
    }

    public Usuario login(String emailInstitucional, String senha) {
        if (vazio(emailInstitucional) || vazio(senha)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Informe e-mail e senha");
        }

        Usuario usuario = usuarioRepository
                .findByEmailInstitucional(emailInstitucional.trim().toLowerCase())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "E-mail ou senha inválidos"));

        if (!usuario.getSenha().equals(hash(senha))) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "E-mail ou senha inválidos");
        }
        return usuario;
    }

    private boolean vazio(String s) {
        return s == null || s.trim().isEmpty();
    }

    // SHA-256 (sem dependências extras). Para produção, o ideal é BCrypt.
    private String hash(String senha) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] bytes = md.digest(senha.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (byte b : bytes) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }
}