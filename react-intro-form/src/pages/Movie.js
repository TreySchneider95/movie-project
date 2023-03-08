import { Outlet, useOutletContext, useParams } from "react-router-dom"
import { useState } from "react"
import Table from "../components/Table"


const Movie = ()=>{
    const [, removeMovie, , movies] = useOutletContext()
    const params = useParams();
    const [savedMovies, setSavedMovies] = useState(movies)

    let singleMovie = savedMovies.filter((movie)=>{
        return movie.title === params.filmTitle
    })
    return (
        <div>
            <h1>Movie!</h1>
            <Table 
                movies={singleMovie || []}
                removeMovie={removeMovie}
            />
            <Outlet  context={[, removeMovie, , savedMovies]}/>
        </div>
    )
}

export default Movie