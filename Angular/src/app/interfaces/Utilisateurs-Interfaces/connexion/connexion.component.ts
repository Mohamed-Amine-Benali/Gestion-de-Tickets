import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/apiServices/notification.service';
import { AuthService } from '../../../apiServices/auth.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  adresse_mail: string = '';
  mot_de_passe: string = '';
  test: string = '';

  constructor(private notificationService : NotificationService,private formBuilder: FormBuilder,private router: Router,private service:AuthService ) { }


exist:String='';
  message:String='';
 
  Login() {

    let r = this.service.exist(this.adresse_mail);
    r.subscribe(data => {
      this.exist = String(data);
      if(this.exist=="false"){
       this.notificationService.warn('! Adresse Email Invalid ');
      }});


    let resp = this.service.login(this.adresse_mail, this.mot_de_passe);
    resp.subscribe(data => {
      this.message = String(data);
     
      if (this.message == "Admin") {
         this.router.navigate(["/AdminUsers"]); }
      else if (this.message == "Client") { this.router.navigate(["/ClientProfil"]); }
      else if (this.message == "Expert") { this.router.navigate(["/ExpertProfil"]); }
      else if (this.message == "Technicien") { this.router.navigate(["/TechnicienProfil"]);    }
    
    localStorage.setItem('Email', this.adresse_mail);
    localStorage.setItem('pass', this.mot_de_passe);
    this.test = String(localStorage.getItem('Email'));
    
  });
  }


  ngOnInit(): void {
  }

 


  



}
