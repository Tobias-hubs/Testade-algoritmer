const { controllGuess } =  require('./wordle.js'); 

test('should return correct feedback', () => { 
    const result = controllGuess("CYKLA", "HALLÅ");
    expect(result).toEqual([
        {letter: "C", result: "incorrect"},
        {letter: "Y", result: "incorrect"},
        {letter: "K", result: "incorrect"},
        {letter: "L", result: "correct"},
        {letter: "A", result: "missplaced"}
    ]);
});

test('should return correct feedback for a completely correct guess', () => {
    const result = controllGuess("HALLÅ", "HALLÅ");
    expect(result).toEqual([
        {letter: "H", result: "correct"},
        {letter: "A", result: "correct"},
        {letter: "L", result: "correct"},
        {letter: "L", result: "correct"},
        {letter: "Å", result: "correct"}
    ]);
});

test('should return incorrect feedback when no letters are correct', () => {
    const result = controllGuess("ABCDE", "GÅ");
    expect(result).toEqual([  
        {letter: "A", result: "incorrect"},
        {letter: "B", result: "incorrect"},
        {letter: "C", result: "incorrect"},
        {letter: "D", result: "incorrect"},
        {letter: "E", result: "incorrect"}

    ]);
});