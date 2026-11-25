package com.tcc.back.Controller;

import com.tcc.back.Model.Enum.Turma;
import com.tcc.back.Service.TurmaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/turmas")
@CrossOrigin(origins = "*")
public class TurmaController {

    private final TurmaService turmaService;

    public TurmaController(TurmaService turmaService) {
        this.turmaService = turmaService;
    }

    @GetMapping
    public List<Turma> listar() {
        return turmaService.listarTurmas();
    }

    @PostMapping
    public String cadastrar(@RequestBody Turma turma) {
        return turmaService.cadastrarTurma(turma);
    }

    @PutMapping("/{id}")
    public String atualizar(@PathVariable Long id, @RequestBody Turma turmaAtualizada) {
        return turmaService.atualizarTurma(id, turmaAtualizada);
    }

    @DeleteMapping("/{id}")
    public String deletar(@PathVariable Long id) {
        return turmaService.deletarTurma(id);
    }
}