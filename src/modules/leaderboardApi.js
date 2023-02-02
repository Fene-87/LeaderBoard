import displayScores from "./scoresList";

const leaderboardApiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Y1TD0RjuZc42U3UOxmR0/scores';

export const postScore = async (user, score) => {
    const userName = document.querySelector('.user-name').value
    const userScore = document.querySelector('.user-score').value
    const postedScore = await fetch(leaderboardApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
              user: userName, 
              score: userScore
          }
        )
    }) 

    const userScores = await postedScore.json();
    return userScores.result;

}

export const getScores = async () => {
    const allScores = await fetch(leaderboardApiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;'
        }
    })
    return allScores.json();
}



/*const payload = {
    user,
    score: parseInt(score),
  };
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Y1TD0RjuZc42U3UOxmR0/scores',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  );*/