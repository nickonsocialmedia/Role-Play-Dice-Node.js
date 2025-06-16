# Roll-Play-Dice-Node.js
This simulates a dice roll for role play gaming. 

To run this save it a .js file. If you cloned it it will already be saved as Role_Play_Dice.js

Normally we need to make the file exicutable but as long as you installed node js you can run the file wiht,

node Role_Play_Dice.js

It should work on windows and linux, potentailly mack too but no one cares about that ;) . 


############################ BREAKDOWN ##################################

We import readline,


const readline = require('readline');


This is the standard way to create a user input/output interface using the readline module.


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


We use the module and createInterface method to sets up a two-way communication channel.

input: process.stdin accepts user input from the keyboard  output: process.stdout prints output to the terminal

we store this code in a variable called rl

we use console.log to ask the question type roll to roll the dice.

and function ask() is ran this gives us the option to loop, but the first thing that happens in the ask function is we use rl.question. we use rl to get info from the user, question is used to ask the question / get input, and then we pass the user input as a parameter into function(answer). '> ' this string just adds a prompt the user sees when the program's waiting for an answer.

when the user types roll we access that input through answer inside the function


we then create an if statement the if statement then trims the word roll to all lowercase in case the user typed ROLL or Roll and then uses a strict equal operator === to confirm if the user typed roll, if the user typed roll we run the rest of the code in the if statement,

the code uses an array resembling the 12 sides of the dice,


dnd_dice = [1,2,3,4,5,6,7,8,9,10,11,12];


to get a random number, we use the method Math.random to generate a number between 0 and 1 say it's 0.982 and we multiply this by the number of elements in the dnd\_dice array. our dice has 12 sides so multiply by 12, this gives 11.999 we then use the method Math.floor to drop the decimal portion giving us 11. we then console.log the string "you rolled " with the results from the logic of the if statement. we then run ask again.

yes, the user has to type roll again each time to roll again.

if the user types q the if statement isn't satisfied and we pass the if statement and ask else if input is q which in this case it is input === q, we console.log thanks for playing and the program's input interface is closed with rl.close().
