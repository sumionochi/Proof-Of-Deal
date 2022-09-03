function getRandomCard1(){
    let rano1 = Math.floor(Math.random()*13)+1;

    if(rano1 > 10){
        return 10;
    }
    else if (rano1 === 1){
        return 11;
    }
    else{
        return rano1;
    }
}

function getRandomCard2(){
    let rano2 = Math.floor(Math.random()*14);

    if(rano2 > 10){
        return 10;
    }
    else if (rano2 === 1){
        return 11;
    }
    else{
        return rano2;
    }
}

function getRandomCard3(){
    let rano3 = Math.floor(Math.random()*14);
   
    if(rano3 > 10){
        return 10;
    }
    else if (rano3 === 1){
        return 11;
    }
    else{
        return rano3;
    }

}

let aceon = "ACE DETECTED : CHOOSE ACE as 1 or 11";
let aceoff = "ACE IS UP YOUR SLEEVE";
let count = 0;
let ascend = 0;
let a = getRandomCard1();
let b = getRandomCard2();
let d, e,f = 0;
let closestplay = "";
let sum = a + b;
let sum2 = "Sum: " + sum;
let cards = "Cards:" + " " + a + " & " + b;
let message = "";
let replay = "NEW GAME";
let i = 2;

function startgame(){
    document.getElementById("start").textContent=replay;
    if(ascend === 0){
    rendergame();
    count = 1;
    f = 2;}

    else{
       location.reload();
    }
}

function rendergame(){
    if(count===0 ||count===1){
if(sum<=20){
   message = "Do you want to draw a new card!"
}

if(sum===21){
    message ="Wahoo! you've got Blackjack!"   
    ascend = 1; 
    let g = 2;
    closestplay = "CLOSEST COUNT : " + sum + " " + " " + " Cards played : " + g;
    document.getElementById("choice").textContent=closestplay;
}

if(sum>21){
    message = "You're out of the game!"
    ascend = 1; 
    e = sum - d; 
    closestplay = "CLOSEST COUNT : " + e + " " + " " + " Cards played : " + f;
    document.getElementById("choice").textContent=closestplay;
}

document.getElementById("message").textContent=message;
document.getElementById("sum").textContent=sum2;
document.querySelector(".text").textContent=cards;
}
   
      
}


function newc(){
    console.log(count);
    if(count === 1 != ascend){
       newc2();
    }
}

function newc2(){  
       let c = getRandomCard3();
        d=c;
        f++;
        cards = cards + " & " + c;
        sum = sum + c;
        sum2 = "Sum: " + sum;
    rendergame();
}

let player = {
    name:  prompt("Enter your name"),
    chips: prompt("Enter the deal"),
}

document.getElementById("player").textContent="PLAYER : " + player.name; 
document.getElementById("token").textContent="DEAL :  💰 " + player.chips; 