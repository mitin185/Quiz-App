// Quiz data structure
const quizData = {
  science: {
    kids: [
      {
        question: 'What planet is known as the Red Planet?',
        image: 'https://cdn-icons-png.flaticon.com/512/3033/3033985.png',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        answer: 1
      },
      {
        question: 'What do plants need to make food?',
        image: 'https://cdn-icons-png.flaticon.com/512/1674/1674295.png',
        options: ['Sunlight', 'Water', 'Chocolate', 'Air'],
        answer: 0
      },
      {
        question: 'How many legs does a spider have?',
        image: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
        options: ['6', '8', '10', '12'],
        answer: 1
      },
      {
        question: 'What is water made of?',
        image: 'https://cdn-icons-png.flaticon.com/512/728/728093.png',
        options: ['Oxygen', 'Hydrogen only', 'Hydrogen and Oxygen', 'Nitrogen'],
        answer: 2
      },
      {
        question: 'Which animal is known for its black and white stripes?',
        image: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
        options: ['Zebra', 'Tiger', 'Elephant', 'Giraffe'],
        answer: 0
      }
    ],
    teens: [
      {
        question: 'What is the powerhouse of the cell?',
        image: 'https://cdn-icons-png.flaticon.com/512/2913/2913460.png',
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'],
        answer: 1
      },
      {
        question: 'What force keeps planets in orbit around the sun?',
        image: 'https://cdn-icons-png.flaticon.com/512/608/608101.png',
        options: ['Magnetism', 'Gravity', 'Friction', 'Electricity'],
        answer: 1
      },
      {
        question: 'What gas do humans exhale?',
        image: 'https://cdn-icons-png.flaticon.com/512/2934/2934384.png',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
        answer: 2
      },
      {
        question: 'What is H2O?',
        image: 'https://cdn-icons-png.flaticon.com/512/728/728093.png',
        options: ['Salt', 'Water', 'Oxygen', 'Hydrogen'],
        answer: 1
      },
      {
        question: 'Which element has the chemical symbol "Fe"?',
        image: 'https://cdn-icons-png.flaticon.com/512/2965/2965562.png',
        options: ['Fluorine', 'Iron', 'Gold', 'Copper'],
        answer: 1
      }
    ],
    adults: [
      {
        question: 'What is the second law of thermodynamics about?',
        image: 'https://cdn-icons-png.flaticon.com/512/3083/3083685.png',
        options: ['Energy conservation', 'Entropy increase', 'Force and motion', 'Gravity'],
        answer: 1
      },
      {
        question: 'What particles are found in the nucleus of an atom?',
        image: 'https://cdn-icons-png.flaticon.com/512/2913/2913457.png',
        options: ['Protons and neutrons', 'Electrons and protons', 'Electrons and neutrons', 'Only electrons'],
        answer: 0
      },
      {
        question: 'Which vitamin is produced when skin is exposed to sunlight?',
        image: 'https://cdn-icons-png.flaticon.com/512/2916/2916233.png',
        options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
        answer: 3
      },
      {
        question: 'What is the chemical formula for table salt?',
        image: 'https://cdn-icons-png.flaticon.com/512/728/728093.png',
        options: ['NaCl', 'KCl', 'H2O', 'NaOH'],
        answer: 0
      },
      {
        question: 'Who proposed the theory of relativity?',
        image: 'https://cdn-icons-png.flaticon.com/512/1995/1995520.png',
        options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Niels Bohr'],
        answer: 1
      }
    ]
  },
  history: {
    kids: [
      {
        question: 'Who was the first President of the United States?',
        image: 'https://cdn-icons-png.flaticon.com/512/3099/3099527.png',
        options: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'John Adams'],
        answer: 1
      },
      {
        question: 'What is the Great Wall of China?',
        image: 'https://cdn-icons-png.flaticon.com/512/2997/2997944.png',
        options: ['A big wall to protect China', 'A river', 'A mountain', 'An ancient warship'],
        answer: 0
      },
      {
        question: 'Where did ancient Egyptians build pyramids?',
        image: 'https://cdn-icons-png.flaticon.com/512/693/693924.png',
        options: ['Mexico', 'China', 'Egypt', 'India'],
        answer: 2
      },
      {
        question: 'Who discovered America?',
        image: 'https://cdn-icons-png.flaticon.com/512/642/642245.png',
        options: ['Christopher Columbus', 'Vasco da Gama', 'Ferdinand Magellan', 'Marco Polo'],
        answer: 0
      },
      {
        question: 'What was the name of the ship the Pilgrims sailed on?',
        image: 'https://cdn-icons-png.flaticon.com/512/3063/3063825.png',
        options: ['Mayflower', 'Santa Maria', 'Endeavour', 'Cutty Sark'],
        answer: 0
      }
    ],
    teens: [
      {
        question: 'In which year did World War II end?',
        image: 'https://cdn-icons-png.flaticon.com/512/3203/3203436.png',
        options: ['1945', '1939', '1918', '1960'],
        answer: 0
      },
      {
        question: 'Who was Queen Elizabeth I?',
        image: 'https://cdn-icons-png.flaticon.com/512/2945/2945512.png',
        options: ['The first British queen', 'Queen during the Renaissance', 'Queen of France', 'Wife of Henry VIII'],
        answer: 1
      },
      {
        question: 'What was the Renaissance?',
        image: 'https://cdn-icons-png.flaticon.com/512/2916/2916281.png',
        options: ['A revival of art and culture', 'An ancient battle', 'A religious festival', 'A kingdom'],
        answer: 0
      },
      {
        question: 'Who wrote the Declaration of Independence?',
        image: 'https://cdn-icons-png.flaticon.com/512/2930/2930793.png',
        options: ['George Washington', 'Benjamin Franklin', 'Thomas Jefferson', 'John Adams'],
        answer: 2
      },
      {
        question: 'What was the Cold War?',
        image: 'https://cdn-icons-png.flaticon.com/512/2997/2997938.png',
        options: ['A period of tension between US and USSR', 'A world war', 'A battle in Europe', 'An economic crisis'],
        answer: 0
      }
    ],
    adults: [
      {
        question: 'What year did the Berlin Wall fall?',
        image: 'https://cdn-icons-png.flaticon.com/512/2942/2942081.png',
        options: ['1989', '1991', '1985', '1999'],
        answer: 0
      },
      {
        question: 'Who was Napoleon Bonaparte?',
        image: 'https://cdn-icons-png.flaticon.com/512/2935/2935270.png',
        options: ['French military leader', 'King of England', 'Russian czar', 'Roman emperor'],
        answer: 0
      },
      {
        question: 'What was the Treaty of Versailles?',
        image: 'https://cdn-icons-png.flaticon.com/512/2916/2916266.png',
        options: ['Ended World War I', 'Created the League of Nations', 'Started World War II', 'Ended the Cold War'],
        answer: 0
      },
      {
        question: 'Who was Winston Churchill?',
        image: 'https://cdn-icons-png.flaticon.com/512/3079/3079052.png',
        options: ['UK Prime Minister during WWII', 'US president', 'French president', 'Russian leader'],
        answer: 0
      },
      {
        question: 'What was the Industrial Revolution?',
        image: 'https://cdn-icons-png.flaticon.com/512/2966/2966546.png',
        options: ['Period of industrial growth and innovation', 'A war', 'A political movement', 'A disease outbreak'],
        answer: 0
      }
    ]
  },
  geography: {
    kids: [
      {
        question: 'Which is the largest continent?',
        image: 'https://cdn-icons-png.flaticon.com/512/2996/2996932.png',
        options: ['Africa', 'Europe', 'Asia', 'Australia'],
        answer: 2
      },
      {
        question: 'Which ocean is the biggest?',
        image: 'https://cdn-icons-png.flaticon.com/512/2620/2620200.png',
        options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
        answer: 2
      },
      {
        question: 'Mount Everest is in which mountain range?',
        image: 'https://cdn-icons-png.flaticon.com/512/3095/3095722.png',
        options: ['Alps', 'Rockies', 'Himalayas', 'Andes'],
        answer: 2
      },
      {
        question: 'What is the capital of France?',
        image: 'https://cdn-icons-png.flaticon.com/512/3468/3468495.png',
        options: ['Paris', 'London', 'Rome', 'Berlin'],
        answer: 0
      },
      {
        question: 'Which river is the longest?',
        image: 'https://cdn-icons-png.flaticon.com/512/1146/1146869.png',
        options: ['Amazon', 'Nile', 'Mississippi', 'Yangtze'],
        answer: 1
      }
    ],
    teens: [
      {
        question: 'Which country has the most natural lakes?',
        image: 'https://cdn-icons-png.flaticon.com/512/428/428277.png',
        options: ['Canada', 'USA', 'Brazil', 'Russia'],
        answer: 0
      },
      {
        question: 'What is the smallest country in the world?',
        image: 'https://cdn-icons-png.flaticon.com/512/1483/1483726.png',
        options: ['Monaco', 'Vatican City', 'Maldives', 'San Marino'],
        answer: 1
      },
      {
        question: 'Which desert is the largest hot desert?',
        image: 'https://cdn-icons-png.flaticon.com/512/2932/2932690.png',
        options: ['Gobi', 'Sahara', 'Kalahari', 'Arabian'],
        answer: 1
      },
      {
        question: 'Which country has the longest coastline?',
        image: 'https://cdn-icons-png.flaticon.com/512/252/252035.png',
        options: ['Australia', 'Canada', 'Russia', 'USA'],
        answer: 1
      },
      {
        question: 'What country is home to the Great Barrier Reef?',
        image: 'https://cdn-icons-png.flaticon.com/512/3043/3043995.png',
        options: ['Australia', 'Indonesia', 'Philippines', 'New Zealand'],
        answer: 0
      }
    ],
    adults: [
      {
        question: 'Which is the world’s largest island?',
        image: 'https://cdn-icons-png.flaticon.com/512/1581/1581295.png',
        options: ['Greenland', 'Madagascar', 'Borneo', 'New Guinea'],
        answer: 0
      },
      {
        question: 'Which mountain range separates Europe and Asia?',
        image: 'https://cdn-icons-png.flaticon.com/512/3095/3095722.png',
        options: ['Ural Mountains', 'Alps', 'Carpathians', 'Pyrenees'],
        answer: 0
      },
      {
        question: 'What is the capital of Brazil?',
        image: 'https://cdn-icons-png.flaticon.com/512/2948/2948134.png',
        options: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],
        answer: 1
      },
      {
        question: 'What country is known as the Land of the Rising Sun?',
        image: 'https://cdn-icons-png.flaticon.com/512/197/197560.png',
        options: ['China', 'South Korea', 'Japan', 'Thailand'],
        answer: 2
      },
      {
        question: 'Which sea lies between Africa and Europe?',
        image: 'https://cdn-icons-png.flaticon.com/512/1693/1693625.png',
        options: ['Red Sea', 'Mediterranean Sea', 'Black Sea', 'Caspar Sea'],
        answer: 1
      }
    ]
  }
};

// Variables for quiz state
let currentGenre = null;
let currentAgeGroup = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
const timePerQuestion = 15; // seconds
let timeLeft = timePerQuestion;

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const preferencesForm = document.getElementById('preferences-form');
const genreSelect = document.getElementById('genre-select');
const ageSelect = document.getElementById('age-select');

const questionNumberSpan = document.getElementById('question-number');
const timerSpan = document.getElementById('timer');
const questionText = document.getElementById('question-text');
const questionImage = document.getElementById('question-image');

const optionsList = document.getElementById('options-list');
const nextBtn = document.getElementById('next-btn');
const quitBtn = document.getElementById('quit-btn');

const scoreText = document.getElementById('score-text');
const iqLevelText = document.getElementById('iq-level-text');
const retryBtn = document.getElementById('retry-btn');

// Show a screen and hide others
function showScreen(screen) {
  [welcomeScreen, quizScreen, resultScreen].forEach(s => {
    s.classList.remove('active');
  });
  screen.classList.add('active');
}

// Start quiz after user selects preferences
preferencesForm.addEventListener('submit', (e) => {
  e.preventDefault();
  currentGenre = genreSelect.value;
  currentAgeGroup = ageSelect.value;

  if (!currentGenre || !currentAgeGroup) {
    alert('Please select both genre and age group.');
    return;
  }

  currentQuestions = [...quizData[currentGenre][currentAgeGroup]];
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = timePerQuestion;

  showScreen(quizScreen);
  nextBtn.disabled = true;
  displayQuestion();
  startTimer();
});

// Display current question and options
function displayQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  questionNumberSpan.textContent = `Question ${currentQuestionIndex + 1} / ${currentQuestions.length}`;
  questionText.textContent = q.question;
  questionImage.src = q.image;
  questionImage.alt = `Illustration for: ${q.question}`;

  optionsList.innerHTML = '';
  nextBtn.disabled = true;

  q.options.forEach((option, index) => {
    const li = document.createElement('li');
    li.tabIndex = 0;
    li.textContent = option;
    li.dataset.index = index;
    li.classList.remove('correct', 'incorrect', 'selected');

    li.addEventListener('click', () => handleOptionSelect(li));
    li.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        handleOptionSelect(li);
      }
    });

    optionsList.appendChild(li);
  });
}

// Handle option selection
function handleOptionSelect(selectedLi) {
  if (nextBtn.disabled === false) return; // already answered

  const selectedIdx = parseInt(selectedLi.dataset.index);
  const correctIdx = currentQuestions[currentQuestionIndex].answer;

  // Highlight correct and incorrect answers
  [...optionsList.children].forEach(li => {
    li.classList.remove('selected');
    const idx = parseInt(li.dataset.index);
    if (idx === correctIdx) {
      li.classList.add('correct');
    } else {
      li.classList.remove('correct');
    }
  });

  if (selectedIdx === correctIdx) {
    selectedLi.classList.add('correct');
    score++;
  } else {
    selectedLi.classList.add('incorrect');
  }

  nextBtn.disabled = false;
  stopTimer();
}

// Timer functions
function startTimer() {
  timeLeft = timePerQuestion;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      disableOptions();
      nextBtn.disabled = false;
      highlightCorrect();
    }
  }, 1000);
}

function updateTimerDisplay() {
  timerSpan.textContent = `Time Left: ${timeLeft}s`;
}

function stopTimer() {
  clearInterval(timerInterval);
}

function disableOptions() {
  [...optionsList.children].forEach(li => {
    li.style.pointerEvents = 'none';
  });
}

function highlightCorrect() {
  const correctIdx = currentQuestions[currentQuestionIndex].answer;
  [...optionsList.children].forEach(li => {
    if (parseInt(li.dataset.index) === correctIdx) {
      li.classList.add('correct');
    }
  });
}

// Next question handler
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex >= currentQuestions.length) {
    showResults();
    return;
  }
  nextBtn.disabled = true;
  enableOptions();
  displayQuestion();
  startTimer();
});

function enableOptions() {
  [...optionsList.children].forEach(li => {
    li.style.pointerEvents = 'auto';
    li.classList.remove('correct', 'incorrect', 'selected');
  });
}

// Quit quiz handler
quitBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to quit the quiz? Your progress will be lost.')) {
    resetToWelcome();
  }
});

function resetToWelcome() {
  stopTimer();
  genreSelect.value = '';
  ageSelect.value = '';
  showScreen(welcomeScreen);
  nextBtn.disabled = true;
}

// Show results screen with score and IQ level
function showResults() {
  showScreen(resultScreen);
  const total = currentQuestions.length;
  scoreText.textContent = `You scored ${score} out of ${total} correct.`;

  // IQ feedback based on percentage correct
  const percentage = (score / total) * 100;
  let iqLevel = '';
  if (percentage >= 90) {
    iqLevel = 'Genius IQ';
  } else if (percentage >= 75) {
    iqLevel = 'Above Average IQ';
  } else if (percentage >= 50) {
    iqLevel = 'Average IQ';
  } else if (percentage >= 25) {
    iqLevel = 'Below Average IQ';
  } else {
    iqLevel = 'Needs Improvement';
  }
  iqLevelText.textContent = `Your IQ Level: ${iqLevel}`;
}

// Retry button handler
retryBtn.addEventListener('click', () => {
  resetToWelcome();
});

