'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let highScore = 0;
// 0 ~ 1
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highScore;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

const changeMessage = function (guess) {
  if (score > 1) {
    displayMessage(guess > secretNumber ? 'Too High!' : ' Too Low !');
    score--;
    displayScore(score);
  } else {
    displayMessage('You lost the game');
    displayScore(0);
  }
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeStyle = function () {
  // JS 操作 css
  //赢得时候改变背景颜色
  document.querySelector('body').style.backgroundColor = '#60b347';
  //框变宽
  document.querySelector('.number').style.width = '30rem';
};

const resetStyle = function () {
  document.querySelector('body').style.backgroundColor = '#222';
  //框变宽
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // 0 是假
  if (!guess) {
    displayMessage('No Number!');
    // When Play win
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    //赢得时候才显示隐藏数字

    displaySecretNumber(secretNumber);

    changeStyle();
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is too high
  } else if (guess !== secretNumber) {
    changeMessage(guess);
  }
});

document.querySelector('.again').addEventListener('click', () => {
  //reset game
  displayMessage('Start guessing...');
  displaySecretNumber('?');
  document.querySelector('.guess').value = '';
  //new secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //恢复分数
  score = 20;
  displayScore(score);
  //reset css
  resetStyle();
});
