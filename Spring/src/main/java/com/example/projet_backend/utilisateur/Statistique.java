package com.example.projet_backend.utilisateur;

public class Statistique {
    private int all ;
    private int expert;
    private int technicien;
    private int client ;

    public int getAll() {
        return all;
    }

    public void setAll(int all) {
        this.all = all;
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

    public int getClient() {
        return client;
    }

    public void setClient(int client) {
        this.client = client;
    }
}
