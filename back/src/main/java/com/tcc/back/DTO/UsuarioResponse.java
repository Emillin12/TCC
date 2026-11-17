package com.tcc.back.DTO;

import com.tcc.back.Model.Enum.Turno;
import com.tcc.back.Model.Enum.Usuario;

public record UsuarioResponse(
        Long id,
        String nome,
        Turno turno,
        String emailInstitucional,
        String masp
) {
    public static UsuarioResponse de(Usuario u) {
        return new UsuarioResponse(u.getId(), u.getNome(), u.getTurno(), u.getEmailInstitucional(), u.getMasp());
    }
}