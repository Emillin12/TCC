package com.tcc.back.Service;

import com.tcc.back.Model.Enum.Acao;
import com.tcc.back.Repository.AcaoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AcaoService {

    private final AcaoRepository acaoRepository;

    public AcaoService(AcaoRepository acaoRepository) {
        this.acaoRepository = acaoRepository;
    }

    public List<Acao> listarAcoes() {
        return acaoRepository.getLista();
    }

    public String registrarAcao(Acao acao) {
        if (acao.getIdAluno() == null) {
            return "O ID do aluno é obrigatório.";
        }
        if (acao.getDataOcorrencia() == null) {
            return "A data da ocorrência é obrigatória.";
        }
        if (acao.getHoraOcorrencia() == null) {
            return "A hora da ocorrência é obrigatória.";
        }
        if (acao.getTipoOcorrencia() == null || acao.getTipoOcorrencia().isBlank()) {
            return "O tipo da ocorrência é obrigatório.";
        }
        return acaoRepository.addAcao(acao);
    }

    public String atualizarAcao(Long id, Acao acaoAtualizada) {
        return acaoRepository.updateAcao(id, acaoAtualizada);
    }

    public String deletarAcao(Long id) {
        return acaoRepository.deleteAcao(id);
    }
}
