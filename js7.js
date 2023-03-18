//Sports players & teans

// The goal of this task is to add another player to the _players property and another game to the _games property using the addPlayer, addGame methods
const team = {
  _players: [{
      firstName: 'Lebron',
      lastName: 'James',
      age: 29
    },
    {
      firstName: 'Derrick',
      lastName: 'Rose',
      age: 24
    },
    {
      firstName: 'Carmelo',
      lastName: 'Anthony',
      age: 28
    }],
  _games: [
    {
       opponent: 'Chicago Bulls',
       teamPoints: 115,
       opponentPoints: 101
    },
    {
       opponent: 'Miami Heat',
       teamPoints: 102,
       opponentPoints: 101
    },
    {
      opponent: 'Knicks',
      teamPoints: 105,
      opponentPoints: 111
    }
  ],
 get players(){
   return this._players;
 },
 get games(){
   return this._games;
 },
 addPlayer (newFirstName,newLastName, newAge){
    let player = {
        firstName : newFirstName,
        lastName : newLastName,
        age : newAge 
    };
    this.players.push(player);
 },
 addGame(newOpponent,newTeamPoints,newOpponentPoints){
    let game = {
      opponent : newOpponent,
      teamPoints : newTeamPoints,
      opponentPoints : newOpponentPoints
    };
    this.games.push(game);

 }
}

team.addPlayer('Dimitar','Terziev',25);

console.log(team._players)

team.addGame('Phoenix Suns',124,101);

console.log(team._games);