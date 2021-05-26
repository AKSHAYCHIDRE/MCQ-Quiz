const questions = [
  {
    order: 0,
    question: 'Who lived at 25 Cromwell Street?',
    type: 'single',
    options: [
      'Jack the Ripper',
      'Ian Bradley and Myra Hindley',
      'Fred and Rose West',
      'The Yorkshire Ripper',
    ],
    answers: [0, 2],
  },
  {
    order: 1,
    question: 'How did Ted Bundy lure his victims in?',
    type: 'multi',
    options: [
      'Pretending to be an officer',
      'Pretending to be injured',
      'Asking them out on a date',
      'Knocking them out',
    ],
    answer: [1, 2],
  },
  {
    order: 2,
    question: 'What year was the term "serial killer" coined in America?',
    type: 'multi',
    options: ['1912', '1996', '1960', '1976'],
    answer: [1, 3],
  },
  {
    order: 3,
    question:
      'What cult inspired Timothy McVeigh, the Oklahoma City Bomber, to do what he did?',
    type: 'single',
    options: [
      'The Branch Dividians',
      'Children of God',
      'The Manson Family',
      'Aum Shinrikyo',
    ],
    answer: 0,
  },
  {
    order: 4,
    question: 'How many people did Ed Gein kill?',
    type: 'single',
    options: ['10', '25', '2', '6'],
    answer: 2,
  },
  {
    order: 5,
    question: 'How many was Ed Gein convicted for?',
    type: 'multi',
    options: ['0', '1', '10', '16'],
    answer: [1, 3],
  },
  {
    order: 6,
    question:
      "What was Brenda Spencer's reason for her killing spree at Cleveland Elementary School?",
    type: 'single',
    options: [
      "She didn't like Mondays",
      'She was being bullied',
      'She wanted to see what killing was like',
      'She hated kids',
    ],
    answer: 0,
  },
  {
    order: 7,
    question: 'What does Dennis Rader\'s nickname, "BTK", stand for?',
    type: 'single',
    options: [
      'Bind, Torture, Kill',
      'Blindfold, Tickle, Kill',
      'Bind, Tickle, Kill',
      'Blindfold, Torture, Kill',
    ],
    answer: 0,
  },
  {
    order: 8,
    question: "What was Sacramento serial killer Richard Chase's nickname?",
    type: 'multi',
    options: [
      'The Night Stalker',
      'The Vampire of Sacramento',
      'The East Area Rapist',
      'The Zodiac Killer',
    ],
    answer: [1, 3],
  },
  {
    order: 9,
    question: 'Which woman was thought to be the first serial killer?',
    type: 'multi',
    options: [
      'Aileen Wuornos',
      'Belle Gunness',
      'Jane Toppan',
      'Lavinia Fisher',
    ],
    answer: [1, 3],
  },
  {
    order: 10,
    question:
      'What book was the torn page from that was found with the Somerton Man?',
    type: 'single',
    options: [
      'The Rudaiyat of Omar Khayyan',
      'The Bible',
      'The Great Gatsby',
      'The Quaran',
    ],
    answer: 0,
  },
  {
    order: 11,
    question: 'How many years was Jaycee LeeDugard held against her own will?',
    type: 'multi',
    options: ['1 year', '8 years', '25 years', '3 years'],
    answer: [1, 3],
  },
  {
    order: 12,
    question: 'What disorder did the Eriksson Twins suffer from?',
    type: 'single',
    options: ['Bipolar', 'Schizophrenia', 'Depression', 'Folie a deux'],
    answer: 3,
  },
  {
    order: 13,
    question:
      'What country was the infamous "Who put Bella in the wych-elm" body found?',
    type: 'single',
    options: ['England', 'Ireland', 'Scotland', 'Poland'],
    answer: 1,
  },
  {
    order: 14,
    question: 'What was John Wayne Gacy known as?',
    type: 'multi',
    options: [
      'The Killer Clown',
      'The Midwest Killer',
      'The Hillside Strangler',
      'The Candyman',
    ],
    answer: [1, 3],
  },
  {
    order: 15,
    question: "Who was Leonard Lake's partner in crime?",
    type: 'multi',
    options: ['Dean Corll', 'Charles Ng', 'David Burkowitz', 'Ottis Toole'],
    answer: [1, 3],
  },
  {
    order: 16,
    question: 'What country did Andrei Chikatilo hail from?',
    type: 'single',
    options: ['England', 'Japan', 'America', 'Russia'],
    answer: 3,
  },
  {
    order: 17,
    question: 'What state was The Green River Killer active in?',
    type: 'multi',
    options: ['Ohio', 'New York', 'California', 'Washington'],
    answer: [1, 3],
  },
  {
    order: 18,
    question: "Who was known to be Jack the Ripper's last victim?",
    type: 'single',
    options: [
      'Martha Tabram',
      'Catherine Eddowes',
      'Mary Ann Nichols',
      'Mary Kelly',
    ],
    answer: 3,
  },
  {
    order: 19,
    question:
      'What was the movie The Zodiac Killer referred to as the best satirical comedy?',
    type: 'single',
    options: ['The Exorcist', 'Halloween', 'Jaws', 'Amityville Horror'],
    answer: 0,
  },
]


// set tracking variables
let count = 0
let answer = null
let prevFlag = false
let nextFlag = true
let isToNext = false

// grab html elements
const options = document.querySelectorAll('.options')
const question = document.getElementsByTagName('h2')[0]
const optionsPara = document.getElementsByTagName('p')[1]

// const resetButton = document.getElementsByClassName('reset')[0]
// const prevButton = document.getElementsByClassName('prev')[0]
// const nextButton = document.getElementsByClassName('next')[0]
const progress = document.getElementsByClassName('progress-bar')[0]

// add the event listeners
window.onload = renderQuestion()

// prevButton.addEventListener('click', prevQuestion)
// nextButton.addEventListener('click', nextQuestion)
// resetButton.addEventListener('click', resetQuiz)
// options.forEach(function (choice) {
//   choice.addEventListener('click', scoring)
// })

// functions used
function scoring() {
  // grab the answer of the current question
  answer = questions[count].answer
  // prevButton is visible when a choice is selected
  prevFlag = true
  isToNext = true
  if (questions[count].type === 'single') {
    nextQuestion()
  }
}

function nextQuestion() {
  // count goes up
  // count++
  prevFlag = true

  if (isToNext === true) {
    count++
    isToNext = false
  }

  if (count > 20) {
    count = 20
  } else if (count !== 20) {
    // numbers between 0 and 20 have questions that can be rendered
    renderQuestion()
  } else if (count === 20) {
    // quiz is over when count reaches 20
    renderCompletion()
  }
}

// the prevButton will only be available to go back one question
// function prevQuestion() {
//   // when the previous question renders, remove the prevButton
//   prevFlag = true

//   // then go back and render the old question
//   count--
//   renderQuestion()
// }

function renderQuestion() {
  // prevButton is hidden on the first page
  // and if the user attempts to go back more than one question
  // if (!prevFlag) {
  //   prevButton.classList.add('hide')
  // } else if (prevButton.classList.contains('hide')) {
  //   prevButton.classList.remove('hide')
  // }

  // if (!nextFlag) {
  //   nextButton.classList.add('hide')
  // } else if (nextButton.classList.contains('hide')) {
  //   nextButton.classList.remove('hide')
  // }

  // update question div with current question
  question.innerText = questions[count].question

  // update each choice with the options available in current question
  options.forEach(function (choice, i) {
    choice.innerText = questions[count].options[i]
  })

  updateProgress()
}

function renderCompletion() {
  updateProgress()

  // update with a thank you note
  question.innerText = 'Thank you for Completing the Quiz!'

  // reset avail, prevButton are removed
  prevButton.classList.add('hide')
  nextButton.classList.add('hide')
  resetButton.classList.remove('hide')
}

function updateProgress() {
  // progress bar will be updated as count goes up
  const progressPercentage = Math.round((count / 20) * 100)
  progress.style.width = progressPercentage + '%'
}

function resetQuiz() {
  // reset tracking variables
  count = 0
  prevFlag = true
  nextFlag = true

  // while resetButton is hidden
  resetButton.classList.add('hide')

  renderQuestion()
}