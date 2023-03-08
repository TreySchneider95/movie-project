import Table from "../components/Table"
import { useOutletContext, Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";



const MovieListPage = ()=>{
    const [filterMovies, removeMovie, addMovie, movies] = useOutletContext()
    console.log(useOutletContext)
    return (
        <div>
            <SearchBar filterMovies={filterMovies}/>
            <Table 
                movies={movies || []}
                removeMovie={removeMovie}
            />
        </div>
    )
}

export default MovieListPage