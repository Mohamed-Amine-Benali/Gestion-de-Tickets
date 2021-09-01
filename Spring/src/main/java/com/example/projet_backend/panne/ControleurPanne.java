package com.example.projet_backend.panne;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/panne")
@CrossOrigin(origins ="http://localhost:4200")
public class ControleurPanne {
    @Autowired
    private RepositoryPanne repositoryPanne ;


    @PostMapping("/add")
    public void add(@RequestBody BeanPanne panne) {
        LocalDate today = LocalDate.now();
        String t= new String(String.valueOf(today));
        panne.setDate_panne(t);
        panne.setId_reponse(0);
        panne.setId_reponse(0);


    repositoryPanne.save(panne);
    }




    @GetMapping("/all")
    public List<BeanPanne> Pannes() {
        return repositoryPanne.findAll();

    }


    @GetMapping("/NoType")
    public List<BeanPanne> NoType() {
        return repositoryPanne.findNoType();

    }


    @GetMapping("/NoReponse")
    public List<BeanPanne> NoReponse() {
        return repositoryPanne.findNoReponse();

    }

    @GetMapping("/{id_panne}")
    public Optional<BeanPanne> panne(@PathVariable(value = "id_panne") int panne) {

        return repositoryPanne.findById((long) panne);

    }

    @DeleteMapping("/supp/{id_panne}")
    public void supprimerPanne(@PathVariable(value = "id_panne") Long id) {
        repositoryPanne.deletetype(id);
        repositoryPanne.reponse(id);
        repositoryPanne.deleteById(id);
    }


    @PutMapping("/update/{id_panne}")
    public void updatePanne(@RequestBody BeanPanne panne,@PathVariable(value = "id_panne") Long id) {
String description=panne.getDescription();
        repositoryPanne.modifierDemande(description,id);
    }

    @GetMapping("/date/{date}")
    public List<BeanPanne> DatePanne(@PathVariable(value = "date") String date) {
        return repositoryPanne.findByDate(date);
    }

    @GetMapping("/adresse/{adresse}")
    public List<BeanPanne> AdressePanne(@PathVariable(value = "adresse") String adresse) {
        return repositoryPanne.findByAdresse(adresse);
    }

    @GetMapping("/traitee/{adresse}")
    public List<BeanPanne> traitee(@PathVariable(value = "adresse") String adresse) {
        return repositoryPanne.findBytraitee(adresse);
    }


    @GetMapping("/notraitee/{adresse}")
    public List<BeanPanne> notraitee(@PathVariable(value = "adresse") String adresse) {
        return repositoryPanne.findByNOtraitee(adresse);
    }


    @GetMapping("/expert")
    public List<BeanPanne> Expert() {
        return repositoryPanne.panneExpert();
    }



    @GetMapping("/technicien")
    public List<BeanPanne> technicien() {
        return repositoryPanne.panneTechnicien();
    }



    @GetMapping("/stat/{adresse}")
    public Statistique stat(@PathVariable(value = "adresse") String adresse) {
        Statistique s =new Statistique();
        s.setAll(repositoryPanne.All());
        s.setUser(repositoryPanne.user(adresse));
        return s;
    }

}