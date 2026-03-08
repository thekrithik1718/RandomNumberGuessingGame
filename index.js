let minnum = 1;
let maxnum = 100;
let answer = Math.floor(Math.random()*(maxnum-minnum)+1);

let attempts=0;
let guess;
running = true;

while(running){
    guess = window.prompt("Take a guess of a number between 1-100");
    
    if(guess<minnum || guess>maxnum){
        window.alert("Please enter a valid number within the given range!");
    }
    else if(isNaN(guess)){
        window.alert("Please enter a valid number!");
    }
    else {
        attempts++

        if(guess>answer){
            window.alert("Too high! Try again!");
        }
        else if(guess<answer){
            window.alert("Too low! Try again!");
        }  
        else{
            window.alert(`That's correct Number! you took ${attempts} attempts to guess it correctly!`);
            running=false;
        }
   
    }
}