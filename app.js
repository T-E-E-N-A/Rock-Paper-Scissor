// var attempt = prompt("Enter attempts number!");
var ai = Math.ceil(Math.random()*(3));
console.log(ai);
var count=0;

const rock = document.querySelector('#rock1');
const ans = document.querySelector('#ans');
const paper = document.querySelector('#paper1');
const sci = document.querySelector('#sci1');
const show = document.querySelector('#count');
const reset = document.getElementById('reset');
const invert = document.getElementById('inversion');

function win1(){
    var ai = Math.ceil(Math.random()*(3));
    if(ai==1){
        ans.innerText = "Draw!";
    }else if(ai==2){
        ans.innerText = "You Lose! Computer Chose paper";
        count--;
    }else{
        ans.innerText = "YOU WON!"
        count++;
    }
    show.innerText = count;
}
function win2(){
    var ai = Math.ceil(Math.random()*(3));
    if(ai==2){
        ans.innerText = "Draw!";
    }else if(ai==3){
        ans.innerText = "You Lose! Computer Chose Scissor";
        count--;
    }else{
        ans.innerText = "YOU WON!"
        count++;
    }
    show.innerText = count;
}
function win3(){
    var ai = Math.ceil(Math.random()*(3));
    if(ai==3){
        ans.innerText = "Draw!";
    }else if(ai==1){
        ans.innerText = "You Lose! Computer Chose Rock";
        count--;
    }else{
        ans.innerText = "YOU WON!"
        count++;
    }
    show.innerText = count;
}
function zeroo(){
    count=0;
    show.innerText = count;
}

function darkk(){
    let element = document.body;
    element.classList.toggle("dark");
}

rock.addEventListener('click',win1);
paper.addEventListener('click',win2);
sci.addEventListener('click',win3);
reset.addEventListener('click',zeroo);
invert.addEventListener('click',darkk);