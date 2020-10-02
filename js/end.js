const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const modeUrl = document.getElementsByClassName('game')[0];
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const mostRecentDifficulty = localStorage.getItem('difficulty');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerHTML = `Your score: ${mostRecentScore} <br /> ${mostRecentDifficulty} Mode`;
modeUrl.href = `game.html?difficulty=${mostRecentDifficulty}`
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
		difficulty: mostRecentDifficulty,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    
    window.location.assign('./');
};
