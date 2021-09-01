import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'; 
import { AdminAddUserComponent } from '../interfaces/composents/admin-add-user/admin-add-user.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }
  openConfirmDialog(){
    this.dialog.open(AdminAddUserComponent,{
      width: '390px',
      disableClose:true
    });
  }
}
