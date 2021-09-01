import {AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSort, Sort} from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteService } from 'src/app/apiServices/delete.service';
import { NotificationService } from 'src/app/apiServices/notification.service';
import { DialogService } from 'src/app/apiServices/dialog.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReponsesService } from 'src/app/apiServices/reponses.service';
import { TypePanneService } from 'src/app/apiServices/type-panne.service';
@Component({
  selector: 'app-reponse-expert',
  templateUrl: './reponse-expert.component.html',
  styleUrls: ['./reponse-expert.component.scss']
})
export class ReponseExpertComponent implements OnInit {
  displayedColumns: string[] =  ['id_type','date','adresse','type_equipement','type_probleme','action']; 
  displayedColumn: string[] =  ['id_type','date','type_equipement','type_probleme','action']; 
   

  @ViewChild(MatSort, {static: false})sort: MatSort|undefined;
  @ViewChild(MatSort, {static: false})sort1: MatSort|undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator|undefined;
  @ViewChild(MatPaginator) paginato1: MatPaginator|undefined;
  dataSource:any|undefined;
  searchKey: string='';
  users : any=[];
  type_panne:any=[];

  usersDataSource:any;
  usersDataSource1:any;

  description:String='';

  Email: string='';
  pass: string='';
  
 

  constructor(private modalService: NgbModal,private service :TypePanneService,private reponse :ReponsesService,private dialg :DialogService,private http : HttpClient, private supp: DeleteService,   private dialog: MatDialog,private notificationService : NotificationService) { }

  ngOnInit(): void {
    
   
    this.Email = String(localStorage.getItem('Email'));
    this.pass = String(localStorage.getItem('pass'));

    let resp=this.service.getTypes(this.Email,this.pass);
    resp.subscribe(data=>{this.users=data;
    this.usersDataSource=new MatTableDataSource(this.users); 
    
    this.usersDataSource.paginator = this.paginator;
    this.usersDataSource.sort = this.sort;  });
    


    let resp1=this.service.getTypesExpert(this.Email,this.pass);
    resp1.subscribe(data=>{this.type_panne=data;
    this.usersDataSource1=new MatTableDataSource(this.type_panne); 
    
    this.usersDataSource1.paginator1 = this.paginato1;
    this.usersDataSource1.sort1 = this.sort1;  });

  }


  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.usersDataSource.filter = this.searchKey.trim().toLowerCase();
    this.usersDataSource1.filter = this.searchKey.trim().toLowerCase();
  }


  openSm(content:any,description:String) {
    this.modalService.open(content, { size: 'sm' });
    this.description=description;
  }
}
