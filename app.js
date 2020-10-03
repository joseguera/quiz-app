'use strict';

//////////////////////////////////////////////////
///////// Define Global Variables ////////////////
//////////////////////////////////////////////////

const store = {
  slides: [{
    message: '⚽ The World Cup Quiz ⚽',
    buttonText: ['Start'],
    answer: '',
    feedback: [],
    state: 'start'
  },
  {
    message: '1. 🥇 How often is the World Cup played? 🏆',
    imgSrc: 'images/fifa-country-code-explained.jpg',
    imgAlt: 'two players battling for the ball',
    options: ['Every year', 'Every two years', 'Every three years', 'Every four years'],
    answer: 'Every four years',
    buttonText: ['Submit Answer', 'Next Question'],
    feedback: ['Great job!', 'Correct answer: "Every four years". Though more soccer would be awesome, holding the World Cup every 4 years allows national teams to hire new coaches, develop young players and allow seasoned players to learn from their mistakes and improve 💪'],
    state: 'question'
  },
  {
    message: '2. Where was the first World Cup held?',
    imgSrc: 'images/Uruguay_goal_v_argentina_1930.jpg',
    imgAlt: 'player scoring goal - black and white',
    options: ['Mexico', 'France', 'Uruguay', 'England'],
    answer: 'Uruguay',
    buttonText: ['Submit Answer', 'Next Question'],
    feedback: ['Great job!', 'Correct answer: "Uruguay". In 1930, the country of Uruguay was celebrating their centennial, so what better way of keeping it 💯? Host the first major soccer tournament in the world.'],
    state: 'question'
  },
  {
    message: '3. Which country is the winningest in World Cup history?',
    imgSrc: 'images/maradona_1994.jpg',
    imgAlt: 'player celebrates goal',
    options: ['Germany', 'Brazil', 'Netherlands', 'Japan'],
    answer: 'Brazil',
    buttonText: ['Submit Answer', 'Next Question'],
    feedback: ['Great job!', 'Correct answer: Though Germany has reached the most World Cup Finals (8), in terms of actual wins, Brazil has them beat by 1 with 5 total trophies 🏆'],
    state: 'question'
  },
  {
    message: '4. Qualifying to the Grand Feast (i.e., the World Cup) is very difficult. That said, which country has made an apperance at every single Cup since its inception in 1930?',
    imgSrc: 'images/high_kick.jpg',
    imgAlt: 'player kicking high',
    options: ['USA', 'Italy', 'Mexico', 'Brazil'],
    answer: 'Brazil',
    buttonText: ['Submit Answer', 'Next Question'],
    feedback: ['Great job!', 'Correct answer: "Brazil" I think you\'re beginning to see a pattern here: Brazil is a T-Rex at soccer 🐱‍🐉'],
    state: 'question'
  },
  {
    message: '5. Who\'s the highest scoring player in World Cup history?',
    imgSrc: 'images/world-cup-1938.jpg',
    imgAlt: 'player trying to beat his mark - black and white',
    options: ['Pele', 'Maradona', 'Miroslav Klose', 'Lionel Messi'],
    answer: 'Miroslav Klose',
    buttonText: ['Submit Answer', 'Next Question'],
    feedback: ['Great job!', 'Correct answer: "Miroslav Klose". Though the most common final score in a soccer game is a 1-1 draw 😴, a match played in Antananarivo, Madagascar had a final score of 149–0 🤯'],
    state: 'question'
  },
  {
    message: '6. Which player used his hand (not allowed) to score the infamous "Hand of God" goal in 1986?',
    imgSrc: 'images/200px-France_vs_hungary_kimberley.jpg',
    imgAlt: 'player passing the ball to teammate',
    options: ['Pele', 'Lionel Messi', 'Maradona', 'Cristiano Ronaldo'],
    answer: 'Maradona',
    buttonText: ['Submit Answer', 'Next Question'],
    feedback: ['Great job!', 'Correct answer: "Maradona". Some believe that the game of rugby was created when, in 1823, William Webb Ellis first took the ball in his arms and ran with it, literally 🙈'],
    state: 'question'
  },
  {
    message: '7. The World Cup has been held every four years since its inception in 1930, except during which years?',
    imgSrc: 'images/world_cup_1950.jpg',
    imgAlt: 'players lined up for their country\'s national anthem',
    options: ['1942 and 1946', '1934 and 1938', '1998 and 2002', '1950 and 1954'],
    answer: '1942 and 1946',
    buttonText: ['Submit Answer', 'Next Question'],
    feedback: ['Great job!', 'Correct answer: "1942 and 1946". World War II impacted every aspect of life in many countries, including the beautiful game 😔'],
    state: 'question'
  },
  {
    message: '8. What modern technology was added to improve accuracy and equitability in the game?',
    imgSrc: 'images/world_cup_1998.jpg',
    imgAlt: 'player scoring header goal',
    options: ['Electronic performance and Tracking Systems (EPTS) used to control and improve player and team performance', 'Goal-line technology (GLT) to determine if a goal has been scored or not', 'Video assistant referee (VAR)', 'All of the above'],
    answer: 'All of the above',
    buttonText: ['Submit Answer', 'Next Question'],
    feedback: ['Great job!', 'Correct answer: "All of the above". Though soccer is getting more "techie" 🤓, the game is still very human and unpredictable.'],
    state: 'question'
  },
  {
    message: '9. Which of the following uniform colors do you think belongs to the Italian National team?',
    imgSrc: 'images/2014-World-Cup-Uniform-Preview.jpg',
    imgAlt: '2014 world cup uniforms',
    options: ['Green shirt, white shorts, red socks', 'White shirt, white shorts, white socks with green and red highlights', 'Red shirt, white shorts, green socks', 'None of the above'],
    answer: 'None of the above',
    buttonText: ['Submit Answer', 'Next Question'],
    feedback: ['Great job!', 'Correct answer: "None of the above". The Italian team wears blue, not their flag colors, in honour of the House of Savoy, under whom Italy was unified in 1861 ☕'],
    state: 'question'
  },
  {
    message: '10. What are the ages of the oldest and youngest players to ever play in a World Cup?. Who\'s the highest scoring player in World Cup history?',
    imgSrc: 'images/Roger-Milla-Cameroon.jpg',
    imgAlt: 'cameroon player holding up hands',
    options: ['43 and 17', '45 and 19', '39 and 16', 'None of the above'],
    answer: '43 and 17',
    buttonText: ['Submit Answer', 'Next Question'],
    feedback: ['Great job!', 'Correct answer: "43 and 17". Though there are technically no age limitations, soccer can be a pretty rough sport. So, if you\'re fit and strong enough to take the occasional knock, then you\'re good to go 👍'],
    state: 'question'
  },
  {
    message: 'Finished Quiz',
    buttonText: ['Restart Quiz'],
    answer: '',
    feedback: [],
    state: 'finished'
  }],
  hasAnswered: false,
  quizStart: false,
  questionNumber: 0,
  numRight: 0,
};

//////////////////////////////////////////////////
///////// Template Generation Functions //////////
//////////////////////////////////////////////////

// function that returns html based on a switch case
function startTemplate(selection) {
  return `
<form id="js-form">
  <h1 class="js-form-title">${selection.message}</h2><br>
    <img src="images/WorldCupImage.jpg" alt="world cup trophy in stadium"><br>
  <button class="submit start" type="submit">${selection.buttonText[0]}</button>
  <p class="hide"></p>
</form>
`;
}
function questionTemplate(selection) {
  return `
<form id="js-form">
  <h2 class="js-form-title">${selection.message}</h2>
  <div class="imgWrapper">
    <img src="${selection.imgSrc}" alt="${selection.imgAlt}">
  </div>
  <div class="js-answers-wrapper">
    <div class="js-answers-wrapper-inner">
      <div class="answer-div" id="answer-one">
        <input  type="radio" class="answer" name="answers" id="answer-one" value="${selection.options[0]}" required>${selection.options[0]}
      </div>
      <div class="answer-div" id="answer-two">
        <input type="radio" class="answer" name="answers" id="answer-two" value="${selection.options[1]}" required>${selection.options[1]}
      </div>
      <div class="answer-div" id="answer-three">
        <input type="radio" class="answer" name="answers" id="answer-three" value ="${selection.options[2]}" required>${selection.options[2]}
      </div>
      <div class="answer-div" id="answer-four">
        <input type="radio" class="answer" name="answers" id="answer-four" value="${selection.options[3]}" required>${selection.options[3]}
      </div>
    </div>
  </div>
  <button class="submit feedback" type="submit">${selection.buttonText[0]}</button>
  <p class="hide"></p>
</form>
`;
}
function finishedTemplate(selection) {
  return `
<form id="js-form">
  <h2 class="js-form-title">${selection.message}</h2>
  <button class="submit restart" type="submit">${selection.buttonText[0]}</button>
  <p class="correct">You've answered ${store.numRight} correct out of 10</p>
</form>
`;
}

//////////////////////////////////////////////////
///////// Render Functions ///////////////////////
//////////////////////////////////////////////////

function createTemplate(selection) {
  switch (selection.state) {
  case 'start':
    return startTemplate(selection);
  case 'question':
    return questionTemplate(selection);
  case 'finished':
    return finishedTemplate(selection);
  }
}
// State Management
// Get Slide Index 
function getIndex() {
  let index = store.questionNumber;
  return index;
}
// Update Index
function updateIndex() {
  if (getIndex() < store.slides.length - 1) {
    store.questionNumber++;
  }
  else store.questionNumber = 1;
}
// Update Score
function updateScore() {
  store.numRight++;
}
// Reset Score
function resetScore() {
  store.numRight = 0;
}
// Set Question to Question 1
function resetQuiz() {
  store.questionNumber = 1;
}
// Check Answer
function checkSubmission(entry, answer) {
  if (entry === answer) {
    return true;
  }
  else { return false; }
}
// View
// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render() {
  const slide = store.slides[getIndex()];
  const template = createTemplate(slide);
  $('main').html(template);
}

//////////////////////////////////////////////////
///////// Event Handler Functions ////////////////
//////////////////////////////////////////////////

// Start Quiz
function startQuiz() {
  $('main').on('click', '.start', event => {
    event.preventDefault();
    store.quizSstart = true;
    updateIndex();
    render();
  });
}
// Question Related Functions
// Fill Feedback Element
function givePositiveFeedback(slide) {
  $('.hide').text(slide.feedback[0] + ' You\'ve answered ' + store.numRight +' correct');
}
function giveNegativeFeedback(slide) {
  $('.hide').text(slide.feedback[1] + ' You\'ve answered ' + store.numRight +' correct');
}
function giveQuestionFeedback(slide, selection) {
  if (checkSubmission(selection, slide.answer)) {
    updateScore();
    givePositiveFeedback(slide);
  }
  else {
    giveNegativeFeedback(slide);
  }
}
// Check Answer and toggle next button 
function toggleHasAnswered() {
  store.hasAnswered = !store.hasAnswered;
}
function checkIfAnswered(slide, selection) {
  if (!store.hasAnswered) {
    giveQuestionFeedback(slide, selection);
    toggleHasAnswered();
  }
  else {
    toggleHasAnswered();
    render();
  }
}
function editSubmitButtonClass(slide) {
  $('.feedback').addClass('next');
  $('.feedback').text(slide.buttonText[1]);
  $('.feedback').removeClass('feedback');
}
// On Click Event Handler
function getFeedback() {
  $('main').on('click', '.feedback', event => {
    event.preventDefault();
    let slide = store.slides[getIndex()];
    let selection = $('input[name="answers"]:checked').val();
    checkIfAnswered(slide, selection);
    editSubmitButtonClass(slide);
    toggleHasAnswered();
  });
}

// Getting to the Next Question
// toggle Submit Button
function editNextButtonClass(slide) {
  $('.next').addClass('feedback');
  $('.next').text(slide.buttonText[0]);
  $('.next').removeClass('next');
}
// On Click Event Handler
function nextQuestion() {
  $('main').on('click', '.next', event => {
    event.preventDefault();
    let slide = store.slides[getIndex()];
    updateIndex();
    editNextButtonClass(slide);
    render();
  });
}

//Restarting The Quiz
// On Click Event Handler
function restartQuiz() {
  $('main').on('click', '.restart', event => {
    event.preventDefault();
    resetScore();
    resetQuiz();
    render();
  });
}

// Callback function
function main() {
  render();
  startQuiz();
  getFeedback();
  nextQuestion();
  restartQuiz();
}

//on DOM ready run callback function
$(main);