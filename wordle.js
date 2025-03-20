
 export function controllGuess(guess, correctWord) { 
    let feedback = [];
    
    for(let i = 0; i < guess.length; i++)  {
        let letter = guess[i];

        if (letter === correctWord[i]) {
            feedback.push({letter, result: "correct"});
        } else { 
            feedback.push({letter, result: null });
        }
    }

    for (let i = 0; i < guess.length; i++) {
        if(feedback[i].result === null) {
            const letter = guess[i];
            if (correctWord.includes(letter)) {
                feedback[i].result = "missplaced";
            } else {
                feedback[i].result = "incorrect";
        }
    } 
    }   

    return feedback; 

   
}


//  export function chooseWord(wordList, lenght, specialLetters)