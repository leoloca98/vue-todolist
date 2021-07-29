/*

#DESCRIZIONE
Rifare l'esercizio della to do list come fatto assieme in classe:
 - Stampare in pagina un item per ogni elemento contenuto in un array|
| - Ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
| - Predisporre un input per aggiungere un nuovo item alla lista: ciccando su un pulsante, il testo digitato viene aggiunto alla lista.

* BONUS 1: Fare un controllo di validazione per non aggiungere degli item vuoti.
* BONUS 2: Dedicarsi alla parte grafica aggiungendo un tocco personale e gestendo anche il mobile.

*/

console.log('Vue is ready', Vue);           //Lo uso solo per controllare se è davvero attivo

Vue.config.devtools = true;                 //Attivare il tool di Vue sull'ispector

const toDoList = new Vue({
    el: '#toDoList',
    data: {
        tasks: [                            //Creo un array delle cose da fare (a cui toglieremo/aggiungeremo altre task)
            'Portare fuori il cane',
            'Andare a far la spesa',
            'Cucinare per i fratelli',
            'Finire gli esercizi',
        ],
    },
    methods: {

    },
});