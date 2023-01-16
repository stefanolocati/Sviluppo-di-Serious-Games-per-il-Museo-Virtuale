(function($) {
  
  $.fn.hangman = function(hangmanData, language) {

    //Funzione che smista i dati in tre vettori
    function loadClues(){
      for (i=0; i<hangmanData.length; i++){
        hangmanAnswers.push(hangmanData[i]['answer'])
        hangmanClues.push(hangmanData[i]['clue'])
        hangmanLinks.push(hangmanData[i]['link'])
      }
    }


    //Caricamento degli elementi HTML in base alla lingua selezionata
    if (language =='It') {
      $('#hangmancontainer').append(
          '<h1 class="text-center">Impiccato</h1>' +
          '<input type="image" class="btnStyle" id="btnMenu" src="images/settings.png" alt="Impostazioni"><br>' +
          '<input type="image" class="btnStyle" onClick = "blindMode()" id="btnBlindMode" src="images/blindoff.png" style="display:none; margin-top: 15px;" alt="Modalità non vedenti">' +
          '<input type="image" class="btnStyle" onClick = "audioMode()" id="btnAudioOn" src="images/soundon.png" style="display:none; margin-top: 15px;" alt="Disattiva suono"><br>' +
          '<select onchange="changeLang()" id="optChangeLang" style="display:none" alt="Cambia Interprete"></select><br>' +
          '<div id="myRangeContainer" style="display:none"><label for="myRange">Velocità</label><br><input type="range" min="1" max="200" value="100" class="slider" id="myRange"></div>'+
          '<div class="float-right" id="parMistakes">Tentativi sbagliati: <span id="mistakes">0</span> di <span id="maxWrong"></span></div>' +
          '<div class="text-center">' +
          '<img id="hangmanPic" src="images/0.jpg" alt="Immagine dell\'impiccato">' +
          '<p id="clueSpotlight" alt="" tabindex=0></p>' +
          '<p id="wordSpotlight" alt="">The word to be guessed goes here</p><a href="#" id="aLinkImage" target="_blank"><img src="images/link.png" id="linkImage" hidden></a></div>' +
          '<p id="blindWordSpotlight" alt="" hidden>The word to be guessed goes here</p></div>' +
          '<div id="keyboard"></div>' +
          '<input type="button" class="btnStyle" id="btnHangmanBack" value="Indietro">' +
          '<button class="btnStyle" onClick="reset(), remindClue()" id="btnNext">Prossimo</button><br>' +
          '<h2 className="content1"></h2>' +
          '</div>' +
          '<input type="button" id="parLang" value="' + language + '" hidden>'
      )
    }else{
      $('#hangmancontainer').append(
          '<h1 class="text-center">Hangman</h1>' +
          '<input type="image" class="btnStyle" id="btnMenu" src="images/settings.png" alt="Settings"><br>' +
          '<input type="image" class="btnStyle" onClick = "blindMode()" id="btnBlindMode" src="images/blindoff.png" style="display:none; margin-top: 15px;" alt="Blind Mode">'+
          '<input type="image" class="btnStyle" onClick = "audioMode()" id="btnAudioOn" src="images/soundon.png" style="display:none; margin-top: 15px;" alt="Disable Sounds"><br>' +
          '<select onchange="changeLang()" id="optChangeLang" style="display:none" alt="Change Interpreter"></select>' +
          '<div id="myRangeContainer" style="display:none"><label for="myRange">Velocità</label><br><input type="range" min="1" max="200" value="100" class="slider" id="myRange"></div>'+
          '<div class="float-right">Wrong attempts: <span id="mistakes">0</span> of <span id="maxWrong"></span></div>' +
          '<div class="text-center">' +
          '<img id="hangmanPic" src="images/0.jpg" alt="Image of Hangman">' +
          '<p id="clueSpotlight" alt="" tabindex=0></p>' +
          '<p id="wordSpotlight" alt="">The word to be guessed goes here</p><a href="#" id="aLinkImage" target="_blank"><img src="images/link.png" id="linkImage" hidden></a></div>' +
          '<p id="blindWordSpotlight" alt="" hidden>The word to be guessed goes here</p></div>' +
          '<div id="keyboard"></div>' +
          '<input type="button" class="btnStyle" id="btnHangmanBack" value="Back">' +
          '<button class="btnStyle" onClick="reset(), remindClue()" id="btnNext">Next</button><br>' +
          '<h2 className="content1"></h2>' +
          '</div>' +
          '<input type="button" id="parLang" value="' + language + '" hidden>'
      )
    }

    $('hangmancontainer').ready(function(){
      loadLang();
    })

    //Funzione per tornare alla sezione principale nascondendo e mostrando le sezioni
    $('#btnHangmanBack').click(function(){
      reset();
      $('#puzzle-wrapper').remove()
      $('#cluescontainer').remove()
      $('#hangmancontainer').remove()
      $('body').append('<div id="puzzle-wrapper"></div>')
      $('body').append('<div id="hangmancontainer" hidden></div>')
      $('#hangmancontainer').hide();
      $('body').css('font-weight', 'normal')
      $('#divIntro').show()
      hangmanAnswers = []
      hangmanClues = []
      settingsMode = 1;
      blindOn = false;
      audioOn = true;
    });

    //Funzione che mostra i parametri di modifica della modalità per non vedenti
    $('#btnBlindMode').click(function(){

      var dispositivo = navigator.userAgent.match(/(iPhone|iPad|Android)/);
      if (dispositivo == null){
        $('#keyboard').toggle()
      }

      $('#clueSpotlight').attr('alt', clue)
      //$('#wordSpotlight').toggle()
      //$('#blindWordSpotlight').toggle()
      if (settingsMode == 0) {
        $('#myRangeContainer').toggle(400);
      }

    })

    //Funzione che mostra le impostazioni
    $('#btnMenu').click(function(){
      if (settingsMode == 0){
        settingsMode = 1;
      }else{
        settingsMode = 0;
      }
      $('#btnAudioOn').toggle(400);
      $('#btnBlindMode').toggle(400);
      $('#optChangeLang').toggle(400);
      if (blindOn == true){
        $('#myRangeContainer').toggle();
      }

    });

    //Funzione per le shortcut da tastiera e per la digitazione delle lettere da tastiera
    $(document).keyup(function (event) {
        if (event.keyCode == 187){
          $('#btnNext').click()
        }else if (event.keyCode == 189){
          $('#btnHangmanBack').click()
        }else if(event.keyCode == 49){
          $('#btnBlindMode').click()
        }else if(event.keyCode==50){
          $('#btnAudioOn').click()
        }else if(event.keyCode==190){
          remindClue()
        }

        char = String.fromCharCode(event.keyCode).toLowerCase()

        if (document.getElementById(char).getAttribute('disabled') != 'true'){
          if (mistakes != maxWrong){
            handleGuess(char)
          }
        }
    });

    document.getElementById('maxWrong').innerHTML = maxWrong;

    loadClues();
    randomWord();
    generateButtons();
    guessedWord();
  }

})(jQuery)

var answerCounter = 0;

var settingsMode = 1;

var hangmanAnswers = []
var hangmanClues = []
var hangmanLinks = []

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

//Funzione per resettare le impostazioni ad ogni nuova parola
function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = 'images/0.jpg';
  document.getElementById('hangmanPic').style.opacity ='1';
  document.getElementById('linkImage').style.display ='none';

  if (hangmanAnswers.length == 0){
    if (document.getElementById('parLang').value == 'It') {
      document.getElementById('wordSpotlight').innerHTML = '';
      document.getElementById('clueSpotlight').innerHTML = '';
      document.getElementById('keyboard').innerHTML = 'Parole terminate!';
      document.getElementById('blindWordSpotlight').innerHTML = 'Parole terminate!';
      document.getElementById('btnNext').disabled = 'true';
      document.getElementById('btnNext').style.display = 'none';
    }else{
      document.getElementById('wordSpotlight').innerHTML = '';
      document.getElementById('clueSpotlight').innerHTML = '';
      document.getElementById('keyboard').innerHTML = 'Finished words!';
      document.getElementById('blindWordSpotlight').innerHTML = 'Finished words!';
      document.getElementById('btnNext').disabled = 'true';
      document.getElementById('btnNext').style.display = 'none';

    }
  }else {
    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
  }
  window.speechSynthesis.cancel()
}

//Funzione che genera i pulsanti della tastiera virtuale
function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btnStyleTrans"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

//Funzione che carica una parola a caso tra quelle disponibili
function randomWord() {
  randomNumber = Math.random()
  answer = hangmanAnswers[Math.floor(randomNumber * hangmanAnswers.length)];
  clue = hangmanClues[Math.floor(randomNumber * hangmanClues.length)];
  link = hangmanLinks[Math.floor(randomNumber * hangmanLinks.length)];
  var randomIndex = Math.floor(randomNumber * hangmanAnswers.length)
  hangmanAnswers.splice(randomIndex, 1)
  hangmanClues.splice(randomIndex, 1)
  hangmanLinks.splice(randomIndex, 1)
  document.getElementById('aLinkImage').href = link
}

//Funzione che gestisce l'inserimento della lettera
function handleGuess(chosenLetter) {
  chosenLetter = chosenLetter.toLowerCase()
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);
  if (answer.toLowerCase().indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

//Funzione per gestire una lettera corretta
function guessedWord() {
  //wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  wordStatus = '';
  for (i=0; i<answer.length; i++){
    if (guessed.indexOf(answer[i].toLowerCase()) >= 0){
      wordStatus += answer[i].toLowerCase();
    }else{
      if (answer[i] == ' '){
        wordStatus += '&nbsp;'
      }else{
        wordStatus += ' _ '
      }
    }
  }
  let clueStatus = clue + ':';
  let wordStatusSplitted = ''
  for (x=0; x<wordStatus.length; x++){
    if (wordStatus[x]!= ' '){
      wordStatusSplitted += wordStatus[x];
    }
  }
  wordStatusSplitted = wordStatusSplitted.replace("&nbsp;", " ");
  document.getElementById('blindWordSpotlight').innerHTML = '';
  var accounting = 0;
  for (i=0; i<answer.length; i++) {
    if (wordStatusSplitted[i] == '_') {
      accounting += 1;
      if (i == answer.length - 1) {
        if(document.getElementById('parLang').value == 'It') {
          if (accounting == 1) {
            document.getElementById('blindWordSpotlight').innerHTML += ' una lettera, ';
          } else {
            document.getElementById('blindWordSpotlight').innerHTML += ' ' + accounting + ' lettere, ';
          }
        }else{
          if (accounting == 1) {
            document.getElementById('blindWordSpotlight').innerHTML += ' one letter, ';
          } else {
            document.getElementById('blindWordSpotlight').innerHTML += ' ' + accounting + ' letters, ';
          }
        }
      }
    }else{
      if (accounting !=0){
        if (document.getElementById('parLang').value == 'It') {
          if (accounting == 1) {
            document.getElementById('blindWordSpotlight').innerHTML += ' una lettera, ';
          } else {
            document.getElementById('blindWordSpotlight').innerHTML += ' ' + accounting + ' lettere, ';
          }
        }else{
          if (accounting == 1) {
            document.getElementById('blindWordSpotlight').innerHTML += ' one letter, ';
          } else {
            document.getElementById('blindWordSpotlight').innerHTML += ' ' + accounting + ' letters, ';
          }
        }
      }
      if(wordStatusSplitted[i] == ' '){
        if (document.getElementById('parLang').value == 'It') {
          document.getElementById('blindWordSpotlight').innerHTML += ' spazio, ';
        }else{
          document.getElementById('blindWordSpotlight').innerHTML += ' space, ';
        }
      }else{
        document.getElementById('blindWordSpotlight').innerHTML += answer[i] + ',';
      }

      accounting = 0;
    }
  }

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
  document.getElementById('clueSpotlight').innerHTML = clueStatus;
}

//Funzione che aggiorna gli errori nell'apposita sezione
function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

//Funzione che aggiorna l'immagine dell'impiccato
function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = 'images/' + mistakes + '.jpg';
}

//Fuznione che controlla se la risposta è stata indovinata
function checkIfGameWon() {
  wordStatus = wordStatus.replace(/\s/g, '');
  if (wordStatus.replace('&nbsp;', '') === answer.replace(/\s/g, '').toLowerCase()) {
    document.getElementById("linkImage").style.display = 'inline'
    document.getElementById('hangmanPic').src = 'images/win.png';
    document.getElementById('hangmanPic').style.opacity ='0.5';
    if (blindOn == true) {
      window.speechSynthesis.cancel()
      if (document.getElementById('parLang').value == 'It') {
        tts('Complimenti, la parola corretta era: ' + document.getElementById('wordSpotlight').innerHTML.replace("&nbsp;", " "), voiceIndex)
      }else{
        tts('Congratulations, the correct word was: ' + document.getElementById('wordSpotlight').innerHTML.replace("&nbsp;", " "), voiceIndex)
      }
      document.getElementById('blindWordSpotlight').innerHTML = document.getElementById('blindWordSpotlight').innerHTML.replaceAll(',', '')
    }
    if (audioOn == true) {
      var audio = new Audio('sounds/nextlevel.wav');
      audio.play();
    }
    for (i=97;i<123; i++) {
      let characterCode = String.fromCharCode(i)
      document.getElementById(characterCode).disabled = true;
    }
  }else{
    if (audioOn == true){
      var audio = new Audio('sounds/win.wav');
      audio.play();
    }
    if (blindOn == true){
      window.speechSynthesis.cancel()
      tts(document.getElementById('blindWordSpotlight').innerHTML, voiceIndex)
    }
  }
}

//Funzione che controlla se i tentativi sono terminati
function checkIfGameLost() {
  if (mistakes === maxWrong) {
    if (document.getElementById('btnLanguage').value == 'It') {

      if (blindOn == true) {
        window.speechSynthesis.cancel()
        tts('Hai perso, la parola corretta era: ' + answer, voiceIndex)
      }

      document.getElementById('wordSpotlight').innerHTML = 'La risposta era: ' + answer;
      document.getElementById('blindWordSpotlight').innerHTML = 'Hai perso! La risposta era: ' + answer;
      document.getElementById('keyboard').innerHTML = 'Hai perso!!!';
    }else{
      if (blindOn == true) {
        window.speechSynthesis.cancel()
        tts('You lost, the correct word was: ' + answer, voiceIndex)
      }
      document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
      document.getElementById('blindWordSpotlight').innerHTML = 'You lost! The answer was: ' + answer;
      document.getElementById('keyboard').innerHTML = 'You lost!!!';
    }
    if (audioOn == true) {
      var audio = new Audio('sounds/loselevel.wav');
      audio.play();
    }
  }else{
    if (audioOn == true){
      var audio = new Audio('sounds/lose.wav');
      audio.play();
    }
    setTimeout(remindError(),90)

  }
}

// PARTE DI CODICE RELATIVA AL TEXT TO SPEECH --------------------------------------------------------->

window.onload = function () {
  speak(" ");
};

const speak = (sentance) => {

  const tts = new SpeechSynthesisUtterance(sentance);
  const voices = speechSynthesis.getVoices();
  tts.voice = voices[1]; //changing the voice
  tts.rate = 1;
  tts.pitch = 1; // 0 = deep voice

  window.speechSynthesis.speak(tts);
};

var audioOn = true;
var blindOn = false;

var voiceIndex = 0;

//Funzione che carica le voci della sintesi vocale nella casella di selezione in base alla lingua selezionata
async function loadLang(){
  const voices = speechSynthesis.getVoices();
  for (i=0; i<voices.length; i++){
    if (document.getElementById('parLang').value == 'It') {
      if (voices[i].name.substring(voices[i].name.length - 7) == '(Italy)' || voices[i].name.substring(voices[i].name.length - 8) == 'italiano') {
        var opt = document.createElement('option');
        opt.value = voices[i].name;
        opt.innerHTML = voices[i].name;
        document.getElementById('optChangeLang').appendChild(opt);
        voiceIndex = i;
        opt.setAttribute('selected', '')
      }
    }else{
      if (voices[i].name.substring(voices[i].name.length - 15) == '(United States)' || voices[i].name.substring(voices[i].name.length - 16) == '(United Kingdom)' || voices[i].name.substring(voices[i].name.length - 7) == 'English') {
        var opt = document.createElement('option');
        opt.value = voices[i].name;
        opt.innerHTML = voices[i].name;
        document.getElementById('optChangeLang').appendChild(opt);
        voiceIndex = i;
        opt.setAttribute('selected', '')
      }
    }
  }
}

//Funzione che permette di fare la sintesi vocale
async function tts(message, indice) {
  const speech = new SpeechSynthesisUtterance();
  const voices = speechSynthesis.getVoices();

  speech.voice = voices[indice]

  speech.lang = 'it'
  speech.volume = 2;

  speech.rate = 1.0 * document.getElementById('myRange').value/100;

  speech.pitch = 0.8; //not so deep
  speech.text = message;

  window.speechSynthesis.speak(speech);
}

//Funzione che abilita/disabilita i suoni
function audioMode(){
  if (audioOn == true){
    audioOn = false;
    document.getElementById('btnAudioOn').src = 'images/soundoff.png'
    if (document.getElementById('parLang').value == 'It') {
      document.getElementById('btnAudioOn').alt = 'Suoni disattivati'
      if(blindOn==true) {
        tts('suoni disattivati', voiceIndex)
      }
    }else{
      document.getElementById('btnAudioOn').alt = 'Sound disabled'
      if(blindOn==true) {
        tts('sounds disbled', voiceIndex)
      }
    }
  }else{
    audioOn = true;
    document.getElementById('btnAudioOn').src = 'images/soundon.png'
    if (document.getElementById('parLang').value == 'It') {
      document.getElementById('btnAudioOn').alt = 'Suoni attivati'
      if(blindOn==true) {
        tts('suoni attivati', voiceIndex)
      }
    }else{
      document.getElementById('btnAudioOn').alt = 'Sound enabled'
      if(blindOn==true) {
        tts('sounds enabled', voiceIndex)
      }

    }
  }
}

//Funzione che abilita/disabilita la modalità per utenti con disabilità
function blindMode(){
  if (blindOn == true){
    blindOn = false;
    document.getElementById('btnBlindMode').src = 'images/blindoff.png'
    if (document.getElementById('parLang').value == 'It') {
      document.getElementById('btnBlindMode').alt = 'modalità non vedenti disattivata'
    }else{
      document.getElementById('btnBlindMode').alt = 'blind mode off'
    }

  }else{
    blindOn = true;
    document.getElementById('btnBlindMode').src = 'images/blindon.png'
    if (document.getElementById('parLang').value == 'It'){
      document.getElementById('btnBlindMode').alt = 'modalità non vedenti attiva'
    }else{
      document.getElementById('btnBlindMode').alt = 'blind mode on'
    }
    remindClue();
  }
  if (blindOn == false){
    $('body').css('font-weight', 'normal')
    $('#parMistakes').css('font-size', '1em')
    $('#wordSpotlight').css('font-size', '1em')
    $('#clueSpotlight').css('font-size', '1em')
  }else{
    $('body').css('font-weight', 'bold')
    $('#parMistakes').css('font-size', '1.4em')
    $('#wordSpotlight').css('font-size', '1.4em')
    $('#clueSpotlight').css('font-size', '1.4em')
  }
}

//Funzione che ricorda i tentativi sbagliati ancora possibili tramite sintesi vocale
function remindError(){
  if (blindOn == true) {
    window.speechSynthesis.cancel()
    if (document.getElementById('parLang').value == 'It') {
      if (mistakes < 5) {
        tts("Puoi fare ancora " + (6 - parseInt(mistakes)) + " errori", voiceIndex)
      } else {
        tts("Puoi fare ancora " + (6 - parseInt(mistakes)) + " errore", voiceIndex)
      }
    }else{
      if (mistakes < 5) {
        tts("You can still make " + (6 - parseInt(mistakes)) + " mistakes", voiceIndex)
      } else {
        tts("You can still make " + (6 - parseInt(mistakes)) + " mistakes", voiceIndex)
      }
    }
  }
}

//Funzione che ricorda la definizione
function remindClue(){
  if (blindOn == true){
    window.speechSynthesis.cancel()
    if (hangmanAnswers.length >= 0) {
      if (hangmanAnswers.length == 0){
        answerCounter +=1
      }
      if (answerCounter<=1) {
        tts(clue, voiceIndex);
      }
    }
    tts(document.getElementById('blindWordSpotlight').innerHTML,voiceIndex)
  }
}

//Funzione che permette di cambiare voce della sintesi vocale
function changeLang(){
  var langName = document.getElementById('optChangeLang').value
  const voices = speechSynthesis.getVoices();
  for (i=0; i<voices.length; i++){
    if (voices[i].name == langName) {
      voiceIndex = i
    }
  }
}