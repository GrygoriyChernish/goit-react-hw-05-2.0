import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import MovieDetails from "../../components/MovieDetails/MovieDetails.jsx";


const MovieDetailsPage = () => {


    return (<>
        <Link to='/'>Go back</Link>
        <MovieDetails/>
        <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet/>
        </Suspense>
        </>)
}

export default MovieDetailsPage;