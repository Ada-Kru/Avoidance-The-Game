// grab initial health and social points from landing page
let health = 0;
let social = 0;
let level = 0;
let sublevel = -1; // start at main level with no sublevel

//Initialize health and social depending on occupation
if (choice === 'nurse'){
  health = 50;
  social = 80;
} else if (choice === 'teacher'){
  health = 50;
  social = 50;
} else if (choice === 'librarian'){
  health = 80;
  social = 50;
} else{
  health = 50;
  social = 50;
}

// update aria-valuenow with health and social
$("#health_points").text(`${health} / 100`);
$("#social_points").text(`${social} / 100`);
$("#progress-bar__health")
  .attr("aria-valuenow", health)
  .css({ width: `${health}%` });
$("#progress-bar__social")
  .attr("aria-valuenow", social)
  .css({ width: `${social}%` });


// add continue button (after playing a sublevel)
let continueBtn = $("<button>Continue</button>");
continueBtn.attr({ id: "continue", type: "button" });
continueBtn.addClass("btn btn__next btn-lg btn-block");
continueBtn.click(() => {
  playGame(level, health, social, sublevel);
});
$(".grid__choices").append(continueBtn);


// add play level button (to start a sublevel)
let playBtn = $(`<button>Start level ${level+1}</button>`);
playBtn.attr({ id: "play", type: "button" });
playBtn.addClass("btn btn__play btn-lg btn-block");
playBtn.click(() => {
  sublevel++;
  playGame(level, health, social, sublevel);
});
$(".grid__description").append(playBtn);

// user chooses one
for (let choiceIndex = 0; choiceIndex < 3; choiceIndex++) {
  $(`#choice${choiceIndex + 1}`).click(() => {
    let socialModifier = levels.points[level][sublevel][choiceIndex][0];
    let healthModifier = levels.points[level][sublevel][choiceIndex][1];

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

    // update health and social points colors
    if(health < 25) {
      $("#progress-bar__health").removeClass("progress-bar--normal");
      $("#progress-bar__health").addClass("progress-bar--danger");
    }
    else {
      $("#progress-bar__health").addClass("progress-bar--normal");
      $("#progress-bar__health").removeClass("progress-bar--danger"); 
    }
    if(social < 25) {
      $("#progress-bar__social").removeClass("progress-bar--normal");
      $("#progress-bar__social").addClass("progress-bar--danger");
    }
    else {
      $("#progress-bar__social").addClass("progress-bar--normal");
      $("#progress-bar__social").removeClass("progress-bar--danger"); 
    }

    // show desc of choice
    // also show affect of choice on social and health points
    let text = `${levels.choiceAnswers[level][sublevel][choiceIndex]}<br><br>`;
    if (socialModifier < 0) {
      text += socialModifier + " social points and ";
    }
    else if (socialModifier > 0) {
      text += `+` + socialModifier + " social points and ";
    }
    else {
      text += socialModifier + " social points and ";
    }
    if (healthModifier < 0) {
      text += healthModifier + " health points";
    }
    else if (healthModifier > 0) {
      text += `+` + healthModifier + " health points";
    }
    else {
      text += healthModifier + " health points";
    }
    $("#description").html(text);

    // update level/sublevel
    if (sublevel < 1) {
      sublevel++;
    } else {
      sublevel = -1;
      level++;
      playBtn.html(`Start level ${level+1}`);
    }

    // hide choice buttons, show continue button
    $(".btn__choice").hide();
    $("#continue").show();
  });
}

playGame(level, health, social, sublevel);

function playGame(level, health, social, sublevel) {
  $("#continue").hide();
  $(".btn__choice").hide();
  $('#play').hide();

  // play game
  if (health > 0 && social > 0 && level <= 4) {
    // if start of level, show desc only with no choices
    if (sublevel == -1) {
      $("#main_img").attr("src", `images/${levels.images[level][0][0]}`);
      $("#description").text(levels.descriptions[level][0]);
      $('#play').show();
    }

    // if on sublevel, show desc and choices
    else {
      $(".btn__choice").show();
      $("#main_img").attr("src", `images/${levels.images[level][sublevel][0]}`);
      $("#description").text(levels.descriptions[level][sublevel+1]);
      $("#choice1").text(levels.choices[level][sublevel][0]);
      $("#choice2").text(levels.choices[level][sublevel][1]);
      $("#choice3").text(levels.choices[level][sublevel][2]);      
    }

  }
  else {
    alert("Game finished!");
  }
}
