#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance= 10000;
let myPin= 1133;

 let pinAnswer  = await inquirer.prompt({
      name: "pin",
      type: "number",
      message: "Enter your pin: "
})

if (pinAnswer.pin === myPin){
    console.log("Your pin is correct")

let operation = await inquirer.prompt({
     name: "opp",
     type: "list",
     message: "Select an option",
     choices: ["withdraw", "check balance"]
}
)   

if (operation.opp === "withdraw"){
  let amount = await inquirer.prompt(
    {
        name: "ans",
        type: "list",
        message: "Enter your amount",
        choices: ["1000", "2000", "5000", "10000"]
    })
if (amount.ans > myBalance){
    console.log("Insufficient balance")
} else if (myBalance -= amount.ans){
console.log(`Your remaining balance is: ${myBalance}`)}

} else if (operation.opp === "check balance")
    console.log(`your balance is: ${myBalance}`)
}
else(
    console.log("Plzz enter correct pin")
)