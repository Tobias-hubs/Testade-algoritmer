import { chooseWord } from './wordleB.js';

describe("chooseWord - Test of the word selection", () => {     
 
    // Test that checks that the word has correct length, HEJ and BIL has 3 letters and is true
    test("should return a word of correct length", () => {
    const wordList = ["HALLÅ", "CYKLA", "HEJ", "CYKEL", "BIL"];
    const result = chooseWord(wordList, 3, true);
    expect(result).toHaveLength(3);

    });

    // Test that check for unique letters only, HEJ and BIL has unique letters 
    test("should return a word where all letters are unique if requried", ()   => {
        const wordList =  ["HALLÅ", "CYKLA", "HEJ", "CYKEL", "BIL"];
        const result = chooseWord(wordList, 3, false);
        expect(new Set(result).size).toBe(result.length);
    });

    // Test that checks if no words match with length 2 and is true
    test("should check cases where no words match", () => {
        const wordList = ["HALLÅ", "CYKLA", "HEJ", "CYKEL", "BIL"];
        const result = chooseWord(wordList, 2, true); // No words with 2 letters
        expect(result).toBe("There are no words with 2 letters");
    });

});