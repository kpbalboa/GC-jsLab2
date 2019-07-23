const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};
let chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};

const attackPlayer = function(health) {
  return health - randomDamage();
};
let logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};
let logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};
let isDead = health => {
  return health <= 0;
};
function fight() {
  let player1 = "Player1";
  let player2 = "Player2";
  var player1Health = 100;
  var player2Health = 100;
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}
fight();
