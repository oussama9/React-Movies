import { useEffect,useState } from 'react';
import './App.css';
import Movie from './components/Movie';


const FEATURED_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

function App() {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  

  useEffect(()=>{
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
        .then(response => response.json())
        .then(jsonResponse => {
          console.log(jsonResponse.results)
          setMovies(jsonResponse.results);
      });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(searchInput){
      getMovies(SEARCH_API+searchInput);
      setSearchInput("");
    }
};

  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
  }
  return (
    <div className='container'>
       <header>
         <form onSubmit={handleOnSubmit}>
          <input 
            className='search' 
            type="search" 
            placeholder='Search ...' 
            value={searchInput}
            onChange={handleOnChange}
            />
         </form>
        </header>
      <div className='movie-container'>
        {movies.map(movie=> 
        <Movie key={movie.id} {...movie}/>)}
      </div>
    </div>
  )
}

export default App;
