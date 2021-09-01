import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandesComponent } from './interfaces/Admin/demandes/demandes.component';
import { ReponceTableComponent } from './interfaces/Admin/reponce-table/reponce-table.component';
import { UsersAllComponent } from './interfaces/Admin/users-all/users-all.component';
import { DemandeClientComponent } from './interfaces/Client/demande-client/demande-client.component';
import { ProfilClientComponent } from './interfaces/Client/profil-client/profil-client.component';
import { ErrerNotFoundComponent } from './interfaces/errer-not-found/errer-not-found.component';
import { ExpertInterfaceDemandesComponent } from './interfaces/Expert/expert-interface-demandes/expert-interface-demandes.component';
import { ExpertReponseComponent } from './interfaces/Expert/expert-reponse/expert-reponse.component';
import { ProfilExpertComponent } from './interfaces/Expert/profil-expert/profil-expert.component';
import { ProfilTechnicienComponent } from './interfaces/technicien/profil-technicien/profil-technicien.component';
import { ReponcesTechniciensComponent } from './interfaces/technicien/reponces-techniciens/reponces-techniciens.component';
import { AccueilComponent } from './interfaces/Utilisateurs-Interfaces/accueil/accueil.component';
import { ConnexionComponent } from './interfaces/Utilisateurs-Interfaces/connexion/connexion.component';
import { SinscrireComponent } from './interfaces/Utilisateurs-Interfaces/sinscrire/sinscrire.component';

const routes: Routes = [

  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'inscription', component: SinscrireComponent },
  { path: 'login', component: ConnexionComponent },
  { path: 'AdminUsers', component: UsersAllComponent },
  { path: 'AdminDemandes', component: DemandesComponent },
  { path: 'AdminReponces', component: ReponceTableComponent },
  { path: 'ClientDemande', component: DemandeClientComponent },
  { path: 'ExpertReponse', component: ExpertReponseComponent },
  { path: 'ExpertDemande', component: ExpertInterfaceDemandesComponent },
  { path: 'ReponseTechnicien', component: ReponcesTechniciensComponent },
  { path: 'ClientProfil', component: ProfilClientComponent },
  { path: 'TechnicienProfil', component: ProfilTechnicienComponent },
  { path: 'ExpertProfil', component: ProfilExpertComponent },
/*
  { path: 'not-found', component: ErrerNotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
  */


  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
