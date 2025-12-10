import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etudiant } from './etudiant';

describe('Etudiant', () => {
  let component: Etudiant;
  let fixture: ComponentFixture<Etudiant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etudiant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etudiant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/*ROLE:
C’est le fichier de test pour le composant.

Il est utilisé par Jasmine/Karma pour écrire des tests unitaires et vérifier que le composant fonctionne correctement.
*/