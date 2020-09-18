// /**
//  * Example store structure
//  */
// const store = {
//   // 5 or more questions are required
//   questions: [
//     {
//       question: 'What color is broccoli?',
//       answers: [
//         'red',
//         'orange',
//         'pink',
//         'green'
//       ],
//       correctAnswer: 'green'
//     },
//     {
//       question: 'What is the current year?',
//       answers: [
//         '1970',
//         '2015',
//         '2019',
//         '2005'
//       ],
//       correctAnswer: '2019'
//     }
//   ],
//   quizStarted: false,
//   questionNumber: 0,
//   score: 0
// };

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

'use strict';

//question database
const STORE = [
    {
        //1 [0]
        question: '🥇 How often is the World Cup played? 🏆',
        answers: [
            'Every year',
            'Every two years',
            'Every three years',
            'Every four years'
        ],
        correctAnswer:
            'Every four years'
    },
    {
        //2 [1]
        question: 'Where was the first World Cup held?',
        answers: [
            'Mexico',
            'France',
            'Uruguay',
            'England'
        ],
        correctAnswer:
            'Uruguay'
    },
    {
        //3 [2]
        question: 'Which country is the winningest in World Cup history?',
        answers: [
            'Germany', 
            'Brazil',
            'Netherlands', 
            'Japan'
        ],
        correctAnswer:
            'Brazil',
    },
    {
        //4 [3]
        question: 'Qualifying to the Grand Feast (i.e., the World Cup) is very difficult. That said, which country has made an apperance at every single Cup since its inception in 1930?',
        answers: [
            'USA',
            'Italy',
            'Mexico',
            'Brazil'
        ],
        correctAnswer:
            'Brazil'
    },
    {
        //5 [4]
        question: 'Who\'s the highest scoring player in World Cup history?',
        answers: [
            'Pele',
            'Maradona',
            'Miroslav Klose',
            'Lionel Messi'
        ],
        correctAnswer:
            'Miroslav Klose'
    },
    {
        //6 [5]
        question: 'Which player used his hand (not allowed) to score the infamous "Hand of God" goal in 1986?',
        answers: [
            'Pele',
            'Lionel Messi',
            'Maradona',
            'Cristiano Ronaldo'
        ],
        correctAnswer:
            'Maradona'
    },
    {
        //7 [6]
        question: 'The World Cup has been held every four years since its inception in 1930, except during which years?',
        answers: [
            '1942 and 1946',
            '1934 and 1938',
            '1998 and 2002',
            '1950 and 1954'
        ],
        correctAnswer:
            '1942 and 1946'
    },
    {
        //8 [7]
        question: 'What modern technology was added to improve accuracy and equitability in the game?',
        answers: [
            'Electronic performance and Tracking Systems (EPTS) used to control and improve player and team performance',
            'Goal-line technology (GLT) to determine if a goal has been scored or not',
            'Video assistant referee (VAR)',
            'All of the above'
        ],
        correctAnswer:
            'All of the above'
    },
    {
        //9 [8]
        question: 'Which of the following uniforms do you think belongs to the Italian National team?',
        answers: [
            'Green shirt, white shorts, red socks',
            'White shirt, white shorts, white socks with green and red highlights',
            'Red shirt, white shorts, green socks',
            'None of the above'
        ],
        correctAnswer:
            'None of the above'
    },
    {
        //10 [9]
        question: 'What are the ages of the oldest and youngest players to ever play in a World Cup?',
        answers: [
            '43 and 17',
            '45 and 19',
            '39 and 16',
            'None of the above'
        ],
        correctAnswer:
            '43 and 17'
    },
];

//this function displays what question the user is, also current score.
let scoreNumber = 0;
let userQuestionNumber = 0;

// this function will allow the user to start the quiz when CLICK START.
function startQuiz() {
    $(document).on('click', '.start', function (event) {
        // console.log("function startQuiz", userQuestionNumber);
        $('.js-intro').hide();     
        $('.result').hide(); 
        $('.questionAndScore').show();
        $('.question-number').text(counter);
        templateQuestion(0);
    });
}

let counter = 1;
function increaseQuestion(){
    counter += 1;
    $('.question-number').text(counter);
}

function updateQuestionAndScore(){
let board =  $(`
<p>Question: <span class="question-number">${counter}</span>/10</p>
<p>Score: <span class="scoreNumber">${scoreNumber}</span></p>`);
$('.questionAndScore').html(board);
}

//this function should display the structure of the the questions form.
function templateQuestion(questionIndex) {
    // console.log("function templateQuestion", questionIndex);
    updateQuestionAndScore();
    let questionForm = $(`
    <form class="form">           
        <fieldset>   
            <legend class="question">${STORE[questionIndex].question}</legend>
            <ul></ul>
        </fieldset> 
    </form>
`)

    let formSection = $(questionForm).find('ul');

    STORE[questionIndex].answers.forEach(function (answerValue, answerIndex) {
        $(`<li>
        <label class="option" for="${answerIndex}">
        <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
        <span>${answerValue}</span>
        </label>
        </li>`).appendTo(formSection);
    });
    $(`<div class="block-button"><button type="submit" class="submit">Go</button></div>`).appendTo(formSection);
    $('.questions').append(questionForm);
    $('.questions').show();
    $('.result').hide(); 
}

// Upon CLICK on SUBMIT, this function will display TEXTUAL + VISUAL feedback. 
// IF incorrect, will DISPLAY correct answer.
function handleAnswers() {
    $(document).on('click', '.submit', function (event) {
        event.preventDefault(); 
        // console.log("function handleAnswers", userQuestionNumber);
        let correct = STORE[(userQuestionNumber)].correctAnswer;   
        // console.log(correct);
     
        
        function wrongAnswer() {
            let isWrong = 
            $(`<h3 class="failure">Oops!</h3>
                <p>The correct answer was: \"${STORE[userQuestionNumber].correctAnswer}\"</p>
                <div class="gif-container"><img src="https://cdn0.sbnation.com/imported_assets/1770459/Soccer_kick_fail.gif?_ga=2.192553454.514981381.1600358636-1493897250.1600358636" alt="soccer player misses shot"></div>
                <button type="button" class="nextButton button">Next</button>`)
            // console.log(STORE[(userQuestionNumber)].correctAnswer);
            $('.feedback').html(isWrong); 
            $('.questions').hide(); 
        }

        function goodAnswer() {
            let isRight = $(`<h3>GOAAAALLLLLLLL!</h3>
            <div class="gif-container"><img src="https://i.makeagif.com/media/6-15-2018/lvfeLJ.gif" alt="goal score celebration"></div> 
            <button type="button" class="nextButton button">Next</button>`)
            $('.feedback').html(isRight);
            scoreNumber++;
            $('.scoreNumber').text(scoreNumber);
            $('.questions').hide();
        }

        let answer = $("input[class='radio']:checked").val();
            // console.log(answer);
            if (answer == correct) {
            goodAnswer();
            } else if (answer == undefined) {
            alert('Please choose an option!');
            } else {
            wrongAnswer();
            }
            $('.feedback').show();
    });
}

//this function generates the next question when user CLICK on button "NEXT"
//and render the next question on the form
function nextQuestion() {
    $(document).on('click', '.nextButton', function (event) {
        event.preventDefault();
            userQuestionNumber++;
            // console.log("score number", scoreNumber);
            // console.log("function nextQuestion", userQuestionNumber);
            // console.log("increaseQuestionNumber(), after next");
            $('.feedback').html('');
            $('.result').html(''); 
            $('.questions').show();
           
            if (userQuestionNumber === STORE.length){
                finalScore(userQuestionNumber) 
                // console.log("function finalScore", userQuestionNumber);
                $('.result').show();
                $(`<button type="button" class="startAgain button">Start Again</button>`).appendTo('.result');
            }else {
                $('.form').replaceWith(templateQuestion(userQuestionNumber));
                $('.question-number').text(userQuestionNumber);
                increaseQuestion();
            }
    });   
}
           
// this function generate overall score and feedback at the end of the quiz.
        function finalScore(userQuestionNumber) {
            // console.log("function finalScore", userQuestionNumber);
                
                // console.log('score number', scoreNumber);
            
                let moreThanAverage =
                    $(`<h3 class="moreThanAverage">You're a natural born champion, champ 🎉🏆✨</h3> 
                <img src="https://media.giphy.com/media/xT9IgyTgBDFWxP6Dao/giphy.gif" alt="/images/button-soccer-ball.png" class="ball">
                <p>You scored: <span class="scoreNumber">${scoreNumber}</span> out of 10</p>`)
                $('.result').html(moreThanAverage);
               
                let average =
                    $(`<h3 class="average">You're ready for the big leagues, kid 🙋‍♀️🙋‍♂️ Have at it again.</h3> 
                <img src="https://media.giphy.com/media/RIk2VoGaJpiiAUu9Re/giphy.gif" alt="/images/trophy_1f3c6.png">
                <p>You scored: <span class="scoreNumber">${scoreNumber}</span> out of 10</p>`)
                $('.result').html(average);
            
                let lessThanAverage =
                    $(`<h3 class="lessThanAverage">It's all good, buddy. No matter how you did... you're still a champion to us 🥇 Remember, no matter how many times you fail, you can always give it another go 😁</h3> 
                <img src="https://media.giphy.com/media/gOkawaguYNiSI/giphy.gif" alt="😖😭">
                <p>You scored: <span class="scoreNumber">${scoreNumber}</span> out of 10</p>`)
                $('.result').html(lessThanAverage); 

                $('.questionAndScore').hide();
                $('.questions').hide();
                $('.feedback').hide();
                $('.result').show();
                $(`<button type="button" class="startAgain button">Start Again</button>`).appendTo('.result');
                
                if  (scoreNumber >= 8) {
                $('.result').html(moreThanAverage); 
                } else if (scoreNumber >= 5) {
                $('.result').html(average); 
                } else if (scoreNumber <= 4){
                $('.result').html(lessThanAverage); 
                }
        }

//this function bring back that starting page when CLICK START AGAIN.
function restartQuiz() {
    $(document).on('click', '.startAgain', function (event) {  
        event.preventDefault();
        // console.log("function restartQuiz", userQuestionNumber);
        userQuestionNumber = 0;
        scoreNumber = 0; 
        $('.scoreNumber').text(scoreNumber);
        counter = 1;
        $('.question-number').text(counter);
        $('.questionAndScore').show();
        $('.result').html('');
        $('.form').replaceWith(templateQuestion(userQuestionNumber)); 
    });
}

//this is the callback function
function handleQuiz() {
    startQuiz();
    handleAnswers();
    nextQuestion();
    restartQuiz();
}

$(handleQuiz);