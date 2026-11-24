package com.tcc.back.Repository;

import com.tcc.back.Model.Enum.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmailInstitucional(String emailInstitucional);

    boolean existsByEmailInstitucional(String emailInstitucional);

    boolean existsByMasp(String masp);
}
