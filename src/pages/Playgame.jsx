// import { useSearchParams } from "react-router-dom"

import { Link, useLocation } from "react-router-dom";
import MaskedText from "../componentes/MaskedText/MaskedText";
import LatterButtons from "../componentes/LetterButtons/LetterButtons";
import { useState } from "react";
import Hangman from "../componentes/Hangman/Hangman";

// import {  useParams } from "react-router-dom"


function PlayGame() {
  const { state } = useLocation()
  
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step ,setStep] = useState(0)
    // const { text } = useParams()
    
    // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("text"))

  function handleLetterClick(letter) {
    if (state.wordSelected.toUpperCase().includes(letter)) {
      console.log("Correct");
    } else {
      console.log("wrong");
      setStep(step + 1);
    }
    setGuessedLetters([...guessedLetters, letter]);
  }
  


    return (
      <>
        <h1>Play game</h1>
        <MaskedText text={state.wordSelected} guessedLetters={guessedLetters} />
        <div>
          <LatterButtons
            text={state.wordSelected}
            guessedLetters={guessedLetters}
            onLetterClick={handleLetterClick}
          />
        </div>
        <div>
          <Hangman step={step}/>
        </div>

        <Link to="/start">start game</Link>
      </>
    );
}

export default PlayGame