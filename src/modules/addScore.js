import { postScore } from "./leaderBoardApi";

const submitScore = () => {
    const submitButton = document.querySelector('.submit-btn');
    submitButton.addEventListener('click', async (event) => {
        event.preventDefault();
        await postScore();
        console.log('successful')
    })
}

export default submitScore;
