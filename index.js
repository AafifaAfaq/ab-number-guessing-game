#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let playAgain = true;
while (playAgain) {
    const randomNumber = Math.floor(Math.random() * 5 + 1);
    const answer = await inquirer.prompt([
        {
            name: "GuessNumber",
            type: "number",
            message: "Guess a number between 1-5:",
        },
    ]);
    if (answer.GuessNumber === randomNumber) {
        console.log(chalk.green.bold("Congratulations! you guess a right number"));
    }
    else if (answer.GuessNumber > 5) {
        console.log(chalk.yellow.bold("Your guess is too high.Please choose number between 1-5"));
    }
    else {
        console.log(chalk.red.bold("Sorry!You guess a wrong number"));
    }
    const playAgainAnswer = await inquirer.prompt([
        {
            name: "playAgain",
            type: "confirm",
            message: "Do you want to play again?",
            default: true,
        },
    ]);
    playAgain = playAgainAnswer.playAgain;
    console.log(chalk.cyanBright.bold("Thanks for playing!"));
}
