import {useEffect, useState} from "react";
import axios from "axios";

import {useAxiosOptions} from "../../hooks/useAxiosOptions.js";
import {wrapper, linksWrapper} from './MovieDetails.module.css'
import {Link} from "react-router-dom";


const MovieDetails = ({movieId}) => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const controller = new AbortController();
        const options = useAxiosOptions(controller.signal);
        async function getMoviesDetails() {
            const {data} = await axios(`movie/${movieId}`, options);
            setMovie(data);
        }
        try {
            getMoviesDetails().catch((error) => {
                console.log(error.message);});
        } catch (error) {
            console.log(error);
        }
        return ()=>{
            controller.abort();
        }
    }, [])
    return <>
        {movie && <div className={wrapper}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title}/>
            <div>
                <h3>{movie.original_title} ({movie.release_date})</h3>
                <p>Overview</p>
                <p>{movie.overview}</p>
                <p>Genres</p>
                <p>{movie.genres.map(({name}) => name).join(' ')}</p>
            </div>
        </div>}
        {movie && <div className={linksWrapper}>
            <h3>Additional information</h3>
            <ul>
                <li>
                    <Link to='cast'>Cast</Link>
                </li>
                <li>
                    <Link to='reviews'>Reviews</Link>
                </li>
            </ul>
        </div>}
    </>
}

export default MovieDetails;