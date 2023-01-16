(function ($) {
    $(function () {
        //Caricamento dei dati da file Json
        fetch("./js/data.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                dbData = data[0]
                dbCrossword = data[0]['crosswords'][0]

                language = 'It'
                countIta = 0;
                countEng = 0;


                for (i = 0; i < Object.keys(dbCrossword).length; i++) {
                    c = parseInt(i) + 1
                    if (dbCrossword['crossword'+c].slice(-1,dbCrossword['crossword'+c].length)[0]['lang'] == 'It'){
                        countIta +=1
                    }else if (dbCrossword['crossword'+c].slice(-1,dbCrossword['crossword'+c].length)[0]['lang'] == 'En'){
                        countEng +=1
                    }
                }

                // Generazione di N bottoni (con N = numero di cruciverba nel file Json)
                for (i = 0; i < Object.keys(dbCrossword).length; i++) {
                    c = parseInt(i) + 1

                    if (dbCrossword['crossword'+c].slice(-1,dbCrossword['crossword'+c].length)[0]['lang']=='It'){
                        $("#divButtons").append("<input type='button' class='btnIntro' value='Cruciverba' id='crossword" + c + "'></input>")
                    }else if (dbCrossword['crossword'+c].slice(-1,dbCrossword['crossword'+c].length)[0]['lang']=='En'){
                        $("#divButtons").append("<input type='button' class='btnIntro' value='Cruciverba' id='crossword" + c + "'></input>")
                    }

                    if(language != dbCrossword['crossword'+c].slice(-1,dbCrossword['crossword'+c].length)[0]['lang']){
                        $('#crossword'+c).hide()
                    }else{
                        $('#crossword'+c).show()
                    }
                }


                //$("#divButtons").append("<input type='button' value='Cruciverba' id='btnCrossword' class='btnStyle' alt='Cruciverba'>")
                $("#divButtons").append("<input type='button' value='Impiccato' id='btnHangman' class='btnStyle' alt='Impiccato'>");
                $("#divLanguage").append("<input type='button' value='It' id='btnLanguage' class='btnStyle' alt='Lingua'><br>");

                //Funzione che permette di cambiare il layout in base alla lingua selezionata
                $('#btnLanguage').click(function(){
                    if (this.value == 'It'){
                        this.value = 'En'
                        language = this.value

                        for (i = 0; i < Object.keys(dbCrossword).length; i++) {
                            c = parseInt(i) + 1
                            if(language != dbCrossword['crossword'+c].slice(-1,dbCrossword['crossword'+c].length)[0]['lang']){
                                $('#crossword'+c).hide()
                            }else{
                                $('#crossword'+c).show()
                            }
                        }

                        $('#btnHangman').val('Hangman')
                        /*if (document.getElementById('btnCrossword').value != 'Indietro') {
                            $('#btnCrossword').val('Crossword')
                        }else{
                            $('#btnCrossword').val('Back')
                        }*/
                        for (i=0; i<document.getElementsByClassName('btnIntro').length; i++){
                            document.getElementsByClassName('btnIntro')[i].value = document.getElementsByClassName('btnIntro')[i].value.replace('Cruciverba', 'Crossword')
                        }
                    }else{
                        this.value = 'It'
                        language = this.value

                        for (i = 0; i < Object.keys(dbCrossword).length; i++) {
                            c = parseInt(i) + 1
                            if(language != dbCrossword['crossword'+c].slice(-1,dbCrossword['crossword'+c].length)[0]['lang']){
                                $('#crossword'+c).hide()
                            }else{
                                $('#crossword'+c).show()
                            }
                        }

                        $('#btnHangman').val('Impiccato')
                        /*if (document.getElementById('btnCrossword').value != 'Back') {
                            $('#btnCrossword').val('Cruciverba')
                        }else{
                            $('#btnCrossword').val('Indietro')
                        }*/
                        for (i=0; i<document.getElementsByClassName('btnIntro').length; i++){
                            document.getElementsByClassName('btnIntro')[i].value = document.getElementsByClassName('btnIntro')[i].value.replace('Crossword', 'Cruciverba')
                        }
                    }

                })

                // Funzione che carica la struttura e il motore del cruciverba
                $('.btnIntro').click(function () {
                    var puzzleData = dbCrossword[this.id].slice(0,-1);
                    $('#puzzle-wrapper').crossword(puzzleData, document.getElementById('btnLanguage').value);
                })

                // Funzione che in base alle dimensioni dello schermo mostra/nasconde determinate sezioni HTML
                $(".btnIntro").click(function () {
                    mod = 1
                    $(".crosswordpuzzlecontainer").show();
                    $("#cluescontainer").fadeIn(1200, "linear");
                    if (window.innerWidth < 900) {
                        $("#puzzle-clues").hide();
                        $("#solution").hide();
                        $("#dropdownicon").show();
                    } else {
                        $("#puzzle-clues").show();
                        $("#solution").show();
                        $("#dropdownicon").hide();
                    }
                    $("#puzzle").fadeIn(1200, "linear");
                    $(".intro").hide();
                })

                //Controllo e caricamento dei dati dell'impiccato in base alla lingua selezionata
                $("#btnHangman").click(function () {
                    if (document.getElementById('btnLanguage').value == 'It'){
                        var hangmanData = dbData['hangman-it'];
                    }else{
                        var hangmanData = dbData['hangman-en'];
                    }

                    $('#hangmancontainer').hangman(hangmanData, document.getElementById('btnLanguage').value );
                    $("#hangmancontainer").show();
                    $(".intro").hide();
                })

                //Funzione che permette di aprire una sorta di menu al click del pulsante btnCrossword
                $("#btnCrossword").click(function () {
                    $('.btnIntro').toggle(400);
                    $('#btnHangman').toggle(400);

                    if (this.value == 'Cruciverba'){
                        this.value = 'Indietro'
                    }else if (this.value == 'Indietro'){
                        this.value = 'Cruciverba'
                    }else if (this.value == 'Crossword'){
                        this.value = 'Back'
                    }else if (this.value == 'Back'){
                        this.value = 'Crossword'
                    }
                })
            });
    })
})(jQuery)

