import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SelectUsersService } from 'src/app/apiServices/select-users.service';

@Component({
  selector: 'app-consulter-profil',
  templateUrl: './consulter-profil.component.html',
  styleUrls: ['./consulter-profil.component.scss']
})
export class ConsulterProfilComponent implements OnInit {
  Email:String='';
  pass:String='';
  profile:any;
  nom:String='zzzzz';
  constructor(private user :SelectUsersService) { }

  ngOnInit(): void {
    this.Email = String(localStorage.getItem('Email'));
    this.pass = String(localStorage.getItem('pass'));
        
    let resp4=this.user.user(this.Email,this.pass);
    resp4.subscribe(data=>{this.profile=data;});
    this.nom=this.profile.nom;
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
}
}
