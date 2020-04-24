// grab initial health and social points from landing page 
let health = 50;
let social = 50;
let level = 1;
let i = level - 1;
let sublevel = 0;

// update aria-valuenow with health and social
$('#health_points').text(`${health} / 100`);
$('#social_points').text(`${social} / 100`);
$('#progress-bar__health').attr('aria-valuenow', health).css({'width': `${health}%`});
$('#progress-bar__social').attr('aria-valuenow', social).css({'width': `${social}%`});

playGame(level, health, social, i, sublevel);

  // user chooses one
for (let choiceIndex of [0, 1, 2]) {
  $(`#choice${choiceIndex + 1}`).click(() => { 
    let healthModifier = levels.points[i][choiceIndex][0];
    let socialModifier = levels.points[i][choiceIndex][1];

    // update health and social points
    health += healthModifier;
    social += socialModifier;
    $('#health_points').text(`${health} / 100`);
    $('#progress-bar__health').attr('aria-valuenow', health).css({'width': `${health}%`});
    $('#social_points').text(`${social} / 100`);
    $('#progress-bar__social').attr('aria-valuenow', social).css({'width': `${social}%`});

    // show desc of choice
    $('#description').text(levels.choiceAnswers[i][choiceIndex]);
    
    // hide choice buttons
    $('.btn__choice').hide();

    // update level/sublevel
    if (sublevel < 3) {
      sublevel++;
    }
    else {
      sublevel = 0;
      level++;
    }

    // add next level button
    let nextLevel = $('<button>');
    nextLevel.attr('id', 'nextLevel');
    nextLevel.attr('type', 'button');
    nextLevel.addClass('btn btn__next btn-lg btn-block');
    nextLevel.text('Next Level');
    nextLevel.click(() => {
      playGame(level, health, social, i, sublevel)
      $('.btn__next').hide();
      $('.btn__choice').show();
    });
    $('.grid__choices').append(nextLevel);
  });
}

  //use ajax for pics?

  let pic = $('<img>');
  pic.attr('src', '../public/images/street.jpg');
  // pic.attr('alt', 'Street between buildings with people walking on it');

  // $('.grid__health').prepend(pic);
  // $('.grid__image').append(pic);

function playGame(level, health, social, i, sublevel) {

  console.log(i, sublevel);
  // play game
  if (health != 0 && social != 0 && level <=5) {
    // show image
    $('#image_main').append(levels.images[i][sublevel]);

    // show desc
    $('#description').text(levels.descriptions[i][sublevel]);

    // show choices
    $('#choice1').text(levels.choices[i][sublevel]);
    $('#choice2').text(levels.choices[i][sublevel + 1]);
    $('#choice3').text(levels.choices[i][sublevel + 2]);
  }
}