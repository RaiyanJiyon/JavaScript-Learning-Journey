/* Task 9 - 
Create a function called highestRunScorer that will
• Receive a 2d array called playersInfo
• Based on highest score, return the name of the player
*/

function highestRunScorer(playersInfo) {
    let maxScore = playersInfo[0][1]; // Initialize max score to the first player's score
    let highestScorer = playersInfo[0][0]; // Initialize highest scorer to the first player's name
    
    for (let i = 1; i < playersInfo.length; i++) {
        if (playersInfo[i][1] > maxScore) {
            maxScore = playersInfo[i][1];
            highestScorer = playersInfo[i][0];
        }
    }
    
    return highestScorer; // Return the name of the player with the highest score
}

let playersInfo = [
    ["John", 55],
    ["Tom", 45],
    ["Peter", 75],
    ["Alex", 95],
    ["Tony", 85]
];

let maxScorePlayer = highestRunScorer(playersInfo);
console.log("Highest Run Scorer:", maxScorePlayer);
