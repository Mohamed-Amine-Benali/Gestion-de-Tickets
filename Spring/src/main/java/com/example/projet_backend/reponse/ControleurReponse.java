package com.example.projet_backend.reponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reponse")
@CrossOrigin(origins ="http://localhost:4200")

public class ControleurReponse {

    @Autowired
    private RepositoryReponse repositoryreponse;

    @PostMapping("/add")
    public void add(@RequestBody BeanReponse rep) {
        Long id=rep.getId_panne();
        LocalDate today = LocalDate.now();
        String t= new String(String.valueOf(today));
        rep.setDate_reponse(t);
        repositoryreponse.save(rep);
        Long reponse=rep.getId_reponse();

        repositoryreponse.Id_rep_panne(id,reponse);


    }

    @GetMapping("/all")
    public List<BeanReponse> Reponces() {
        return repositoryreponse.findAll();

    }

    @GetMapping("/{id_rep}")
    public Optional<BeanReponse> reponce(@PathVariable(value = "id_rep") int rep) {
        return repositoryreponse.findById((long) rep);

    }

    @GetMapping("/demane/{id_rep}")
    public Optional<BeanReponse> demande(@PathVariable(value = "id_rep") long rep) {
        return repositoryreponse.findByIdDemande(rep);

    }

    @DeleteMapping("/supp/{id_rep}")
    public void supprimerReponce(@PathVariable(value = "id_rep") Long id) {

        repositoryreponse.deleteById(id);
        repositoryreponse.delete_panne(id);

    }

    @PutMapping("/update/{id_rep}")
    public void updateReponse(@RequestBody BeanReponse rep) {

        repositoryreponse.save(rep);
    }




    @GetMapping("/stat/{adresse}")
    public Statistique stat(@PathVariable(value = "adresse") String adresse) {
        Statistique s = new Statistique();

        s.setAll(repositoryreponse.All());
        s.setUser(repositoryreponse.user(adresse));

        return s;

    }

    @GetMapping("/stat/technicien/{adresse}")
    public Statistique technicien(@PathVariable(value = "adresse") String adresse) {
        Statistique s = new Statistique();

        s.setAll(repositoryreponse.All());
        s.setUser(repositoryreponse.technicien(adresse));

        return s;

    }



}