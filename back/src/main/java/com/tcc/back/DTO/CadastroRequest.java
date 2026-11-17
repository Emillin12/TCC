package com.tcc.back.DTO;

import com.tcc.back.Model.Enum.Turno;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record CadastroRequest(
        @NotBlank(message = "O nome é obrigatório")
        String nome,

        @NotNull(message = "O turno é obrigatório")
        Turno turno,

        @NotBlank(message = "O e-mail institucional é obrigatório")
        @Email(message = "E-mail inválido")
        String emailInstitucional,

        @NotBlank(message = "A senha é obrigatória")
        @Size(min = 6, message = "A senha deve ter no mínimo 6 caracteres")
        String senha,

        @NotBlank(message = "O MASP é obrigatório")
        String masp
) {
}