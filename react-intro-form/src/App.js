import logo from './logo.svg';
import './App.css';
import Table from './components/Table'
import MovieForm from './components/MovieForm';
import SearchBar from './components/SearchBar';
import { useState, useEffect } from 'react';

const DATA_URL = "https://raw.githubusercontent.com/TreySchneider95/movie-project/main/react-intro-form/data/movies.json"

function App() {

	
	// runs after component has been mounted
	const movieData = useEffect(()=>{
		fetch(DATA_URL)
		.then((result)=>result.json())
		.then((result)=>{
			setMovies(result)
		})
	}, [])
	const [movies, setMovies] = useState();
	
	const addMovie = (movie) => {
     setMovies([...movies, movie]);
  }

  const removeMovie = (toDelIdx) => {
    const filteredMovies = movies.filter((_, index) => {
       return index !== toDelIdx
    })
    setMovies(filteredMovies)
  }

//   const resetSearch = () => {
// 	setMovies();
//   }

  const filterMovies = (input, field) => {

	// //show all films if there is no query 
	// if (searchField.trim().length === 0) {
	// 	setMovies(moviesData);
	// 	return;
	// }

	 const moviesFiltered = movies.filter((movie) => {
		   return movie[field].toLowerCase().includes(input.toLowerCase())
	 })

	 setMovies(moviesFiltered)
  } 
  
  

  return (
 <div className="App">
  <SearchBar	
	filterMovies={filterMovies}
	// resetSearch={resetSearch}
  />
  <Table 
     movies={movies || []}
     removeMovie={removeMovie}
	
  />
  <MovieForm 
    addMovie={addMovie}
  />
</div>
  );
}

export default App;
