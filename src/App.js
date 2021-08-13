import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [showMainPage, setShowMainPage] = useState(true);


  //Fetching data from an API (images and movie names):

  useEffect(()=> {
    async function fetchData(){
    await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=f7d06dfb864bcd2684e2e4ccc722d1f0')
    .then(res=> {
      console.log(res.data.results)
      setMovies(res.data.results)
    })
    
    .catch(err=> console.log(err))
  }
  fetchData()

  }, [])

  // Function for searching certain movies: 

  const search = evt => {
    if(evt.key === "Enter"){
      evt.preventDefault();
      async function fetchSearchedMovies(){
      await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f7d06dfb864bcd2684e2e4ccc722d1f0&language=en-US&page=1&query=${query}`)
      .then(res=>{
                  setShowMainPage(false);
                  setMovies(res.data.results);
                  setQuery('')})
      .catch(err=>console.log(err))
    }
    fetchSearchedMovies()
    }
    
  }




  return (
    <div className="App">
        <div className="topnav">
         <a className="active" href="#home">Home</a>
         <a href="#movies">Movies</a>
         <a href="#tvshows">TV Shows</a>
         <div className="search-container">
         <form action="/action_page.php">
          <input type="text" onChange={e => {setQuery(e.target.value)}} value={query} onKeyPress={search} placeholder="🔎Search..." name="search"/>
         </form>
        </div>
      </div>
    {showMainPage? (
      <>
      <div className="cards">
        {movies.map(movie => typeof movie.title === "undefined" || movie.poster_path === null? false : (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
  
      </div>
      </>
  ) : (
     <div className="cards">
       {movies.map(movie => typeof movie.title === "undefined" || movie.poster_path === null? false : (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
     </div>
     )}
    
  );

  </div>

  )
}

export default App;
