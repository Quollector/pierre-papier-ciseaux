// Déclaration de variables
const user_form = document.querySelector('#user_entry');
const display_name_player = document.querySelector('#fill_name_user');
const div_player = document.querySelector('.result-user');
const div_cpu = document.querySelector('.result-computer');
const txt_result = document.querySelector('#txt_result');
const btn_play = document.querySelector('#play-button');
const btn_restart = document.querySelector('#restart-button');

// Fonctions de résultat de jeu
function egalite(){
    div_player.style.backgroundColor = "#3F88C5";
    div_cpu.style.backgroundColor = "#3F88C5";
    txt_result.innerHTML = "MATCH NUL !";
}

function victoire(){
    div_player.style.backgroundColor = "#7FD8BE";
    div_cpu.style.backgroundColor = "#D16D82";
    txt_result.innerHTML = "VICTOIRE !";
}

function defaite(){
    div_player.style.backgroundColor = "#D16D82";
    div_cpu.style.backgroundColor = "#7FD8BE";
    txt_result.innerHTML = "DÉFAITE !";
}

// Fonction du bouton play
function play(){

    // Déclaration des variables
    let user_name = document.querySelector('#user_name').value.toUpperCase();
    let user_skin = document.querySelector('[name=user-skin]:checked').value;
    let user_choice = parseInt(document.querySelector('#user_choice').value);
    let computer_skin = Math.floor(Math.random() * 4);
    let computer_choice = Math.floor(Math.random() * 3);

    // Tableaux de peau

    let skin_color = [
        ['✊','✋','✌️'],
        ['✊🏻','✋🏻','✌🏻'],
        ['✊🏽','✋🏽','✌🏽'],
        ['✊🏿','✋🏿','✌🏿']
    ];



    // Fonction d'affichage de peau
    function skin_display(){
        document.querySelector('#illu_player_choice').innerHTML = skin_color[user_skin][user_choice];
        document.querySelector('#illu_cpu_choice').innerHTML = skin_color[computer_skin][computer_choice];
    }




    // Action suivant le résultat
    if(user_choice == computer_choice){
        egalite();        
        skin_display();
    }
    else if((user_choice == 0 && computer_choice == 1) || (user_choice == 1 && computer_choice == 2) ||(user_choice == 2 && computer_choice == 3)){
        defaite();        
        skin_display();
    }
    else{
        victoire();        
        skin_display();
    }

    // Affichage du nom du joueur
    display_name_player.innerHTML = user_name;
}

// Actions boutons
btn_play.addEventListener('click', function(){
    play();

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
