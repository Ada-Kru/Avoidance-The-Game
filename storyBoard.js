const level1 = {
  levelNum: 1,
  images: {
    main: "",
    clipart1: [],
    clipart2: []
  },
  descriptions: {
    main: "Being in an essential job, you must go to work today.",
    sub1: "Who’s that? It’s grandma! Hello! she calls out to you. What do you do?",
    sub2: ""
  },
  choices: {
    sub1: {
      1: "Turn off on a side street.",
      2: "Smile, wave and walk faster.",
      3: "Give her a quick hug, explain (again) what’s going on and how important social distancing is."
    },
    sub2: {
      1: "",
      2: "",
      3: ""  
    }
  },
  choiceAnswers: {
    1: "You quickly turn off onto a side street. Unfortunately, grandma doesn’t understand.",
    2: "Grandma smiles and waves back. Good job avoiding social interaction but also keeping grandma happy.",
    3: "Grandma squeezes tightly. You feel so loved and also a little germy."  
  },
  points: {
    sub1: {
      1: [-30, 20],
      2: [15, 0],
      3: [30, -30]
    },
    sub2: {
      1: [],
      2: [],
      3: []      
    }
  }
};