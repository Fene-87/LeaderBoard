import './style.css';


import { postScore, getScores } from './modules/leaderBoardApi';


const scoreBoard = document.querySelector('.scores')

// document.addEventListener('DOMContentLoaded', displayScores)
document.querySelector('.scores-form').addEventListener('submit', async (event) => {
    event.preventDefault()
    await postScore();
    
})

const updateScore = () => {
    const fetchApi = getScores();
    console.log(fetchApi)
}

document.querySelector('.refresh-btn').addEventListener('click', () => {
    updateScore()
})

