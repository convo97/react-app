import "../css/MovieCard.css";
import { usemoviecontext }  from "../context/moviecontext";

function Movieslide({movie}){
    const {addtofav, removefromfav , isfav } = usemoviecontext();
    const fav = isfav(movie.id);

    function onfavclick(){

     e.preventDefault();

     if(fav) removefromfav(movie.id);
     else addtofav(movie.id);


    }


    return(
        <div className="movie-card">
            <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                  <button className= {`favorite-btn ${fav ? "active":""}`} onClick={onfavclick}>
                    ♥
                </button>
            </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-"[0])}</p>

            </div>
        </div>
    );
}

export default Movieslide