import {AfterViewInit, Component, OnInit,ViewChild,ViewEncapsulation  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSort, Sort} from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SelectDemandesService } from 'src/app/apiServices/select-demandes.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { SelectUsersService } from 'src/app/apiServices/select-users.service';
import { DeleteService } from 'src/app/apiServices/delete.service';
import { NotificationService } from 'src/app/apiServices/notification.service';
import { AddDemandeComponent } from '../../add-demande/add-demande.component';
import { AdminUpdateDemandeComponent } from '../../admin-update-demande/admin-update-demande.component';

@Component({
  selector: 'app-demandes-table',
  templateUrl: './demandes-table.component.html',
  styleUrls: ['./demandes-table.component.scss']
})
export class DemandesTableComponent implements OnInit {
  
  displayedColumns: string[] =  ['id', 'adresse_mail', 'date_panne','actions'];
    
  closeResult: string='';
  @ViewChild(MatSort, {static: false})sort: MatSort|undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator|undefined;
  dataSource:any|undefined;
  searchKey: string='';
  users : any=[];
  client :any;
  usersDataSource:any;
  userClient:any;   
  userexpert:any;  
  userTechnicien:any;  
  Email: string='';
  pass: string='';
  myDate = new Date();
  utilisateur:String='';
key:number|undefined;
datee:Date|undefined;
reponse:String=''
  desc:String='';
  verrou:String='';


  id_panne:number=0;

mail:String='';
nameuser:String='';
prenomuser:String='';
teluser:String='';
dateuser:String='';
resp:any;

  constructor(private notificationService : NotificationService,private service : SelectDemandesService,private http : HttpClient,private user: SelectUsersService, private supp: DeleteService ,  private dialog: MatDialog,private modalService: NgbModal) {
    
   }
 

  ngOnInit(): void {


    this.Email = String(localStorage.getItem('Email'));
    this.pass = String(localStorage.getItem('pass'));

    let resp=this.service.getDemande(this.Email,this.pass);
    resp.subscribe(data=>{this.users=data;
    this.usersDataSource=new MatTableDataSource(this.users); 
    
    this.usersDataSource.paginator = this.paginator;
    this.usersDataSource.sort = this.sort;  }); 

  }

  
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.usersDataSource.filter = this.searchKey.trim().toLowerCase();
  }



  openScrollableContent(content:any,row:any) {
    this.modalService.open(content, { centered: true });
    
  this.desc=row.description;
  this.utilisateur=row.adresse_mail;
  this.key=row.id_panne;
  this.datee=row.date_panne;
  if(row.id_type==0)  this.reponse=" Pas encore";
  else if(row.id_type!=0 && row.id_reponse==0 )  this.reponse=" En cours de traitement";
  else this.reponse=" Déjà répondu ";
  }

  
  openSm(content:any,row:any) {
    
    this.modalService.open(content, { size: 'sm' });
    let resp=this.user.getUser(this.Email,this.pass,row.adresse_mail);
    resp.subscribe(data=>this.client=data);

  }

  onDelete(row:any){
  
    this.id_panne=row.id_panne;
    console.log('ok', this.id_panne)
    if(confirm('Are you sure to delete this record ?')){
    

    let resp=this.supp.DeletePanne(this.Email,this.pass,this.id_panne);
    resp.subscribe(data=>{this.resp=data;
      console.log(this.resp);});


    this.notificationService.warn('! Deleted successfully');
    }
  }


  
  onCreate(){
    const dialogConfig = new MatDialogConfig();
   
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(AddDemandeComponent,dialogConfig);
  }

  update(id:any){
    localStorage.setItem('iid',id);
    const dialogConfig = new MatDialogConfig();
   
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(AdminUpdateDemandeComponent,dialogConfig);  }
}
