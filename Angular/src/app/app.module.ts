import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarAccueilComponent } from './interfaces/composents/navbar-Accueil/navbar-accueil/navbar-accueil.component';
import { HomeComponent } from './interfaces/composents/home/home/home.component';
import { FooterComponent } from './interfaces/composents/footer/footer.component';
import { ServicesComponent } from './interfaces/composents/services/services.component';
import { SolutionsComponent } from './interfaces/composents/solutions/solutions.component';
import { AccueilComponent } from './interfaces/Utilisateurs-Interfaces/accueil/accueil.component';
import { AboutComponent } from './interfaces/composents/about/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SinscrireComponent } from './interfaces/Utilisateurs-Interfaces/sinscrire/sinscrire.component';
import { ConnexionComponent } from './interfaces/Utilisateurs-Interfaces/connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatChipsModule} from '@angular/material/chips'; 
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatSortModule} from '@angular/material/sort'; 
import {MatDialogModule} from '@angular/material/dialog';
import { LoginNavbarComponent } from './interfaces/composents/login-navbar/login-navbar.component';
import { AdminNavComponent } from './interfaces/composents/admin-nav/admin-nav.component';
import { UsersTableComponent } from './interfaces/composents/Admin-Table/users-table/users-table.component';
import { UsersAllComponent } from './interfaces/Admin/users-all/users-all.component'; 
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatExpansionModule} from '@angular/material/expansion';
import { DemandesTableComponent } from './interfaces/composents/Admin-Table/demandes-table/demandes-table.component';
import { DemandesComponent } from './interfaces/Admin/demandes/demandes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsulterProfilComponent } from './interfaces/composents/consulter-profil/consulter-profil.component';
import { ReponceTableComponent } from './interfaces/Admin/reponce-table/reponce-table.component';
import { ReponcesComponent } from './interfaces/composents/Admin-Table/reponces/reponces.component';
import { AdminAddUserComponent } from './interfaces/composents/admin-add-user/admin-add-user.component'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddDemandeComponent } from './interfaces/composents/add-demande/add-demande.component';
import { NavClientComponent } from './interfaces/composents/nav-client/nav-client.component';
import { DemandeClientComponent } from './interfaces/Client/demande-client/demande-client.component';
import { TabDemandeClientComponent } from './interfaces/composents/tab-demande-client/tab-demande-client.component';
import { EnavbarComponent } from './interfaces/composents/Expert/enavbar/enavbar.component';
import { ReponseExpertComponent } from './interfaces/composents/Expert/reponse-expert/reponse-expert.component';
import { ExpertReponseComponent } from './interfaces/Expert/expert-reponse/expert-reponse.component';
import { ExpertDemandesComponent } from './interfaces/composents/Expert/expert-demandes/expert-demandes.component';
import { ExpertInterfaceDemandesComponent } from './interfaces/Expert/expert-interface-demandes/expert-interface-demandes.component';
import { AddTypePanneComponent } from './interfaces/composents/add-type-panne/add-type-panne.component';
import { NavbarTechnicientComponent } from './interfaces/composents/Technicien/navbar-technicient/navbar-technicient.component';
import { ReponcesTechniciensComponent } from './interfaces/technicien/reponces-techniciens/reponces-techniciens.component';
import { TechnicienTabReponsesComponent } from './interfaces/composents/Technicien/technicien-tab-reponses/technicien-tab-reponses.component';
import { ProfilClientComponent } from './interfaces/Client/profil-client/profil-client.component';
import { DashboardClientComponent } from './interfaces/composents/Client/dashboard-client/dashboard-client.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AjouterReponseTechnicienComponent } from './interfaces/composents/Technicien/ajouter-reponse-technicien/ajouter-reponse-technicien.component';
import { AdminUpdateProfilComponent } from './interfaces/composents/admin-update-profil/admin-update-profil.component';
import { AdminUpdateDemandeComponent } from './interfaces/composents/admin-update-demande/admin-update-demande.component';
import { DashboardTechnicienComponent } from './interfaces/composents/Technicien/dashboard-technicien/dashboard-technicien.component';
import { ProfilTechnicienComponent } from './interfaces/technicien/profil-technicien/profil-technicien.component';
import { DashboardExpertComponent } from './interfaces/composents/Expert/dashboard-expert/dashboard-expert.component';
import { ProfilExpertComponent } from './interfaces/Expert/profil-expert/profil-expert.component';
import { ErrerNotFoundComponent } from './interfaces/errer-not-found/errer-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarAccueilComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ServicesComponent,
    SolutionsComponent,
    AccueilComponent,
    SinscrireComponent,
    ConnexionComponent,
    LoginNavbarComponent,
    AdminNavComponent,
    UsersTableComponent,
    UsersAllComponent,
    DemandesTableComponent,
    DemandesComponent,
    ConsulterProfilComponent,
    ReponceTableComponent,
    ReponcesComponent,
    AdminAddUserComponent,
    AddDemandeComponent,
    NavClientComponent,
    DemandeClientComponent,
    TabDemandeClientComponent,
   
    EnavbarComponent,
        ReponseExpertComponent,
        ExpertReponseComponent,
        ExpertDemandesComponent,
        ExpertInterfaceDemandesComponent,
        AddTypePanneComponent,
        NavbarTechnicientComponent,
        ReponcesTechniciensComponent,
        TechnicienTabReponsesComponent,
        ProfilClientComponent,
        DashboardClientComponent,
        AjouterReponseTechnicienComponent,
        AdminUpdateProfilComponent,
        AdminUpdateDemandeComponent,
        DashboardTechnicienComponent,
        ProfilTechnicienComponent,
        DashboardExpertComponent,
        ProfilExpertComponent,
        ErrerNotFoundComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,MatSortModule,MatPaginatorModule,MatIconModule,MatFormFieldModule,MatCardModule,
    MatRadioModule,MatGridListModule,MatTableModule,MatChipsModule,MatSelectModule,MatInputModule,
    MatButtonModule,MatNativeDateModule,MatDatepickerModule,MatStepperModule,MatTabsModule,MatExpansionModule, NgbModule
   ,MatSnackBarModule, FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AdminAddUserComponent,AddDemandeComponent,AddTypePanneComponent,AjouterReponseTechnicienComponent,AdminUpdateProfilComponent,AdminUpdateDemandeComponent]
})
export class AppModule { }
