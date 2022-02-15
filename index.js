const choices = ['Rock', 'Paper', 'Scissors'];

const outcomes = [
    ['Ties Computer', 'Wins', 'Loses'],
    ['Wins', 'Ties Computer', 'Loses'],
    ['Loses', 'Wins', 'Ties Computer']
];

let userChoice = window.prompt('Pick: (Rock, Paper, or Scissors)?');

let userChoiceIndex = choices.indexOf(userChoice);

let computerChoiceIndex = Math.floor(Math.random() * 3);

let outcome = outcomes[userChoiceIndex][computerChoiceIndex];

console.log(`User Chooses: ${userChoice}.  Computer Chooses: ${choices[computerChoiceIndex]}.  The User ${outcome}.`);