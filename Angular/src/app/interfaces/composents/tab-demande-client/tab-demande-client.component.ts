import {AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSort, Sort} from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteService } from 'src/app/apiServices/delete.service';
import { NotificationService } from 'src/app/apiServices/notification.service';
import { DialogService } from 'src/app/apiServices/dialog.service';
import { SelectDemandesService } from 'src/app/apiServices/select-demandes.service';
import { AddDemandeComponent } from '../add-demande/add-demande.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReponsesService } from 'src/app/apiServices/reponses.service';
@Component({
  selector: 'app-tab-demande-client',
  templateUrl: './tab-demande-client.component.html',
  styleUrls: ['./tab-demande-client.component.scss']
})
export class TabDemandeClientComponent implements OnInit {
  displayedColumns: string[] =  ['id_panne','date_panne','Plus','actions'];


  id_panne:number=0;
  @ViewChild(MatSort, {static: false})sort: MatSort|undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator|undefined;
  @ViewChild(MatPaginator) paginato1: MatPaginator|undefined;
  dataSource:any|undefined;
  searchKey: string='';
  users : any=[];
  retour:any;
  usersDataSource:any;
  usersDataSource1:any;
  usersDataSource2:any;
  userClient:any;   
  userexpert:any;  
  userTechnicien:any;  
  Email: string='';
  pass: string='';
  adresse: string='';
  resp:any;
Description:String='';
date:Date|undefined;
id:number=0;
erreur:string|undefined;
  constructor(private modalService: NgbModal,private reponse :ReponsesService,private dialg :DialogService,private service : SelectDemandesService,private http : HttpClient, private supp: DeleteService,   private dialog: MatDialog,private notificationService : NotificationService) { }

  ngOnInit(): void {


   
    this.Email = String(localStorage.getItem('Email'));
    this.pass = String(localStorage.getItem('pass'));

    let resp=this.service.getDemandeUser(this.Email,this.pass);
    resp.subscribe(data=>{this.users=data;
    this.usersDataSource=new MatTableDataSource(this.users); 
    
    this.usersDataSource.paginator = this.paginator;
    this.usersDataSource.sort = this.sort;  });  



    this.Email = String(localStorage.getItem('Email'));
    this.pass = String(localStorage.getItem('pass'));

    let resp1=this.service.getDemandeUserT(this.Email,this.pass);
    resp1.subscribe(data=>{this.users=data;
    this.usersDataSource1=new MatTableDataSource(this.users); 
    
    this.usersDataSource1.paginato1 = this.paginato1;
    this.usersDataSource1.sort = this.sort;  });  


    this.Email = String(localStorage.getItem('Email'));
    this.pass = String(localStorage.getItem('pass'));

    let resp2=this.service.getDemandeUserNoT(this.Email,this.pass);
    resp2.subscribe(data=>{this.users=data;
    this.usersDataSource2=new MatTableDataSource(this.users); 
    
    this.usersDataSource2.paginato1 = this.paginato1;
    this.usersDataSource2.sort = this.sort;  });  

  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.usersDataSource.filter = this.searchKey.trim().toLowerCase();
  }


  
  applyFilter1() {
    this.usersDataSource1.filter = this.searchKey.trim().toLowerCase();
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

  openScrollableContent(longContent:any,row:any) {

    this.modalService.open(longContent, { size: 'xl' }); 
       this.Description=row.description;
       this.id=row.id_panne;
       this.date=row.date_panne;
  }

  
  openLg(content:any) {
    let resp3=this.reponse.getReponseID(this.Email,this.pass,this.id);
    this.modalService.open(content, { size: 'lg' });
    
    
    resp3.subscribe(data=>{this.retour=data;});
 
        
   
  }


  openScrollableContent2(longContent2:any,row:any){
    this.modalService.open(longContent2, { size: 'xl' }); 
    this.Description=row.description;
    this.date=row.date_panne;
  }

 
}
