const displayScores = (result) => {
    const scores = document.querySelector('.scores');
    result.forEach((item) => {
        const { user, score } = item;
        scoresContainer += `<div>${user}: ${score}</div>`
    })
    scores.innerHTML = scoresContainer;
}

export default displayScores;