document.addEventListener('mouseup', (event) => {
    //recuperation de la sélection
    const selectedText = window.getSelection().toString();

    //Vérification du text selectionner 
    if (selectedText !== '') {
        //récupérer l'id du texte sélectionné
        const targetElement = event.target;
        const id = targetElement.id;
        //récupération de l'id de la balise sélectionné
        popUp(id);
        //Target du bouton
        const targetBtn = document.getElementById('popupBtn');
        //Verif si le bouton existe bien + event si bouton appuyé
        if (targetBtn){
            targetBtn.addEventListener('mousedown',() => {
                //Api, fetch
                console.log('gg');
            })
        } else {
            console.log('pas de bouton')
        }
    } else {
        console.log("Aucune sélection d'élément effectuée.");
    }
});

//fonction pour afficher la pop up 
function popUp (selectedId) {
    console.log(selectedId);
    //donnez la classe a la target du selectedText
    const targetElement = document.getElementById(selectedId);
    targetElement.classList.add("popup");
    //affichage de la pop up
    const spanBtn = document.createElement("span");
    spanBtn.innerHTML = '<button type="button" id="popupBtn"><img src="https://www.svgrepo.com/show/521855/sound.svg" alt="" srcset="" id="imgBtn"/></button>';
    spanBtn.className = 'popuptext';
    spanBtn.id = 'myPopup';
    document.getElementById(selectedId).appendChild(spanBtn);
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
