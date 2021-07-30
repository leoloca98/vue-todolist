/*

#DESCRIZIONE
Rifare l'esercizio della to do list come fatto assieme in classe:
 - Stampare in pagina un item per ogni elemento contenuto in un array|
 - Ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
 - Predisporre un input per aggiungere un nuovo item alla lista: ciccando su un pulsante, il testo digitato viene aggiunto alla lista.

 BONUS 1: Fare un controllo di validazione per non aggiungere degli item vuoti.
 BONUS 1-1: Fae apparire un messaggio a schermo quando non si hanno più task.  
* BONUS 2: Dedicarsi alla parte grafica aggiungendo un tocco personale e gestendo anche il mobile.

*/

console.log('Vue is ready', Vue);                   //Lo uso solo per controllare se è davvero attivo

Vue.config.devtools = true;                         //Attivare il tool di Vue sull'ispector

const toDoList = new Vue({
    el: '#toDoList',
    data: {
        newTask: '',
        showInput: true,
        tasks: [                                    //Creo un array delle cose da fare (a cui toglieremo/aggiungeremo altre task)
            'Take the dog out',
            'Go shopping',
            'Cooking for the brothers',
            'Finish the exercises',
        ],
    },
    methods: {
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push(this.newTask);
                this.toggleInput();
            } else {
                this.newTask = '';                  //Azzero sempre il campo di scrittura, anche se non si ha messo niente
            }
        },
        toggleInput() {
            this.showInput = !this.showInput;
            this.newTask = '';                      //Azzero sempre il campo di scrittura, anche se non si ha messo niente
        },
    },
});