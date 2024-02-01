'use strict'
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = '🎉 correct number!'
// document.querySelector('.number').textContent =13;
// document.querySelector('.score').textContent =10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value)
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore =0;

// let us change textcontent with a function

const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
}
//  function displayMessage(message){
//     document.querySelector('.message').textContent=message;
// }
const displayScore = function(scoreRate){
    document.querySelector('.score').textContent = scoreRate
}


document.querySelector('.check').addEventListener('click',
function (){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess,typeof guess)
if(!guess){
    displayMessage('🎌 no number!' )
    // document.querySelector('.message').textContent = '🎌 no number!' 
}
    else if(guess === secretNumber){
        displayMessage('🎉 correct number!' )
        // document.querySelector('.message').textContent = '🎉 correct number!' 
        document.querySelector('.number').textContent =secretNumber;
        
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'  
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    // when guess is wrong
    if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ?
                '📈 Too high!' : '📉 Too low!');
            // document.querySelector('.message').textContent = guess > secretNumber ?
            //     '📈 Too high!' : '📉 Too low!';
            score--;
            displayScore(score) ;
        } else {
            displayMessage('💥 You lost the game!')
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayScore(0) ;
        }
    }
    

    // This is duplicate code we need to write code which is not duplicated 
    // but functionality is the same as duplicate one


//     else if (guess > secretNumber){
//         if(score > 1){
//             document.querySelector('.message').textContent = '📈 Too high!' 
//             score --
//             // score = score -1   
//             document.querySelector('.score').textContent =score;
//         }
//         else{
//             document.querySelector('.message').textContent ='💥You lost the game!';  
//             document.querySelector('.score').textContent =0;
//         }
       
//     }
//     else if (guess < secretNumber){
//         if(score > 1){
//             document.querySelector('.message').textContent = '📉 Too low!' 
//             score --
//             // score = score -1   
//             document.querySelector('.score').textContent =score;
//         }
//         else{
//             document.querySelector('.message').textContent ='💥You lost the game!';  
//             document.querySelector('.score').textContent =0;
//         }
         
//     }
})

document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    

    secretNumber = Math.trunc(Math.random()*20)+1;
  
    
        document.querySelector('.guess').value ='';
        // document.querySelector('.message').textContent = 'Start guessing...';
        displayMessage('Start guessing...')
        // document.querySelector('.score').textContent =score;
        displayScore(score)
        document.querySelector('.highscore').textContent = 0;
        document.querySelector('.number').textContent = '?'
        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.number').style.width = '15rem'
   
        // if(score > highScore){
        //     highScore = score;
        //     document.querySelector('.highscore').textContent = highScore;
        // }
   

})
