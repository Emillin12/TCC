package com.tcc.back.Repository;

import com.tcc.back.Model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // Método extra útil: busca um usuário pela matrícula dele
    Optional<Usuario> findByMatricula(String matricula);

}



