var EloRank = require("elo-rank");
var elo = new EloRank();
var teams = require("./teams.js");
var games = require("./games.js");

class Team {
  constructor(name, elo) {
    this.name = name;
    this.elo = elo;
    this.wins = 0;
    this.losses = 0;
  }
}

// create teams
for (let i = 0; i < teams.length; i++) {
  teams[teams[i]] = new Team(teams[i], 1200);
}

// update teams
for (let i = 0; i < games.length; i++) {
  // console.log("game", i);
  const game = games[i];
  let winner, loser;
  if (game.outcome === 1) {
    winner = game.team1;
    loser = game.team2;
  } else {
    winner = game.team2;
    loser = game.team1;
  }

  // console.log("winner", winner);
  // console.log("loser", loser);

  const winnerElo = teams[winner].elo;
  const loserElo = teams[loser].elo;
  const expectedScoreWinner = elo.getExpected(winnerElo, loserElo);
  const expectedScoreLoser = elo.getExpected(loserElo, winnerElo);
  teams[winner].elo = elo.updateRating(expectedScoreWinner, 1, winnerElo);
  teams[loser].elo = elo.updateRating(expectedScoreLoser, 0, loserElo);
  teams[winner].wins++;
  teams[loser].losses++;
}

//Gets expected score for first parameter
// var expectedScoreA = elo.getExpected(playerA, playerB);
// var expectedScoreB = elo.getExpected(playerB, playerA);
// console.log(expectedScoreA); // 0.2402530733520421
// console.log(expectedScoreB); // 0.7597469266479579

//update score, 1 if won 0 if lost
// playerA = elo.updateRating(expectedScoreA, 1, playerA);
// playerB = elo.updateRating(expectedScoreB, 0, playerB);

const sortedTeams = Object.values(teams).sort((a, b) => {
  return b.elo - a.elo;
});

console.log(sortedTeams);
