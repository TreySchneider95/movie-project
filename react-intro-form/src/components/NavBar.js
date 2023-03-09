import { Link } from "react-router-dom";
import AddMovie from '../pages/AddMovie';

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/MovieList">Movies</Link>
            <Link to="/AddMovie">Add Movie</Link>
        </div>
    )
}
export default NavBar