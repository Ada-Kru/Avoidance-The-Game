// grab initial health and social points from landing page
let health = 50;
let social = 50;
let level = 0;
let sublevel = 0;

// update aria-valuenow with health and social
$("#health_points").text(`${health} / 100`);
$("#social_points").text(`${social} / 100`);
$("#progress-bar__health")
  .attr("aria-valuenow", health)
  .css({ width: `${health}%` });
$("#progress-bar__social")
  .attr("aria-valuenow", social)
  .css({ width: `${social}%` });

// add continue button
let continueBtn = $("<button>Continue</button>");
continueBtn.attr({ id: "continue", type: "button" });
continueBtn.addClass("btn btn__choice btn-lg btn-block");
continueBtn.click(() => {
  playGame(level, health, social, sublevel);
});
$(".grid__choices").append(continueBtn);

// user chooses one
for (let choiceIndex = 0; choiceIndex < 3; choiceIndex++) {
  $(`#choice${choiceIndex + 1}`).click(() => {
    let healthModifier = levels.points[level][choiceIndex][0];
    let socialModifier = levels.points[level][choiceIndex][1];

    // update health and social points
    health += healthModifier;
    social += socialModifier;
    $("#health_points").text(`${health} / 100`);
    $("#progress-bar__health")
      .attr("aria-valuenow", health)
      .css({ width: `${health}%` });
    $("#social_points").text(`${social} / 100`);
    $("#progress-bar__social")
      .attr("aria-valuenow", social)
      .css({ width: `${social}%` });

    // show desc of choice
    $("#description").text(levels.choiceAnswers[level][choiceIndex]);

    // update level/sublevel
    if (sublevel < 1) {
      sublevel++;
    } else {
      sublevel = 0;
      level++;
    }

    // hide choice buttons, show continue button
    $(".btn__choice").hide();
    $("#continue").show();
  });
}

playGame(level, health, social, sublevel);

function playGame(level, health, social, sublevel) {
  $(".btn__choice").show();
  $("#continue").hide();

  // play game
  if (health != 0 && social != 0 && level <= 4) {
    // show image
    $("#main_img").attr("src", `images/${levels.images[level][sublevel][0]}`);

    // show desc
    $("#description").text(levels.descriptions[level][sublevel]);

    // show choices
    $("#choice1").text(levels.choices[level][sublevel][0]);
    $("#choice2").text(levels.choices[level][sublevel][1]);
    $("#choice3").text(levels.choices[level][sublevel][2]);
  }
  else {
      alert("Game finished!");
  }
}
