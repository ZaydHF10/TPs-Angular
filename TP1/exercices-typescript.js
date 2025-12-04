// Partie 4 - Bases
// 1) Déclarations de variables avec types primitifs
var nom = "Zayd";
var prenom = "Hefyen";
var age = 21;
// 2) Fonction typée qui calcule la somme de deux nombres
function addition(a, b) {
    return a + b;
}
console.log("Addition 3 + 4 =", addition(3, 4));
// 4) Classe Etudiant qui implémente l'interface
var EtudiantImpl = /** @class */ (function () {
    function EtudiantImpl(id, nom, prenom, age) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    EtudiantImpl.prototype.afficherInfo = function () {
        console.log("\u00C9tudiant #".concat(this.id, ": ").concat(this.prenom, " ").concat(this.nom).concat(this.age ? ", " + this.age + " ans" : ""));
    };
    return EtudiantImpl;
}());
var etu = new EtudiantImpl(1, "Hefyen", "Zayd", 21);
etu.afficherInfo();
// Partie 5 - Concepts avancés
// 1) Types génériques : fonction qui retourne un tableau de valeurs du même type
function creerTableau() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return items;
}
var nums = creerTableau(1, 2, 3, 4);
var noms = creerTableau("Zayd", "Hefyen");
console.log("nums:", nums, "noms:", noms);
function afficherId(id, tag) {
    console.log("ID".concat(tag ? " (" + tag + ")" : "", ":"), id);
}
// Enumérations (enum)
var Niveau;
(function (Niveau) {
    Niveau[Niveau["Debutant"] = 1] = "Debutant";
    Niveau[Niveau["Intermediaire"] = 2] = "Intermediaire";
    Niveau[Niveau["Avance"] = 3] = "Avance";
})(Niveau || (Niveau = {}));
var niveauEtudiant = Niveau.Intermediaire;
console.log("Niveau étudiant:", Niveau[niveauEtudiant]);
// 2) commentaires: 
// - On utilise generics pour garder la réutilisabilité et la sécurité des types.
// - Les unions permettent d'accepter plusieurs formes de données.
// - Les enums facilitent la lecture et l'usage de constantes nommées.
