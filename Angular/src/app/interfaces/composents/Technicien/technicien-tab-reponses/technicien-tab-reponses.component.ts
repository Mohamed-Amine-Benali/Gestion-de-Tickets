import {AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSort, Sort} from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteService } from 'src/app/apiServices/delete.service';
import { NotificationService } from 'src/app/apiServices/notification.service';
import { SelectDemandesService } from 'src/app/apiServices/select-demandes.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TypePanneService } from 'src/app/apiServices/type-panne.service';
import { AjouterReponseTechnicienComponent } from '../ajouter-reponse-technicien/ajouter-reponse-technicien.component';
@Component({
  selector: 'app-technicien-tab-reponses',
  templateUrl: './technicien-tab-reponses.component.html',
  styleUrls: ['./technicien-tab-reponses.component.scss']
})
export class TechnicienTabReponsesComponent implements OnInit {
  displayedColumns: string[] =  ['id_panne','id_type', 'date_panne', 'adresse_mail','actions','action'];

  @ViewChild(MatSort, {static: false})sort: MatSort|undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator|undefined;
  searchKey: string='';
  users : any=[];
  usersDataSource:any;

  id_type:any;
  id_panne:any;
  user:string='';



  t:any;
  Email: string='';
  pass: string='';
rapport:number=0;
  constructor(private type: TypePanneService,private modalService: NgbModal,private service : SelectDemandesService,private http : HttpClient, private supp: DeleteService,   private dialog: MatDialog,private notificationService : NotificationService,) { }

  ngOnInit(): void {
    this.Email = String(localStorage.getItem('Email'));
    this.pass = String(localStorage.getItem('pass'));

    let resp=this.service.getDemandeTechnicien(this.Email,this.pass);
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

  openScrollableContent(longContent:any,row:any) {
    this.modalService.open(longContent, { size: 'sm' }); 
     this.rapport=row.id_type;

     let resp=this.type.gettypeId(this.Email,this.pass,this.rapport);
    resp.subscribe(data=>{this. t=data;});

  
  }

  
  onCreate(row:any){
    const dialogConfig = new MatDialogConfig();

    this.id_type=row.id_type;
    this.id_panne=row.id_panne;
    this.user=row.adresse_mail;

    localStorage.setItem('id_type',this.id_type);
    localStorage.setItem('id_panne', this.id_panne);
    localStorage.setItem('user', this.user);



   
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(AjouterReponseTechnicienComponent,dialogConfig);
  }
}
