import { createContext, useState, useContext,useEffect} from "react";

const moviecontext = createContext();
export const usemoviecontext = () => useContext(moviecontext);

export const movieprovider = ({children}) => {
const[favorites,setfavorites] = useState([]);


  useEffect(() => {
    const storedfav = localStorage.getItem("Fav");

    if(storedfav) setfavorites(JSON.parse(storedfav));
  },[])

  useEffect(() => {
    localStorage.setItem("Fav", JSON.stringify(favorites));
  })

  const addtofav =(movie) =>{
      setfavorites(prev => [...prev,movie])
  }

  const removefromfav = (movie) => {
    setfavorites(prev => prev.filter(movie => movie.id !== movie.id))
  }

  const isfav = (movie) =>{
    return favorites.some(movie => movie.id === movie.id);
  }

  const value ={
    favorites,
    addtofav,
    removefromfav,
    isfav,
  }

    return <moviecontext.Provider>
        {children}
    </moviecontext.Provider>
};