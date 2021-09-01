import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SelectDemandesService {

  constructor(private http:HttpClient) { }


  

  
    getDemande(username:string,mot_de_passe:string) {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
       return  this.http.get("http://localhost:8080/panne/all",{headers});
      }

    getDemandeID(username:string,mot_de_passe:string,id:Number) {
          const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
         return  this.http.get("http://localhost:8080/panne/"+id,{headers});
        }

    
      getDemandeUser(username:string,mot_de_passe:string) {
          const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
         return  this.http.get("http://localhost:8080/panne/adresse/"+username,{headers});
        }


      getDemandeUserT(username:string,mot_de_passe:string) {
            const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
           return  this.http.get("http://localhost:8080/panne/traitee/"+username,{headers});
          }

        getDemandeUserNoT(username:string,mot_de_passe:string) {
              const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
             return  this.http.get("http://localhost:8080/panne/notraitee/"+username,{headers});
            }


          getDemandeExpert(username:string,mot_de_passe:string) {
                const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
               return  this.http.get("http://localhost:8080/panne/expert",{headers});
              }


            
          getDemandeTechnicien(username:string,mot_de_passe:string) {
                const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
               return  this.http.get("http://localhost:8080/panne/technicien",{headers});
              }
}

