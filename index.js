var readlineSync = require('readline-sync');

// --- Quiz Game :how well do you know Sarthak? (with highest score notifier) ----

const userName = readlineSync.question('What is your name ? ');

console.log(
  `\nWelcome ${userName}! to the quiz 'HOW WELL YOU KNOW Sarthak'. let's start...\n`
);

const play = (question, answer) => {
  let userAnswer = readlineSync.question('Q: ' + question);
  console.log(`\nyou entered '${userAnswer}'`);

  if (userAnswer.toLowerCase() == answer.toLowerCase()) {
    console.log('Well Done! You are Right :)');
    score++;
  } else {
    console.log("Oops! that wasn't correct choice");
    // score--;
  }

  console.log(`\n Score: ${score}`);
  console.log('-----------------');
};

const checkForHighest = current => {
  let highestBeaten = false;
  let newHighestPosition = null;

  for (let i = highestScores.length - 1; i >= 0; i--) {
    if (highestScores[i].score >= current) {
      if (!highestBeaten) {
        // if even lowest score is high than current
        return null;
      }
      break;
    } else {
      highestBeaten = true;
      newHighestPosition = i + 1; // 3
    }
  }

  return newHighestPosition;
};

const highestScores = [
  {
    name: 'Sarthak',
    score: 4,
  },
  {
    name: 'Aman',
    score: 3,
  },
  {
    name: 'Neha',
    score: 2,
  },
  {
    name: 'Shyam',
    score: 2,
  },
  {
    name: 'Aunam',
    score: 1,
  },
];
let quiz = [
  {
    question: "Do I also recognized with name 'Sarthak Mangal' ? (yes/no) ",
    answer: 'yes',
  },
  {
    question: 'Do I like watching Marvel movies ? (yes/no) ',
    answer: 'no',
  },
  {
    question: `Does I belong from the city 'Mirazpur' ? (yes/no) `,
    answer: 'no',
  },
  {
    question: 'Has he ever been out of India ? (yes/no) ',
    answer: 'yes',
  },
];

let score = 0;

for (let i = 0; i < quiz.length; i++) {
  play(quiz[i].question, quiz[i].answer);
}
console.log('====================');
console.log(`\nYour Final Score:  ${score}`);

console.log('\nCheckout Top 5 Highest Scores :');
for (let i = 0; i < highestScores.length; i++) {
  console.log(`${i + 1}. ${highestScores[i].name}: ${highestScores[i].score}`);
}

const newHighest = checkForHighest(score);
newHighest
  ? console.log(
      `\nCongratulations! You just beatened up the ${newHighest} Highest score.\nIf you too want your name up in the list, then send screenshot of your score to me and I'll proudly update it.`
    )
  : console.log(
      '\nNot Bad! though you can always choose to replay and beat the highest score. Good Luck :)'
    );
