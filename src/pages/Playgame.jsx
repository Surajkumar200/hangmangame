// import { useSearchParams } from "react-router-dom"

import { Link, useLocation } from "react-router-dom";
import MaskedText from "../componentes/MaskedText/MaskedText";

// import {  useParams } from "react-router-dom"


function PlayGame() {
  const {state} =   useLocation()
    // const { text } = useParams()
    
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"))
    return (
      <>
        <h1>Play game {state.wordSelected}</h1>
        <MaskedText text={state.wordSelected} guessedLetters={[ "h","e"]} />
        <Link to="/start">start game</Link>
      </>
    );
}

export default PlayGame