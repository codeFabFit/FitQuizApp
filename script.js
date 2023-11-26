const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'You never need to work upper body?',
    answers: [
      { text: 'false', correct: true },
      { text: 'true', correct: false }
    ]
  },
  {
    question: 'How to you properly wake up glutes prior to training?',
    answers: [
      { text: 'incline treadmill walk', correct: false },
      { text: 'the filthy four band routine', correct: true },
      { text: 'no warm up, go right into it', correct: false },
      { text: 'who even workouts anymore, BBL', correct: false }
    ]
  },
  {
    question: 'What is the Filthy Four Band Routine?',
    answers: [
      { text: 'Squat Jump, Reverse Lunges, High Knee, ButtKicks', correct: false },
      { text: 'Fire Hydrants, Donkey Kicks, Glute Bridges, Hip Circles', correct: true },
      { text: 'Step Ups, Stairmaster, Deadlift, 100m Sprint', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'Hip thrust target which muscle group?',
    answers: [
      { text: 'Gluteus Minimus', correct: false },
      { text: 'Gluteus Maximus', correct: true }
    ]
  },
  {
    question: 'You should start with side that is weakest during your workout',
    answers: [
      { text: 'starting with the stronger side means get done faster', correct: false },
      { text: 'started with weaker gives your more energy to finish on the stronger leg', correct: true }
    ]
  },
  {
    question: 'How many times a week should you train your glutes?',
    answers: [
      { text: 'every single day baby wooo', correct: false },
      { text: '2-3x per week with adequate rest', correct: true }
    ]
  },
  {
    question: 'Abdominal exercises are important for glute growth?',
    answers: [
      { text: 'yes', correct: true },
      { text: 'no', correct: false }
    ]
  },
  {
    question: 'Which exercise mainly targets QUADS more',
    answers: [
      { text: 'hip thrust', correct: false },
      { text: 'squats', correct: true }
    ]
  },
  {
    question: 'Can you lose belly fat by doing squats?',
    answers: [
      { text: 'yes, doing just squats will make you lose belly fat', correct: false },
      { text: 'not directly but still important for healthy weight loss plan', correct: true }
    ]
  },
  {
    question: 'Select the proper workout order for glute growth:',
    answers: [
      { text: '1mile Treadmill Run, Squats, Step Ups, Hip Thrust, Filthy Four ', correct: false },
      { text: 'Dynamic Warm up, Filthy Four, hip thrust, back extension, good mornings', correct: true },
      { text: 'High Knees, Butt Kicks, Deadlift, Goblet Squat, Push Ups', correct: false },
      { text: 'Good Morning, Squats, Goblet Squats, Deadlift', correct: false }
    ]
  }
]