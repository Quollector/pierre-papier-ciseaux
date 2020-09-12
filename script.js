// Déclaration de variables
const user_form = document.querySelector('#user_entry');
const display_name_player = document.querySelector('#fill_name_user');
const div_player = document.querySelector('.result-user');
const div_cpu = document.querySelector('.result-computer');
const txt_result = document.querySelector('#txt_result');
const btn_play = document.querySelector('#play-button');
const btn_restart = document.querySelector('#restart-button');

// Actions boutons
btn_play.addEventListener('click', function(){

    const game = new newGame();

    gsap.timeline()
    .to('#user_entry',
    {
        y: '100vh',
        ease: 'back.in',
        duration: 1
    })
    .fromTo('#wrapper-result', 
    {opacity: 0},
    {opacity: 1, display: 'flex'});



});

btn_restart.addEventListener('click', function(){
    gsap.timeline()
    .to('#wrapper-result',
    {
        opacity: 0,
        display: 'none'
    })
    .to('#user_entry', 
    {
        y: '0vh', 
        ease: 'back.out',
        duration: 1
    })
});

// Création de la classe
class newGame{
    constructor(){
        this.skin_color = [
            ['✊','✋','✌️'],
            ['✊🏻','✋🏻','✌🏻'],
            ['✊🏽','✋🏽','✌🏽'],
            ['✊🏿','✋🏿','✌🏿']
        ];
        
        // Déclaration des variables
        this.user_name = document.querySelector('#user_name').value.toUpperCase();
        this.user_skin = document.querySelector('[name=user-skin]:checked').value;
        this.user_choice = parseInt(document.querySelector('#user_choice').value);
        this.computer_skin = Math.floor(Math.random() * 4);
        this.computer_choice = Math.floor(Math.random() * 3);

        // Déclaration des fonctions
        this.skin_display();
        this.play();
    }

    // Fonction d'affichage de peau
    skin_display(){
        document.querySelector('#illu_player_choice').innerHTML = this.skin_color[this.user_skin][this.user_choice];
        document.querySelector('#illu_cpu_choice').innerHTML = this.skin_color[this.computer_skin][this.computer_choice];
    }

    // Fonction du bouton play
    play(){      

        // Action suivant le résultat
        if(this.user_choice == this.computer_choice){
            div_player.style.backgroundColor = "#3F88C5";
            div_cpu.style.backgroundColor = "#3F88C5";
            txt_result.innerHTML = "MATCH NUL !"; 
        }
        else if((this.user_choice == 0 && this.computer_choice == 1) || (this.user_choice == 1 && this.computer_choice == 2) ||(this.user_choice == 2 && this.computer_choice == 3)){
            div_player.style.backgroundColor = "#D16D82";
            div_cpu.style.backgroundColor = "#7FD8BE";
            txt_result.innerHTML = "DÉFAITE !";
        }
        else{
            div_player.style.backgroundColor = "#7FD8BE";
            div_cpu.style.backgroundColor = "#D16D82";
            txt_result.innerHTML = "VICTOIRE !";
        }

        // Affichage du nom du joueur
        display_name_player.innerHTML = this.user_name;
    }
}
