import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AjouterClientService } from 'src/app/apiServices/ajouter-client.service';
import { MatDialogRef } from  '@angular/material/dialog';
import { NotificationService } from 'src/app/apiServices/notification.service';
import { AddTypePanneSService } from 'src/app/apiServices/add-type-panne-s.service';

@Component({
  selector: 'app-add-type-panne',
  templateUrl: './add-type-panne.component.html',
  styleUrls: ['./add-type-panne.component.scss']
})
export class AddTypePanneComponent implements OnInit {
  hide = true;

  adresse_mail: string = '';
  pass: string = '';
  
message:string='';
   

  constructor(private client : AddTypePanneSService,private notificationService : NotificationService,public dialogRef: MatDialogRef<AddTypePanneComponent>,private formBuilder:FormBuilder,private router : Router,private http:HttpClient) { }

  
  ngOnInit(): void {
    this.adresse_mail = String(localStorage.getItem('Email'));
    this.pass = String(localStorage.getItem('pass'));

  }
  profileForm = new FormGroup({
    type_probleme: new FormControl(''),
    type_panne: new FormControl(''),
    type_equipement: new FormControl(''),
    adresse:new FormControl(String(localStorage.getItem('Email'))),
    id_panne:new FormControl(Number(localStorage.getItem('id')))

  
  });

  saveForm(){


    this.client.addtype( this.adresse_mail, this.pass,this.profileForm.value).subscribe((result)=>{this.message=String(result)});
    this.notificationService.success('!  effectué avec succès ');
   console.log(this.message);
   
     this.onClose();
   
     }

     onClose() {
  
      this.dialogRef.close();
    }

}
