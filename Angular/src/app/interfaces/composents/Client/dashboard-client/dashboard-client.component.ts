import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { AjouterClientService } from 'src/app/apiServices/ajouter-client.service';
import { StatService } from 'src/app/apiServices/stat.service';
import { SelectUsersService } from 'src/app/apiServices/select-users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.scss']
})
export class DashboardClientComponent implements OnInit {

  constructor(private service:StatService,private client : AjouterClientService,private formBuilder:FormBuilder,private http:HttpClient,private user :SelectUsersService) { }


  hide = true;

  adresse_mail: string = '';
  exist=true;
  Email:String='';
  pass:String='';
  users:any;
  demandes:any;
  reponses:any;
message:string='';
   profile:any;
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
    
    this.Email = String(localStorage.getItem('Email'));
    this.pass = String(localStorage.getItem('pass'));
        
    let resp4=this.user.user(this.Email,this.pass);
    resp4.subscribe(data=>{this.profile=data;});
    
  

    let resp=this.service.StatUsers(this.Email,this.pass);
    resp.subscribe(data=>{this.users=data;});


    let resp2=this.service.statDemande(this.Email,this.pass);
    resp2.subscribe(data=>{this.demandes=data;});
    
    
    let resp3=this.service.statReponse(this.Email,this.pass);
    resp3.subscribe(data=>{this.reponses=data;});
   
 


  }
  
  
  Stat(){
    document.getElementById("servicex")?.scrollIntoView({behavior:"smooth"});

  }

  profil(){
    document.getElementById("contact-us")?.scrollIntoView({behavior:"smooth"});

  }
 
    
  reload(){
    window.location.reload();


  }



    onSubmit(form: NgForm) {
     
      this.client.modifier(this.Email,this.pass,form.value).subscribe((result)=>{this.message=String(result)});
      
  }
}
