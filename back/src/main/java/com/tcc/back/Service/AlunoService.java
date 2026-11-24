package com.tcc.back.Service;

import com.tcc.back.Model.Enum.Aluno;
import com.tcc.back.Repository.AlunoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlunoService {

    private final AlunoRepository alunoRepository;

    public AlunoService(AlunoRepository alunoRepository) {
        this.alunoRepository = alunoRepository;
    }

    public List<Aluno> listarAlunos() {
        return alunoRepository.getLista();
    }

    public String cadastrarAluno(Aluno aluno) {
        if (aluno.getNome() == null || aluno.getNome().isBlank()) {
            return "O nome do aluno é obrigatório.";
        }
        if (aluno.getCpf() == null || aluno.getCpf().isBlank()) {
            return "O CPF do aluno é obrigatório.";
        }
        if (aluno.getTurno() == null) {
            return "O turno é obrigatório.";
        }
        if (aluno.getNomeResponsavel() == null || aluno.getNomeResponsavel().isBlank()) {
            return "O nome do responsável é obrigatório.";
        }
        return alunoRepository.addAluno(aluno);
    }

    public String atualizarAluno(Long id, Aluno alunoAtualizado) {
        return alunoRepository.updateAluno(id, alunoAtualizado);
    }

    public String deletarAluno(Long id) {
        return alunoRepository.deleteAluno(id);
    }
}

