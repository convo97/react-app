import "../css/Fav.css";
import { usemoviecontext } from "../context/moviecontext";
import Movieslide from "../components/movieslide";

function Fav(){
    const {fav} = usemoviecontext();
    if(fav) {

        return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movie-grid">
                {fav.map((movie) =>(
                <Movieslide movie={movie} key={movie.id}/>
               ) )} 

            </div>
            </div>
        );
    }
    return(
        <div className="favorites-empty">
        <h2>Favouraties movies het</h2>

        <p>Start adding mmoviess to your favorities </p>

        </div>
    );
}

export default Fav