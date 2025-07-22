import { getMaskedString } from "./MaskingUtility"


function MaskedText({ text, guessedLetters }) {

    let maskedString = getMaskedString(text, guessedLetters);


    return (
        <>
            {maskedString.map((letter, id) => {
                    return (
                        <span key={id} className=" mx-1 ">
                            {letter}
                        </span>
                    )

                })
            }
        </>
    )
}

export default MaskedText