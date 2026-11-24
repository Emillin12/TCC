package com.tcc.back.Controller;

import com.tcc.back.Model.Enum.Alerta;
import com.tcc.back.Service.AlertaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alertas")
@CrossOrigin(origins = "*")
public class AlertaController {

    private final AlertaService alertaService;

    public AlertaController(AlertaService alertaService) {
        this.alertaService = alertaService;
    }

    // Retorna todos os alertas gerados com o histórico semanal/mensal de cada aluno
    @GetMapping
    public List<Alerta> listar() {
        return alertaService.listarAlertas();
    }

    // Retorna o objeto Alerta completo de um aluno específico (limite atingido + contadores semanais/mensais + lista de ocorrências)
    @GetMapping("/aluno/{idAluno}")
    public Alerta consultarPorAluno(@PathVariable Long idAluno) {
        return alertaService.montarPainelAlertaAluno(idAluno);
    }

    @PostMapping("/verificar/{idAluno}")
    public String verificarAluno(@PathVariable Long idAluno) {
        return alertaService.verificarEGerarAlerta(idAluno);
    }

    @PutMapping("/{id}/lido")
    public String marcarLido(@PathVariable Long id) {
        return alertaService.marcarComoLido(id);
    }

    @DeleteMapping("/{id}")
    public String deletar(@PathVariable Long id) {
        return alertaService.deletarAlerta(id);
    }
}

