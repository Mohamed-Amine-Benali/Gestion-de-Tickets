import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private http:HttpClient) { }

  
    StatUsers(username:String,mot_de_passe:String) {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
       return  this.http.get("http://localhost:8080/user/Stat",{headers});
      }


    statDemande(username:String,mot_de_passe:String) {
          const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
         return  this.http.get("http://localhost:8080/panne/stat/"+username,{headers});
        }

      statReponse(username:String,mot_de_passe:String) {
            const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
           return  this.http.get("http://localhost:8080/reponse/stat/"+username,{headers});
          }

        statTechnicien(username:String,mot_de_passe:String) {
              const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
             return  this.http.get("http://localhost:8080/reponse/stat/technicien/"+username,{headers});
            }

          statExpert(username:String,mot_de_passe:String) {
                const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
               return  this.http.get("http://localhost:8080/type_panne/stat/expert/"+username,{headers});
              }
  

}
