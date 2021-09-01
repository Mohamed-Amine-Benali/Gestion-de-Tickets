import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AjouterClientService } from 'src/app/apiServices/ajouter-client.service';
import { MatDialogRef } from  '@angular/material/dialog';
import { NotificationService } from 'src/app/apiServices/notification.service';
@Component({
  selector: 'app-ajouter-reponse-technicien',
  templateUrl: './ajouter-reponse-technicien.component.html',
  styleUrls: ['./ajouter-reponse-technicien.component.scss']
})
export class AjouterReponseTechnicienComponent implements OnInit {

  constructor(private client : AjouterClientService,private notificationService : NotificationService,public dialogRef: MatDialogRef<AjouterReponseTechnicienComponent>,private formBuilder:FormBuilder,private router : Router,private http:HttpClient) { }


  hide = true;

  adresse_mail: string = '';
  pass: string = '';
  
message:string='';


ngOnInit(): void {
  this.adresse_mail = String(localStorage.getItem('Email'));
  this.pass = String(localStorage.getItem('pass'));

}
profileForm = new FormGroup({
  description: new FormControl(''),
  technicien:new FormControl(String(localStorage.getItem('Email'))),
  adresse_mail:new FormControl(String(localStorage.getItem('user'))),
  id_panne:new FormControl(Number(localStorage.getItem('id_panne'))),
  id_type:new FormControl(Number(localStorage.getItem('id_type'))),
});

saveForm(){


  this.client.addreponse( this.adresse_mail, this.pass,this.profileForm.value).subscribe((result)=>{this.message=String(result)});
  this.notificationService.success('! Réponse Ajouter');
 console.log(this.message);
 
   this.onClose();
 
   }

   onClose() {

    this.dialogRef.close();
  }


}
