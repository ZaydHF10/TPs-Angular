import { Component } from '@angular/core';
import { UtilisateurComponent } from './utilisateur/utilisateur';
import { ProfilComponent } from './profil/profil';
import { RouterOutlet } from '@angular/router'; 

import { EtudiantComponent } from './etudiant/etudiant';
import { AdresseComponent } from './composants/adresse/adresse.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UtilisateurComponent, ProfilComponent, RouterOutlet, AdresseComponent,EtudiantComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'TP Angular - Profil Utilisateur';
}
