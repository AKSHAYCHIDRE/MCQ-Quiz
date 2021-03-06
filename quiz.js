// Question data set
const questions = [
  {
    order: 0,
    question: 'Who lived at 25 Cromwell Street?',
    type: 'MCQ',
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
    type: 'BOOLEAN',
    options: [
      'Yes',
			'No'
    ],
    answer: [0],
  },
  {
    order: 2,
    question: 'What year was the term "serial killer" coined in America?',
    type: 'MCQ',
    options: ['1912', '1996', '1960', '1976'],
    answer: [1, 3],
  },
  {
    order: 3,
    question:
      'What cult inspired Timothy McVeigh, the Oklahoma City Bomber, to do what he did?',
    type: 'BOOLEAN',
    options: [
      'true',
			'false'
    ],
    answer: [0],
  },
  {
    order: 4,
    question: 'How many people did Ed Gein kill?',
    type: 'MCQ',
    options: ['10', '25', '2', '6'],
    answer: [2],
  },
  {
    order: 5,
    question: 'How many was Ed Gein convicted for?',
    type: 'MCQ',
    options: ['0', '1', '10', '16'],
    answer: [1, 3],
  },
  {
    order: 6,
    question:
      "What was Brenda Spencer's reason for her killing spree at Cleveland Elementary School?",
    type: 'MCQ',
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
    type: 'BOOLEAN',
    options: [
      'Right',
			'Wrong'
    ],
    answer: [0],
  },
  {
    order: 8,
    question: "What was Sacramento serial killer Richard Chase's nickname?",
    type: 'MCQ',
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
    type: 'MCQ',
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
    type: 'MCQ',
    options: [
      'The Rudaiyat of Omar Khayyan',
      'The Bible',
      'The Great Gatsby',
      'The Quaran',
    ],
    answer: [0],
  }
]

// use for progress and UI presentations
let currentQuestion = 0
const quizLength =  questions.length-1

// UI element catching for DOM manipulation
const quizPage = document.getElementById('quizPage')
const quizWrapper = document.getElementById('quizWrapper')
const nextButton = document.getElementById('nextButton')
const prevButton = document.getElementById('prevButton')
const submitButton = document.getElementById('submitButton')

const progressTracker = document.getElementById('progressTracker')

function updateProgress() {
  // progress bar will be updated as count goes up
  const progressPercentage = Math.round((currentQuestion / quizLength) * 100)
  progressTracker.style.width = progressPercentage + '%'
}

function nextQuestion() {
	currentQuestion++;
	updateProgress()
	// disable if last question
	if(prevButton.classList.contains('disabled')) prevButton.classList.remove('disabled')
	if(currentQuestion === quizLength) {
		nextButton.classList.add('disabled')
		submitButton.classList.remove('hide')
		// Enable submit
	}
	quizWrapper.innerHTML = ''
	quizWrapper.appendChild(createQuestionUI(questions[currentQuestion]))
}

function prevQuestion() {
	currentQuestion--;
	updateProgress()
	if(nextButton.classList.contains('disabled')) {
		nextButton.classList.remove('disabled')
		submitButton.classList.add('hide')
	}
	// disable if first question
	if(currentQuestion === 0) {
		prevButton.classList.add('disabled')
	}
	// clear exiting question and add 
	quizWrapper.innerHTML = ''
	quizWrapper.appendChild(createQuestionUI(questions[currentQuestion]))
}

function toggleSelectedAnswer() {

}

const selectAnswer = (e, currentQuestion) => {
	
	// check li click only
	if(e.target.tagName !== 'LI') return
	let currentSelectedOption = e.target.dataset.id

	// toggle selection class
	if(currentQuestion && !currentQuestion.userSelectedAnswers) currentQuestion.userSelectedAnswers = []
	
	// TODO: selected answers object with API
	if(e.target.classList.contains('selected')) {
		e.target.classList.remove('selected')	
		// Answers is in userSelectedAnswers remove it
		if(currentQuestion.userSelectedAnswers.includes(currentSelectedOption)) currentQuestion.userSelectedAnswers.splice(currentQuestion.userSelectedAnswers.indexOf(currentSelectedOption), 1)
		
		return
	}
	e.target.classList.add('selected')
	if(!currentQuestion.userSelectedAnswers.includes(currentSelectedOption)) currentQuestion.userSelectedAnswers.push(currentSelectedOption)
	
	// Boolean question should go to next question directly
	currentQuestion.type === 'BOOLEAN' && nextQuestion()
}

// TODO: 
// 1. save User selection of quiz on UI and in data as well
// 2. Boolean should go to next question directly
// 3. 
// 
function createQuestionUI(q) {
	// initial settings for dom handling

	// quiz page with current type of question class
	quizPage.classList.remove(...quizPage.classList)
	quizPage.classList.add(q.type)

	// wrapper div
	const questionWrapper =  document.createElement('div')
	questionWrapper.setAttribute('class', `question_type ${q.type} question_${q.order}`)


	// question heading
	const question =  document.createElement('h2')
	question.setAttribute('class', 'question_title')
	question.appendChild(document.createTextNode(q.question))

	// answers wrapper
	const list =  document.createElement('ul')
	list.setAttribute('class', 'answers_list')
	list.addEventListener('click', (event) => selectAnswer(event, q))


	// create list of answers
	q.options.map( (option, index) => {
		const li = document.createElement('Li')
		li.setAttribute('data-id', `${index}`)

		// If questions addressed already but using previous menu checking back, should show selected
		if(q.userSelectedAnswers && q.userSelectedAnswers.length > 0) {
			q.userSelectedAnswers.forEach( e => {
				if (e == index) {
					li.classList.add('selected')
				} 
			})
		}

		const liText = document.createTextNode(option)
		li.appendChild(liText)
		

		
		list.appendChild(li)
	})	

		


	// add all created elements to wrapper
	questionWrapper.appendChild(question)
	questionWrapper.appendChild(list)


	return questionWrapper
	// return (
	// 	<div class='question_mcq'>
	// 			<h5>{q.question}</h5>
	// 			<ul>
	// 				{
	// 					q.options.map(option => <li>{option}</li>)
	// 				}
	// 			</ul>
	// 	</div>
	// )
}

function submitQuiz() {
	console.log('User Selected answers from quiz!', questions)
}
 
function init() {
	// onload settings 
	// disable prev as first load is 0
	prevButton.classList.add('disabled')
	submitButton.classList.add('hide')
	quizWrapper.appendChild(createQuestionUI(questions[currentQuestion]))
}

init()