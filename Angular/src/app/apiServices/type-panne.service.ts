import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TypePanneService {

  constructor(private http:HttpClient) { }


  getTypes(username:string,mot_de_passe:string) {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
       return  this.http.get("http://localhost:8080/type_panne/all",{headers});
      }


    getTypesExpert(username:string,mot_de_passe:string) {
          const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
         return  this.http.get("http://localhost:8080/type_panne/expert/"+username,{headers});
        }

      gettypeId(username:string,mot_de_passe:string,id:number) {
            const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
           return  this.http.get("http://localhost:8080/type_panne/"+id,{headers});
          }
    

      
    




}
