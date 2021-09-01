package com.example.projet_backend.utilisateur;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Table(name="utilisateur")
@Entity
public class BeanUtilisateur {
    @Id
    private String adresse_mail;
    private String mot_de_passe;
    private String type_utilisateur;
    private String nom;
    private String prenom;
    private Long tel;
    private Date date_de_naissance ;
    private String genre;
    private boolean enabled;

    public BeanUtilisateur(){

    }

    public String getAdresse_mail() {
        return adresse_mail;
    }

    public void setAdresse_mail(String adresse_mail) {
        this.adresse_mail = adresse_mail;
    }

    public String getMot_de_passe() {
        return mot_de_passe;
    }

    public void setMot_de_passe(String mot_de_passe) {
        this.mot_de_passe = mot_de_passe;
    }

    public String getType_utilisateur() {
        return type_utilisateur;
    }

    public void setType_utilisateur(String type_utilisateur) {
        this.type_utilisateur = type_utilisateur;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public Long getTel() {
        return tel;
    }

    public void setTel(Long tel) {
        this.tel = tel;
    }

    public Date getDate_de_naissance() {
        return date_de_naissance;
    }

    public void setDate_de_naissance(Date date_de_naissance) {
        this.date_de_naissance = date_de_naissance;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public static class BeanStatistique {
        private int all ;
        private int client ;
        private int expert;
        private int technicien ;

        public int getAll() {
            return all;
        }

        public void setAll(int all) {
            this.all = all;
        }

        public int getClient() {
            return client;
        }

        public void setClient(int client) {
            this.client = client;
        }

        public int getExpert() {
            return expert;
        }

        public void setExpert(int expert) {
            this.expert = expert;
        }

        public int getTechnicien() {
            return technicien;
        }

        public void setTechnicien(int technicien) {
            this.technicien = technicien;
        }
    }
}
