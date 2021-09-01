package com.example.projet_backend.panne;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;

public interface RepositoryPanne extends JpaRepository<BeanPanne,Long> {


    @Query(
            value = "SELECT * FROM panne p WHERE p.date_panne like CONCAT('%',:date,'%')",
            nativeQuery = true)
    List<BeanPanne> findByDate(@Param("date") String date);






    @Query(
            value = "SELECT * FROM panne p WHERE p.adresse_mail like CONCAT('%',:adresse,'%')",
            nativeQuery = true)
    List<BeanPanne> findByAdresse(@Param("adresse") String adresse);



    @Query(
            value = "SELECT * FROM panne WHERE id_type=0",
            nativeQuery = true)
    List<BeanPanne> findNoType();




    @Query(
            value = "SELECT * FROM panne WHERE id_type=1 and id_reponse=0",
            nativeQuery = true)
    List<BeanPanne> findNoReponse();



    @Query(
            value = "SELECT * FROM panne p WHERE p.adresse_mail like CONCAT('%',:adresse,'%') and id_reponse !=0  ",
            nativeQuery = true)
    List<BeanPanne> findBytraitee(@Param("adresse") String adresse);




    @Query(
            value = "SELECT * FROM panne p WHERE p.adresse_mail like CONCAT('%',:adresse,'%') and id_reponse =0  ",
            nativeQuery = true)
    List<BeanPanne> findByNOtraitee(@Param("adresse") String adresse);


    @Query(
            value = "SELECT * FROM panne p WHERE id_type =0  ",
            nativeQuery = true)
    List<BeanPanne> panneExpert();


    @Query(
            value = "SELECT * FROM panne p WHERE id_type !=0 and id_reponse=0   ",
            nativeQuery = true)
    List<BeanPanne> panneTechnicien();


    @Query(
            value = "SELECT count(*) FROM panne",
            nativeQuery = true)
    int All();

    @Query(
            value = "SELECT count(*) FROM reponse r where adresse_mail=:user",
            nativeQuery = true)
    int user(@Param("user")String adresse);


    @Modifying
    @Transactional
    @Query(
            value = "delete from type_panne where id_panne=:panne ",
            nativeQuery = true)
    void deletetype(@Param("panne")Long panne);


    @Modifying
    @Transactional
    @Query(
            value = "delete from reponse where id_panne=:panne ",
            nativeQuery = true)
    void reponse(@Param("panne")Long panne);


    @Modifying
    @Transactional
    @Query(
            value = "update panne set description=:description where id_panne=:panne ",
            nativeQuery = true)
    void modifierDemande(@Param("description")String description,@Param("panne")Long panne);

}
