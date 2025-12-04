import { Component } from '@angular/core';
import { Etudiant } from '../etudiant';

@Component({
  selector: 'app-etudiant-form',
  templateUrl: './etudiant-form.component.html',
  styleUrls: ['./etudiant-form.component.css']
})
export class EtudiantFormComponent {
  classes = ['IGL3', 'IDS3', 'ICE3', 'IEE3', 'MPI'];
  
  model = new Etudiant(18, 'Hefyen', this.classes[0], 'Zayd');
  
  submitted = false;

  onSubmit() { 
    this.submitted = true; 
  }

  newEtudiant() {
    this.model = new Etudiant(42, '', '');
    this.submitted = false;
  }

  // TODO: Remove this when we're done
  get diagnostic() { 
    return JSON.stringify(this.model); 
  }
}
