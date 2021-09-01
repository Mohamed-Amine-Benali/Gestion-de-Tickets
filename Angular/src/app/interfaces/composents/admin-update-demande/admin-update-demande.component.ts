import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'src/app/apiServices/notification.service';
import { MatDialogRef } from  '@angular/material/dialog';
import { SelectDemandesService } from 'src/app/apiServices/select-demandes.service';
import { AjouterClientService } from 'src/app/apiServices/ajouter-client.service';

@Component({
  selector: 'app-admin-update-demande',
  templateUrl: './admin-update-demande.component.html',
  styleUrls: ['./admin-update-demande.component.scss']
})
export class AdminUpdateDemandeComponent implements OnInit {
  Email:string='';
  pass:string='';
  id:Number=0;
  demande:any;
  message:any;

  constructor(public dialogRef: MatDialogRef<AdminUpdateDemandeComponent>,private notificationService : NotificationService,private d :SelectDemandesService,private client:AjouterClientService) { }

  ngOnInit(): void {
    this.Email = String(localStorage.getItem('Email'));
    this.pass = String(localStorage.getItem('pass'));
    this.id = Number(localStorage.getItem('iid'));

    let resp4=this.d.getDemandeID(this.Email,this.pass,this.id);
    resp4.subscribe(data=>{this.demande=data;});

  }

  saveForm(form: NgForm){

    this.client.modifierDemande(this.Email,this.pass,this.id,form.value).subscribe((result)=>{this.message=String(result)});
    this.notificationService.success('!Utilisateur modifié avec succès ');
 
    this.onClose();
   
  }

  onClose() {

   this.dialogRef.close();
 }

}
