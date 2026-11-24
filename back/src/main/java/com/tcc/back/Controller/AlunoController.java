package com.tcc.back.Controller;

import com.tcc.back.Model.Enum.Aluno;
import com.tcc.back.Service.AlunoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alunos")
@CrossOrigin(origins = "*")
public class AlunoController {

    private final AlunoService alunoService;

    public AlunoController(AlunoService alunoService) {
        this.alunoService = alunoService;
    }

    @GetMapping
    public List<Aluno> listar() {
        return alunoService.listarAlunos();
    }

    @PostMapping
    public String cadastrar(@RequestBody Aluno aluno) {
        return alunoService.cadastrarAluno(aluno);
    }

    @PutMapping("/{id}")
    public String atualizar(@PathVariable Long id, @RequestBody Aluno alunoAtualizado) {
        return alunoService.atualizarAluno(id, alunoAtualizado);
    }

    @DeleteMapping("/{id}")
    public String deletar(@PathVariable Long id) {
        return alunoService.deletarAluno(id);
    }
}
