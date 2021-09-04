
//question data
const questionBank = [
  {
    ques: "What spell did Harry use to kill Lord Voldemort?",
    op1: "Expelliarmus",
    op2: "Expecto Patronum",
    op3: "Avada Kedavra",
    op4: "Accio",
    ans: 0,
  },
  {
    ques: "Finish the inscription on Dobby’s tombstone: ‘Here lies Dobby…",
    op1: "A true friend",
    op2: "The best servant",
    op3: "A free Elf",
    op4: "Master of socks",
    ans: 2,
  },
  {
    ques: "Who saved a centaur from being strangled by Professor Umbridge in the Forbidden Forest?",
    op1: "Grawp",
    op2: "Buckbeak",
    op3: "Hagrid",
    op4: "Luna",
    ans: 0,
  },
  {
    ques: "What was the name of the joke shop founded by the Weasley twins at 93 Diagon Alley?",
    op1: "Weasley’s Witchcraft Wonders",
    op2: "Weasley’s Worldwide Whompers",
    op3: "Weasley’s Wicked Whatsits",
    op4: "Weasley’s Wizard Wheezes",
    ans: 3,
  },
  {
    ques: "Who poses as Mad-Eye Moody, Harry’s 4th year Defense Against the Dark Arts professor?",
    op1: "Voldemort",
    op2: "Peter Pettigrew",
    op3: "Barty Crouch Jr.",
    op4: "Sirius Black",
    ans: 2,
  },
  {
    ques: "Albus Dumbledore destroyed which Horcrux?",
    op1: "Slytherin’s locket",
    op2: "Nagini",
    op3: "Hufflepuff’s cup",
    op4: "Marvolo Gaunt’s ring",
    ans: 3,
  },
  {
    ques: "What magical talent does Harry share with Voldemort?",
    op1: "Being an Animagus",
    op2: "Being a Parselmouth",
    op3: "Being an Auror",
    op4: "Being a Death Eater",
    ans: 1,
  },
  {
    ques: "Who knocks out the troll in the ladies’ bathroom in Harry Potter and the Philosopher’s Stone?",
    op1: "Harry",
    op2: "Ron",
    op3: "Hermione",
    op4: "Snape",
    ans: 1,
  },
  {
    ques: "What position does Harry play on his Quidditch team?",
    op1: "Chaser",
    op2: "Keeper",
    op3: "Bludger",
    op4: "Seeker",
    ans: 3,
  },
  {
    ques: "What was the name of the Black family’s house elf?",
    op1: "Dobby",
    op2: "Winky",
    op3: "Kreacher",
    op4: "Hokey",
    ans: 2,
  },
  {
    ques: "What is a thestral?",
    op1: "A half-giant",
    op2: "An invisible winged horse",
    op3: "A shrunken head",
    op4: "A pixie",
    ans: 1,
  },
  {
    ques: "Which element is associated with Hufflepuff?",
    op1: " Fire",
    op2: "Earth",
    op3: "Air",
    op4: "Water",
    ans: 1,
  },
  {
    ques: "Wit beyond measure is man’s greatest treasure’ is the motto of which house?",
    op1: "Gryffindor",
    op2: "Hufflepuff",
    op3: "Ravenclaw",
    op4: "Slytherin",
    ans: 2,
  },
  {
    ques: "Who wrote the 7-book series titled ‘The Standard Book of Spells’?",
    op1: "Kennilworthy Whisp",
    op2: "Rita Skeeter",
    op3: "Bathilda Bagshot",
    op4: "Miranda Goshawk",
    ans: 3,
  },
  {
    ques: "Which Patronus belongs to Luna Lovegood?",
    op1: "Doe",
    op2: "Rabbit",
    op3: "Dog",
    op4: "Horse",
    ans: 1,
  },
];

//background image links
const backgroundImages={
    0:'https://images.unsplash.com/photo-1527684651001-731c474bbb5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    1:'https://images.unsplash.com/photo-1565292266983-74457d481f44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    2:'https://images.unsplash.com/photo-1590929034342-fd0eb9c97fdd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    3:'https://images.unsplash.com/photo-1594396555192-a411562137eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    4:'https://images.unsplash.com/photo-1498676077434-7540603d2dda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    5:'https://images.unsplash.com/photo-1551801841-ecad875a5142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    6:'https://images.unsplash.com/photo-1616262373426-18bfa28bafab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    7:'https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    8:'https://images.unsplash.com/photo-1622281537719-bbf7307094c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    9:'https://images.unsplash.com/photo-1594382562124-13a849639af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    10:'https://images.unsplash.com/photo-1618944614466-ce2d03dee861?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    11:'https://images.unsplash.com/photo-1618944616545-1aac141d8d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxoYXJyeSUyMHBvdHRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
    12:'https://images.unsplash.com/photo-1533591380348-14193f1de18f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFudGFzdGljJTIwYmVhc3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    13:'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    14:'https://images.unsplash.com/photo-1594396555192-a411562137eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    'end':'https://images.unsplash.com/photo-1575887339850-1acc9d8daf3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG9nd2FydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
}

var response = [];
var score = 0;
let currQuestion = 0;
const totalQuestions = questionBank.length;
const startButton = document.getElementById("btn");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const box = document.getElementById("container");
const sc = document.getElementById("score");
const quizName = document.getElementById("quizName");
const screen = document.getElementById("screen");
const bg=document.getElementById('bg');
const options = document.getElementsByTagName("p");

//button to start quizz
startButton.addEventListener("click", () => {
  quizName.style.display = "none";
  next.style.display = "inline-block";
  prev.style.display = "inline-block";
  getQuestionData();
  startButton.setAttribute("id", "sub");
  startButton.innerHTML = "Submit";
  const sub = document.getElementById("sub");
  sub.style.display = "inline-block";
  sub.addEventListener("click", () => {

    //clearing elements of screen to end quizz
    while (screen.firstChild) {
      screen.removeChild(screen.firstChild);
    }
    bg.src=backgroundImages['end'];
    calculateScore();
  });
});

////event listener on next button 
next.addEventListener("click", () => {
  nextQuestion();
});

//event listener on previous button 
prev.addEventListener("click", () => {
  previousQuestion();
});

//unmarking the last mark answer of question if user wants to modify the ans
function unmark() {
  for (var opt of options) {
    opt.removeAttribute("class");
  }
}

//marking the answer pressed by the user
function mark(val) {
  unmark();
  if (val >= 0 && val <= 3) options[val].setAttribute("class", "mark");
}

//to get question data
function getQuestionData() {
  bg.src=backgroundImages[currQuestion];

  //clearing last question elements if exists
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }

  //setting question elements
  const question = document.createElement("h1");
  const opt1 = document.createElement("p");
  const opt2 = document.createElement("p");
  const opt3 = document.createElement("p");
  const opt4 = document.createElement("p");
  const qText = document.createTextNode(
    "Q" + (currQuestion + 1) + ": " + questionBank[currQuestion].ques
  );
  question.append(qText);
  box.append(question);
  const op1Text = document.createTextNode(
    "1) " + questionBank[currQuestion].op1
  );
  opt1.append(op1Text);
  box.append(opt1);
  const op2Text = document.createTextNode(
    "2) " + questionBank[currQuestion].op2
  );
  opt2.append(op2Text);
  box.append(opt2);
  const op3Text = document.createTextNode(
    "3) " + questionBank[currQuestion].op3
  );
  opt3.append(op3Text);
  box.append(opt3);
  const op4Text = document.createTextNode(
    "4) " + questionBank[currQuestion].op4
  );
  opt4.append(op4Text);
  box.append(opt4);
  mark(response[currQuestion]);

  //setting response in the list
  opt1.addEventListener("click", () => {
    response[currQuestion] = 0;
    mark(0);
  });
  opt2.addEventListener("click", () => {
    response[currQuestion] = 1;
    mark(1);
  });
  opt3.addEventListener("click", () => {
    response[currQuestion] = 2;
    mark(2);
  });
  opt4.addEventListener("click", () => {
    response[currQuestion] = 3;
    mark(3);
  });

  //displaying buttons available
  if(currQuestion==0){
   prev.style.display='none';
  }
  else if(currQuestion==totalQuestions-1){
   next.style.display='none';
  }
  else{
   prev.style.display='inline';
   next.style.display='inline';
  }

}

//to go to next question
function nextQuestion() {
  if (currQuestion + 1 != totalQuestions) {
    currQuestion++;
    getQuestionData();
  }
}

//to go to last question
function previousQuestion() {
  if (currQuestion != 0) {
    currQuestion--;
    getQuestionData();
  }
}

//calculate score
function calculateScore() {
  for (var i = 0; i < questionBank.length; i++) {
    if (questionBank[i].ans == response[i]) {
      score++;
    }
  }
  const scorecontainer = document.createElement("h1");
  const totalScore = document.createTextNode(
    "Score:" +
      score +
      "/" +
      totalQuestions +
      " (" +
      Math.ceil((score / totalQuestions) * 100) +
      "%)"
  );
  scorecontainer.append(totalScore);
  screen.append(scorecontainer);
  score = 0;
}