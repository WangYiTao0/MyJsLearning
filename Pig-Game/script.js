'use strict';

//Selecting Element
const player0El = document.querySelector('.player--0');
const score0El = document.querySelector('#score--0');
const current0ScoreEl = document.getElementById('current--0');

const player1El = document.querySelector('.player--1');
const score1El = document.getElementById('score--1');
const current1ScoreEl = document.getElementById('current--1');

//dice img
const diceEl = document.querySelector('.dice');

//btn
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//玩家总分
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isGamePlaying = true;

//ResetGame
const HideDiceEl = function () {
  diceEl.classList.add('hidden');
};
const ShowDiceEl = function () {
  diceEl.classList.remove('hidden');
};

const resetGame = function () {
  isGamePlaying = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  current0ScoreEl = currentScore;
  current1ScoreEl = currentScore;
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  HideDiceEl();
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
};
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

resetGame();

btnNew.addEventListener('click', resetGame);
btnRoll.addEventListener('click', () => {
  if (isGamePlaying) {
    //1. generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. display dice
    ShowDiceEl();
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);
    //3 check for rolled 1 : if true , switch to next player
    if (dice !== 1) {
      //Add dice to current Score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', () => {
  if (isGamePlaying) {
    //1 add current score to active player score
    scores[activePlayer] += currentScore;
    //
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2 check
    if (scores[activePlayer] >= 100) {
      isGamePlaying = false;
      // win
      // finish game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      HideDiceEl();
    } else {
      switchPlayer();
    }
  }
});
