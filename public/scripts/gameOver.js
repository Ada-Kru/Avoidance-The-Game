// gets top 10 scores from DB and populates leaderboard with their names and total scores
async function populateLeaderboard() {
  let response = await fetch("/scores/topscores/");
  let totalScore = localStorage.getItem("totalScore");
  let updateLeaderboard = false;
  if (response.ok) {
    // if HTTP-status is 200-299
    // json is array of objects (users)
    let json = await response.json();
    let rank = 1;
    json.forEach(function (user) {
      let table = document.getElementById("leaderboard_table");
      let numRows = table.rows.length;

      let newRow = table.insertRow(numRows);
      let rankCell = newRow.insertCell(0);
      let nameCell = newRow.insertCell(1);
      let scoreCell = newRow.insertCell(2);

      rankCell.innerHTML = rank;
      rank += 1;
      nameCell.innerHTML = user.name;
      scoreCell.innerHTML = user.total_score;
    });
    if (json.length - 1 < 10) {
      updateLeaderboard = true;
    } else {
      json.forEach(function (user) {
        if (totalScore > user.total_score) {
          updateLeaderboard = true;
        }
      });
    }
    if (updateLeaderboard === true) {
      alert('Congrats! You made the top 10. Press "OK" to continue');
    }
  } else {
    alert("HTTP-Error: " + response.status);
  }
}

async function showFinalScore() {
  let totalScore_div = document.getElementById("final_total");
  let socialScore_div = document.getElementById("final_social");
  let healthScore_div = document.getElementById("final_health");
  let socialScore = localStorage.getItem("socialScore");
  let healthScore = localStorage.getItem("healthScore");
  let totalScore = localStorage.getItem("totalScore");

  totalScore_div.innerHTML = totalScore;
  socialScore_div.innerHTML = socialScore + " social points";
  healthScore_div.innerHTML = healthScore + " health points";
}
