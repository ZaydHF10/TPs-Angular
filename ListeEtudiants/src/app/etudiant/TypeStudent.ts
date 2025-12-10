export interface Student {
id: number;
name: string;
lastname ?: string;
average ?: number;
classe ?:string
}
/*export

Rôle : permet de rendre quelque chose accessible depuis un autre fichier.
interface

Rôle : définit un contrat ou une structure d’objet en TypeScript.

On l’utilise pour décrire les types d’un objet.

Différence entre ces déclarations de propriété
Syntaxe	:          Signification:
name: string  || 	La propriété name doit être initialisée ou passée dans le constructeur.
name!: string ||	Le point d’exclamation ! indique à TypeScript : "Je promets que name sera initialisé plus tard" (utile pour éviter l’erreur strictPropertyInitialization).
name?: string ||	Le point d’interrogation ? rend la propriété optionnelle. L’objet peut ou non avoir name.

*/