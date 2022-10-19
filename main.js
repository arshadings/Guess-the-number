let btn = document.getElementById('btn');
let output = document.getElementById('outputText');
let cnt = document.getElementById('cnt');
let count = 0;
let number = Math.floor((Math.random() * 100) + 1);

btn.addEventListener('click', function(){
    
    let input = document.getElementById('inputText').value; 
    if(number == input){
        output.innerHTML = `You made it, your number is ${number}`;
        cnt.innerHTML = `you took ${count} attempts to guess the number`
    }
    else if(input > number){
        output.innerHTML = "Guess is high";
        count++;
        cnt.innerHTML = `count is ${count}`;
    }
    else{  
        output.innerHTML = "Guess is low";
        count++;
        cnt.innerHTML = `count is ${count}`;
    }  
    
})
