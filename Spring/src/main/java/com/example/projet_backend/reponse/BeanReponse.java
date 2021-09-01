package com.example.projet_backend.reponse;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;


@Table(name="reponse")
@Entity

public class BeanReponse {
    @Id
    @GeneratedValue
    private Long id_reponse;
    private String date_reponse;
    private String description;
    private String adresse_mail;
    private String technicien;

    private Long id_panne;
    private Long id_type;


    public Long getId_reponse() {
        return id_reponse;
    }

    public void setId_reponse(Long id_reponse) {
        this.id_reponse = id_reponse;
    }

    public String getDate_reponse() {
        return date_reponse;
    }

    public void setDate_reponse(String date_reponse) {
        this.date_reponse = date_reponse;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAdresse_mail() {
        return adresse_mail;
    }

    public void setAdresse_mail(String adresse_mail) {
        this.adresse_mail = adresse_mail;
    }

    public String getTechnicien() {
        return technicien;
    }

    public void setTechnicien(String technicien) {
        this.technicien = technicien;
    }

    public Long getId_panne() {
        return id_panne;
    }

    public void setId_panne(Long id_panne) {
        this.id_panne = id_panne;
    }

    public Long getId_type() {
        return id_type;
    }

    public void setId_type(Long id_type) {
        this.id_type = id_type;
    }
}