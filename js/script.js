window.addEventListener('mouseup', (event) => {
    //recuperation de la sélection
    const selectedText = window.getSelection().toString();

    //récupération de l'id de la balise sélectionné
    const targetElement = event.target;
    const balise = targetElement.tagName;
    const id = targetElement.id;

    //Vérification du text selectionner 
    if (selectedText !== '') {
        popUp(id);
    } else {
        console.log("Aucune sélection d'élément effectuée.");
    }
});

//fonction pour afficher la pop up 
function popUp (selectedId) {
    //donnez la classe a la target du selectedText
    const targetElement = document.getElementById(selectedId);
    targetElement.classList.add("popup");

    //affichage de la pop up
    const spanBtn = document.createElement("span");
    spanBtn.innerHTML = '<button type="button"><img src="https://www.svgrepo.com/show/521855/sound.svg" alt="" srcset="" id="imgBtn"/></button>';
    spanBtn.className = 'popuptext';
    spanBtn.id = 'myPopup';
    document.getElementById(selectedId).appendChild(spanBtn);
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
