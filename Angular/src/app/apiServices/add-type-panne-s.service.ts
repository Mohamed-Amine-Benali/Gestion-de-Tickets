import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddTypePanneSService {

  constructor(private http:HttpClient) { }

  
addtype(username:string,mot_de_passe:string,data:any){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
   return  this.http.post("http://localhost:8080/type_panne/add",data,{headers});
}
}
