import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { Outlet } from "react-router-dom";


const DATA_URL = "https://raw.githubusercontent.com/TreySchneider95/movie-project/main/react-intro-form/data/movies.json"


function App() {

	//we make a hook for movies into the state
  // because we are in a function
  const [movies, setMovies] = useState();

// use effect is equivalent to "Component did Mount" runs
// after a  component has been rendered.
// component first renders when it's created
// also renders when a change happens to it 
  useEffect(() => {

	//asyncronously request data 
	// wait for promise to resolve
	// const moviesData = []
	fetch(DATA_URL)
	.then((result) => result.json())
	.then((result) => {
		setMovies(result);
	});

  }, [])	


  const addMovie = (movie) => {
     setMovies([...movies, movie]);
  }

  const removeMovie = (toDelIdx) => {
    const filteredMovies = movies.filter((_, index) => {
       return index !== toDelIdx
    })
    setMovies(filteredMovies)
  }


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
  <NavBar />
  <Outlet context={[filterMovies, removeMovie, addMovie, movies]}/>
</div>
  );
}

export default App;
