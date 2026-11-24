package com.tcc.back.Controller;

import com.tcc.back.Model.Enum.Usuario;
import com.tcc.back.Service.UsuarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    // POST /usuarios/cadastro
    @PostMapping("/cadastro")
    public ResponseEntity<Usuario> cadastrar(@RequestBody Usuario usuario) {
        Usuario criado = usuarioService.cadastrar(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(criado);
    }

    // POST /usuarios/login
    @PostMapping("/login")
    public ResponseEntity<Usuario> login(@RequestBody LoginRequest request) {
        Usuario usuario = usuarioService.login(request.getEmailInstitucional(), request.getSenha());
        return ResponseEntity.ok(usuario);
    }

    // Classe interna só para receber o JSON do login
    public static class LoginRequest {
        private String emailInstitucional;
        private String senha;

        public String getEmailInstitucional() { return emailInstitucional; }
        public void setEmailInstitucional(String emailInstitucional) { this.emailInstitucional = emailInstitucional; }

        public String getSenha() { return senha; }
        public void setSenha(String senha) { this.senha = senha; }
    }
}