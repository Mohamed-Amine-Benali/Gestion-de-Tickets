import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SelectUsersService {

  constructor(private http:HttpClient) { }




  
    getUsers(username:string,mot_de_passe:string) {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
       return  this.http.get("http://localhost:8080/user/all",{headers});
      }


    
      getClient(username:string,mot_de_passe:string) {
          const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
         return  this.http.get("http://localhost:8080/user/client",{headers});
        }


        getExpert(username:string,mot_de_passe:string) {
            const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
           return  this.http.get("http://localhost:8080/user/expert",{headers});
          }

        getTechnicien(username:string,mot_de_passe:string) {
              const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
             return  this.http.get("http://localhost:8080/user/technicien",{headers});
            }

          getUser(username:string,mot_de_passe:string,user:String) {
                const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
               return  this.http.get("http://localhost:8080/user/"+user,{headers});
              }


            user(username:String,mot_de_passe:String) {
                  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + mot_de_passe) });
                 return  this.http.get("http://localhost:8080/user/profil/"+username,{headers});
                }


}



