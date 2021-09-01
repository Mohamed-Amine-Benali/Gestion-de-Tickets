import {AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSort, Sort} from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReponsesService } from 'src/app/apiServices/reponses.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteService } from 'src/app/apiServices/delete.service';
import { NotificationService } from 'src/app/apiServices/notification.service';
@Component({
  selector: 'app-reponces',
  templateUrl: './reponces.component.html',
  styleUrls: ['./reponces.component.scss']
})
export class ReponcesComponent implements OnInit {
  displayedColumns: string[] =  ['id_reponse', 'date_reponse', 'adresse_mail','consulter','actions'];
  @ViewChild(MatSort, {static: false})sort: MatSort|undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator|undefined;
  dataSource:any|undefined;
  searchKey: string='';
  users : any=[];
  reponcesDataSource:any;
  userClient:any;   
  userexpert:any;  
  userTechnicien:any;  
  Email: string='';
  pass: string='';
  id_panne:number=0;
  id_type:number=0;
  panne:any;
  type:any;
  reponse:any;
  resp:any;
  constructor(private notificationService : NotificationService, private supp: DeleteService ,private modalService: NgbModal,private service : ReponsesService,private http : HttpClient,    private dialog: MatDialog) { }

  ngOnInit(): void {

    this.Email = String(localStorage.getItem('Email'));
    this.pass = String(localStorage.getItem('pass'));

    let resp=this.service.getReponces(this.Email,this.pass);
    resp.subscribe(data=>{this.users=data;
    this.reponcesDataSource=new MatTableDataSource(this.users); 
    
    this.reponcesDataSource.paginator = this.paginator;
    this.reponcesDataSource.sort = this.sort;  });  
  }
  
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.reponcesDataSource.filter = this.searchKey.trim().toLowerCase();
  }



  openScrollableContent(longContent:any,row:any) {
    this.modalService.open(longContent, { scrollable: true });
    this.id_panne=row.id_panne;
    this.id_type=row.id_type;
    this.reponse=row.description;
    let p=this.service.getpanne(this.Email,this.pass,this.id_panne);
    p.subscribe(data=>{this.panne=data;});

    let t=this.service.gettype(this.Email,this.pass,this.id_type);
    t.subscribe(data=>{this.type=data;});


  }

  
  onDelete(row:any){
  
    this.id_panne=row.id_reponse;
    console.log('ok', this.id_panne)
    if(confirm('Are you sure to delete this record ?')){
    

    let resp=this.supp.DeleteReponse(this.Email,this.pass,this.id_panne);
    resp.subscribe(data=>{this.resp=data;
      console.log(this.resp);});


    this.notificationService.warn('! Deleted successfully');
    }
  }



}
