package com.tcc.back.Controller;

import com.tcc.back.DTO.CadastroRequest;
import com.tcc.back.DTO.LoginRequest;
import com.tcc.back.DTO.UsuarioResponse;
import com.tcc.back.Model.Enum.Usuario;
import com.tcc.back.Service.UsuarioService;
import jakarta.validation.Valid;
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
    public ResponseEntity<UsuarioResponse> cadastrar(@Valid @RequestBody CadastroRequest request) {
        Usuario criado = usuarioService.cadastrar(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(UsuarioResponse.de(criado));
    }

    // POST /usuarios/login
    @PostMapping("/login")
    public ResponseEntity<UsuarioResponse> login(@Valid @RequestBody LoginRequest request) {
        Usuario usuario = usuarioService.login(request);
        return ResponseEntity.ok(UsuarioResponse.de(usuario));
    }
}