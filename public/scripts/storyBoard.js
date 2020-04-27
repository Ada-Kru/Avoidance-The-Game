const levels = {
  images: [
    [
      ["level1-1-background1.jpg", "placeholder", "placeholder"],
      ["level1-2-background1.jpg", "placeholder", "placeholder"],
    ],
    [
      ["level2-1-background1.jpg", "placeholder", "placeholder"],
      ["level2-2-background1.jpg", "placeholder", "placeholder"],
    ],
    [
      ["level3-1-background1.jpg", "placeholder", "placeholder"],
      ["level3-2-background1.jpg", "placeholder", "placeholder"],
    ],
    [
      ["level4-1-background1.jpg", "placeholder", "placeholder"],
      ["level4-2-background1.jpg", "placeholder", "placeholder"],
    ],
    [
      ["level5-1-background1.jpg", "placeholder", "placeholder"],
      ["level5-2-background1.jpg", "placeholder", "placeholder"],
    ],
  ],

  descriptions: [
    [
      "Being in an essential job, you must go to work today.",
      "Who’s that? It’s grandma! Hello! she calls out to you. What do you do?",
      "It’s the morning rush and there’s suddenly tons of people.",
    ],
    [
      "You’ve made it to work. Now you have to gracefully and safely navigate your way to your desk.", 
      "As you're walking down the hallway, you see your boss. She smiles, says good morning, and extends her hand to you.", 
      "The hallway is crowded with fellow coworkers all chatting about their weekend. They call you over to talk with them."
    ],
    [
      "You’ve made it to your desk at work. You now must go about your daily work activities.", 
      "It’s time for lunch. You realize you forgot to pack your lunch for work. This will be difficult getting food, as well as avoiding people at the same time. If you don’t eat your health will suffer.", 
      "You have a planned team meeting after lunch. You know you will be stuck in an hour long conversation with your coworkers because of this meeting."
    ],
    [
      "After work you decide to jog through the park for exercise, but the park is more crowded than you expected.", 
      "There are a ton of people at the park!  There a particularly large group of people are walking in your direction taking up the entire path.", 
      "You run into a higher level manager from your company who is also at the park and they mention an upcoming work retreat you hadn’t heard about until now.  They mention that this will involve a trip on a crowded bus with your other coworkers.  They want to know if you will attend and imply that there may be consequences if you do not."
    ],
    [
      "What a day! Thankfully, it's almost at an end. You've managed to avoid the pandemic so far...", 
      "It’s time to decide for food! Attempt to cook at home, which you haven’t done since 1999 or try to order in food like you normally do. You  could also phone a friend and invite them over to assist with the cooking (and hope to learn something too!), but that carries some risk for both you and your friend.", 
      "You’ve been working from home for the last few weeks and your roommate was just put on work from home today. Turns out your roommate is sick, has a high fever, chills, basically the works."
    ],
  ],

  choices: [
    [
      [
        "Turn off on a side street.",
        "Smile, wave and walk faster.",
        "Give her a quick hug, explain (again) what’s going on and how important social distancing is.",
      ],
      ["Go to the coffee shop.", "Go down a side street.", "Grab a newspaper."],
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
        "Order a delivery and eat lunch at your desk.",
        "Skip lunch."
      ],
      [
        "Say you got food poisoning from lunch, leave work early.", 
        "Go to the meeting, you know how important it is to be there.", 
        "Hide for an hour after lunch and lie and say you had to help someone in another department."
      ],
    ],
    [
      [
        "Jog to your left beside a nearby lake while trying to maintain a safe distance.", 
        "Slow down and walk to your right through a more wooded area.", 
        "Walk past the group on the grass without jogging."
      ],
      [
        "Let them know that you will be going.", 
        "Tell them you would like to attend, but cannot because you are worried about the health aspects of the trip.", 
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
        "Pack your bags and stay with your family.", 
        "Help your roommate self-quarentine.", 
        "Sick again? Live and let live, you always say."
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
      ["You grab a cup of coffee. Yum, just like you like it. It fuels you with caffeine and a few germs. ", "You quickly turn off onto the side street. Better to just avoid everything and get to work. But in your rushed attempt to escape people, you accidentally bump into a coworker and spill their coffee all over them! Yikes.", "The pandemic is spreading. New cases are popping up everywhere. You feel a little germy from handling a paper that’s been carried around all morning. "],
    ],[
      ["Awkwardly laugh about the “new version” of the handshake taking the corporate world by storm.", "She's got a firm grip, but did she wash her hands in the last two minutes?", "She has a big ego and doesn’t like being told what to do by her employee."],
      ["They try to get closer and you tell them about the 6’ rule. ", "They think you’re weird and everyone stares at you, but at least you don’t have their germs. ", "One of your coworkers accidentally sneezes while you’re all huddled together."],
    ], [
      [
        "You get your food and realize that you won’t be able to avoid sitting with your coworkers for lunch. You eat lunch your lunch while having a conversation with your coworkers.", 
        "The delivery driver did not say a word to you. You avoid all social interaction while getting your food and eat your food by yourself.", 
        "You did not eat anything for lunch."
      ],
      [
        "You avoid the meeting, however in doing so you have to go home. On your way home you remember you have a lot of family staying over your house. You have to socialize and you missed out on your work meeting. ", 
        "You go to the meeting and realize that it will just be a zoom presentation. You sit as far as possible from the nearest coworker and avoid most social interaction.", 
        "You sit in your car for an hour while everyone is in the meeting. You avoid social interaction, but miss out on crucial team information. "
      ],
    ], [
      [
        "You jog too close to the edge, trip, and nearly fall in the pond.  A few people come to your aide, while a few others on the path look onwards and laugh.", 
        "You take a brief relaxing walk through the woods out of view of others, but end up not getting as much exercise as you would have liked and you feel a bit lonely.", 
        "Most of the people are too busy talking amongst themselves to notice you."
      ],
      [
        "Thinking about the long crowded bus trip ahead worries you quite a bit.", 
        "The manager gives you a short lecture about not being a team player and how foolish it is to worry about a simple bus trip.", 
        "The manager reluctantly accepts your excuse and jogs away.  You know he was disappointed and worry about possible repercussions."
      ],
    ], [
      [
        "Cooking was a major success, you cooked enough food for a month and learned all about freezing leftovers!", 
        "Cooking was a major success, you cooked enough food for a month and learned all about freezing leftovers!", 
        "You decide to stick with that status quo, ordering your food. Your decision helps keep restaurant and delivery employees working, but being overly exposed to food cooked by so many different people has left you exposed."
      ],
      [
        "You didn’t escape fast enough, your second night at your family’s house you come down with the same symptoms. Now your roommate thinks you ditched them and your family is all sick.", 
        "Set up a meal and medicine drop at designated hours so you avoid any exposure to your roommate. Your roommate appreciates your rapid suggestion and helping them quarantine, you also avoided getting sick.", 
        "Your roommate wasn't faking it. You've gotten the virus and now you're both sick."
      ],
    ]
  ],
  points: [
    [
      [
        [-30, 20],
        [15, 0],
        [30, -30],
      ],
      [
        [5, -20],
        [-25, 0],
        [0, -15],
      ],
    ],[
      [
        [-5, -5],
        [20, -30],
        [-50, 0],
      ],
      [
        [0, 20],
        [-20, 10],
        [20, -50],
      ],
    ], [
      [
        [30, -15],
        [-15, 15],
        [0, -20],
      ],
      [
        [-15, -15],
        [5, 10],
        [-15, 5],
      ],
    ], [
      [
        [-40, -30],
        [-10, 20],
        [0, 10],
      ],
      [
        [20, -30],
        [-30, 0],
        [-10, 0],
      ],
    ], [
      [
        [0, -15],
        [10, 25],
        [30, -15],
      ],
      [
        [-50, -75],
        [25, 15],
        [-25, -75],
      ],
    ]
  ],
};
