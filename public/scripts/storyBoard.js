const levels = {
  images: [
    [
      "level1-0-background1.jpg",
      "level1-1-background1.jpg",
      "level1-2-background1.jpg",
    ],
    [
      "level2-0-background1.jpg",
      "level2-1-background1.jpg",
      "level2-2-background1.jpg",
    ],
    [
      "level3-0-background1.jpg",
      "level3-1-background1.jpg",
      "level3-2-background1.jpg",
    ],
    [
      "level4-0-background1.jpg",
      "level4-1-background1.jpg",
      "level4-2-background1.jpg",
    ],
    [
      "level5-0-background1.jpg",
      "level5-1-background1.jpg",
      "level5-2-background1.jpg",
    ],
  ],

  descriptions: [
    [
      "Being in an essential job, you must go to work today.",
      "Who’s that? It’s grandma! \"Hello!\" she calls out to you. What do you do?",
      "It’s the morning rush and there are suddenly tons of people.",
    ],
    [
      "You’ve made it to work. Now you have to gracefully and safely navigate your way to your desk.", 
      "As you're walking down the hallway, you see your boss. She smiles, says good morning, and extends her hand to you.", 
      "The hallway is crowded with fellow coworkers all chatting about their weekend. They call you over to talk with them."
    ],
    [
      "You finally made it to your desk. Now for the day's work activities.", 
      "It’s time for lunch and you realize you left your lunch on the kitchen table at home. This will be difficult getting food, as well as avoiding people at the same time. If you don’t eat your health will suffer.", 
      "You have a planned team meeting after lunch. For an hour. In a small conference room."
    ],
    [
      "After work you decide to jog through the park to exercise and clear your head.", 
      "There are a ton of people at the park!  A particularly large group of people are walking in your direction taking up the entire path.", 
      "You run into your other boss, also exercising in the park, who mentions an upcoming work retreat.  He says the bus is booked and laughs about \"social distancing\" on a bus.  And you'll be coming, right? He implies consequences if you do not."
    ],
    [
      "What a day! Thankfully, it's almost at an end. You've managed to avoid the pandemic so far...", 
      "It’s time to decide for dinner! Do you take this opportunity to attempt to cook at home, which you haven’t done since 1999 or order in like you normally do? You could also phone a kitchen-saavy friend and cook together.", 
      "After dinner your roommate comes home and doesn't look too good. Turns out your roommate is sick, has a high fever, chills, basically the works."
    ],
  ],

  choices: [
    [
      [
        "Turn off on a side street.",
        "Smile, wave and walk faster.",
        "Give her a quick hug and explain (again) what’s going on and how important social distancing is.",
      ],
      [
        "Go to the coffee shop.", 
        "Go down a side street.", 
        "Grab a newspaper."
      ],
    ],
    [
      [
        "Extend your elbow.", 
        "Carefully take her hand and smile while asking about her weekend.", 
        "Respectfully reject her handshake and inform her about the dangers of social contact during this time."
      ],
      [
        "Walk over and talk from a safe distance (6 feet away).", 
        "Shout from down the hall about what you did over the weekend. These people clearly haven’t been watching the news.", 
        "Walk over to the group and participate fully in the conversation."
      ],
    ],
    [
      [
        "Go to the workplace cafeteria.", 
        "Order delivery and eat lunch at your desk.",
        "Skip lunch."
      ],
      [
        "Say you got food poisoning from lunch and leave work early.", 
        "Be a team player and go to the important meeting.", 
        "Hide for an hour after lunch and say you had to help someone in another department."
      ],
    ],
    [
      [
        "Jog to your left beside a nearby lake while trying to maintain a safe distance.", 
        "Slow down and walk to your right through a more wooded area.", 
        "Walk through the group on the sidewalk."
      ],
      [
        "Tell him, yes, you'll be there.", 
        "You'd like to be there, but cannot because you are worried about the health aspects of the trip.", 
        "Make up a quick excuse about needing to attend your sister's wedding at the same date."
      ],
    ],
    [
      [
        "Go to the grocery store.", 
        "Invite your friend over to cook.", 
        "Order in food."
      ],
      [
        "Sick again? Live and let live, you always say.",
        "Pack your bags and stay with your family.", 
        "Help your roommate self-quarantine.", 
      ],
    ],
  ],
  choiceAnswers: [
    [
      [
      "You quickly turn off onto a side street. Unfortunately, grandma doesn’t understand.",
      "Grandma smiles and waves back. Good job avoiding social interaction but also keeping grandma happy.",
      "Grandma squeezes tightly. You feel so loved and also a little germy.",
      ],
      [
        "You grab a cup of coffee. Yum, just like you like it. It fuels you with caffeine and a few germs.", 
        "You quickly turn off onto the side street. Better to just avoid everything and get to work. But in your rushed attempt to escape people, you accidentally bump into a coworker and spill their coffee all over them! Yikes.", 
        "The pandemic is spreading. New cases are popping up everywhere. You feel a little germy from handling a paper that’s been carried around all morning. "
      ],
    ],[
      [
        "Awkwardly laugh about the “new version” of the handshake taking the corporate world by storm.", 
        "She's got a firm grip, but did she wash her hands in the last two minutes?", 
        "She has a big ego and doesn’t like being told what to do by her employee."
      ],
      [
        "They try to get closer and you tell them about the 6’ rule.", 
        "They think you’re weird and everyone stares at you, but at least you don’t have their germs.", 
        "One of your coworkers accidentally sneezes while you’re all huddled together."
      ],
    ], [
      [
        "You get your food and realize that you won’t be able to avoid sitting with your coworkers for lunch. You eat and talk together.", 
        "The delivery driver did not say a word to you. You avoided all social interaction while getting your food and eat your food by yourself.", 
        "You did not eat anything for lunch."
      ],
      [
        "You avoid the meeting by leaving work. Another coworked with the same idea corners you in the parking lot. After several minutes of complaining and sneezing in your general direction you leave without saying anything else.", 
        "You go to the meeting and realize that it will just be a zoom presentation. You sit as far as possible from the nearest coworker and are still able to contribute.", 
        "You sit in your car for an hour while everyone is in the meeting. You avoid social interaction, but miss out on crucial team information. "
      ],
    ], [
      [
        "You jog too close to the edge, trip, and nearly fall in the pond.  A few people come to your aide, while a few others on the path look onwards and laugh.", 
        "You take a brief relaxing walk through the woods out of view of others, but end up not getting as much exercise as you would have liked and you feel a bit lonely.", 
        "Most of the people are too busy talking amongst themselves to notice you. And they're way too close for comfort."
      ],
      [
        "Thinking about the long crowded bus trip ahead worries you quite a bit.", 
        "Your boss gives you a short lecture about not being a team player and how foolish it is to worry about a simple bus trip.", 
        "Your boss reluctantly accepts your excuse and jogs away.  You know he was disappointed and worry about possible repercussions."
      ],
    ], [
      [
        "The trip to the grocery store was unbearable. It took too long, was too crowded and you had a difficult time figuring out what to get.", 
        "Cooking was a major success, you cooked enough food for a month and learned all about freezing leftovers!", 
        "You decide to stick with that status quo, ordering your food. Your decision helps keep restaurant and delivery employees working, but being overly exposed to food cooked by so many different people has left you exposed."
      ],
      [
        "Your roommate wasn't faking it. You've gotten the virus and now you're both sick.",
        "You didn’t escape fast enough and you've come down with the same symptoms. Now your roommate thinks you ditched them and your family is all sick.", 
        "You set up a meal and medicine drop for your roommate and disinfect the eintire place. Your roommate is appreciative and you avoided getting sick."
      ],
    ]
  ],
  points: [
    [
    // social, health points 
      [
        [-15, 15],
        [0, 10],
        [20, -20],
      ],
      [
        [10, -10],
        [-15, 15],
        [0, -5],
      ],
    ],[
      [
        [10, 10],
        [15, -15],
        [-20, 10],
      ],
      [
        [-10, 15],
        [-15, 10],
        [20, -20],
      ],
    ], [
      [
        [10, -20],
        [-15, 10],
        [-15, -15],
      ],
      [
        [-15, -15],
        [20, -10],
        [-20, 10],
      ],
    ], [
      [
        [-5, 15],
        [-15, 10],
        [5, -15],
      ],
      [
        [10, -15],
        [-15, 10],
        [-15, 10],
      ],
    ], [
      [
        [10, -15],
        [20, 10],
        [-10, -10],
      ],
      [
        [-15, -25],
        [-15, -30],
        [25, 15],
      ],
    ]
  ],
};
