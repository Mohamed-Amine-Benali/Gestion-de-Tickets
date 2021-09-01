package com.example.projet_backend.type_panne;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/type_panne")
@CrossOrigin(origins ="http://localhost:4200")

public class ControleurType {

    @Autowired
    private RepositoryType repositoryType;


    @PostMapping("/add")
    public void add(@RequestBody BeanType id_type) {
        LocalDate today = LocalDate.now();
        String t= new String(String.valueOf(today));
        id_type.setDate(t);
        repositoryType.save(id_type);
        long id_t=id_type.getId_type();
       long id_p=id_type.getId_panne();

        repositoryType.PanneType(id_t,id_p);




    }


    @GetMapping("/all")
    public List<BeanType> Types() {
        return repositoryType.findAll();

    }
    @GetMapping("/expert/{adresse}")
    public List<BeanType> TypesExpert(@PathVariable(value = "adresse") String adresse) {
        return repositoryType.findAllExpert(adresse);

    }

    @GetMapping("/{id_type}")
    public Optional<BeanType> type(@PathVariable(value = "id_type") int type) {
        return repositoryType.findById((long) type);

    }

    @DeleteMapping("/supp/{id_type}")
    public void supprimerType(@PathVariable(value = "id_type") Long id) {

        repositoryType.deleteById(id);

        repositoryType.supprimer(id);

    }

    @PutMapping("/update/{id_type}")
    public void updateType(@RequestBody BeanType id) {

        repositoryType.save(id);
    }

    @GetMapping("/probleme/{prob}")
    public List<BeanType> problemes(@PathVariable(value = "prob") String prob) {
        return repositoryType.findByProbleme(prob);
    }

    @GetMapping("/panne/{panne}")
    public List<BeanType> panne(@PathVariable(value = "panne") String panne) {
        return repositoryType.findByPanne(panne);
    }


    @GetMapping("/type_equipement/{equipement}")
    public List<BeanType> equipement(@PathVariable(value = "equipement") String equipement) {
        return repositoryType.findByEquipement(equipement);
    }


    @GetMapping("/stat/expert/{adresse}")
    public Statistique stat(@PathVariable(value = "adresse") String adresse) {
        Statistique s =new Statistique();
        s.setExpert(repositoryType.statExpert(adresse));
        s.setTypes(repositoryType.statTypes());
        return s;
    }

}
