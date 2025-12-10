import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adresse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent {
  rue = '123 Rue Exemple';
}
