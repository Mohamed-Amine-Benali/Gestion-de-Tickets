import {AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { SelectUsersService } from 'src/app/apiServices/select-users.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSort, Sort} from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteService } from 'src/app/apiServices/delete.service';
import { NotificationService } from 'src/app/apiServices/notification.service';
import { DialogService } from 'src/app/apiServices/dialog.service';
import { AdminAddUserComponent } from '../../admin-add-user/admin-add-user.component';
import { AdminUpdateProfilComponent } from '../../admin-update-profil/admin-update-profil.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  displayedColumns: string[] =  ['adresse_mail', 'nom', 'prenom', 'tel', 'date_de_naissance','genre','role','actions'];

  @ViewChild(MatSort, {static: false})sort: MatSort|undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator|undefined;
  dataSource:any|undefined;
  searchKey: string='';
  users : any=[];
  usersDataSource:any;
  userClient:any;   
  userexpert:any;  
  userTechnicien:any;  
  Email: string='';
  pass: string='';
  adresse: string='';
  resp:any;
  constructor(private dialg :DialogService,private service : SelectUsersService,private http : HttpClient, private supp: DeleteService,   private dialog: MatDialog,private notificationService : NotificationService) { }

  ngOnInit(): void {

    this.Email = String(localStorage.getItem('Email'));
    this.pass = String(localStorage.getItem('pass'));

    let resp=this.service.getUsers(this.Email,this.pass);
    resp.subscribe(data=>{this.users=data;
    this.usersDataSource=new MatTableDataSource(this.users); 
    
    this.usersDataSource.paginator = this.paginator;
    this.usersDataSource.sort = this.sort;  });  
  


  let respClient=this.service.getClient(this.Email,this.pass);
  respClient.subscribe(data=>{this.users=data;
 
    this.userClient=new MatTableDataSource(this.users); 
    this.userClient.paginator = this.paginator;
    this.userClient.sort = this.sort;  });  




    let respExpert=this.service.getExpert(this.Email,this.pass);
    respExpert.subscribe(data=>{this.users=data;
   
      this.userexpert=new MatTableDataSource(this.users); 
      this.userexpert.paginator = this.paginator;
      this.userexpert.sort = this.sort;  });  




      
    let respTechnicien=this.service.getExpert(this.Email,this.pass);
    respTechnicien.subscribe(data=>{this.users=data;
   
      this.userTechnicien=new MatTableDataSource(this.users); 
      this.userTechnicien.paginator = this.paginator;
      this.userTechnicien.sort = this.sort;  });  
  }
  



  
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.usersDataSource.filter = this.searchKey.trim().toLowerCase();
  }

  applyFilterClient() {
    this.userClient.filter = this.searchKey.trim().toLowerCase();
  }


  applyFilterExpert() {
    this.userClient.filter = this.searchKey.trim().toLowerCase();
  }


  applyFilterTechnicien() {
    this.userClient.filter = this.searchKey.trim().toLowerCase();
  }



  onDelete(row:any){
  
    this.adresse=row.adresse_mail;
    console.log('ok', this.adresse)
    if(confirm('Are you sure to delete this record ?')){
    

    let resp=this.supp.Deleteuser(this.Email,this.pass,this.adresse);
    resp.subscribe(data=>{this.resp=data;
      console.log(this.resp);});


    this.notificationService.warn('! Deleted successfully');
    }
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
   
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(AdminAddUserComponent,dialogConfig);
  }

  update(adresse:string){
    localStorage.setItem('mail',adresse);
    const dialogConfig = new MatDialogConfig();
   
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(AdminUpdateProfilComponent,dialogConfig);  }

}
