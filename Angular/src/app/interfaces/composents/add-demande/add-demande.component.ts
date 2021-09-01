import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AjouterClientService } from 'src/app/apiServices/ajouter-client.service';
import { MatDialogRef } from  '@angular/material/dialog';
import { NotificationService } from 'src/app/apiServices/notification.service';

@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.scss']
})
export class AddDemandeComponent implements OnInit {

  constructor(private client : AjouterClientService,private notificationService : NotificationService,public dialogRef: MatDialogRef<AddDemandeComponent>,private formBuilder:FormBuilder,private router : Router,private http:HttpClient) { }


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
    adresse_mail:new FormControl(String(localStorage.getItem('Email')))
  
  
  });

  
  saveForm(){


    this.client.addDemande( this.adresse_mail, this.pass,this.profileForm.value).subscribe((result)=>{this.message=String(result)});
    this.notificationService.success('! Demande Ajouter');
   console.log(this.message);
   
     this.onClose();
   
     }

     onClose() {
  
      this.dialogRef.close();
    }

}
