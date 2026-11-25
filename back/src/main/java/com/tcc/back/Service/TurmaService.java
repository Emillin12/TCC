package com.tcc.back.Service;

import com.tcc.back.Model.Enum.Turma;
import com.tcc.back.Repository.TurmaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TurmaService {

    private final TurmaRepository turmaRepository;

    public TurmaService(TurmaRepository turmaRepository) {
        this.turmaRepository = turmaRepository;
    }

    public List<Turma> listarTurmas() {
        return turmaRepository.getLista();
    }

    public String cadastrarTurma(Turma turma) {
        if (turma.getNome() == null || turma.getNome().isBlank()) {
            return "O nome da turma é obrigatório.";
        }
        if (turma.getSerie() == null || turma.getSerie().isBlank()) {
            return "A série da turma é obrigatória.";
        }
        if (turma.getTurno() == null) {
            return "O turno da turma é obrigatório.";
        }
        return turmaRepository.addTurma(turma);
    }

    public String atualizarTurma(Long id, Turma turmaAtualizada) {
        return turmaRepository.updateTurma(id, turmaAtualizada);
    }

    public String deletarTurma(Long id) {
        return turmaRepository.deleteTurma(id);
    }
}
