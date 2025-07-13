

import Home from "./pages/home";
import Fav from "./pages/fav";
import {Routes,Route} from "react-router-dom";
import Nav from "./components/nav";
import "./css/App.css";
import { movieprovider } from "./context/moviecontext";


function App() {
  
  return(

  <movieprovider>
    <Nav/>
  <main className="main-content">
  <Routes>
    <Route path= "/" element = {<Home/>}/>
    <Route path= "/fav" element = {<Fav/>}/>
  </Routes>

  </main>

</movieprovider>
  );
}

export default App
