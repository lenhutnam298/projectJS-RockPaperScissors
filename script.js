let userScore = 0;
let comScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    switch(letter){
        case "r": return "Rock";
        case "p": return "Paper";
        case "s": return "Scissor";
    }
}

function win(user, computer){
   userScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = comScore;
   const smallUserWord = "user".fontsize(3).sup();
   const smallComputerWord = "comp".fontsize(3).sup();
   const userChoice_div = document.getElementById(user);
   result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallComputerWord}. You WIN!😋`;
   document.getElementById(user).classList.add('green-glow');
   // setTimeout(function () {userChoice_div.classList.remove('green-glow')}, 300);
   setTimeout(() => {userChoice_div.classList.remove('green-glow')}, 300);
}

// setTimeout(function () {console.log("hello")}, 3000);

function lose(user, computer){
    comScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = comScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} lose to ${convertToWord(computer)}${smallComputerWord}. You LOSE!😭`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => {userChoice_div.classList.remove('red-glow')}, 300);
}

function draw(user, computer){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = comScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equal ${convertToWord(computer)}${smallComputerWord}.It's draw 😮`;
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(() => {userChoice_div.classList.remove('gray-glow')}, 300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',() => {game("r");})
    
    paper_div.addEventListener('click',() => {game("p");})
    
    scissor_div.addEventListener('click',() => {game("s"); })
}

main();