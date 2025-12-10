import { Component,EventEmitter, Output } from '@angular/core';
import { Produit } from '../components/bienvenue/produit/produit';
@Component({
  selector: 'app-panier',
  imports: [Produit],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class Panier {
  @Output() ajouterAuPanier = new EventEmitter<void>();

  envoyerAuParent() {
    this.ajouterAuPanier.emit();
  }
  compteur = 0;

  ajouter() {
    this.compteur++;
  }
}

