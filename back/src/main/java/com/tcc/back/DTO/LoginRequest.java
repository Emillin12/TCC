package com.tcc.back.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record LoginRequest(
        @NotBlank(message = "O e-mail institucional é obrigatório")
        @Email(message = "E-mail inválido")
        String emailInstitucional,

        @NotBlank(message = "A senha é obrigatória")
        String senha
) {
}