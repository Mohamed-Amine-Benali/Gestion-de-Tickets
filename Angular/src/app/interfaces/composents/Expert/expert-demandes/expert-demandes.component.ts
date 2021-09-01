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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReponsesService } from 'src/app/apiServices/reponses.service';
import { TypePanneService } from 'src/app/apiServices/type-panne.service';
import { AddTypePanneComponent } from '../../add-type-panne/add-type-panne.component';

@Component({
  selector: 'app-expert-demandes',
  templateUrl: './expert-demandes.component.html',
  styleUrls: ['./expert-demandes.component.scss']
})
export class ExpertDemandesComponent implements OnInit {
  displayedColumns: string[] =  ['id_panne','date_panne','adresse_mail','action','action2'];
  @ViewChild(MatSort, {static: false})sort: MatSort|undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator|undefined;
  dataSource:any|undefined;
  searchKey: string='';
  users : any=[];


  usersDataSource:any;

id:any;
  Description:string='';

  Email: string='';
  pass: string='';
  
  constructor(private modalService: NgbModal,private demande :SelectDemandesService,private service :TypePanneService,private reponse :ReponsesService,private dialg :DialogService,private http : HttpClient, private supp: DeleteService,   private dialog: MatDialog,private notificationService : NotificationService) { }

  ngOnInit(): void {
    
    this.Email = String(localStorage.getItem('Email'));
    this.pass = String(localStorage.getItem('pass'));

    let resp=this.demande.getDemandeExpert(this.Email,this.pass);
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
  openXl(content:any,row:any) {
    this.modalService.open(content, { size: 'xl' }); 
    this.Description=row.description;

   
  }


  
  onCreate(row:any){
    const dialogConfig = new MatDialogConfig();
    this.id=row.id_panne;
    localStorage.setItem('id', this.id);

   
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(AddTypePanneComponent,dialogConfig);
  }

}
