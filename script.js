const questions = [
  {
      question: "What is the capital of France?",
      answers: [
          { text: "Paris", correct: true },
          { text: "Berlin", correct: false },
          { text: "Madrid", correct: false },
          { text: "Rome", correct: false }
      ]
      
  },
  {
      question: "Which planet is known as the Red Planet?",
      answers: [
          { text: "Venus", correct: false },
          { text: "Mars", correct: true },
          { text: "Jupiter", correct: false },
          { text: "Saturn", correct: false }
      ]
  },
  
];

let currentQuestionIndex = 0;

const questionTextElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

function startQuiz() {
  currentQuestionIndex = 0;
  nextButton.classList.add('hide');
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionTextElement.innerText = question.question;
  clearAnswerButtons();
  question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(answer));
      answerButtonsElement.appendChild(button);
  });
}

function clearAnswerButtons() {
  while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(answer) {
  const correct = answer.correct;
  if (correct) {
      
  } else {
      
  }

  if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion(questions[currentQuestionIndex]);
  } else {
      
      nextButton.innerText = 'Finish';
      nextButton.onclick = finishQuiz;
  }
}

function finishQuiz() {
  
}

function nextQuestion() {
  nextButton.classList.add('hide');
  showQuestion(questions[currentQuestionIndex]);
}

startQuiz();
