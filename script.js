//intializers 
let htmlChoices = document.querySelectorAll(".choices")
let htmlPrompt = document.querySelector(".prompt")
let htmlScore = document.querySelector(".score")
let htmlTimer = document.querySelector(".timer")
let gameChoices = ''
let score = 0;
let startGame = document.querySelector(".start-game")
let headerTitle = document.querySelector(".header-title")
let w = 0 //this is for the prompt questions
let z = true //this is to stop clicks after you've made your selection 

//change the values when you feel creative
let victoryMessage = ["Niiiice, you got the right answer", "That is the right answer", "Good job, mate", "Correct"]
let randomVictoryMessage = Math.floor(Math.random() * victoryMessage.length);
console.log(randomVictoryMessage, victoryMessage[randomVictoryMessage]);


//console.log(htmlChoices);

//need to sort the array to be random every time
const level1Questions = [
  {
    question: "What is Tyler, the Creator's given full name?",
    choices: ["Tyler Gregory Okonma","Tyler Elijah O'Neal","Tyler Elijah Okonma","Tyler Haley Okonma"],
    answer: "Tyler Gregory Okonma"
  },
  {
    question: "When did he start OF?",
    choices: ["2009", "2006", "2007", "2005"],
    answer: "2007"
  },
  {
    question: "Which show was not created by T?",
    choices: ["The Jellies,", "Nuts + Bolts", "Loiter Squad", "Mr. Pickles"],
    answer: "Mr. Pickles"
  },
  {
    question: "When is Tyler's birthday?",
    choices: ["April 17", "October 30", "June 8", "March 6"],
    answer: "March 6"
  },
  {
    question: "What city is Tyler from?",
    choices: ["Hawthorne, California", "Los Angeles, California", "Ladera Heights, California", "Compton, California"],
    answer: "Hawthorne, California"
  },
  {
    question: "What has Tyler claimed to be his most valuable possession?",
    choices: ["keyboard", "inhaler", "bed", "bike"],
    answer: "inhaler"
  },
  {
    question: "How old was he when he taught himself to play the piano?",
    choices: ["10 years old", "14 years old", "16 years old", "20 years old"],
    answer: "14 years old"
  },
  {
    question: "Which of the following is not / has not been a nickname for Tyler?",
    choices: ["Bunny Hop", "Wolf Haley", "DJ Stank Daddy", "Golf T"],
    answer: "Golf T"
  }
]

const level2Questions = [
  {
    question: 'What has T deemed his, "FAVORITE BODY OF WORK" ?',
    choices: ["In My Mind by Pharrell Williams", "Mama's Gun by Erykah Badu", "Cherry Bomb by Tyler, the Creator", "In Search Of by N.E.R.D."],
    answer: "In Search Of by N.E.R.D."
  }
]

//console.log(level1Questions[0].question);


//let's think thru what we need to do here: 
// we need to assin the value of 1 question/choice/answer object to the corresponding elements on the page.
    //question -- > htmlQuestions    choices -- > htmlChoices        answer --> .... hmmmm 
        //then there needs to be a click event listener on the htmlChoices 
           // if the value of the element that was chosen == that object's (this.answer?) answer value --> then create animation (for now i'll do color) ... also change the prompt to say "correct" and queue a sound
              //if it's wrong do the same as above but with differnt content (tyler saying "fuck you")
//functions 

//sets the multiple choice questions to not be displayed on load 
window.addEventListener('load', (event) => {
  event.preventDefault();
  for (let i = 0; i < htmlChoices.length; i++) {
    htmlChoices[i].style.display = "none"
  }
})
//console.log(startGame)
startGame.addEventListener("submit", function start(e) {
  w = 0;
  e.preventDefault();
  startGame.style.display = "none"
  headerTitle.style.display = "none"
    // NEED TO: add transition function and play "callll meeeee if you get loossttt"// 
  htmlPrompt.innerHTML = level1Questions[w].question 
  for (let i = 0; i < htmlChoices.length; i++) {
    htmlChoices[i].style.display = "flex"
    console.log(htmlChoices.length)
    for (let j = 0; j < level1Questions[w].choices.length; j++) {
      // console.log(level1Questions[w].choices.length)
      // console.log(level1Questions[w].choices[j])
      // console.log(htmlChoices[j].innerHTML)
      htmlChoices[j].innerHTML = level1Questions[w].choices[j]
      // console.log(htmlChoices[j].innerHTML = level1Questions[w].choices[j])
      // console.log(level1Questions[w].answer)
      
      //adding event click event listener so player can answer the question
      htmlChoices[j].addEventListener("click", function select(event) {
        event.preventDefault()
        if (z === true) {
        if (htmlChoices[j].innerHTML === level1Questions[w].answer) {
          htmlChoices[j].style.background = "green"
          z = false;
          htmlPrompt.innerHTML = randomVictoryMessage
          score += 10;
          htmlScore.innerHTML = `SCORE: ${score}`;
          w++
          const nextQuestion = setInterval(runLevel1, 1000)
          const blank = setInterval(blankCanvas, 1000)
          //change the prompt to display victory message
          //put audio here -->
        } else {
          htmlChoices[j].style.background = "red"
          z = false;
          htmlPrompt.innerHTML = "that's wrong"
          w++
          const nextQuestion = setInterval(runLevel1, 1000)
          const blank = setInterval(blankCanvas, 1000)

          //put audio of tyler saying "fuck you"
          //change prompt to put loss message 
        }
          //need to setup a transition here
         // setInterval --> combine this the fadeout feature. there's a how to in your code bookmarks
      }
     })
     //need to create a function that i can hoist here
    
    }
  }
  
})
//w++;  --> put this at end of loop... but it needs to happen at the end of the last loop. 


//make a function that makes the order of the answer arrays random, so that people can't memorize the order
function blankCanvas() {
  for (let i = 0; i < htmlChoices.length; i++) {
    htmlChoices[i].style.background = "none"
  }
}
console.log(w)
function runLevel1() {
  z = true;
  for (let i = 0; i < htmlChoices.length; i++) {
    htmlPrompt.innerHTML = level1Questions[w].question 
    htmlChoices[i].style.display = "flex"
    console.log(htmlChoices.length)
    for (let j = 0; j < level1Questions[w].choices.length; j++) {
      console.log(level1Questions[w].choices.length)
      console.log(level1Questions[w].choices[j])
      console.log(htmlChoices[j].innerHTML)
      htmlChoices[j].innerHTML = level1Questions[w].choices[j]
      console.log(htmlChoices[j].innerHTML = level1Questions[w].choices[j])
      console.log(level1Questions[w].answer)
      
      //adding event click event listener so player can answer the question
      htmlChoices[j].addEventListener("click", function select(event) {
        event.preventDefault()
        if (z === true) {
        if (htmlChoices[j].innerHTML === level1Questions[w].answer) {
          htmlChoices[j].style.background = "green"
          z = false;
          htmlPrompt.innerHTML = randomVictoryMessage
          score += 10;
          htmlScore.innerHTML = `SCORE: ${score}`;
          const nextQuestion = setInterval(runLevel1, 1000)
          const blank = setInterval(blankCanvas, 1000)
          w++
          //change the prompt to display victory message
          //put audio here -->
        } else {
          htmlChoices[j].style.background = "red"
          z = false;
          htmlPrompt.innerHTML = "that's wrong"
          const nextQuestion = setInterval(runLevel1, 1000)
          const blank = setInterval(blankCanvas, 1000)
          w++
          //put audio of tyler saying "fuck you"
          //change prompt to put loss message 
        }
          //need to setup a transition here
         // setInterval
      }
     })
     //need to create a function that i can hoist here
    
    }
  }
  
}




//load new page --> should probably do a set interval after the last click function --> after a second automatically goes to next question


  //level1Questions.forEach(question => {
//     htmlPrompt.innerHTML = question[0].question;
  
//   })


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