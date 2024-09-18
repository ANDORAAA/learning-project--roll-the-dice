'use strict';

//
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const totalScore0El = document.querySelector('#score--0');
const totalScore1El = document.querySelector('#score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const sectionPlayer0 = document.querySelector('.player--0');
const sectionPlayer1 = document.querySelector('.player--1');

//

const hideDice = function () {
  dice.classList.add('hidden');
};

const currentScoreDisplay = function () {
  document.querySelector(`#current--${currentPlayer}`).innerHTML = currentScore;
};

//
let currentScore, currentPlayer, totalScores, playing;
const init = function () {
  currentScore = 0;
  currentPlayer = 0;
  totalScores = [0, 0];
  playing = true;
  hideDice();
};
init();

////
const switchPlayers = function () {
  currentScore = 0;
  currentScoreDisplay();
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  sectionPlayer0.classList.toggle('player--active');
  sectionPlayer1.classList.toggle('player--active');
};

/////
btnRoll.addEventListener('click', function () {
  if (playing) {
    const randomDice = Math.ceil(Math.random() * 6);
    dice.classList.remove('hidden');
    dice.src = `dice-${randomDice}.png`;

    if (randomDice !== 1) {
      currentScore += randomDice;
      currentScoreDisplay();
    } else {
      switchPlayers();
    }
  }
});

/////
btnHold.addEventListener('click', function () {
  if (playing) {
    totalScores[currentPlayer] += currentScore;
    document.querySelector(`#score--${currentPlayer}`).innerHTML =
      totalScores[currentPlayer];
    currentScore = 0;
    currentScoreDisplay();

    if (totalScores[currentPlayer] >= 10) {
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
      hideDice();
      playing = false;
    } else {
      switchPlayers();
    }
  }
});

/////
btnNew.addEventListener('click', function () {
  totalScore0El.innerHTML = 0;
  totalScore1El.innerHTML = 0;
  hideDice();
  sectionPlayer0.classList.remove('player--winner');
  sectionPlayer1.classList.remove('player-winner');
  sectionPlayer1.classList.remove('player--active');
  sectionPlayer0.classList.add('player--active');
});
