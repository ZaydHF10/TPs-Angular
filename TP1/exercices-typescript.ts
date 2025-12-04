
// Partie 4 - Bases

// 1) Déclarations de variables avec types primitifs
let nom: string = "Zayd";
let prenom: string = "Hefyen";
let age: number = 21;
// 2) Fonction typée qui calcule la somme de deux nombres
function addition(a: number, b: number): number {
  return a + b;
}
console.log("Addition 3 + 4 =", addition(3, 4));

// 3) Interface Etudiant
interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  age?: number;
}

// 4) Classe Etudiant qui implémente l'interface
class EtudiantImpl implements Etudiant {
  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public age?: number
  ) {}

  afficherInfo(): void {
    console.log(`Étudiant #${this.id}: ${this.prenom} ${this.nom}${this.age ? ", " + this.age + " ans" : ""}`);
  }
}

const etu = new EtudiantImpl(1, "Hefyen", "Zayd", 21);
etu.afficherInfo();

// Partie 5 - Concepts avancés

// 1) Types génériques : fonction qui retourne un tableau de valeurs du même type
function creerTableau<T>(...items: T[]): T[] {
  return items;
}
const nums = creerTableau<number>(1, 2, 3, 4);
const noms = creerTableau<string>("Zayd", "Hefyen");
console.log("nums:", nums, "noms:", noms);

// Unions de types et types optionnels
type IdType = number | string;
function afficherId(id: IdType, tag?: string): void {
  console.log(`ID${tag ? " ("+tag+")" : ""}:`, id);
}

// Enumérations (enum)
enum Niveau {
  Debutant = 1,
  Intermediaire,
  Avance
}
const niveauEtudiant: Niveau = Niveau.Intermediaire;
console.log("Niveau étudiant:", Niveau[niveauEtudiant]); 

// 2) commentaires: 
// - On utilise generics pour garder la réutilisabilité et la sécurité des types.
// - Les unions permettent d'accepter plusieurs formes de données.
// - Les enums facilitent la lecture et l'usage de constantes nommées.
