import './style.css';
import { postScore, getScores } from './modules/leaderBoardApi';


const scoreBoard = document.querySelector('.scores')

// document.addEventListener('DOMContentLoaded', displayScores)
document.querySelector('.scores-form').addEventListener('submit', (event) => {
    const userName = document.querySelector('.user-name').value
    const userScore = document.querySelector('.user-score').value
    event.preventDefault()
    postScore(userName, parseInt(userScore));
    
})

const updateScore = () => {
    const fetchApi = getScores();
    console.log(fetchApi)
}

document.querySelector('.refresh-btn').addEventListener('click', () => {
    updateScore()
})

