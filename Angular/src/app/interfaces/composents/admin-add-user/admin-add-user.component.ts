import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { AjouterClientService } from 'src/app/apiServices/ajouter-client.service';
import { NotificationService } from 'src/app/apiServices/notification.service';
import { MatDialogRef } from  '@angular/material/dialog';

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.scss']
})
export class AdminAddUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminAddUserComponent>,private client : AjouterClientService,private formBuilder:FormBuilder,private http:HttpClient,private notificationService : NotificationService) { }

  hide = true;

  adresse_mail: string = '';
  exist=true;
  
message:any;
 
profileForm = new FormGroup({
  nom: new FormControl(''),
  prenom: new FormControl(''),
  tel: new FormControl(''),
  date_de_naissance: new FormControl(''),
  adresse_mail: new FormControl(''),
  mot_de_passe: new FormControl(''),
  type_utilisateur: new FormControl(''),
  enabled: new FormControl(1),
  genre: new FormControl(''),


});
email = new FormControl('', [Validators.required, Validators.email]);
  ngOnInit(): void {
  }
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'vous devez entrer une valeur';
    }
  
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  
  saveForm(){
    this.client.addClient(this.profileForm.value).subscribe((result)=>{this.message=result});
    if(Boolean(this.message)==true){
      this.notificationService.warn('! essai avec une autre adresse mail');
     
    }
    else {
      this.notificationService.success('! utilisateur Ajouter');
    }
  this.onClose();
   
}

onClose() {
  
  this.dialogRef.close();
}
}