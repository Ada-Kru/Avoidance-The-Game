// gets top 10 scores from DB and populates leaderboard with their names and total scores
async function populateLeaderboard() {
  let response = await fetch("/scores/topscores/");

  if (response.ok) { // if HTTP-status is 200-299
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

    })
  } else {
    alert("HTTP-Error: " + response.status);
  }
}
