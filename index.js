#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
let myPin = 3344;
console.log(chalk.bgCyan("============= WELCOME TO ATM MACHINE APP ============="));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin Code"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.bgGreenBright(`CORRECT PIN CODE! `));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "PLEASE SELECT OPTION",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }
    ]);
    //console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "PLEASE ENTER AMOUNT"
            }
        ]);
        if (myBalance < amountAns.amount) {
            console.log(console.log(chalk.redBright(`INSUFFICIENT  BALANCE!!!   YOUR BALANCE IS ONLY: ${myBalance} `)));
        }
        else {
            myBalance -= amountAns.amount; //ye amount -= minus krha hy.
            console.log(chalk.blue(` WITHDRAW SUCCESSFULLY!  YOUR REMAINING BALANCE IS: ${myBalance}`));
        }
        //console.log(amountAns.amount);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk.bgYellow(` YOUR  BALANCE IS:${myBalance} `));
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastcashAns = await inquirer.prompt([{
                name: 'fc',
                type: 'list',
                message: 'PLEASE SELECT  AMOUNT OPTION',
                choices: ['1000', '2000', '5000', '10000']
            }]);
        if (fastcashAns.fc === '1000') {
            console.log(chalk.greenBright(` FAST CASH WITHDRAW SUCCESSFULLY!!!  YOU SELECT THIS AMOUNT: ${fastcashAns.fc}  `));
        }
        else if (fastcashAns.fc === '2000') {
            console.log(chalk.greenBright(`FAST CASH WITHDRAW SUCCESSFULLY!!!  YOU SELECT THIS AMOUNT: ${fastcashAns.fc}  `));
        }
        else if (fastcashAns.fc === '5000') {
            console.log(chalk.greenBright(`FAST CASH WITHDRAW SUCCESSFULLY!!!  YOU SELECT THIS AMOUNT: ${fastcashAns.fc}  `));
        }
        else if (fastcashAns.fc === '10000') {
            console.log(chalk.greenBright(` FAST CASH WITHDRAW SUCCESSFULLY!!!  YOU SELECT THIS AMOUNT: ${fastcashAns.fc}  `));
        }
        else {
            console.log(chalk.bgRedBright(`INVALID AMOUNT!!!  PLEASE SELECT CORRECT AMOUNT`));
        }
        ;
    }
}
else {
    console.log(chalk.redBright(`INCORRECT PIN CODE! `));
}
// interface ansType {
//     userName: string,
//     userPin: number,
//     accountType: string,
//     transaction:string,
//     amount:number
// }
// const answers = await inquirer.prompt(
//     [
//         {
//             type: "input",
//             name: "userName",
//             message: "enter your Name: "
//         },
//         {
//             type: "number",
//             name: "userPin",
//             message: "enter your PIN:"
//         },
//         {
//             type:"list",
//             name:"accountType",
//             choices: ["saving","current"],
//             message: "select your account type:"
//         },
//         {
//             type:"list",
//             name:"transaction",
//             choices: ["withdraw","check balance"],
//             message: "select your transaction:",
//             when(answers) {
//                 return answers.accountType
//             },
//         },
//         {
//             type:"number",
//             name:"amount",
//             message: "enter  your amount:",
//             when(answers) {
//                 return answers.transaction == "withdraw"
//             }
//         }
//     ]
// )
// //console.log(chalk.yellow(answers));
// if (answers.userName && answers.userPin) {
//    console.log();
// } else {
// }
