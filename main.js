let btn = document.getElementById('btn');
let output = document.getElementById('outputText');
let cnt = document.getElementById('cnt');
let count = 0;
let number = 45;

btn.addEventListener('click', function(){
    
    let input = document.getElementById('inputText').value; 
    if(number == input){
        output.innerHTML = `You made it, your number is ${number}`;
        cnt.innerHTML = `it took ${count}`
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