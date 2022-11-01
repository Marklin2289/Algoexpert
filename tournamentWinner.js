//   There's an algorithms tournament taking place in which teams of programmers
//   compete against each other to solve algorithmic problems as fast as possible.
//   Teams compete in a round robin, where each team faces off against all other
//   teams. Only two teams compete against each other at a time, and for each
//   competition, one team is designated the home team, while the other team is the
//   away team. In each competition there's always one winner and one loser; there
//   are no ties. A team receives 3 points if it wins and 0 points if it loses. The
//   winner of the tournament is the team that receives the most amount of points.

//   Given an array of pairs representing the teams that have competed against each
//   other and an array containing the results of each competition, write a
//   function that returns the winner of the tournament. The input arrays are named
//   competition and results

competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
results = [0, 0, 1];

//output:
//Python

//C#: 3 points
//HTML: 0 points.

//[hometeam, awayteam]

// const hashtable = [{ key: number, key2: number

// }]

// function tournamentWinner(competitions, results) {
//   const names = [{ key: value }];
//   while (competitions >= 2) {
//     for (let i = 0; i < results.length; i++) {
//       if (results[i] == 1) {
//         for (const key in object) {
//           // object = competitions[i][0]
//           if (names.hasOwnProperty.call(object, key)) {
//             object[key] += 3;
//           } else {
//             object[key] = 3;
//             names.push(object[key]);
//           }
//         }
//       } else {
//       }
//     }
//   }
// }

function tournamentWinner(competitions, results) {
  const leader = { score: -Infinity, name: "" };
  const scoreboard = {};

  for (let i = 0; i < competitions.length; i++) {
    const winnerIdx = results[i] === 0 ? 1 : 0;
    const winner = competitions[i][winnerIdx];

    if (winner in scoreboard) scoreboard[winner] += 3;
    else scoreboard[winner] = 3;

    if (leader.score < scoreboard[winner]) {
      leader.name = winner;
      leader.score = scoreboard[winner];
    }
  }
  console.log(leader);
  console.log(scoreboard);
  return leader.name;
}

console.log(tournamentWinner(competitions, results));
