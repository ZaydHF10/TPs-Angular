import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-produit',
  imports: [CurrencyPipe],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
  @Input() imageUrl: string = 'assets/Produit.jpg';    
  @Input() enStock: boolean = true;
  @Output() ajouterAuPanier = new EventEmitter<void>();
   afficherAlerte() {
    alert("Produit ajouté au panier");
  }                  
  toggleStock() {
  this.enStock = !this.enStock;
  }                               
  envoyerAuParent() {
    this.ajouterAuPanier.emit();
  }                            
  @Input() nomProduit: string = ''; 
  @Input() prix: number = 0; 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
}
