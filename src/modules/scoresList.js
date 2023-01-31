const scores = [
    {name: 'Mark', score: 98},
    {name: 'Sela', score: 96},
    {name: 'Sonia', score: 94},
    {name: 'Jamie', score: 92},
    {name: 'Mugambi', score: 90},  
]

const displayScores = () => {
    const list = document.querySelector('.scores');
    scores.forEach((score, index) => {
        const row = document.createElement('div');
        row.classList.add('scores-row');
        row.textContent = `${score.name}: ${score.score}`
        if(index % 2 !== 0) {
            row.classList.add('gray-bg');
        }
        list.appendChild(row)
    })
}

export default displayScores;