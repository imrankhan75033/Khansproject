'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'ππCorrect Number ππ';

console.log(document.querySelector('.message').textContent); */

let myNumber = Math.trunc(Math.random() * 20) + 1;
console.log(myNumber);
// document.querySelector('.number').textContent = myNumber;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //   if No input
  if (!guess) {
    document.querySelector('.message').textContent = 'β No Number';
  }

  //   If Wins the game
  else if (guess === myNumber) {
    document.querySelector('.message').textContent = 'ππCorrect Number ππ';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '40rem';
    document.querySelector('.number').textContent = 'π ' + myNumber + ' π';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }

  //   If Guess is Too High
  else if (guess > myNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'π Too High!! Guess Again!!';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'π€¦ββοΈ You lost the game!!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.number').textContent = 'π€¦ββοΈ';
    }
  }

  //   If Guess is Too Low
  else if (guess < myNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'π Too Low!! Guess Again!!';

      score--;
      document.querySelector('.score').textContent = score;
    }

    // If Lost the Game
    else {
      document.querySelector('.message').textContent = 'π€¦ββοΈ You lost the game!!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.number').textContent = 'π€¦ββοΈ';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  myNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(myNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
