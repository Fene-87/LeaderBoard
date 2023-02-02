const displayScores = (result) => {
    const scores = document.querySelector('.scores');
    for(let i = 0; i < result.length; i++) {
        const { user, score } = result[i];
        const row = document.createElement('div')
        row.classList.add('scores-row')
        if(i % 2 !==0){
            row.classList.add('gray-bg')
        }
        row.innerHTML = `${user}: ${score}`
        scores.appendChild(row);
    }
}

export default displayScores;