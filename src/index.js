import './style.css';
import { postScore, getScores } from './modules/leaderBoardApi';
import displayScores from './modules/scoresList';


const scoreBoard = document.querySelector('.scores')

document.querySelector('.scores-form').addEventListener('submit', async (event) => {
    const userName = document.querySelector('.user-name').value
    const userScore = document.querySelector('.user-score').value
    event.preventDefault()
    await postScore()
    
})

document.querySelector('.refresh-btn').addEventListener('click', async () => {
    const fetchApi = await getScores();
    const results = fetchApi.result
    console.log(results)
    displayScores(results)
    
})

