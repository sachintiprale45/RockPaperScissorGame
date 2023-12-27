let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#User-Score");
const compScorePara = document.querySelector("#Comp-Score");



const generateCompChoice = () => {
    // rock papper scissors 
    const options = ["rock", "paper", "Scissors"];
    const randINX = Math.floor(Math.random() * 3);
    return options[randINX];
}

const Drawgame = () => {
    msg.innerText = " Game was draw pls try again ! ";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userchoice, ComChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beats ${ComChoice} `;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${ComChoice} beats Your  ${userchoice} `;
        msg.style.backgroundColor = "red";
    }
};
const playgame = (userchoice) => {
    //console.log("user choice" , userchoice);
    // Generate computer choice 
    const ComChoice = generateCompChoice();
    //console.log("Comp Choice =", ComChoice);
    if (userchoice === ComChoice) {
        Drawgame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            // scissors , paper 
            userWin = ComChoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            // rock , scissors 
            userWin = ComChoice === "scissors " ? false : true;
        }
        else {
            userWin = ComChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, ComChoice);
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked ", userchoice);
        playgame(userchoice);
    });
});