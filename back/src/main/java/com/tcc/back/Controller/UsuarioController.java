package com.tcc.back.Controller;

import com.tcc.back.Model.Enum.Usuario;
import com.tcc.back.Service.UsuarioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public List<Usuario> listar() {
        return usuarioService.listarUsuarios();
    }

    @PostMapping
    public String cadastrar(@RequestBody Usuario usuario) {
        return usuarioService.cadastrarUsuario(usuario);
    }

    @PutMapping("/{nome}")
    public String atualizar(@PathVariable String nome, @RequestBody Usuario usuarioAtualizado) {
        return usuarioService.atualizarUsuario(nome, usuarioAtualizado);
    }
}