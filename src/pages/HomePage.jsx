import { Link } from "react-router-dom"


function HomePage() {
    return (
        <>
            
            <Link to="/start">start game</Link>
            <br />
            <Link to="/play">Play game</Link>
        
        </>
    )
}

export default HomePage