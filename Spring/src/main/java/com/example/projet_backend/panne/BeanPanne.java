package com.example.projet_backend.panne;

import javax.persistence.*;

@Table(name="panne")
@Entity
public class BeanPanne {
    @Id
    @GeneratedValue
    private Long id_panne;

    private String date_panne;

    private String description ;


    private String adresse_mail;


    private int id_reponse ;


    private int id_type;


    public Long getId_panne() {
        return id_panne;
    }

    public void setId_panne(Long id_panne) {
        this.id_panne = id_panne;
    }

    public String getDate_panne() {
        return date_panne;
    }

    public void setDate_panne(String date_panne) {
        this.date_panne = date_panne;
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

    public int getId_reponse() {
        return id_reponse;
    }

    public void setId_reponse(int id_reponse) {
        this.id_reponse = id_reponse;
    }

    public int getId_type() {
        return id_type;
    }

    public void setId_type(int id_type) {
        this.id_type = id_type;
    }
}