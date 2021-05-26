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

let currentQuestion = 0

// {
// 	order: 0,
// 	question: 'Who lived at 25 Cromwell Street?',
// 	type: 'single',
// 	options: [
// 		'Jack the Ripper',
// 		'Ian Bradley and Myra Hindley',
// 		'Fred and Rose West',
// 		'The Yorkshire Ripper',
// 	],
// 	answers: [0, 2],
// }

function nextQuestion() {
	currentQuestion++;
	createQuizUI(currentQuestion)
}

// const quizPage = document.getElementById(quizPage)
function createBOOLEANQuestionUI(q) {
	// wrapper div
	const questionWrapper =  document.createElement('div')
	questionWrapper.setAttribute('class', `question_type ${q.type} question_${q.order}`)
	// quizPage.setAttribute('class', `${q.type}`)

	// question heading
	const question =  document.createElement('h2')
	question.setAttribute('class', 'question_title')
	question.appendChild(document.createTextNode(q.question))

	// answers wrapper
	const list =  document.createElement('ul')
	list.setAttribute('class', 'answers_list')

	// create list of answers
	q.options.map( option => {
		const li = document.createElement('Li')
		const liText = document.createTextNode(option)
		li.appendChild(liText)
		list.appendChild(li)
	})	

	// add all created elements to wrapper
	questionWrapper.appendChild(question)
	questionWrapper.appendChild(list)


	// console.log(`questionWrapper`, questionWrapper)
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

function createQuizUI(currentQuestionNumber) {
	const quizWrapper = document.getElementById('quizWrapper')
	const quiz =  questions.map(question => quizWrapper.appendChild(createBOOLEANQuestionUI(question)))
	// quizWrapper.appendChild(createBOOLEANQuestionUI(questions[currentQuestionNumber]))
	return quiz
}

function init() {
	createQuizUI(currentQuestion)
}

init()