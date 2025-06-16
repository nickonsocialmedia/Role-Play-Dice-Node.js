const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Type 'roll' to roll the dice, or 'q' to quit.");

function ask() {
  rl.question('> ', function(answer) {
    const input = answer.trim().toLowerCase();

    if (input === 'roll') {
      const dnd_dice = [1,2,3,4,5,6,7,8,9,10,11,12];
      const result = dnd_dice[Math.floor(Math.random() * dnd_dice.length)];
      console.log("You rolled:", result);
      ask(); // loop again
    } else if (input === 'q') {
      console.log("Thanks for playing!");
      rl.close();
    } else {
      console.log("Invalid input. Type 'roll' or 'q'.");
      ask(); // loop again
    }
  });
}


ask(); // start the loop
