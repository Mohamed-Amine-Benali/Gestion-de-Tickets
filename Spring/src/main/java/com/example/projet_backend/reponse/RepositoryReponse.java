package com.example.projet_backend.reponse;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface RepositoryReponse extends JpaRepository<BeanReponse,Long> {
    @Query(
            value = "SELECT * FROM reponse r WHERE r.id_panne=:id",
            nativeQuery = true)
    Optional<BeanReponse> findByIdDemande(@Param("id") long id);




    @Modifying
    @Transactional
    @Query(
            value = "update panne set id_reponse=:reponse where id_panne=:panne ",
            nativeQuery = true)
    void Id_rep_panne(@Param("panne")Long panne,@Param("reponse")Long reponse);



    @Modifying
    @Transactional
    @Query(
            value = "update panne set id_reponse=0 where id_reponse=:id ",
            nativeQuery = true)
    void delete_panne(@Param("id")Long id);


    @Query(
            value = "SELECT count(*) FROM reponse",
            nativeQuery = true)
    int All();



    @Query(
            value = "SELECT count(*) FROM reponse r where adresse_mail=:user",
            nativeQuery = true)
    int user(@Param("user")String adresse);



    @Query(
            value = "SELECT count(*) FROM reponse r where technicien=:technicien",
            nativeQuery = true)
    int technicien(@Param("technicien")String technicien);
}
