let managerFullName = "Alex Ferguson";
let managerAge = 78;
let currentTeamName = "Manchester FC";
let totalTrophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var manager = [managerName, managerAge, currentTeam, trophiesWon]
  return manager;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerFullName,
    managerAge,
    currentTeamName,
    totalTrophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Trial 2 - create a formation object and return it
var formationData = [4, 4, 3];

//write your function here

function createFormation(formation) {

  if (formation.length == 0) {
    return null;
  }
  var playFormation = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return playFormation;
}

// Dont edit the following code
try {
  var formationObject = createFormation(formationData);
} catch (e) {
  // do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var filteredData = players.filter(player => player.debut == year);
  return filteredData;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  var filteredData = players.filter(player => player.position == position);
  return filteredData;
}

//Trial 5 - Filter players that have won ______ award

function filterByAward(awardName) {
  let filteredArray = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName) {
        filteredArray.push(players[i]);
      }
    }
  }
  return filteredArray;
}

//Trial 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let filteredArray = [];
  let count = 0, m = 0;
  let j;
  for (let i = 0; i < players.length; i++) {
    for (j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        count++;
      }
    }
    if (count == noOfTimes) {
      filteredArray.push(players[i]);
    }
    count = 0;
  }
  return filteredArray;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var awardsData = filterByAward(awardName);
  var filteredData = awardsData.filter(player => player.country == country);
  return filteredData;
}

//Progression 8 - Filter players that won at least ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var filteredData = players.filter(player => (player.age < age && player.team == team && player.awards.length >= noOfAwards));
  return filteredData;
}

//Challenge 1 - Sort players in descending order of their age


//Challenge 2 - Sort players belonging to _____ team in descending order of awards won


//Judgement 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Judgement 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
