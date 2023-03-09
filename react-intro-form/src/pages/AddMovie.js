import MovieForm from "../components/MovieForm"
import { useOutletContext } from "react-router-dom"

const AddMovie = ()=>{
    const [filterMovies, removeMovie, addMovie, movies] = useOutletContext()
    return (
        <div>
            <MovieForm addMovie={addMovie}/>
        </div>
    )
}

export default AddMovie