import { Link } from "react-router-dom";
import TextInputFormComponent from "../componentes/TextInputForm/TextInputFormComponent";


function StartGame() {
    return (
        <>
            <h1>Start Game</h1>
            <TextInputFormComponent/>
            <Link to="/play">Play game</Link>
        </>
    )
}


export default StartGame;