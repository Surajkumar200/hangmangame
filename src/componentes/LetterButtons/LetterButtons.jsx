const AlPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split(''); 

function LatterButtons({ text, guessedLetters, onLetterClick }) {
    const originalLetters = new Set(text.toUpperCase().split(''))
    const guessedLetterSet = new Set(guessedLetters)


    const buttonStyle = function (lettet) {
        if (guessedLetterSet.has(lettet)) {
            return `${originalLetters.has(lettet) ? 'bg-green-500': 'bg-red-500'} `;
        }
        else {
            return `bg-blue-500`
        }
    }

    function handleLetterClick(event) {
        const characterOfTheLetter = event.target.value;
        onLetterClick?.(characterOfTheLetter);
    }

    const button = AlPHABETS.map((Letter,id) => {
        return (
            
                <button key={id}
                    value={Letter}
                    onClick={handleLetterClick}
                    disabled={guessedLetterSet.has(Letter)}
                    className={`h-12 w-12 m-1 text-white rounded-md  ${buttonStyle(Letter)}`}
                >
                       {Letter}
                </button>
            
     )
    })
    
    return (
        <>
            {button}
        </>
    )
}
export default LatterButtons