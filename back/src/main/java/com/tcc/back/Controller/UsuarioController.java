package com.tcc.back.Controller;

import com.tcc.back.Model.Enum.Turno;
import com.tcc.back.Service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    // 1. Rota para registrar a ENTRADA do aluno
    @PostMapping("/{id}/entrada")
    public ResponseEntity<String> registrarEntrada(
            @PathVariable Long id,
            @RequestParam Turno turno) {

        String resposta = usuarioService.processarEntrada(id, turno);
        return ResponseEntity.ok(resposta);
    }

    // 2. Rota para registrar a SAÍDA do aluno
    @PostMapping("/{id}/saida")
    public ResponseEntity<String> registrarSaida(
            @PathVariable Long id,
            @RequestParam Turno turno) {

        String resposta = usuarioService.processarSaida(id, turno);
        return ResponseEntity.ok(resposta);
    }
}
