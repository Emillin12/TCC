package com.tcc.back.Controller;

import com.tcc.back.Model.Enum.Acao;
import com.tcc.back.Service.AcaoService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("/acoes")
@CrossOrigin(origins = "*")
public class AcaoController {

    private final AcaoService acaoService;

    public AcaoController(AcaoService acaoService) {
        this.acaoService = acaoService;
    }

    @GetMapping
    public List<Acao> listar() {
        return acaoService.listarAcoes();
    }

    // Cadastro com upload de arquivo de imagem (form-data)
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String registrarComAnexo(
            @RequestParam("idAluno") Long idAluno,
            @RequestParam(value = "idTurma", required = false) Long idTurma,
            @RequestParam("dataOcorrencia") String dataOcorrencia,
            @RequestParam("horaOcorrencia") String horaOcorrencia,
            @RequestParam("tipoOcorrencia") String tipoOcorrencia,
            @RequestParam(value = "justificativa", required = false) String justificativa,
            @RequestParam(value = "observacao", required = false) String observacao,
            @RequestParam(value = "tipoDocumento", required = false) String tipoDocumento,
            @RequestParam(value = "imagemDocumento", required = false) MultipartFile imagemDocumento,
            @RequestParam(value = "descricaoDocumento", required = false) String descricaoDocumento
    ) throws IOException {

        byte[] bytesImagem = (imagemDocumento != null && !imagemDocumento.isEmpty())
                ? imagemDocumento.getBytes()
                : null;

        Acao acao = new Acao(
                null,
                idAluno,
                idTurma,
                LocalDate.parse(dataOcorrencia),
                LocalTime.parse(horaOcorrencia),
                tipoOcorrencia,
                justificativa,
                observacao,
                tipoDocumento,
                bytesImagem,
                descricaoDocumento
        );

        return acaoService.registrarAcao(acao);
    }

    // Cadastro via JSON (quando não houver upload de arquivo)
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public String registrarJson(@RequestBody Acao acao) {
        return acaoService.registrarAcao(acao);
    }

    @PutMapping("/{id}")
    public String atualizar(@PathVariable Long id, @RequestBody Acao acaoAtualizada) {
        return acaoService.atualizarAcao(id, acaoAtualizada);
    }

    @DeleteMapping("/{id}")
    public String deletar(@PathVariable Long id) {
        return acaoService.deletarAcao(id);
    }
}