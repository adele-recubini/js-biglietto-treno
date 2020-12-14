// calcolo del prezzo del biglietto del treno
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65

// creo due variabili e le trasformo con il parseInt stringhe in interi

var numberKm = parseInt(prompt('quanti km farai?'));
// var age = parseInt(prompt('quanti anni hai?'));

var outputBox = document.getElementById('output');

var price = numberKm * 0.21;
outputBox.append(price);
