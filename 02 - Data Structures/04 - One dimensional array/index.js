/* 
Task 8 - • Create a function called highestScore that will 
1. Receive a 1d array called scores 
2. return the highest score
*/

function highestScore(scores) {
    max = scores[0];
    for (let i = 0; i < scores.length; i++) {
        if (max < scores[i]) {
            max = scores[i];
        }
    }
    return max;
}

let scores = [1, 2, 4, 66, 88, 102, 99, 444];
let maxScore = highestScore(scores);
console.log(maxScore);