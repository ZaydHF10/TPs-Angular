import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utilisateur.html',
  styleUrls: ['./utilisateur.css']
})
export class UtilisateurComponent {
  nom = 'Zayd Hefyen'; 
}
