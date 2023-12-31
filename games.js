const games = [
  // week1
  { team1: "lions", team2: "chiefs", outcome: 1 },
  { team1: "bengals", team2: "browns", outcome: 2 },
  { team1: "49ers", team2: "steelers", outcome: 1 },
  { team1: "buccaneers", team2: "vikings", outcome: 1 },
  { team1: "panthers", team2: "falcons", outcome: 2 },
  { team1: "texans", team2: "ravens", outcome: 2 },
  { team1: "jaguars", team2: "colts", outcome: 1 },
  { team1: "titans", team2: "saints", outcome: 2 },
  { team1: "cardinals", team2: "commanders", outcome: 2 },
  { team1: "rams", team2: "seahawks", outcome: 1 },
  { team1: "dolphins", team2: "chargers", outcome: 1 },
  { team1: "packers", team2: "bears", outcome: 1 },
  { team1: "raiders", team2: "broncos", outcome: 1 },
  { team1: "eagles", team2: "patriots", outcome: 1 },
  { team1: "cowboys", team2: "giants", outcome: 1 },
  { team1: "bills", team2: "jets", outcome: 2 },
  // week2
  { team1: "vikings", team2: "eagles", outcome: 2 },
  { team1: "bears", team2: "buccaneers", outcome: 2 },
  { team1: "chiefs", team2: "jaguars", outcome: 1 },
  { team1: "ravens", team2: "bengals", outcome: 1 },
  { team1: "colts", team2: "texans", outcome: 1 },
  { team1: "raiders", team2: "bills", outcome: 1 },
  { team1: "chargers", team2: "titans", outcome: 2 },
  { team1: "packers", team2: "falcons", outcome: 2 },
  { team1: "seahawks", team2: "lions", outcome: 1 },
  { team1: "49ers", team2: "rams", outcome: 1 },
  { team1: "giants", team2: "cardinals", outcome: 1 },
  { team1: "jets", team2: "cowboys", outcome: 2 },
  { team1: "commanders", team2: "broncos", outcome: 1 },
  { team1: "dolphins", team2: "patriots", outcome: 1 },
  { team1: "saints", team2: "panthers", outcome: 1 },
  { team1: "browns", team2: "steelers", outcome: 2 },
  //week 3
  { team1: "giants", team2: "49ers", outcome: 2 },
  { team1: "chargers", team2: "vikings", outcome: 1 },
  { team1: "saints", team2: "packers", outcome: 2 },
  { team1: "texans", team2: "jaguars", outcome: 1 },
  { team1: "titans", team2: "browns", outcome: 2 },
  { team1: "colts", team2: "ravens", outcome: 1 },
  { team1: "broncos", team2: "dolphins", outcome: 2 },
  { team1: "patriots", team2: "jets", outcome: 1 },
  { team1: "bills", team2: "commanders", outcome: 1 },
  { team1: "falcons", team2: "lions", outcome: 2 },
  { team1: "panthers", team2: "seahawks", outcome: 2 },
  { team1: "cowboys", team2: "cardinals", outcome: 2 },
  { team1: "bears", team2: "chiefs", outcome: 2 },
  { team1: "steelers", team2: "raiders", outcome: 1 },
  { team1: "eagles", team2: "buccaneers", outcome: 1 },
  { team1: "rams", team2: "bengals", outcome: 2 },
  // week 4
  { team1: "lions", team2: "packers", outcome: 1 },
  { team1: "falcons", team2: "jaguars", outcome: 2 },
  { team1: "rams", team2: "colts", outcome: 1 },
  { team1: "commanders", team2: "eagles", outcome: 2 },
  { team1: "broncos", team2: "bears", outcome: 1 },
  { team1: "buccaneers", team2: "saints", outcome: 1 },
  { team1: "ravens", team2: "browns", outcome: 1 },
  { team1: "vikings", team2: "panthers", outcome: 1 },
  { team1: "steelers", team2: "texans", outcome: 2 },
  { team1: "dolphins", team2: "bills", outcome: 2 },
  { team1: "bengals", team2: "titans", outcome: 2 },
  { team1: "raiders", team2: "chargers", outcome: 2 },
  { team1: "cardinals", team2: "49ers", outcome: 2 },
  { team1: "patriots", team2: "cowboys", outcome: 2 },
  { team1: "chiefs", team2: "jets", outcome: 1 },
  { team1: "seahawks", team2: "giants", outcome: 1 },
  // week 5
  { team1: "bears", team2: "commanders", outcome: 1 },
  { team1: "jaguars", team2: "bills", outcome: 1 },
  { team1: "saints", team2: "patriots", outcome: 1 },
  { team1: "ravens", team2: "steelers", outcome: 2 },
  { team1: "giants", team2: "dolphins", outcome: 2 },
  { team1: "panthers", team2: "lions", outcome: 2 },
  { team1: "texans", team2: "falcons", outcome: 2 },
  { team1: "titans", team2: "colts", outcome: 2 },
  { team1: "bengals", team2: "cardinals", outcome: 1 },
  { team1: "eagles", team2: "rams", outcome: 1 },
  { team1: "chiefs", team2: "vikings", outcome: 1 },
  { team1: "jets", team2: "broncos", outcome: 1 },
  { team1: "cowboys", team2: "49ers", outcome: 2 },
  { team1: "packers", team2: "raiders", outcome: 2 },
  // week 6
  { team1: "broncos", team2: "chiefs", outcome: 2 },
  { team1: "ravens", team2: "titans", outcome: 1 },
  { team1: "commanders", team2: "falcons", outcome: 1 },
  { team1: "vikings", team2: "bears", outcome: 1 },
  { team1: "colts", team2: "jaguars", outcome: 2 },
  { team1: "49ers", team2: "browns", outcome: 2 },
  { team1: "seahawks", team2: "bengals", outcome: 2 },
  { team1: "saints", team2: "texans", outcome: 2 },
  { team1: "panthers", team2: "dolphins", outcome: 2 },
  { team1: "patriots", team2: "raiders", outcome: 2 },
  { team1: "lions", team2: "buccaneers", outcome: 1 },
  { team1: "cardinals", team2: "rams", outcome: 2 },
  { team1: "eagles", team2: "jets", outcome: 2 },
  { team1: "giants", team2: "bills", outcome: 2 },
  { team1: "cowboys", team2: "chargers", outcome: 1 },
  // week 7
  { team1: "jaguars", team2: "saints", outcome: 1 },
  { team1: "bills", team2: "patriots", outcome: 2 },
  { team1: "falcons", team2: "buccaneers", outcome: 1 },
  { team1: "raiders", team2: "bears", outcome: 2 },
  { team1: "lions", team2: "ravens", outcome: 2 },
  { team1: "browns", team2: "colts", outcome: 1 },
  { team1: "commanders", team2: "giants", outcome: 2 },
  { team1: "cardinals", team2: "seahawks", outcome: 2 },
  { team1: "steelers", team2: "rams", outcome: 1 },
  { team1: "packers", team2: "broncos", outcome: 2 },
  { team1: "chargers", team2: "chiefs", outcome: 2 },
  { team1: "dolphins", team2: "eagles", outcome: 2 },
  { team1: "49ers", team2: "vikings", outcome: 2 },
  // week 8
  { team1: "buccaneers", team2: "bills", outcome: 2 },
  { team1: "falcons", team2: "titans", outcome: 2 },
  { team1: "vikings", team2: "packers", outcome: 1 },
  { team1: "texans", team2: "panthers", outcome: 2 },
  { team1: "jaguars", team2: "steelers", outcome: 1 },
  { team1: "saints", team2: "colts", outcome: 1 },
  { team1: "rams", team2: "cowboys", outcome: 2 },
  { team1: "jets", team2: "giants", outcome: 1 },
  { team1: "eagles", team2: "commanders", outcome: 1 },
  { team1: "patriots", team2: "dolphins", outcome: 2 },
  { team1: "browns", team2: "seahawks", outcome: 2 },
  { team1: "ravens", team2: "cardinals", outcome: 1 },
  { team1: "chiefs", team2: "broncos", outcome: 2 },
  { team1: "bengals", team2: "49ers", outcome: 1 },
  { team1: "bears", team2: "chargers", outcome: 2 },
  { team1: "raiders", team2: "lions", outcome: 2 },
  // week 9
  { team1: "titans", team2: "steelers", outcome: 2 },
  { team1: "dolphins", team2: "chiefs", outcome: 2 },
  { team1: "vikings", team2: "falcons", outcome: 1 },
  { team1: "rams", team2: "packers", outcome: 2 },
  { team1: "bears", team2: "saints", outcome: 2 },
  { team1: "cardinals", team2: "browns", outcome: 2 },
  { team1: "commanders", team2: "patriots", outcome: 1 },
  { team1: "seahawks", team2: "ravens", outcome: 2 },
  { team1: "buccaneers", team2: "texans", outcome: 2 },
  { team1: "colts", team2: "panthers", outcome: 1 },
  { team1: "giants", team2: "raiders", outcome: 2 },
  { team1: "cowboys", team2: "eagles", outcome: 2 },
  { team1: "bills", team2: "bengals", outcome: 2 },
  { team1: "chargers", team2: "jets", outcome: 1 },
  // week 10
  { team1: "panthers", team2: "bears", outcome: 2 },
  { team1: "colts", team2: "patriots", outcome: 1 },
  { team1: "titans", team2: "buccaneers", outcome: 2 },
  { team1: "saints", team2: "vikings", outcome: 2 },
  { team1: "49ers", team2: "jaguars", outcome: 1 },
  { team1: "packers", team2: "steelers", outcome: 2 },
  { team1: "browns", team2: "ravens", outcome: 1 },
  { team1: "texans", team2: "bengals", outcome: 1 },
  { team1: "lions", team2: "chargers", outcome: 1 },
  { team1: "falcons", team2: "cardinals", outcome: 2 },
  { team1: "giants", team2: "cowboys", outcome: 2 },
  { team1: "commanders", team2: "seahawks", outcome: 2 },
  { team1: "jets", team2: "raiders", outcome: 2 },
  { team1: "broncos", team2: "bills", outcome: 1 },
  // week 11
  { team1: "bengals", team2: "ravens", outcome: 2 },
  { team1: "cardinals", team2: "texans", outcome: 2 },
  { team1: "raiders", team2: "dolphins", outcome: 2 },
  { team1: "chargers", team2: "packers", outcome: 2 },
  { team1: "titans", team2: "jaguars", outcome: 2 },
  { team1: "steelers", team2: "browns", outcome: 2 },
  { team1: "cowboys", team2: "panthers", outcome: 1 },
  { team1: "giants", team2: "commanders", outcome: 1 },
  { team1: "bears", team2: "lions", outcome: 2 },
  { team1: "buccaneers", team2: "49ers", outcome: 2 },
  { team1: "seahawks", team2: "rams", outcome: 2 },
  { team1: "jets", team2: "bills", outcome: 2 },
  { team1: "vikings", team2: "broncos", outcome: 2 },
  { team1: "eagles", team2: "chiefs", outcome: 1 },
  // week 12
  { team1: "packers", team2: "lions", outcome: 1 },
  { team1: "commanders", team2: "cowboys", outcome: 2 },
  { team1: "49ers", team2: "seahawks", outcome: 1 },
  { team1: "dolphins", team2: "jets", outcome: 1 },
  { team1: "buccaneers", team2: "colts", outcome: 2 },
  { team1: "patriots", team2: "giants", outcome: 2 },
  { team1: "saints", team2: "falcons", outcome: 2 },
  { team1: "steelers", team2: "bengals", outcome: 1 },
  { team1: "jaguars", team2: "texans", outcome: 1 },
  { team1: "panthers", team2: "titans", outcome: 2 },
  { team1: "browns", team2: "broncos", outcome: 2 },
  { team1: "rams", team2: "cardinals", outcome: 1 },
  { team1: "chiefs", team2: "raiders", outcome: 1 },
  { team1: "bills", team2: "eagles", outcome: 2 },
  { team1: "ravens", team2: "chargers", outcome: 1 },
  { team1: "bears", team2: "vikings", outcome: 1 },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
  // { team1: '', team2: '', outcome: },
];

module.exports = games;
