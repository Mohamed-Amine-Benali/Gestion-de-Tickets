package com.example.projet_backend.type_panne;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface RepositoryType extends JpaRepository<BeanType,Long> {

    @Query(
            value = "SELECT * FROM type_panne t WHERE t.type_probleme like CONCAT('%',:prob,'%')",
            nativeQuery = true)
    List<BeanType> findByProbleme (@Param("prob") String prob);


    @Query(
            value = "SELECT * FROM type_panne t WHERE t.type_panne like CONCAT('%',:panne,'%')",
            nativeQuery = true)
    List<BeanType> findByPanne(@Param("panne") String panne);


    @Query(
            value = "SELECT * FROM type_panne t WHERE t.type_equipement like CONCAT('%',:equipement,'%')",
            nativeQuery = true)
    List<BeanType> findByEquipement(@Param("equipement") String equipement);



    @Modifying
    @Transactional
    @Query(
            value = "update panne set id_type=:type where id_panne=:panne ",
            nativeQuery = true)
    void PanneType(@Param("type")long id_t,@Param("panne")long id_p);


    @Modifying
    @Transactional
    @Query(
            value = "update panne set id_type=0 where id_type=:id ",
            nativeQuery = true)
    void supprimer(@Param("id")Long id);



    @Query(
            value = "SELECT * FROM type_panne t WHERE t.adresse=:adresse",
            nativeQuery = true)
    List<BeanType> findAllExpert (@Param("adresse") String adresse);



    @Query(
            value = "SELECT count(*) FROM type_panne r where adresse=:expert",
            nativeQuery = true)
    long statExpert(@Param("expert")String expert);

    @Query(
            value = "SELECT count(*) FROM type_panne",
            nativeQuery = true)
    long statTypes();
}

