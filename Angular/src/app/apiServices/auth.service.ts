import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }



  login(adresse_mail:string,mot_de_passe:string){
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(adresse_mail + ':' + mot_de_passe) });
      return this.http.get("http://localhost:8080/user/",{headers,responseType: 'text' as 'json'})
    }

    logout(adresse_mail:string,mot_de_passe:string){
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(adresse_mail + ':' + mot_de_passe) });
        return this.http.get("http://localhost:8080/user/logout",{headers,responseType: 'text' as 'json'})
      }
  
      
  exist(adresse_mail:String){
 
      return this.http.get("http://localhost:8080/user/exist/"+adresse_mail);
    }


}
