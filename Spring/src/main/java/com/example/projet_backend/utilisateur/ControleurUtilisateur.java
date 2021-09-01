package com.example.projet_backend.utilisateur;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins ="http://localhost:4200")

public class ControleurUtilisateur {



    @Autowired
    private RepositoryUtilisateur RepositoryUtilisateur;

    @Autowired
    PasswordEncoder passwordEncoder;

    @GetMapping(value = "/")
    public String index(@RequestHeader("Authorization") String authHeader ) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
         authHeader = authentication.getName();
        String role =RepositoryUtilisateur.roleUser(authHeader);




        return role ;
    }

    @GetMapping(value="/logout")
    public void logoutPage(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null){
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }

    }





    @PostMapping("/add")
    public boolean add(@RequestBody BeanUtilisateur utilisateur) {
        boolean vref=RepositoryUtilisateur.existsById(utilisateur.getAdresse_mail());
        if (vref == true)

        { return vref;  }


       else
        {
            utilisateur.setMot_de_passe(passwordEncoder.encode(utilisateur.getMot_de_passe()));

            RepositoryUtilisateur.save(utilisateur);
            return vref;   }



    }


    @GetMapping("/all")
    public List<BeanUtilisateur> users() {
        return RepositoryUtilisateur.findAll();

    }
    @GetMapping("/client")
    public List<BeanUtilisateur> client() {
        return RepositoryUtilisateur.findClinet();

    }

    @GetMapping("/expert")
    public List<BeanUtilisateur> expert() {
        return RepositoryUtilisateur.findExpert();

    }
    @GetMapping("/technicien")
    public List<BeanUtilisateur> technicien() {
        return RepositoryUtilisateur.findTechnicien();

    }


    @GetMapping("/{adresse}")
    public Optional<BeanUtilisateur> user(@PathVariable(value = "adresse") String adresse) {

        return RepositoryUtilisateur.findById(adresse);

    }


    @GetMapping("profil/{adresse}")
    public Optional<BeanUtilisateur> profil(@PathVariable(value = "adresse") String adresse) {

        return RepositoryUtilisateur.findById(adresse);

    }

    @DeleteMapping("/supp/{ad}")
    public String supprimerUtilisateur(@PathVariable(value = "ad") String ad) {

        RepositoryUtilisateur.deleteById(ad);
        return "utilisateur supprimer";
    }


    @GetMapping("/blocage/{adresse}")
    public void blocage(@PathVariable(value = "adresse") String adresse) {
        RepositoryUtilisateur.blocage(adresse);
    }

    @PutMapping("/update/{adresse}")
    public void updateUtilisateur(@RequestBody BeanUtilisateur utilisateur) {
        utilisateur.setMot_de_passe(passwordEncoder.encode(utilisateur.getMot_de_passe()));
        RepositoryUtilisateur.save(utilisateur);
    }


    @PutMapping("/modifier/{adresse}")
    public String modifier(@RequestBody BeanUtilisateur utilisateur,@PathVariable(value = "adresse") String adresse) {
        String nom=utilisateur.getNom();
        String prenom=utilisateur.getPrenom();
        long tel=utilisateur.getTel();
        Date naissance=utilisateur.getDate_de_naissance();

        RepositoryUtilisateur.modifier(nom,prenom,tel,naissance,adresse);

        return"user updated";
    }

    @PutMapping("/admin/modifier/{adresse}")
    public String modifierAdmin(@RequestBody BeanUtilisateur utilisateur,@PathVariable(value = "adresse") String adresse) {
        String nom=utilisateur.getNom();
        String prenom=utilisateur.getPrenom();
        long tel=utilisateur.getTel();
        Date naissance=utilisateur.getDate_de_naissance();
        String genre=utilisateur.getGenre();
        String Role=utilisateur.getType_utilisateur();

        RepositoryUtilisateur.modifierAdmin(nom,prenom,tel,naissance,Role,genre,adresse);

        return"user updated";
    }

    @GetMapping("/exist/{adresse}")
    public boolean  exist(@PathVariable(value = "adresse") String adresse) {
        boolean user= RepositoryUtilisateur.existsById(adresse);
        return user;


    }

    @GetMapping("/name/{name}")
    public List<BeanUtilisateur> UtilisateurNAme(@PathVariable(value = "name") String name) {
        return RepositoryUtilisateur.findByNAme(name);
    }


    @GetMapping("/Stat")
    public Statistique Count() {
        Statistique s =new Statistique();
       s.setClient(RepositoryUtilisateur.client());
       s.setExpert(RepositoryUtilisateur.expert());
        s.setTechnicien(RepositoryUtilisateur.Technicien());
        s.setAll(RepositoryUtilisateur.all());
        return s ;

    }
}

