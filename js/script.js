const texteAudio = document.getElementById('texte-audio');
const audioDescription = document.getElementById('audio-description');

texteAudio.addEventListener('mouseup', function() {
  const selectedText = window.getSelection().toString();
  if (selectedText.trim() !== '') {
    // Mettre à jour la source audio avec l'audio description appropriée
    audioDescription.src = './source/Clapping Sound Effects.mp3';
    audioDescription.load();
    audioDescription.play();
  }
});