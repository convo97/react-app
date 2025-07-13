import Movieslide from "../components/movieslide";
import {useState , useEffect} from  "react";
import { getpopularmovie , searchpopularmovie} from "../services/Api";
import "../css/Home.css";


function Home(){

    const [searchQuery,setsearchQuery] = useState("");
    const [movies , setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);


    useEffect(() => {
        const loadpopularmovies = async () => {
            try{
                const poopularmovies = await getpopularmovie();
                setMovies[poopularmovies];
            }
            catch(err){
                console.log(err);
                setError("Failed to load");
            }
            finally{setLoading(false)}

        }
        loadpopularmovies();
    } , [])


    const handlesarch = async(e) => {
       e.preventDefault()
        if(!searchQuery.trim()) return;
        if (loading) return;
        setLoading(true);
        try{
            const searchresults = await searchpopularmovie(searchQuery);
            setMovies(searchresults);
            setError(null);
        }
        catch(err){

            console.log(err);
            setError("Failed to load");

        }
        finally{

            setLoading(false);
        }
        setsearchQuery("")
    };

    return(
        <div className="home">
            <form onSubmit={handlesarch} className="search-form">
                <input type="text"  
                placeholder="Enter movie.........." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setsearchQuery(e.target.value)}/>
                <button type = "submit" className="search-btn">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? <div className="loading">Loading....</div> : <div className="movie-grid">
                {movies.map((movie) =>(
                <Movieslide movie={movie} key={movie.id}/>
               ) )}

            </div>}
           

        </div>
    );
}

export default Home