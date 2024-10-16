import {Link, Outlet, useParams} from "react-router-dom";
import {Suspense} from "react";
import MovieDetails from "../../components/MovieDetails/MovieDetails.jsx";


const MovieDetailsPage = () => {
    const {movieId} = useParams();

    return (<>
        <Link to='/'>Go back</Link>
        <MovieDetails movieId={movieId}/>
        <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet/>
        </Suspense>
        </>)
}

export default MovieDetailsPage;