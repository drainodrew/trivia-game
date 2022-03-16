//intializers 
let htmlChoices = document.querySelectorAll(".choices")
let htmlPrompt = document.querySelector(".prompt")
let htmlScore = document.querySelector(".score")
let htmlTimer = document.querySelector(".timer")
let gameChoices = ''
let score = 0;
let startGame = document.querySelector(".start-game")
let headerTitle = document.querySelector(".header-title")

//need to sort the array to be random every time
const level1Questions = [
  {
    question: "What is Tyler, the Creator's given full name?",
    choices: ["Tyler Gregory Okonma","Tyler Elijah O'Neal","Tyler Elijah Okonma","Tyler Haley Okonma"],
    answer: 0
  },
  {
    question: "When did he start OF?",
    choices: ["2009", "2006", "2007", "2005"],
    answer: 2
  }
]



//let's think thru what we need to do here: 
// we need to assin the value of 1 question/choice/answer object to the corresponding elements on the page.
    //question -- > htmlQuestions    choices -- > htmlChoices        answer --> .... hmmmm 
        //then there needs to be a click event listener on the htmlChoices 
           // if the value of the element that was chosen == that object's (this.answer?) answer value --> then create animation (for now i'll do color) ... also change the prompt to say "correct" and queue a sound
              //if it's wrong do the same as above but with differnt content (tyler saying "fuck you")
//functions 
console.log(startGame)
startGame.addEventListener("submit", function start(e) {
  e.preventDefault();
  startGame.style.display = "none"
  headerTitle.style.display = "none"
  // add transition function // 
  level1Questions.forEach(question => {
    htmlPrompt.innerHTML = question.question;
  
  })
})

//there need to be a function that sets the next prompts 


// for (let i = 0; i < htmlChoices.length; i++) {
//   htmlChoices[i].addEventListener("click", function idkYet(e) {
//     e.preventDefault;
//     level1Questions.forEach(question => {
//       htmlPrompt.innerHTML = question.question;
//   })
// console.log(htmlPrompt)
//   })
// }
// level1Questions.forEach(question => {
//   gameChoices = htmlChoices[question.question];
//   console.log(gameChoices)
// })
//   for (let key in question) {
//     console.log(`${key}: ${question[key]}`);
//   }
//   console.log(key[2])
// });

  
let bastard = ["Bastard", "Seven", "Odd Toddlers",	"French!", "Blow", "Pigs Fly", "Parade", "Slow It Down","AssMilk", "VCR / Wheels", "Session", "Sarah", "Jack and the Beanstalk", "Tina", "Inglorious"]


//   answer: [""]
// }
// let question2 = "In August 2016, what did Tyler say he would do if he were white for one day?"
// let answer2 = ["Say the 'n word'", "Dye his hair blue", "Shot his shot with Biebs", "Play golf at the country club"]

// let question3 = "What was the name of Tyler's app?"
// let answer3 = ["Golf Wang", "WUPHF!", "Golf Media", ""]
// ]

// "What was T arrested for in 2014?"
//   Inciting a riot
// //for album i can do if right song in right order == green ; if wrong = red ; if right song, wrong order == yellow//

// //who did not feature on this album ? //

// //name "this" song --> play a random song in the background//

//create an audio file of tyler saying "it's" and then him saying "answer" from the song --> it should play when you get the right answer