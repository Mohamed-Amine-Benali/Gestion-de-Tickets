import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/apiServices/auth.service';
@Component({
  selector: 'app-enavbar',
  templateUrl: './enavbar.component.html',
  styleUrls: ['./enavbar.component.scss']
})
export class EnavbarComponent implements OnInit {
  Email:string='';
  pass:string='';
  user:any;
  constructor(private service:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.Email = String(localStorage.getItem('Email'));
    this.pass = String(localStorage.getItem('pass'));
    let resp=this.service.logout(this.Email,this.pass);
    resp.subscribe(data=>{this.user=data;
      localStorage.clear();
      console.log('deconnexion',this.user);
  });
}
}
