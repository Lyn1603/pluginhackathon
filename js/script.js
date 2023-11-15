document.addEventListener('mouseup', (event) => {

//appel d'api 
const url = 'https://play.ht/api/v2/tts/stream'
const options = {
    method: 'POST',
    headers: {
      accept: 'audio/mpeg',
      'content-type': 'application/json',
      AUTHORIZATION: 'eBSxpzLdEtTa733qYlZwq85EfHS2',
      'X-USER-ID': '2d7f16875a6b4de9ad1c8f3cc1b10bf0'
    },
    body: JSON.stringify({
      text: 'Hey there, I am calling in regards to the car you enquired yesterday."',
      voice: 'larry',
      quality: 'draft',
      output_format: 'mp3'
    })
  };

    
  //recuperation de la sélection
  const selectedText = window.getSelection().toString();

  //Vérification du text selectionner 
  if (selectedText !== '') {
      
      //récupérer l'id du texte sélectionné
      const targetElement = event.target;
      const id = targetElement.id;

      popUp(id);
      
      //Target du bouton
      const targetBtn = document.getElementById('popupBtn');
      
      //Verif si le bouton existe bien + event si bouton appuyé
      if (targetBtn){
          targetBtn.addEventListener('mousedown',() => {
            fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
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


