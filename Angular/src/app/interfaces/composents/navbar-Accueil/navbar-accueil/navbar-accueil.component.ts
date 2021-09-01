import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-accueil',
  templateUrl: './navbar-accueil.component.html',
  styleUrls: ['./navbar-accueil.component.scss']
})
export class NavbarAccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  
  toHome(){
    document.getElementById("top")?.scrollIntoView({behavior:"smooth"});

  }

  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});

  }

  toService(){
    document.getElementById("services")?.scrollIntoView({behavior:"smooth"});

  }

  toPortfolio(){
    document.getElementById("portfolio")?.scrollIntoView({behavior:"smooth"});

  } 

  toContact(){
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});

  } 


}
