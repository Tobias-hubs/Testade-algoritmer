export function chooseWord(wordList, length, specialLetters)   {

    let validWords = wordList.filter(word => word.length === length);
    
   
    if (validWords.length === 0) {
        return `There are no words with ${length} letters`; 
    }

    if (!specialLetters) {
       validWords = validWords.filter(word => new Set(word).size === word.length);
        
    }
    
    const randomIndex = Math.floor(Math.random() * validWords.length);
        return validWords[randomIndex];
    
}