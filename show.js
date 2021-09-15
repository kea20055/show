/*-------------------VARIABLES--------------- */
const header = document.querySelector('header');
const darkMode = document.querySelector('.black');
const changeColor = document.querySelector('.color');
const paleta = document.querySelector('.paleta');
const Yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const purple = document.querySelector('.purple');
const bars = document.querySelector(".bars");
const menu = document.querySelector(".responsive_menu");


/*---------------------MENU RESPONSIVE-----------------------*/
bars.addEventListener("click", ()=>{
    menu.classList.toggle("res_menu");
});
/*-----------------------------------------------------------*/
/*---------FUNCION REVELAR ELEMENTOS----------*/
function reveal(){
    window.addEventListener("scroll", ()=>{
        let contenedor = document.querySelector('.container');
        contenedor.classList.toggle("stick", window.scrollY > 100);
    })
}
reveal();

/*-----------------presionar tecla---------------*/
function tecla(){
    if(color === false){
        paleta.addEventListener("keypress", color);
    }else{
        paleta.addEventListener("keypress", color);
    }
}
/*----------------------------------------------*/
/*----------------MODO OSCURO------------------*/
darkMode.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
});

/*-----------FUNCION DE LA PALETA-------------*/
function color(){
    changeColor.addEventListener("click", ()=>{
        paleta.classList.toggle("db");
    })
}
color();
/*-------------FUNCIONES DE CAMBIOS DE COLORES---------------*/
function changeYellow(){
    Yellow.addEventListener("click", ()=>{
        document.body.classList.toggle("amarillo");
    })
}

function changeBlue(){
    blue.addEventListener("click", ()=>{
        document.body.classList.toggle("azul");
    })
}

function changeGreen(){
    green.addEventListener("click", ()=>{
        document.body.classList.toggle("verde");
    })
}

function changeRed(){
    red.addEventListener("click", ()=>{
        document.body.classList.toggle("rojo");
    })
}

function changePurple(){
    purple.addEventListener("click", ()=>{
        document.body.classList.toggle("morado");
    })
}

if(changeRed === true){
    changeRed();
}else{
    changeRed();
}

if(changeYellow === true){
    changeYellow();
}else{
    changeYellow();
}

if(changeBlue === true){
    changeBlue();
}else{
    changeBlue();
}

if(changeGreen === true){
    changeGreen();
}else{
    changeGreen();
}

if(changePurple === true){
    changePurple();
}else{
    changePurple();
}