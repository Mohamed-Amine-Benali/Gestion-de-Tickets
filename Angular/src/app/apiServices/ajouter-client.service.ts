import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AjouterClientService {

  constructor(private http:HttpClient) { }

  
addClient(data: any){
     
  return   this.http.post("http://localhost:8080/user/add",data);
    

}

addDemande(username:string,mot_de_passe:string,data:any){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
   return  this.http.post("http://localhost:8080/panne/add",data,{headers});
}


 
modifier(username:String,mot_de_passe:String,data:any){
 const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
  return   this.http.put("http://localhost:8080/user/modifier/"+username,data,{headers});
    

}


modifieruser(username:string,mot_de_passe:string,mail:String,data:any){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
   return   this.http.put("http://localhost:8080/user/admin/modifier/"+mail,data,{headers});
 }
 

addreponse(username:String,mot_de_passe:String,data:any){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
  return   this.http.post("http://localhost:8080/reponse/add",data,{headers});
    
}


modifierDemande(username:String,mot_de_passe:String,id:Number,data:any){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
  return   this.http.put("http://localhost:8080/panne/update/"+id,data,{headers});
    
}

}
