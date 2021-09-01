import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AjouterClientService } from 'src/app/apiServices/ajouter-client.service';
import { NotificationService } from 'src/app/apiServices/notification.service';



@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrls: ['./sinscrire.component.scss']
})
export class SinscrireComponent implements OnInit {

  constructor(private notificationService : NotificationService,private client : AjouterClientService,private formBuilder:FormBuilder,private router : Router,private http:HttpClient) { }


  hide = true;

  adresse_mail: string = '';
  exist=true;
  
message:boolean=true;
   
profileForm = new FormGroup({
  nom: new FormControl(''),
  prenom: new FormControl(''),
  tel: new FormControl(''),
  date_de_naissance: new FormControl(''),
  adresse_mail: new FormControl(''),
  mot_de_passe: new FormControl(''),
  type_utilisateur: new FormControl('Client'),
  enabled: new FormControl(1),
  genre: new FormControl(''),


});


  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);



  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'vous devez entrer une valeur';
    }
  
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
    




  saveForm(){
    let r = this.client.addClient(this.profileForm.value);
    r.subscribe(data => {
      this.message = Boolean(data);});

   console.log(this.message);
 if(this.message==true){
  this.notificationService.warn('! Adresse Email Exist ');
 }
 else
 this.router.navigate(["/login"]);
  
    
  
    }

}
