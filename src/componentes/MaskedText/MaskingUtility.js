
/**
 * 
 * @param { The word which is given as input and is expected to be guessed } originalWord 
 * @param { Letters which are guessed by the user already } guessedLetters 
 * Ex: origionalWord: HUMBLE
 * guessedLetters: ['H', 'M', 'E']
 * 
 * return -> "H _ M _ E"
 */


export function getMaskedString(originalWord, guessedLetters) {
    guessedLetters = guessedLetters.map(latter => latter.toUpperCase());
    
    const guessedLatterSet = new Set(guessedLetters);

    const result = originalWord.toUpperCase().split('').map(char => {
        if (guessedLatterSet.has(char)) {
            return char;
        }
        else {
            return "_";
        }
    })
    return result;
 }