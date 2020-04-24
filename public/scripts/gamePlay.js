$(document).ready(function() {

  // grab initial health and social points from landing page 
  let health = 50;
  let social = 50;
  let level = 1;
  let i = level -1;
  let sublevel = 0;

  // update aria-valuenow with health and social
  $('#progress-bar__health').attr('aria-valuenow', health);
  $('#progress-bar__social').attr('aria-valuenow', social);

  playGame(level, health, social);

    // user chooses one
  for (let choiceIndex of ['#choice1', '#choice2', '#choice3']) {
    $(`#choice${choiceIndex}`).click(() => { 
      let { healthModifier, socialModifier } = levels.points[i][choiceIndex];

      // update health and social points
      health += healthModifier;
      social += socialModifier;
      $('#health_points').innerhtml(`${health} / 100`);
      $('#progress-bar__health').attr('aria-valuenow', health);
      $('#social_points').innerhtml(`${social} / 100`);
      $('#progress-bar__social').attr('aria-valuenow', social);

      // show desc of choice
      $('#description').innerhtml(level.choiceAnswers[i][choiceIndex]);
    });

    level++;

    let nextLevel = $('<button>');
    nextLevel.attr('id', 'nextLevel');
    nextLevel.attr('type', 'button');
    nextLevel.addClass('btn btn__choice btn-lg btn-block');
    nextLevel.text('Next Level');
    nextLevel.click(() =>playGame(level, health, social));
  }


  //use ajax for pics?

  let pic = $('<img>');
  pic.attr('src', '../public/images/street.jpg');
  // pic.attr('alt', 'Street between buildings with people walking on it');

  // $('.grid__health').prepend(pic);
  // $('.grid__image').append(pic);

});

function playGame(level, health, social) {
  // play game
  while (health != 0 && social != 0 && level <=5) {
    // show image
    $('#image_main').append(levels.images[i].main);

    // show desc
    $('#description').innerhtml(levels.images[i].descriptions[i][sublevel]);

    // show choices
    $('#choice1').innerhtml(levels.choices[i][0][sublevel]);
    $('#choice2').innerhtml(levels.choices[i][1][sublevel]);
    $('#choice3').innerhtml(levels.choices[i][2][sublevel]);
  }    
}