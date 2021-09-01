import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReponsesService {

  constructor(private http:HttpClient) { }

   
    getReponces(username:string,mot_de_passe:string) {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
       return  this.http.get("http://localhost:8080/reponse/all",{headers});
      }


      getpanne(username:string,mot_de_passe:string,id_panne:number) {
          const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
         return  this.http.get("http://localhost:8080/panne/"+id_panne,{headers});
        }

      

        gettype(username:string,mot_de_passe:string,id_type:number) {
            const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
           return  this.http.get("http://localhost:8080/type_panne/"+id_type,{headers});
          }
    
        getReponseID(username:string,mot_de_passe:string,id:number) {
              const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
             return  this.http.get("http://localhost:8080/reponse/demane/"+id,{headers});
            }
    
}
