package com.example.projet_backend.utilisateur;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

public interface RepositoryUtilisateur extends JpaRepository<BeanUtilisateur, String> {

    @Query(
            value = "SELECT * FROM utilisateur u WHERE u.nom like '%' ?1 '%'",
            nativeQuery = true)
    List<BeanUtilisateur> findByNAme(String name);


    @Query(
            value = "SELECT type_utilisateur FROM utilisateur u WHERE u.adresse_mail =:adresse",
            nativeQuery = true)
    String roleUser(@Param("adresse")String add);


    @Modifying
    @Transactional
    @Query(
            value = "update utilisateur set enabled=0 where adresse_mail= :p ",
            nativeQuery = true)
    void blocage(@Param("p")String p);






    @Query(
            value = "SELECT * FROM utilisateur u WHERE u.type_utilisateur='Client'",
            nativeQuery = true)
    List<BeanUtilisateur> findClinet();




    @Query(
            value = "SELECT * FROM utilisateur u WHERE u.type_utilisateur='Expert'",
            nativeQuery = true)
    List<BeanUtilisateur> findExpert();



    @Query(
            value = "SELECT * FROM utilisateur u WHERE u.type_utilisateur='Technicien'",
            nativeQuery = true)
    List<BeanUtilisateur> findTechnicien();


    @Query(
            value = "SELECT count(*) FROM utilisateur u WHERE u.type_utilisateur='Client'",
            nativeQuery = true)
    int client();


    @Query(
            value = "SELECT count(*) FROM utilisateur u WHERE u.type_utilisateur='Expert'",
            nativeQuery = true)
    int expert();

    @Query(
            value = "SELECT count(*) FROM utilisateur u WHERE u.type_utilisateur='Technicien'",
            nativeQuery = true)
    int Technicien();



    @Query(
            value = "SELECT count(*) FROM utilisateur",
            nativeQuery = true)
    int all();



    @Modifying
    @Transactional
    @Query(
            value = "update utilisateur set nom=:nom , prenom=:prenom , tel=:tel , date_de_naissance=:naissance where adresse_mail=:adresse ",
            nativeQuery = true)
    void modifier(@Param("nom")String nom,@Param("prenom")String prenom,@Param("tel")long tel,@Param("naissance") Date naissance,@Param("adresse")String adresse);




    @Modifying
    @Transactional
    @Query(
            value = "update utilisateur set type_utilisateur=:type_utilisateur , genre=:genre , nom=:nom , prenom=:prenom , tel=:tel , date_de_naissance=:naissance where adresse_mail=:adresse ",
            nativeQuery = true)
    void modifierAdmin(@Param("nom")String nom,@Param("prenom")String prenom,@Param("tel")long tel,@Param("naissance") Date naissance,@Param("type_utilisateur") String type_utilisateur,@Param("genre") String genre,@Param("adresse")String adresse);

}

