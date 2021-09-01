import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AjouterClientService } from 'src/app/apiServices/ajouter-client.service';
import { SelectUsersService } from 'src/app/apiServices/select-users.service';
import { NotificationService } from 'src/app/apiServices/notification.service';
import { MatDialogRef } from  '@angular/material/dialog';
@Component({
  selector: 'app-admin-update-profil',
  templateUrl: './admin-update-profil.component.html',
  styleUrls: ['./admin-update-profil.component.scss']
})
export class AdminUpdateProfilComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminUpdateProfilComponent>,private notificationService : NotificationService,private user :SelectUsersService,private client :AjouterClientService) { }
  Email:string='';
  pass:string='';
  mail:String='';
  profile:any;
  message:any;
  
  hide = true;

  ngOnInit(): void {
    this.Email = String(localStorage.getItem('Email'));
    this.pass = String(localStorage.getItem('pass'));
    this.mail = String(localStorage.getItem('mail'));
    
        
    let resp4=this.user.getUser(this.Email,this.pass,this.mail);
    resp4.subscribe(data=>{this.profile=data;});
  }
  saveForm(form: NgForm){

    this.client.modifieruser(this.Email,this.pass,this.mail,form.value).subscribe((result)=>{this.message=String(result)});
    this.notificationService.success('!Utilisateur modifié avec succès ');
 
    this.onClose();
   
  }

  onClose() {

   this.dialogRef.close();
 }
}
