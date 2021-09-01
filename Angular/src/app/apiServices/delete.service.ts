import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }


  

  
    Deleteuser(username:string,mot_de_passe:string,adresse:string) {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
       return  this.http.delete("http://localhost:8080/user/supp/"+adresse,{headers});
      }


    DeletePanne(username:string,mot_de_passe:string,id:number) {
          const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
         return  this.http.delete("http://localhost:8080/panne/supp/"+id,{headers});
        }


      DeleteReponse(username:string,mot_de_passe:string,id:number) {
            const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
           return  this.http.delete("http://localhost:8080/reponse/supp/"+id,{headers});
          }
}