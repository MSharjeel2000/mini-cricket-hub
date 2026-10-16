import { Link } from "react-router-dom"; // makes the Link component available in this file
import { useState } from "react";
import FavoriteTeam from "../components/FavoriteTeam";

function Home() {

    const [favoriteTeam, setFavoriteTeam] = useState("Pakistan");

    function changeFavoriteTeam() {
        if (favoriteTeam === "Pakistan") {
            setFavoriteTeam("South Africa");
        } else {
            setFavoriteTeam("Pakistan");
        }
    }

    return (

        <div className="home-section">
            <div className="home-content"> {/*In React, we use className to assign a CSS class to an element. In regular HTML, the attribute is called class.*/}
                <h1>Welcome to Mini Cricket Hub</h1>
                <p>Your simple place for cricket matches and teams</p>
                <p>Follow the game. Celebrate every moment.</p>

                <FavoriteTeam teamName={favoriteTeam} onChangeTeam={changeFavoriteTeam} />

                <img className="player-image" src="/images/abd.jpg" alt="AB de Villiers"/>

                <Link className="explore-link" to="/matches">Explore Matches</Link> {/*creates a clickable link that navigates to the Matches page.*/}

            </div>
        </div>
        
    );
}

export default Home;

// function Home() creates a component named Home.
// return (...) describes what React should display.
// <div> groups the page's content together.
// <h1> displays the main heading.
// <p> displays a paragraph.
// export default Home makes the component available for another file to import,