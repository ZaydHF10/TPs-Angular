import { Component } from '@angular/core';
import { Student } from './TypeStudent';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etudiant.html',
  styleUrls: ['./etudiant.css'],
})
export class EtudiantComponent {
  etudiant : Student={
          id:1,
          name:'Zayd',
          lastname:'Hefyen',
          average: 15.5
      };
}

/*ROLE:

C’est le fichier TypeScript principal du composant.

Il contient la logique du composant, les variables, les méthodes et la configuration (via le décorateur @Component) pour lier le template et le style.

*/

/*Le décorateur @:’@Component’ est une tag décoratrice qui spécifie les métadonnées d’Angular du composant. Le
décorateur @Component a été utilisé ici pour indiquer que cette classe doit être interprétée comme un composant.
Remarquez les propriétés de métadonnées :
selector - le sélecteur d'élément CSS du composant
standalone - attribut a ajouté dans notre composant pour le rendre autonome.
templateUrl - l'emplacement du fichier modèle du composant.
styleUrls - l'emplacement des styles CSS privés du composant.
Ces éléments ont-été décrite dans la partie précédante.
Le selector, app-etudiant, correspond au nom de l'élément HTML qui identifie cette composant dans le modèle d'un
composant parent.
Angular appelle ngOnInit() juste après la création d'un composant.
Remarquez qu’il faut Toujours exporter (export class) la classe composant de sorte que vous pouvez l’importer
ailleurs ... comme dans le AppModule.*/