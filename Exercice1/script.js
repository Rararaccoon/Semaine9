$liste = document.getElementById("liste");
$prenom = document.getElementById("prenom");
$nom = document.getElementById("nom");
$numero = document.getElementById("numero");
$ajouter = document.getElementById("ajouter");
$search = document.getElementById("search");
$rechercher = document.getElementById("rechercher");

contacts = [{
    prenom: "Roberto",
    nom: "Carpaccio",
    numero: "0607080910"
}, {
    prenom: "Gertrude",
    nom: "Pichon",
    numero: "0102030405"
}];

function texteContact(contact) {
    return contact.prenom + " " + contact.nom + " (" + contact.numero + ")";
}

function afficherListe() {
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    contacts.push({
        prenom: $prenom.value,
        nom: $nom.value,
        numero: $numero.value
    });
    afficherListe();
}

function rechercher(){
	search = $search.value;
	elements="";
	for (i = 0; i < contacts.length; i++) {
		if (contacts[i].prenom == search || contacts[i].nom == search || contacts[i].numero == search) {
			elements += "<li>" + texteContact(contacts[i]) + "</li>";
		}
	}
	$resultats.innerHTML = elements;
}

$ajouter.onclick = ajouter;
$rechercher.onclick = rechercher;
afficherListe();