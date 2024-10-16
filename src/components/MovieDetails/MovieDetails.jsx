import { Link } from "react-router-dom";

import useGetData from "../../hooks/useGetData.js";

import { wrapper, linksWrapper } from './MovieDetails.module.css'




const MovieDetails = () => {
    const { poster_path, original_title, id, release_date, overview, genres } = useGetData('details')
    return <>
        {id && <div className={wrapper}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title}/>
            <div>
                <h3>{original_title} ({release_date})</h3>
                <p>Overview</p>
                <p>{overview}</p>
                <p>Genres</p>
                <p>{genres.map(({name}) => name).join(' ')}</p>
            </div>
        </div>}
        {id && <div className={linksWrapper}>
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