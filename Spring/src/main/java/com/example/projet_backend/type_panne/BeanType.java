package com.example.projet_backend.type_panne;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="type_panne")
@Entity
public class BeanType {
    @Id
    @GeneratedValue
    private long id_type;
    private String type_probleme;
    private String type_panne;
    private String type_equipement;
    private String date;
    private String adresse;
    private long id_panne;

    public long getId_type() {
        return id_type;
    }

    public void setId_type(long id_type) {
        this.id_type = id_type;
    }

    public String getType_probleme() {
        return type_probleme;
    }

    public void setType_probleme(String type_probleme) {
        this.type_probleme = type_probleme;
    }

    public String getType_panne() {
        return type_panne;
    }

    public void setType_panne(String type_panne) {
        this.type_panne = type_panne;
    }

    public String getType_equipement() {
        return type_equipement;
    }

    public void setType_equipement(String type_equipement) {
        this.type_equipement = type_equipement;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public long getId_panne() {
        return id_panne;
    }

    public void setId_panne(long id_panne) {
        this.id_panne = id_panne;
    }
}
